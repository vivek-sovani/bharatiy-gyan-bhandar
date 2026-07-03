'use client';

import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { MAHAVAKYAS } from './mahavakya-data';
import { SUBHASHITS } from './subhashit-data';
import { dailyIndex } from './useRandomVerse';

// Daily-verse local notifications (Android app only). Notifications are
// scheduled ahead of time with fixed text: because dailyIndex() is
// deterministic, we (re)schedule the next 30 days on every app open — fully
// offline, no server. If the app isn't opened for a month they simply stop;
// they never show a wrong verse.

export type NotifyCollection = 'subhashita' | 'mahavakya' | 'both';

export type NotifySettings = {
  enabled: boolean;
  hour: number;
  minute: number;
  collection: NotifyCollection;
};

const KEY = 'bgb-notify';
const DAYS_AHEAD = 30;

export const DEFAULT_NOTIFY: NotifySettings = {
  enabled: false,
  hour: 7,
  minute: 0,
  collection: 'subhashita',
};

export function isNativeApp(): boolean {
  return Capacitor.isNativePlatform();
}

export function getNotifySettings(): NotifySettings {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULT_NOTIFY, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_NOTIFY;
}

export function saveNotifySettings(s: NotifySettings) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

export async function requestNotifyPermission(): Promise<boolean> {
  const { display } = await LocalNotifications.requestPermissions();
  return display === 'granted';
}

function collectionFor(s: NotifySettings, date: Date): 'subhashita' | 'mahavakya' {
  if (s.collection !== 'both') return s.collection;
  // strict day-by-day alternation via epoch-day parity
  return Math.floor(date.getTime() / 86400000) % 2 === 0 ? 'subhashita' : 'mahavakya';
}

function notificationFor(s: NotifySettings, date: Date, lang: 'en' | 'mr') {
  const coll = collectionFor(s, date);
  const id = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const at = new Date(date.getFullYear(), date.getMonth(), date.getDate(), s.hour, s.minute, 0, 0);

  if (coll === 'mahavakya') {
    const v = MAHAVAKYAS[dailyIndex(MAHAVAKYAS.length, date)];
    return {
      id,
      title: "Today's Mahāvākya · आजचे महावाक्य",
      body: `${v.deva.replace(/\n/g, ' ')}\n${lang === 'mr' ? v.meaningMr : v.meaningEn}`,
      schedule: { at, allowWhileIdle: true },
      extra: { open: 'daily-mahavakya' },
    };
  }
  const v = SUBHASHITS[dailyIndex(SUBHASHITS.length, date)];
  return {
    id,
    title: "Today's Subhāṣita · आजचे सुभाषित",
    body: lang === 'mr' ? v.meaningMr : v.meaningEn,
    schedule: { at, allowWhileIdle: true },
    extra: { open: 'daily-subhashita' },
  };
}

async function cancelAll() {
  const { notifications } = await LocalNotifications.getPending();
  if (notifications.length) {
    await LocalNotifications.cancel({
      notifications: notifications.map((n) => ({ id: n.id })),
    });
  }
}

// Rolling 30-day window: cancel everything pending, schedule the next 30 days
// with each date's actual verse text.
export async function rescheduleDailyVerses(s: NotifySettings = getNotifySettings()) {
  if (!isNativeApp()) return;
  await cancelAll();
  if (!s.enabled) return;

  const lang = (localStorage.getItem('bgb-lang') === 'mr' ? 'mr' : 'en') as 'en' | 'mr';
  const now = new Date();
  const notifications = [];
  for (let i = 0; i < DAYS_AHEAD; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const n = notificationFor(s, d, lang);
    if (n.schedule.at.getTime() > Date.now()) notifications.push(n);
  }
  await LocalNotifications.schedule({ notifications });
}

// Deep link: notification tap → open that verse's modal. The listener may
// fire before Hero/DailyStrip mount on a cold start, so the target is kept
// as a pending value that components consume on mount, in addition to the
// live event.
export const OPEN_VERSE_EVENT = 'bgb-open-verse';
let pendingOpen: string | null = null;

export function consumePendingOpen(target: string): boolean {
  if (pendingOpen === target) {
    pendingOpen = null;
    return true;
  }
  return false;
}

let initialized = false;

export function initNotifications() {
  if (initialized || !isNativeApp()) return;
  initialized = true;

  LocalNotifications.addListener('localNotificationActionPerformed', (action) => {
    const open = action.notification.extra?.open;
    if (typeof open === 'string') {
      pendingOpen = open;
      window.dispatchEvent(new CustomEvent(OPEN_VERSE_EVENT, { detail: open }));
    }
  });

  rescheduleDailyVerses().catch((err) => console.warn('Notification reschedule failed:', err));
}

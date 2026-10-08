'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import {
  getNotifySettings,
  initNotifications,
  isNativeApp,
  requestNotifyPermission,
  rescheduleDailyVerses,
  saveNotifySettings,
  type NotifyCollection,
  type NotifySettings as Settings,
} from '@/lib/notifications';

// Daily-notification settings card — Android app only; the web build
// renders nothing (web push needs a server, out of scope by design).
export default function NotifySettings() {
  const { t } = useLanguage();
  const [native, setNative] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!isNativeApp()) return;
    initNotifications();
    setNative(true);
    setSettings(getNotifySettings());
  }, []);

  if (!native || !settings) return null;

  const apply = async (next: Settings) => {
    setSettings(next);
    saveNotifySettings(next);
    await rescheduleDailyVerses(next);
  };

  const toggle = async () => {
    if (!settings.enabled) {
      const granted = await requestNotifyPermission();
      setDenied(!granted);
      if (!granted) return;
    }
    await apply({ ...settings, enabled: !settings.enabled });
  };

  const h12 = settings.hour % 12 === 0 ? 12 : settings.hour % 12;
  const pm = settings.hour >= 12;
  const setTime = (h: number, isPm: boolean, minute: number) => apply({ ...settings, hour: (h % 12) + (isPm ? 12 : 0), minute });
  // The minute list always includes the saved minute, so an older saved value such as 07:03 still shows.
  const minutes = Array.from(new Set([...Array.from({ length: 12 }, (_, i) => i * 5), settings.minute])).sort((x, y) => x - y);

  return (
    <div className="notify-card">
      <label className="notify-toggle">
        <input type="checkbox" checked={settings.enabled} onChange={toggle} />
        <span>
          <strong>{t('notify.title')}</strong>
          <em>{t('notify.desc')}</em>
        </span>
      </label>
      {denied && <p className="notify-denied">{t('notify.denied')}</p>}
      {settings.enabled && (
        <div className="notify-opts">
          <div className="notify-time" role="group" aria-label={t('notify.time')}>
            <span>{t('notify.time')}</span>
            <select aria-label="Hour" value={h12} onChange={(e) => setTime(Number(e.target.value), pm, settings.minute)}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => <option key={h} value={h}>{h}</option>)}
            </select>
            <select aria-label="Minute" value={settings.minute} onChange={(e) => setTime(h12, pm, Number(e.target.value))}>
              {minutes.map((m) => <option key={m} value={m}>{String(m).padStart(2, '0')}</option>)}
            </select>
            <select aria-label="AM or PM" value={pm ? 'pm' : 'am'} onChange={(e) => setTime(h12, e.target.value === 'pm', settings.minute)}>
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
          <label>
            {t('notify.collection')}
            <select
              value={settings.collection}
              onChange={(e) => apply({ ...settings, collection: e.target.value as NotifyCollection })}
            >
              <option value="subhashita">{t('notify.subhashita')}</option>
              <option value="mahavakya">{t('notify.mahavakya')}</option>
              <option value="both">{t('notify.both')}</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
}

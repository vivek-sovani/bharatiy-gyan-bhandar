'use client';

import { useEffect, useState } from 'react';
import { MAHAVAKYAS } from '@/lib/mahavakya-data';
import { SUBHASHITS } from '@/lib/subhashit-data';
import { useLanguage } from '@/lib/LanguageContext';
import { dailyIndex } from '@/lib/useRandomVerse';
import { OPEN_VERSE_EVENT, consumePendingOpen, initNotifications, isNativeApp } from '@/lib/notifications';
import VerseModal from './VerseModal';

type Target = 'daily-mahavakya' | 'daily-subhashita';

// Tapping a daily-verse notification (Android app) opens that verse's explanation. It lives in the
// layout, not on the home page, so it works whichever page the app lands on: the home page hides its
// library in path-first mode and sends a reader mid-path straight into the path, so a modal owned by
// those sections would never appear.
export default function NotificationVerse() {
  const { lang } = useLanguage();
  const [target, setTarget] = useState<Target | null>(null);

  useEffect(() => {
    if (!isNativeApp()) return;
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent).detail;
      if (d === 'daily-mahavakya' || d === 'daily-subhashita') setTarget(d);
    };
    window.addEventListener(OPEN_VERSE_EVENT, onOpen);
    initNotifications();
    // A cold start can deliver the tap before this mounted.
    for (const t of ['daily-mahavakya', 'daily-subhashita'] as const) if (consumePendingOpen(t)) setTarget(t);
    return () => window.removeEventListener(OPEN_VERSE_EVENT, onOpen);
  }, []);

  if (!target) return null;
  const mr = lang === 'mr';
  const close = () => setTarget(null);

  if (target === 'daily-mahavakya') {
    const v = MAHAVAKYAS[dailyIndex(MAHAVAKYAS.length)];
    return (
      <VerseModal open onClose={close} title={v.title} deva={v.deva} translit={v.translit}
        meaning={mr ? v.meaningMr : v.meaningEn} explanation={mr ? v.explanationMr : v.explanationEn} source={v.source} />
    );
  }
  const v = SUBHASHITS[dailyIndex(SUBHASHITS.length)];
  return (
    <VerseModal open onClose={close} deva={v.deva} translit={v.translit}
      meaning={mr ? v.meaningMr : v.meaningEn} explanation={mr ? v.explanationMr : v.explanationEn} source={v.source} />
  );
}

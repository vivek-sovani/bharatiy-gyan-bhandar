'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

// Lightweight client-only date strip. Returns nothing on the first render
// (server / hydration) so the value can depend on the client clock without
// causing a hydration mismatch. Once mounted, formats today's Gregorian date
// in the active language using Intl.DateTimeFormat.
//
// This sits as a placeholder where a full Vikram Samvat panchanga component
// will later live — same render position, same language switching, same
// noscript-safe degradation.
export default function TodayDate() {
  const { lang } = useLanguage();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat(lang === 'mr' ? 'mr-IN' : 'en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setText(fmt.format(now));
  }, [lang]);

  // First render returns empty string to avoid hydration mismatch.
  return <>{text}</>;
}

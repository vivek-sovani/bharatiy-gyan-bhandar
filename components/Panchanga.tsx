'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { getPanchanga, type PanchangaInfo } from '@/lib/panchanga';

// Live Vikram Saṃvat panchanga strip, computed on the client.
//
// Renders nothing on the first paint (hydration-safe), then on mount calls
// getPanchanga() — which uses mhah-panchang for tithi/paksha/masa/vara and a
// small computed offset for the Saṃvat year — and displays the active language's
// tithi · paksha · masa · vāra · saṃvat year.
//
// Format roughly follows the user's example:
//   Caturdaśī · Śukla Pakṣa · Adhika Jyeṣṭha · Śukravāra · Vikram Saṃvat 2083
//   चतुर्दशी · शुक्ल पक्ष · अधिक ज्येष्ठ · शुक्रवार · विक्रम संवत् २०८३
export default function Panchanga() {
  const { lang } = useLanguage();
  const [info, setInfo] = useState<PanchangaInfo | null>(null);

  useEffect(() => {
    try {
      setInfo(getPanchanga(new Date()));
    } catch (err) {
      // Defensive: if mhah-panchang ever throws on a particular date,
      // fall through to empty render rather than crashing the home page.
      console.error('Panchanga compute failed:', err);
    }
  }, []);

  if (!info) return null;

  const parts =
    lang === 'mr'
      ? [
          info.tithi.mr,
          info.paksha.mr,
          info.masa.mr,
          info.vara.mr,
          `विक्रम संवत् ${info.samvat.mr}`,
        ]
      : [
          info.tithi.en,
          info.paksha.en,
          info.masa.en,
          info.vara.en,
          `Vikram Saṃvat ${info.samvat.en}`,
        ];

  return <>{parts.join(' · ')}</>;
}

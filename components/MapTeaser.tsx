'use client';

import Link from 'next/link';
import { Glyph } from './Ornaments';
import { useLanguage } from '@/lib/LanguageContext';

export default function MapTeaser() {
  const { t } = useLanguage();
  return (
    <section id="map" className="frame">
      <div className="shell">
        <Link
          className="mt-card"
          href="/map/"
        >
          <div>
            <div className="eyebrow"><Glyph /> {t('map.eyebrow')}</div>
            <h2>{t('map.title')}</h2>
            <p>{t('map.teaser')}</p>
          </div>
          <div className="mt-cta">{t('map.teaser_cta')}</div>
        </Link>
      </div>
    </section>
  );
}

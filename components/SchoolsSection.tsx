'use client';

import { Glyph } from './Ornaments';
import SchoolsMap from './SchoolsMap';
import { useLanguage } from '@/lib/LanguageContext';

// The darśana relationship diagram as a section of the Darśanas page.
export default function SchoolsSection() {
  const { t } = useLanguage();
  return (
    <section id="schools-map" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('sm.eyebrow')}</div>
            <h2>{t('sm.title')}</h2>
          </div>
        </div>
        <p className="vx-lede">{t('map.lede.schools')}</p>
        <SchoolsMap />
      </div>
    </section>
  );
}

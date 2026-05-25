'use client';

import { useEffect, useState } from 'react';
import { Glyph } from './Ornaments';
import { DINACHARYA as DINACHARYA_EN } from '@/lib/data';
import { DINACHARYA as DINACHARYA_MR } from '@/lib/data_mr';
import { useLanguage } from '@/lib/LanguageContext';

// Six tri-doṣic windows; the marker highlights the current segment.
const BOUNDS: [number, number][] = [
  [270, 360],
  [360, 600],
  [600, 840],
  [840, 1080],
  [1080, 1320],
  [1320, 1710],
];

export default function Dinacharya() {
  // Compute after mount so static export and client agree (no hydration mismatch).
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const { lang, t } = useLanguage();

  const DINACHARYA = lang === 'mr' ? DINACHARYA_MR : DINACHARYA_EN;

  useEffect(() => {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    setActiveIdx(BOUNDS.findIndex(([s, e]) => minutes >= s && minutes < e));
  }, []);

  return (
    <section id="dinacharya" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('dina.eyebrow')}</div>
            <h2>{t('dina.title')}</h2>
          </div>
          <div className="meta">{t('dina.meta')}</div>
        </div>

        <div className="dinacharya">
          {DINACHARYA.map((d, i) => (
            <div key={i} className="seg">
              {i === activeIdx && <div className="marker" style={{ width: '100%' }} />}
              <div className="hr">{d.hr}</div>
              <div className="ph">{d.ph}</div>
              <div className="de deva-only">{d.de}</div>
              <p className="act">{d.act}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

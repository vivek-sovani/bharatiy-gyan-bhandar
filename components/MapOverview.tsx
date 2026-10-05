'use client';

import Link from 'next/link';
import { Glyph } from './Ornaments';
import { SECTIONS as SECTIONS_EN } from '@/lib/data';
import { SECTIONS as SECTIONS_MR } from '@/lib/data_mr';
import { ERAS } from '@/lib/eras';
import { sectionPath } from '@/lib/routes';
import { useLanguage } from '@/lib/LanguageContext';


// An overview of the whole collection by era. Each section opens its own page, which carries
// that section's timeline and knowledge cards.
export default function MapOverview() {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';
  const sections = mr ? SECTIONS_MR : SECTIONS_EN;

  return (
    <section className="frame">
      <div className="shell">
        <div className="sec-crumb">
          <Link href="/">{t('detail.library')}</Link>
          <span className="sep">→</span>
          <span className="cur">{t('map.crumb')}</span>
        </div>

        <div className="frame-hd" style={{ marginTop: '1.5rem' }}>
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('ov.eyebrow')}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', marginTop: '0.6rem' }}>
              {t('map.title')}
            </h1>
          </div>
          <div className="meta">{t('ov.count').replace('{n}', String(sections.length))}</div>
        </div>
        <p className="vx-lede">{t('ov.lede')}</p>

        <nav className="ov-ribbon" aria-label={t('ov.eras')}>
          {ERAS.map((e) => {
            const n = sections.filter((s) => s.era === e.id).length;
            return (
              <a key={e.id} href={`#era-${e.id}`} className="ov-seg" style={{ '--c': e.color } as React.CSSProperties}>
                <span className="ov-seg-name">{mr ? e.mr : e.en}</span>
                <span className="ov-seg-dates">{mr ? e.dates.mr : e.dates.en}</span>
                <span className="ov-seg-n">{t('ov.n_sections').replace('{n}', String(n))}</span>
              </a>
            );
          })}
        </nav>

        {ERAS.map((e) => {
          const list = sections.filter((s) => s.era === e.id);
          if (list.length === 0) return null;
          return (
            <div key={e.id} id={`era-${e.id}`} className="ov-era" style={{ '--c': e.color } as React.CSSProperties}>
              <header className="ov-era-hd">
                <h2>{mr ? e.mr : e.en}</h2>
                <span>{mr ? e.dates.mr : e.dates.en}</span>
              </header>
              <ul className="ov-grid">
                {list.map((s) => (
                  <li key={s.id}>
                    <Link href={sectionPath(s)} className="ov-tile">
                      <span className="ov-tile-n">{s.n}</span>
                      <span className="ov-tile-title">{s.title}</span>
                      {!mr && <span className="ov-tile-deva deva-only">{s.deva}</span>}
                      <span className="ov-tile-blurb">{s.blurb}</span>
                      <span className="ov-tile-meta">{s.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

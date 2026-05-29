'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { SectionItem } from '@/lib/section-data';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';
import { saveScroll } from '@/lib/scroll';

export default function SectionTabs({ items, sectionId }: { items: SectionItem[]; sectionId?: string }) {
  const [active, setActive] = useState(items[0].id);
  const { lang, t } = useLanguage();

  const item = items.find((i) => i.id === active)!;
  const idx = items.findIndex((i) => i.id === active);

  return (
    <>
      <nav
        className="sec-tabs-nav"
        style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
        role="tablist"
      >
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            aria-selected={active === it.id}
            className={`sec-tab ${active === it.id ? 'is-active' : ''}`}
            onClick={() => setActive(it.id)}
          >
            <span className="de deva-only">{it.deva}</span>
            <span className="en">{it.title}</span>
            <span className="ep">{it.epithet}</span>
          </button>
        ))}
      </nav>

      <article className="sec-panel" key={item.id}>
        <div className="sec-panel-l">
          <div className="eyebrow">№ 0{idx + 1} of {items.length}</div>
          <h2>{item.title}</h2>
          {item.title !== item.deva && <div className="deva-name deva-only">{item.deva}</div>}
          <div className="epithet">{item.epithet}</div>
          <p className="summary">{item.summary}</p>

          {/* Meta + facets merged into a single chip strip — meta labels removed
              as they were generic and often wrong for the heterogeneous data. */}
          {(item.meta.length > 0 || (item.facets && item.facets.length > 0)) && (
            <div className="sec-facets">
              {item.meta.map((m) => (
                <span key={`m-${m}`} className="facet">{m}</span>
              ))}
              {item.facets?.map((f) => (
                <span key={`f-${f}`} className="facet">{f}</span>
              ))}
            </div>
          )}

          {[
            'darshanas', 'upavedas', 'nastika-darshanas', 'puranas', 'itihasa', 'agamas',
            'gita', 'dharmashastra', 'arthashastra', 'kavya', 'bhakti', 'subhashita', 'parallel',
          ].includes(sectionId || '') && (
            <div style={{ marginTop: '2rem' }}>
              <Link
                href={`/${sectionId}/${item.id}/`}
                className="btn-cta"
                onClick={() => saveScroll(`section:${sectionId}`)}
              >
                {sectionId === 'darshanas' || sectionId === 'nastika-darshanas' ? (
                  lang === 'mr' ? 'तपशीलवार दार्शनिक परिचय वाचा →' : 'Read detailed philosophical profile →'
                ) : (
                  lang === 'mr' ? 'तपशीलवार परिचय वाचा →' : 'Read detailed profile →'
                )}
              </Link>
            </div>
          )}
        </div>
        <aside className="sec-aside">
          {item.opening ? (
            <>
              <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>{t('detail.the_opening')}</div>
              <div className="sec-shloka">
                <div className="deva-line deva-only">
                  {item.opening.deva.split('\n').map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
                {lang === 'en' && (
                  <div className="translit-line">
                    {transliterate(item.opening.deva).split('\n').map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                )}
                <p className="trans">{item.opening.trans}</p>
                <div className="cite">{item.opening.cite}</div>
              </div>
            </>
          ) : (
            <div className="sec-shloka">
              <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>{t('detail.at_a_glance')}</div>
              <p style={{ marginTop: '1rem', color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                {t('detail.practice_focused')}
              </p>
            </div>
          )}
        </aside>
      </article>
    </>
  );
}

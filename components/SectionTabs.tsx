'use client';

import { useState } from 'react';
import type { SectionItem } from '@/lib/section-data';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';

const KV_KEYS = ['detail.recension', 'detail.authors', 'detail.range', 'detail.scope'];

export default function SectionTabs({ items }: { items: SectionItem[] }) {
  const [active, setActive] = useState(items[0].id);
  const { t } = useLanguage();

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
          <div className="deva-name deva-only">{item.deva}</div>
          <div className="epithet">{item.epithet}</div>
          <p className="summary">{item.summary}</p>

          <dl className="sec-kv">
            {item.meta.map((m, i) => (
              <div key={i} className="sec-kv-row">
                <dt>{t(KV_KEYS[i]) || 'Note'}</dt>
                <dd>{m}</dd>
              </div>
            ))}
          </dl>

          {item.facets && (
            <div className="sec-facets">
              {item.facets.map((f) => (
                <span key={f} className="facet">{f}</span>
              ))}
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
                <div className="translit-line">
                  {transliterate(item.opening.deva).split('\n').map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { SECTIONS as SECTIONS_EN, FILTERS as FILTERS_EN, type FilterOption } from '@/lib/data';
import { SECTIONS as SECTIONS_MR, FILTERS as FILTERS_MR } from '@/lib/data_mr';
import { sectionPath } from '@/lib/routes';
import { useLanguage } from '@/lib/LanguageContext';

export default function SectionsGrid() {
  const [era, setEra] = useState('all');
  const [type, setType] = useState('all');
  const [topic, setTopic] = useState('all');
  const { lang, t } = useLanguage();

  const SECTIONS = lang === 'mr' ? SECTIONS_MR : SECTIONS_EN;
  const FILTERS = lang === 'mr' ? FILTERS_MR : FILTERS_EN;

  const filtered = SECTIONS.filter(
    (s) =>
      (era === 'all' || s.era === era || s.era === 'all') &&
      (type === 'all' || s.type === type || s.type === 'primer') &&
      (topic === 'all' || s.topic === topic)
  );

  function ChipGroup({
    label,
    value,
    options,
    onChange,
  }: {
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (id: string) => void;
  }) {
    return (
      <>
        <span className="grp-label">{label}</span>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className="chip"
            aria-pressed={value === o.id}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </button>
        ))}
      </>
    );
  }

  return (
    <section id="sections" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('grid.eyebrow')}</div>
            <h2>{t('grid.title')}</h2>
          </div>
          <div className="meta">
            {t('grid.showing')
              .replace('{count}', filtered.length.toString())
              .replace('{total}', SECTIONS.length.toString())}
          </div>
        </div>

        <div className="filter-stack">
          <div className="filter-row">
            <ChipGroup label={t('grid.tag_era')} value={era} options={FILTERS.era} onChange={setEra} />
            <span style={{ flex: 1 }} />
            <ChipGroup label={t('grid.tag_canon')} value={type} options={FILTERS.type} onChange={setType} />
          </div>
          <div className="filter-row">
            <ChipGroup label={t('grid.tag_topic')} value={topic} options={FILTERS.topic} onChange={setTopic} />
          </div>
        </div>

        <div className="cards">
          {filtered.map((s) => {
            const imgPath = `/corpus-${s.id}.png`;

            return (
              <Link key={s.id} className="card" href={sectionPath(s)}>
                <div className="card-thumb">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${imgPath}`}
                    alt={s.title}
                    loading="lazy"
                  />
                </div>
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />
                <div className="num">
                  <span>№ {s.n}</span>
                  <span className="tag">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <div className="deva-name deva-only">{s.deva}</div>
                <p>{s.blurb}</p>
                <div className="facets">
                  {s.facets.map((f) => (
                    <span key={f} className="facet">{f}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

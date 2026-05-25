'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { SECTIONS, FILTERS, type FilterOption } from '@/lib/data';
import { sectionPath } from '@/lib/routes';

export default function SectionsGrid() {
  const [era, setEra] = useState('all');
  const [type, setType] = useState('all');
  const [topic, setTopic] = useState('all');

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
            <div className="eyebrow"><Glyph /> The library</div>
            <h2>Browse the corpus</h2>
          </div>
          <div className="meta">
            Showing {filtered.length} of {SECTIONS.length} streams
          </div>
        </div>

        <div className="filter-stack">
          <div className="filter-row">
            <ChipGroup label="Era" value={era} options={FILTERS.era} onChange={setEra} />
            <span style={{ flex: 1 }} />
            <ChipGroup label="Canon" value={type} options={FILTERS.type} onChange={setType} />
          </div>
          <div className="filter-row">
            <ChipGroup label="Topic" value={topic} options={FILTERS.topic} onChange={setTopic} />
          </div>
        </div>

        <div className="cards">
          {filtered.map((s) => (
            <Link key={s.id} className="card" href={sectionPath(s)}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

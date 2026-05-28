'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { SECTIONS as SECTIONS_EN, FILTERS as FILTERS_EN, type FilterOption } from '@/lib/data';
import { SECTIONS as SECTIONS_MR, FILTERS as FILTERS_MR } from '@/lib/data_mr';
import { sectionPath } from '@/lib/routes';
import { useLanguage } from '@/lib/LanguageContext';

// ── Era metadata ──────────────────────────────────────────────────────────────
interface EraMeta {
  id: string;
  label: string;
  deva: string;
  period: string;
  periodDeva: string;
  gloss: string;
  glossDeva: string;
}

const ERAS_META: EraMeta[] = [
  {
    id: 'vedic',
    label: 'Vedic Era',
    deva: 'वैदिक कालखंड',
    period: 'c. 1500 – 500 BCE',
    periodDeva: 'इ.स.पूर्व १५०० – ५००',
    gloss: 'The foundational era of revelation, oral chanting, and linguistic structure — the Vedas and the disciplines that make them intelligible.',
    glossDeva: 'सृष्टीचा प्रारंभ, मंत्रांचे सस्वर मौखिक पठण आणि भाषिक नियमांचा पाया घालणारा मूलभूत कालखंड — वेद आणि त्यांचा अर्थ स्पष्ट करणाऱ्या विद्या.',
  },
  {
    id: 'classical',
    label: 'Classical Era',
    deva: 'अभिजात कालखंड',
    period: 'c. 500 BCE – 800 CE',
    periodDeva: 'इ.स.पूर्व ५०० – इ.स. ८००',
    gloss: 'The flowering of philosophy, logic, civil law, statecraft, literature, mathematics, and temple ritual — the great age of śāstra, kāvya, darśana, and itihāsa.',
    glossDeva: 'दर्शने, तर्कशास्त्र, नागरिक कायदे, राजधर्म, नाटक-महाकाव्य, गणित आणि मंदिर विधी प्रणालींचा सुवर्णकाळ.',
  },
  {
    id: 'medieval',
    label: 'Medieval Era',
    deva: 'मध्ययुगीन कालखंड',
    period: 'c. 800 – 1800 CE',
    periodDeva: 'इ.स. ८०० – १८००',
    gloss: 'The shift toward personal devotion, vernacular poetry, and the integration of parallel spiritual lines — the bhakti movement and the parallel canons of Jainism, Buddhism, and Sikhism.',
    glossDeva: 'स्थानिक लोकभाषांमध्ये व्यक्त झालेली वैयक्तिक भक्ती, संतांचे वाङ्मय आणि समांतर आध्यात्मिक मार्गांचा उदय.',
  },
  {
    id: 'modern',
    label: 'Modern Era',
    deva: 'आधुनिक कालखंड',
    period: 'c. 1800 CE – Present',
    periodDeva: 'इ.स. १८०० – वर्तमान',
    gloss: 'The critical re-reading, interpretation, and revival of the Indic corpus in the modern world — reformers, mystics, poets, jurists, and activists who remade the tradition for a republic.',
    glossDeva: 'आधुनिक जगामध्ये प्राचीन भारतीय ज्ञानप्रणालीचे नवीन संदर्भात केलेले पुनरुज्जीवन आणि विश्लेषण.',
  },
  {
    id: 'all',
    label: 'Across All Eras',
    deva: 'सर्व कालखंडात',
    period: 'Timeless · ongoing',
    periodDeva: 'कालातीत · सतत',
    gloss: 'Field guides, living disciplines, and traditions that span the full chronological arc — texts and practices that do not belong to one period alone.',
    glossDeva: 'सर्व कालखंडांमध्ये पसरलेल्या मार्गदर्शिका, जिवंत साधना-पद्धती आणि समांतर परंपरा — जे एका विशिष्ट काळापुरते मर्यादित नाही.',
  },
];

// ── Era header sub-component ──────────────────────────────────────────────────
function EraHeader({ era, lang }: { era: EraMeta; lang: string }) {
  return (
    <div className="era-header-card" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
      <CornerOrn className="tl" />
      <CornerOrn className="tr" />
      <CornerOrn className="bl" />
      <CornerOrn className="br" />
      <div className="era-meta">
        <span className="era-period">
          {lang === 'mr' ? era.periodDeva : era.period}
        </span>
      </div>
      <h3 className="era-title">
        <span className="deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.4em' }}>
          {era.deva}
        </span>
        {era.label}
      </h3>
      <p className="era-desc">{lang === 'mr' ? era.glossDeva : era.gloss}</p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function SectionsGrid() {
  const [type, setType] = useState('all');
  const [topic, setTopic] = useState('all');
  const { lang, t } = useLanguage();

  const SECTIONS = lang === 'mr' ? SECTIONS_MR : SECTIONS_EN;
  const FILTERS = lang === 'mr' ? FILTERS_MR : FILTERS_EN;

  // Filter by type and topic only — era grouping replaces the era filter chip
  const filtered = SECTIONS.filter(
    (s) =>
      (type === 'all' || s.type === type || s.type === 'primer') &&
      (topic === 'all' || s.topic === topic)
  );

  const totalVisible = filtered.length;

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
        {/* Section header */}
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('grid.eyebrow')}</div>
            <h2>{t('grid.title')}</h2>
          </div>
          <div className="meta">
            {t('grid.showing')
              .replace('{count}', totalVisible.toString())
              .replace('{total}', SECTIONS.length.toString())}
          </div>
        </div>

        {/* Filter chips — type + topic only */}
        <div className="filter-stack">
          <div className="filter-row">
            <ChipGroup label={t('grid.tag_canon')} value={type} options={FILTERS.type} onChange={setType} />
            <span style={{ flex: 1 }} />
            <ChipGroup label={t('grid.tag_topic')} value={topic} options={FILTERS.topic} onChange={setTopic} />
          </div>
        </div>

        {/* Era-grouped cards */}
        {ERAS_META.map((era) => {
          const eraSections = filtered.filter((s) => s.era === era.id);
          if (eraSections.length === 0) return null;

          return (
            <div key={era.id} style={{ marginTop: '2.5rem' }}>
              <EraHeader era={era} lang={lang} />

              <div className="cards">
                {eraSections.map((s) => {
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
          );
        })}
      </div>
    </section>
  );
}

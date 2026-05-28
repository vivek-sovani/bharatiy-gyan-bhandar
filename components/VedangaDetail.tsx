'use client';

import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { VEDANGAS_DETAILS as DETAILS_EN } from '@/lib/vedangas-data';
import { VEDANGAS_DETAILS as DETAILS_MR } from '@/lib/vedangas-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { transliterate } from '@/lib/transliterate';

export default function VedangaDetail({ id }: { id: string }) {
  const { lang, t } = useLanguage();

  const DETAILS = lang === 'mr' ? DETAILS_MR : DETAILS_EN;
  const data = DETAILS[id] || DETAILS_EN[id];

  if (!data) {
    return (
      <section className="sec-hero">
        <div className="shell">
          <h2>Vedāṅga not found</h2>
        </div>
      </section>
    );
  }

  // Get other Vedangas for cross-navigation
  const allVedangas = Object.values(DETAILS);
  const otherVedangas = allVedangas.filter((v) => v.id !== id);

  return (
    <>
      {/* Hero Section */}
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <Link href="/">{t('detail.library')}</Link>
              <span className="sep">→</span>
              <Link href="/vedangas/">{lang === 'mr' ? 'सहा वेदांगे' : 'The Six Vedāṅgas'}</Link>
              <span className="sep">→</span>
              <span className="cur">{data.title}</span>
            </div>
            <span className="deva-only" style={{ fontSize: '2.5rem', color: 'var(--maroon)', marginTop: '1.2rem', display: 'block' }}>
              {data.deva}
            </span>
            <h1 style={{ marginTop: '0.2rem' }}>{data.title}</h1>
            <div className="epithet" style={{ fontSize: '1.25rem', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>{data.limb}</span>
              <span style={{ color: 'var(--ink-soft)' }}>—</span>
              <span>{data.metaphor}</span>
            </div>
            <p className="lede" style={{ marginTop: '1.5rem', maxWidth: '64ch' }}>
              {data.scope}
            </p>
          </div>
          <div className="sec-hero-img-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--paper-deep)' }}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/corpus-vedangas.png`}
              alt={data.title}
              fetchPriority="high"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content & Verse Section */}
      <section className="frame">
        <div className="shell">
          <div className="sec-panel">
            <div className="sec-panel-l">
              <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Glyph /> {lang === 'mr' ? 'अंग परिचय' : 'Limb Profile'}
              </div>
              
              <dl className="sec-kv" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                <div className="sec-kv-row">
                  <dt>{lang === 'mr' ? 'प्रमाण ग्रंथ' : 'Authority Text'}</dt>
                  <dd>{data.authorityText}</dd>
                </div>
                <div className="sec-kv-row">
                  <dt>{lang === 'mr' ? 'मुख्य आचार्य' : 'Key Authors'}</dt>
                  <dd>{data.keyAuthor}</dd>
                </div>
                <div className="sec-kv-row">
                  <dt>{lang === 'mr' ? 'व्याप्ती' : 'Limb Metaphor'}</dt>
                  <dd style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>{data.limb}</dd>
                </div>
              </dl>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {data.explanation.map((para, idx) => (
                  <p key={idx} style={{ fontSize: '1.08rem', lineHeight: '1.65', color: 'var(--ink-soft)', margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="sec-aside">
              <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>{t('detail.the_opening')}</div>
              <div className="sec-shloka" style={{ marginTop: '0.6rem' }}>
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />
                <div className="deva-line deva-only" style={{ fontSize: '1.35rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                  {data.verse.deva}
                </div>
                {lang === 'en' && (
                  <div className="translit-line" style={{ marginTop: '0.8rem', whiteSpace: 'pre-line' }}>
                    {data.verse.translit}
                  </div>
                )}
                <p className="trans" style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.98rem' }}>
                  {data.verse.trans}
                </p>
                <div className="cite" style={{ marginTop: '1rem', fontWeight: 600 }}>{data.verse.cite}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Subdivisions / Aspects Section */}
      <section className="frame" style={{ background: 'var(--paper-deep)' }}>
        <div className="shell">
          <div className="frame-hd">
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {lang === 'mr' ? 'शाखा व विभाग' : 'Subdivisions & Strata'}</div>
              <h2>{lang === 'mr' ? `${data.title} चे मुख्य पैलू` : `Key Aspects of ${data.title}`}</h2>
            </div>
          </div>
          <div className="sec-grid" style={{ marginTop: '1.5rem' }}>
            {data.subdivisions.map((sub, i) => (
              <article key={i} className="sec-grid-item" style={{ minHeight: 'auto', padding: '1.5rem' }}>
                <div className="ord" style={{ marginBottom: '0.5rem' }}>
                  <span>№ {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)' }}>
                  {sub.name}
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-soft)', marginTop: '0.5rem', marginBottom: 0, flex: 1 }}>
                  {sub.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="frame">
        <div className="shell">
          <div className="frame-hd">
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {lang === 'mr' ? 'मूलभूत संकल्पना' : 'Key Concepts'}</div>
              <h2>{lang === 'mr' ? 'महत्त्वाच्या संकल्पना' : 'Core Philosophical & Technical Concepts'}</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
            {data.keyConcepts.map((concept, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--gold-deep)', paddingLeft: '1.25rem' }}>
                <div className="eyebrow" style={{ color: 'var(--gold-deep)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="deva-only" style={{ fontSize: '0.9rem', color: 'var(--maroon)' }}>{concept.deva}</span>
                  <span>{concept.name}</span>
                </div>
                <p style={{ marginTop: '0.5rem', color: 'var(--ink-soft)', fontSize: '0.96rem', lineHeight: '1.5', marginBottom: 0 }}>
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Also / Cross-Navigation */}
      <section className="see-also" style={{ background: 'var(--paper-deep)' }}>
        <div className="shell">
          <h4>{lang === 'mr' ? 'इतर वेदांगे पहा' : 'Explore Other Vedāṅgas'}</h4>
          <div className="see-grid">
            {otherVedangas.map((v) => (
              <Link key={v.id} className="see-link" href={`/vedangas/${v.id}/`}>
                <span>
                  <span className="ttl">{v.title}</span>
                  <br />
                  <span className="ttl-de deva-only" style={{ color: 'var(--maroon)', fontSize: '0.92rem' }}>{v.deva}</span>
                </span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

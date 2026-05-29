'use client';

import Link from 'next/link';
import type { SectionDetail, SectionItem } from '@/lib/section-data';
import { SECTION_DETAILS as DETAILS_EN } from '@/lib/section-data';
import { SECTION_DETAILS as DETAILS_MR } from '@/lib/section-data_mr';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';
import { CornerOrn, Glyph } from './Ornaments';

export default function ItemDetailView({
  slug,
  id,
  fallbackData,
  fallbackItem,
}: {
  slug: string;
  id: string;
  fallbackData: SectionDetail;
  fallbackItem: SectionItem;
}) {
  const { lang, t } = useLanguage();

  const DETAILS = lang === 'mr' ? DETAILS_MR : DETAILS_EN;
  const sectionData = DETAILS[slug] || fallbackData;

  // Item may not be translated — fall back to English
  const item =
    sectionData.items?.find((i) => i.id === id) ||
    fallbackData.items?.find((i) => i.id === id) ||
    fallbackItem;

  const otherItems =
    (sectionData.items || fallbackData.items || []).filter(
      (i) => i.id !== id
    );

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <Link href="/">{t('detail.library')}</Link>
              <span className="sep">→</span>
              <Link href={`/${slug}/`}>{sectionData.title}</Link>
              <span className="sep">→</span>
              <span className="cur">{item.title}</span>
            </div>

            {item.deva !== item.title && (
              <span
                className="deva-only"
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--maroon)',
                  marginTop: '1.2rem',
                  display: 'block',
                }}
              >
                {item.deva}
              </span>
            )}

            <h1 style={{ marginTop: '0.2rem' }}>{item.title}</h1>

            <div
              className="epithet"
              style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}
            >
              {item.epithet}
            </div>

            {item.meta.length > 0 && (
              <p
                className="lede"
                style={{
                  marginTop: '1rem',
                  maxWidth: '64ch',
                  color: 'var(--ink-soft)',
                  fontSize: '0.97rem',
                }}
              >
                {item.meta.join(' · ')}
              </p>
            )}
          </div>

          <div
            className="sec-hero-img-wrap"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'var(--paper-deep)',
            }}
          >
            <img
              src={`${basePath}/corpus-${slug}.png`}
              alt={item.title}
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

      {/* ── Main panel ───────────────────────────────── */}
      <section className="frame">
        <div className="shell">
          <div className="sec-panel">
            <div className="sec-panel-l">
              <div
                className="eyebrow"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Glyph />
                {lang === 'mr' ? 'परिचय' : 'Overview'}
              </div>

              {/* Meta — rendered as a chip strip (heterogeneous data, generic labels removed) */}
              {item.meta.length > 0 && (
                <div
                  className="sec-facets"
                  style={{ marginTop: '1.25rem', marginBottom: '1.75rem' }}
                >
                  {item.meta.map((m) => (
                    <span key={m} className="facet">{m}</span>
                  ))}
                </div>
              )}

              {/* Explanation (multi-paragraph) — falls back to single summary */}
              {item.explanation && item.explanation.length > 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.1rem',
                  }}
                >
                  {item.explanation.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: '1.08rem',
                        lineHeight: '1.7',
                        color: 'var(--ink-soft)',
                        margin: 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: '1.7',
                    color: 'var(--ink-soft)',
                    margin: 0,
                  }}
                >
                  {item.summary}
                </p>
              )}

              {/* Facets */}
              {item.facets && item.facets.length > 0 && (
                <div className="sec-facets" style={{ marginTop: '1.5rem' }}>
                  {item.facets.map((f) => (
                    <span key={f} className="facet">
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Aside — opening shloka */}
            <aside className="sec-aside">
              {item.opening ? (
                <>
                  <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>
                    {t('detail.the_opening')}
                  </div>
                  <div className="sec-shloka" style={{ marginTop: '0.6rem' }}>
                    <CornerOrn className="tl" />
                    <CornerOrn className="tr" />
                    <CornerOrn className="bl" />
                    <CornerOrn className="br" />
                    <div
                      className="deva-line deva-only"
                      style={{
                        fontSize: '1.35rem',
                        lineHeight: '1.7',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {item.opening.deva}
                    </div>
                    {lang === 'en' && (
                      <div
                        className="translit-line"
                        style={{ marginTop: '0.8rem', whiteSpace: 'pre-line' }}
                      >
                        {transliterate(item.opening.deva)}
                      </div>
                    )}
                    <p
                      className="trans"
                      style={{
                        marginTop: '1rem',
                        fontStyle: 'italic',
                        fontSize: '0.98rem',
                      }}
                    >
                      {item.opening.trans}
                    </p>
                    <div
                      className="cite"
                      style={{ marginTop: '1rem', fontWeight: 600 }}
                    >
                      {item.opening.cite}
                    </div>
                  </div>
                </>
              ) : (
                <div className="sec-shloka">
                  <div className="eyebrow" style={{ color: 'var(--gold-deep)' }}>
                    {t('detail.at_a_glance')}
                  </div>
                  <p
                    style={{
                      marginTop: '1rem',
                      color: 'var(--ink-soft)',
                      fontStyle: 'italic',
                    }}
                  >
                    {t('detail.practice_focused')}
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Key aspects sub-grid ──────────────────────── */}
      {item.aspects && item.aspects.length > 0 && (
        <section className="frame" style={{ background: 'var(--paper-deep)' }}>
          <div className="shell">
            <div className="frame-hd">
              <div className="title-block">
                <div className="eyebrow">
                  <Glyph />
                  {lang === 'mr' ? 'मुख्य पैलू' : 'Key Aspects'}
                </div>
                <h2>
                  {lang === 'mr'
                    ? `${item.title} चे प्रमुख घटक`
                    : `Inside ${item.title}`}
                </h2>
              </div>
            </div>
            <div className="sec-grid" style={{ marginTop: '1.5rem' }}>
              {item.aspects.map((a, i) => (
                <article
                  key={i}
                  className="sec-grid-item"
                  style={{ minHeight: 'auto', padding: '1.5rem' }}
                >
                  <div className="ord" style={{ marginBottom: '0.5rem' }}>
                    <span>№ {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    {a.deva && a.deva !== a.name && (
                      <span
                        className="deva-only"
                        style={{
                          color: 'var(--maroon)',
                          fontFamily: 'var(--font-deva)',
                          fontSize: '1.1rem',
                        }}
                      >
                        {a.deva}
                      </span>
                    )}
                    <span>{a.name}</span>
                  </h4>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--ink-soft)',
                      marginTop: '0.5rem',
                      marginBottom: 0,
                      lineHeight: 1.55,
                    }}
                  >
                    {a.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cross-nav within this section ────────────── */}
      {otherItems.length > 0 && (
        <section className="see-also">
          <div className="shell">
            <h4>
              {lang === 'mr'
                ? `${sectionData.title} मधील इतर विषय`
                : `More in ${sectionData.title}`}
            </h4>
            <div className="see-grid">
              {otherItems.slice(0, 6).map((other) => (
                <Link
                  key={other.id}
                  className="see-link"
                  href={`/${slug}/${other.id}/`}
                >
                  <span>
                    <span className="ttl">{other.title}</span>
                    {other.deva !== other.title && (
                      <>
                        <br />
                        <span
                          className="ttl-de deva-only"
                          style={{ color: 'var(--maroon)', fontSize: '0.92rem' }}
                        >
                          {other.deva}
                        </span>
                      </>
                    )}
                  </span>
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

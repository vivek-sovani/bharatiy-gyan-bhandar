'use client';

import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { LIVING_KNOWLEDGE, LK_DOMAIN_META, type Gift } from '@/lib/living-knowledge-data';
import { LIVING_KNOWLEDGE as LIVING_KNOWLEDGE_MR, LK_DOMAIN_META as LK_DOMAIN_META_MR } from '@/lib/living-knowledge-data_mr';
import { useLanguage } from '@/lib/LanguageContext';

export default function LivingKnowledgeDetail({ id }: { id: string }) {
  const { lang, t } = useLanguage();

  const gifts = lang === 'mr' ? LIVING_KNOWLEDGE_MR : LIVING_KNOWLEDGE;
  const domainMeta = lang === 'mr' ? LK_DOMAIN_META_MR : LK_DOMAIN_META;

  const gift: Gift | undefined = gifts.find((g) => g.id === id) || LIVING_KNOWLEDGE.find((g) => g.id === id);
  if (!gift) return null;

  const domain = domainMeta.find((d) => d.id === gift.domain);
  const domainHref = `/#lk-domain-${gift.domain}`;
  const isPlaceholder = gift.what.includes('Phase II') || gift.what.includes('लवकरच');

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="sec-hero">
        <div className="shell sec-hero-inner">
          <div className="sec-hero-copy">
            <div className="sec-crumb">
              <Link href="/">{t('detail.library')}</Link>
              <span className="sep">→</span>
              <Link href={domainHref}>{t('lk.title_short')}</Link>
              <span className="sep">→</span>
              <span className="cur">{gift.name}</span>
            </div>

            <span
              className="deva-only"
              style={{
                fontFamily: 'var(--font-deva)',
                fontSize: '2.5rem',
                color: 'var(--maroon)',
                marginTop: '1.2rem',
                display: 'block',
              }}
            >
              {gift.deva}
            </span>

            <h1 style={{ marginTop: '0.2rem', fontStyle: 'italic', fontWeight: 500 }}>
              {gift.name}
            </h1>

            <p
              className="lede"
              style={{ marginTop: '1rem', maxWidth: '64ch', color: 'var(--ink-soft)', fontSize: '1.08rem' }}
            >
              {gift.blurb}
            </p>

            {gift.debated && (
              <div
                className="eyebrow"
                style={{ marginTop: '1rem', color: 'var(--gold-deep)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Glyph /> {t('lk.debated')}
              </div>
            )}
          </div>

          <div
            className="sec-hero-img-wrap"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-deep)' }}
          >
            {/* Domain seal shown as a large ornamental glyph — no image asset needed */}
            <div
              style={{
                fontFamily: 'var(--font-deva)',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                color: 'var(--maroon)',
                opacity: 0.35,
                lineHeight: 1,
                userSelect: 'none',
              }}
              aria-hidden
            >
              {gift.seal}
            </div>
          </div>
        </div>
      </section>

      {/* ── Three-panel main ─────────────────────────── */}
      <section className="frame">
        <div className="shell">
          <div className="sec-panel">
            <div className="sec-panel-l">

              {/* What it is */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Glyph /> {t('lk.what')}
                </div>
                <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--ink-soft)', margin: 0 }}>
                  {gift.what}
                </p>
              </div>

              {/* When it emerged */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Glyph /> {t('lk.when')}
                </div>
                <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--ink-soft)', margin: 0 }}>
                  {gift.when}
                </p>
              </div>

              {/* How it applies today */}
              <div>
                <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Glyph /> {t('lk.how')}
                </div>
                <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--ink-soft)', margin: 0 }}>
                  {gift.how}
                </p>
              </div>

            </div>

            {/* Aside */}
            <aside className="sec-aside">
              <div className="sec-shloka" style={{ position: 'relative' }}>
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />

                {/* Domain */}
                {domain && (
                  <div style={{ marginBottom: '1.2rem' }}>
                    <div className="eyebrow" style={{ color: 'var(--gold-deep)', marginBottom: '0.4rem' }}>
                      {lang === 'mr' ? 'क्षेत्र' : 'Domain'}
                    </div>
                    <div
                      className="deva-only"
                      style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', fontSize: '1.1rem', marginBottom: '0.15rem' }}
                    >
                      {domain.deva}
                    </div>
                    {lang !== 'mr' && (
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{domain.label}</div>
                    )}
                    <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginTop: '0.4rem', margin: '0.4rem 0 0' }}>
                      {domain.gloss}
                    </p>
                  </div>
                )}

                {/* Phase II notice — only when content is not yet written */}
                {isPlaceholder && (
                  <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '1rem', marginTop: '1rem' }}>
                    <p style={{ color: 'var(--ink-faint)', fontSize: '0.88rem', fontStyle: 'italic', margin: 0 }}>
                      {t('lk.phase2')}
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Back link ────────────────────────────────── */}
      <section className="see-also">
        <div className="shell">
          <h4>{lang === 'mr' ? 'नेव्हिगेशन' : 'Navigation'}</h4>
          <div className="see-grid">
            <Link className="see-link" href={domainHref}>
              <span>
                <span className="ttl">
                  {lang === 'mr'
                    ? `← ${domain?.deva ?? t('lk.title_short')} मधील इतर योगदाने पाहा`
                    : `← Explore more in ${domain?.label ?? t('lk.title_short')}`}
                </span>
              </span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

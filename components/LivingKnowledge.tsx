'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { LK_DOMAINS, LK_DOMAIN_META, LIVING_KNOWLEDGE, LK_NOTE, type DomainId } from '@/lib/living-knowledge-data';
import { LK_DOMAIN_META as LK_DOMAIN_META_MR, LIVING_KNOWLEDGE as LIVING_KNOWLEDGE_MR, LK_NOTE as LK_NOTE_MR } from '@/lib/living-knowledge-data_mr';
import { useLanguage } from '@/lib/LanguageContext';

export default function LivingKnowledge() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { lang, t } = useLanguage();
  const [activeDomain, setActiveDomain] = useState<DomainId | null>(null);

  const domainMeta = lang === 'mr' ? LK_DOMAIN_META_MR : LK_DOMAIN_META;
  const gifts = lang === 'mr' ? LIVING_KNOWLEDGE_MR : LIVING_KNOWLEDGE;
  const note = lang === 'mr' ? LK_NOTE_MR : LK_NOTE;

  const total = LIVING_KNOWLEDGE.length;

  // Refs for focus/scroll management
  const subgridHeadingRef = useRef<HTMLHeadingElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);
  const tileButtonRefs = useRef<Map<DomainId, HTMLButtonElement>>(new Map());

  const openDomain = useCallback((id: DomainId) => {
    setActiveDomain(id);
    requestAnimationFrame(() => {
      subgridHeadingRef.current?.focus({ preventScroll: true });
      subgridHeadingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const closeDomain = useCallback((returnTo?: DomainId) => {
    setActiveDomain(null);
    requestAnimationFrame(() => {
      const tile = returnTo ? tileButtonRefs.current.get(returnTo) : null;
      if (tile) {
        tile.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        tile.focus({ preventScroll: true });
      } else {
        tilesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  function toggleDomain(id: DomainId) {
    if (activeDomain === id) {
      closeDomain(id);
    } else {
      openDomain(id);
    }
  }

  const activeGifts = activeDomain ? gifts.filter((g) => g.domain === activeDomain) : [];

  // Auto-open domain when arriving from a detail-page back-link (/#lk-domain-<id>)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#lk-domain-')) {
      const domainId = hash.slice('#lk-domain-'.length) as DomainId;
      if ((LK_DOMAINS as readonly string[]).includes(domainId)) {
        setActiveDomain(domainId);
        // Wait for the sub-grid to render, then scroll to it
        setTimeout(() => {
          subgridHeadingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          subgridHeadingRef.current?.focus({ preventScroll: true });
        }, 150);
      }
    }
  }, []);

  return (
    <section id="living-knowledge" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('lk.eyebrow')}</div>
            <h2>{t('lk.title')}</h2>
          </div>
          <div className="meta">
            {t('lk.meta').replace('{count}', total.toString())}
          </div>
        </div>

        <p className="contrib-prompt" style={{ maxWidth: '76ch', marginBottom: '0.4rem' }}>
          <span className="eyebrow" style={{ display: 'inline', marginRight: '0.5rem' }}>
            {t('lk.note_label')}
          </span>
          {note}
        </p>

        <p className="contrib-prompt">{t('lk.prompt')}</p>

        {/* Domain tile grid */}
        <div className="people" ref={tilesRef}>
          {LK_DOMAINS.map((domainId) => {
            const meta = domainMeta.find((d) => d.id === domainId);
            if (!meta) return null;
            const count = LIVING_KNOWLEDGE.filter((g) => g.domain === domainId).length;
            const isActive = activeDomain === domainId;

            return (
              <button
                key={domainId}
                id={`lk-domain-${domainId}`}
                type="button"
                className={`person is-link${meta.image ? ' has-cover' : ''}`}
                aria-pressed={isActive}
                ref={(el) => {
                  if (el) tileButtonRefs.current.set(domainId, el);
                  else tileButtonRefs.current.delete(domainId);
                }}
                onClick={() => toggleDomain(domainId)}
                style={isActive ? { borderColor: 'var(--maroon)', background: 'var(--paper-deep)' } : undefined}
              >
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />

                {meta.image && (
                  <span className="person-cover" aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${basePath}/${meta.image}`} alt="" loading="lazy" />
                  </span>
                )}

                <div className="person-row">
                  {!meta.image && (
                    <span className="person-seal" aria-hidden>{meta.seal}</span>
                  )}
                  <div className="person-id">
                    <span className="person-dates">
                      {t('lk.count').replace('{n}', count.toString())}
                    </span>
                    {lang === 'mr' ? (
                      <h4 className="person-name deva-only">{meta.deva}</h4>
                    ) : (
                      <>
                        <h4 className="person-name">{meta.label}</h4>
                        {meta.label !== meta.deva && (
                          <div className="person-deva deva-only">{meta.deva}</div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <p className="person-blurb">{meta.gloss}</p>

                <div className="person-tradition" style={{ marginTop: 'auto' }}>
                  {isActive ? '▲ ' : '▼ '}
                  {isActive ? t('lk.collapse') : t('lk.expand')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Contribution sub-grid — shown when a domain is active */}
        {activeDomain && activeGifts.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <div className="era-banner">
              <div className="era-banner-row">
                {/* tabIndex=-1 so JS focus() works; outline suppressed visually */}
                <h3
                  className="era-banner-title"
                  ref={subgridHeadingRef}
                  tabIndex={-1}
                  style={{ outline: 'none' }}
                >
                  {lang === 'mr' ? (
                    <span className="deva-only">
                      {domainMeta.find((d) => d.id === activeDomain)?.deva}
                    </span>
                  ) : (
                    <>
                      <span>{domainMeta.find((d) => d.id === activeDomain)?.label}</span>
                      <span className="era-banner-sep">·</span>
                      <span className="deva-only">
                        {domainMeta.find((d) => d.id === activeDomain)?.deva}
                      </span>
                    </>
                  )}
                </h3>
              </div>
              <p className="era-banner-gloss">
                {domainMeta.find((d) => d.id === activeDomain)?.gloss}
              </p>
            </div>

            <div className="cards" style={{ marginTop: '1.25rem' }}>
              {activeGifts.map((gift) => (
                <Link
                  key={gift.id}
                  href={`/living-knowledge/${gift.id}/`}
                  className="card"
                >
                  <CornerOrn className="tl" />
                  <CornerOrn className="tr" />
                  <CornerOrn className="bl" />
                  <CornerOrn className="br" />

                  <div className="num">
                    <span>№ {gift.n}</span>
                    {gift.debated && (
                      <span className="tag">{t('lk.debated')}</span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span
                      className="deva-only"
                      style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', fontSize: '1.3rem' }}
                    >
                      {gift.deva}
                    </span>
                  </div>

                  <h3 style={{ marginTop: '0.25rem' }}>{gift.name}</h3>

                  <p>{gift.blurb}</p>

                  <div className="facets">
                    <span className="facet">{t('lk.read_more')}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Return to domain tiles */}
            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                type="button"
                onClick={() => closeDomain(activeDomain ?? undefined)}
                style={{
                  appearance: 'none',
                  background: 'transparent',
                  border: '1px solid var(--rule-strong)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--maroon)',
                  padding: '0.45rem 1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                ↑ {t('lk.back_to_domains')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

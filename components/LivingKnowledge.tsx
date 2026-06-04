'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { LK_DOMAINS, LK_DOMAIN_META, LIVING_KNOWLEDGE, LK_NOTE, type DomainId } from '@/lib/living-knowledge-data';
import { LK_DOMAIN_META as LK_DOMAIN_META_MR, LIVING_KNOWLEDGE as LIVING_KNOWLEDGE_MR, LK_NOTE as LK_NOTE_MR } from '@/lib/living-knowledge-data_mr';
import { useLanguage } from '@/lib/LanguageContext';

export default function LivingKnowledge() {
  const { lang, t } = useLanguage();
  const [activeDomain, setActiveDomain] = useState<DomainId | null>(null);

  const domainMeta = lang === 'mr' ? LK_DOMAIN_META_MR : LK_DOMAIN_META;
  const gifts = lang === 'mr' ? LIVING_KNOWLEDGE_MR : LIVING_KNOWLEDGE;
  const note = lang === 'mr' ? LK_NOTE_MR : LK_NOTE;

  const total = LIVING_KNOWLEDGE.length;

  function toggleDomain(id: DomainId) {
    setActiveDomain((prev) => (prev === id ? null : id));
  }

  const activeGifts = activeDomain ? gifts.filter((g) => g.domain === activeDomain) : [];

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
        <div className="people">
          {LK_DOMAINS.map((domainId) => {
            const meta = domainMeta.find((d) => d.id === domainId);
            if (!meta) return null;
            const count = LIVING_KNOWLEDGE.filter((g) => g.domain === domainId).length;
            const isActive = activeDomain === domainId;

            return (
              <button
                key={domainId}
                type="button"
                className="person is-link"
                aria-pressed={isActive}
                onClick={() => toggleDomain(domainId)}
                style={isActive ? { borderColor: 'var(--maroon)', background: 'var(--paper-deep)' } : undefined}
              >
                <CornerOrn className="tl" />
                <CornerOrn className="tr" />
                <CornerOrn className="bl" />
                <CornerOrn className="br" />

                <div className="person-row">
                  <span className="person-seal" aria-hidden>{meta.seal}</span>
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
                <h3 className="era-banner-title">
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

                  <h3 style={{ marginTop: '0.25rem' }}>
                    {lang === 'mr' ? gift.name : gift.name}
                  </h3>

                  <p>{gift.blurb}</p>

                  <div className="facets">
                    <span className="facet">{t('lk.read_more')}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CornerOrn } from './Ornaments';
import type { Concept } from '@/lib/concepts-data';
import { useLanguage } from '@/lib/LanguageContext';

export default function ConceptModal({
  concept,
  onClose,
}: {
  concept: Concept | null;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    if (!concept) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [concept, onClose]);

  if (!concept) return null;
  const c = concept;

  const name = lang === 'mr' ? c.deva : c.name;
  const gloss = lang === 'mr' ? c.glossDeva : c.gloss;
  const source = lang === 'mr' ? c.sourceDeva : c.source;
  const showDeva = lang !== 'mr' && c.name !== c.deva;

  return (
    <div className="contrib-modal-backdrop" onClick={onClose}>
      <div
        className="contrib-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CornerOrn className="tl" />
        <CornerOrn className="tr" />
        <CornerOrn className="bl" />
        <CornerOrn className="br" />

        <button
          type="button"
          className="contrib-modal-close"
          onClick={onClose}
          aria-label={t('concepts.detail.close')}
        >
          ×
        </button>

        <div className="contrib-modal-head">
          <span className="contrib-modal-seal" aria-hidden>{c.seal}</span>
          <div className="contrib-modal-id">
            <span className="person-dates">{gloss}</span>
            <h3 id="concept-modal-title" className={lang === 'mr' ? 'deva-only' : undefined}>
              {name}
            </h3>
            {showDeva && <div className="contrib-modal-deva deva-only">{c.deva}</div>}
          </div>
        </div>

        <div className="contrib-modal-tradition">{source}</div>

        <div className="contrib-modal-body">
          <p className="contrib-modal-intro">{c.detail ? c.detail.intro : c.blurb}</p>

          {c.detail && (
            <>
              <h4 className="contrib-modal-subhead">{t('concepts.detail.aspects')}</h4>
              <ul className="contrib-modal-list">
                {c.detail.aspects.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <h4 className="contrib-modal-subhead">{t('concepts.detail.significance')}</h4>
              <p className="contrib-modal-legacy">{c.detail.significance}</p>

              {c.detail.origin && (
                <>
                  <h4 className="contrib-modal-subhead">{t('concepts.detail.appears')}</h4>
                  <div className="concept-refs">
                    <div className="concept-ref-row">
                      <span className="concept-ref-tag">{t('concepts.detail.first')}</span>
                      <Link className="concept-ref-link" href={c.detail.origin.href}>
                        {c.detail.origin.label}
                      </Link>
                    </div>
                    {c.detail.references && c.detail.references.length > 0 && (
                      <div className="concept-ref-row">
                        <span className="concept-ref-tag">{t('concepts.detail.referred')}</span>
                        <span className="concept-ref-links">
                          {c.detail.references.map((r) => (
                            <Link key={r.href + r.label} className="concept-ref-link" href={r.href}>
                              {r.label}
                            </Link>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          <h4 className="contrib-modal-subhead">{t('concepts.detail.related')}</h4>
          <div className="person-works contrib-modal-works">
            {c.tags.map((w) => (
              <span key={w} className="person-work">{w}</span>
            ))}
          </div>
        </div>

        {c.href && (
          <Link className="contrib-modal-link" href={c.href}>
            {t('concepts.detail.explore')} →
          </Link>
        )}
      </div>
    </div>
  );
}

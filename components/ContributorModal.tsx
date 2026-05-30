'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CornerOrn } from './Ornaments';
import type { Contributor } from '@/lib/contributors-data';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContributorModal({
  contributor,
  onClose,
}: {
  contributor: Contributor | null;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    if (!contributor) return;
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
  }, [contributor, onClose]);

  if (!contributor) return null;
  const c = contributor;

  const name = lang === 'mr' ? c.deva : c.name;
  const dates = lang === 'mr' ? c.datesDeva : c.dates;
  const tradition = lang === 'mr' ? c.traditionDeva : c.tradition;
  const epithet = c.epithet ? (lang === 'mr' ? c.epithetDeva || c.epithet : c.epithet) : '';
  const showDeva = lang !== 'mr' && c.name !== c.deva;

  return (
    <div className="contrib-modal-backdrop" onClick={onClose}>
      <div
        className="contrib-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contrib-modal-title"
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
          aria-label={t('contrib.detail.close')}
        >
          ×
        </button>

        <div className="contrib-modal-head">
          <span className="contrib-modal-seal" aria-hidden>{c.seal}</span>
          <div className="contrib-modal-id">
            <span className="person-dates">{dates}</span>
            <h3 id="contrib-modal-title" className={lang === 'mr' ? 'deva-only' : undefined}>
              {name}
            </h3>
            {showDeva && <div className="contrib-modal-deva deva-only">{c.deva}</div>}
            {epithet && <div className="person-epithet">{epithet}</div>}
          </div>
        </div>

        <div className="contrib-modal-tradition">{tradition}</div>

        <div className="contrib-modal-body">
          <p className="contrib-modal-intro">{c.detail ? c.detail.intro : c.blurb}</p>

          {c.detail && (
            <>
              <h4 className="contrib-modal-subhead">{t('contrib.detail.contributions')}</h4>
              <ul className="contrib-modal-list">
                {c.detail.contributions.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <h4 className="contrib-modal-subhead">{t('contrib.detail.legacy')}</h4>
              <p className="contrib-modal-legacy">{c.detail.legacy}</p>
            </>
          )}

          <h4 className="contrib-modal-subhead">{t('contrib.detail.works')}</h4>
          <div className="person-works contrib-modal-works">
            {c.works.map((w) => (
              <span key={w} className="person-work">{w}</span>
            ))}
          </div>
        </div>

        {c.href && (
          <Link className="contrib-modal-link" href={c.href}>
            {t('contrib.detail.explore')} →
          </Link>
        )}
      </div>
    </div>
  );
}

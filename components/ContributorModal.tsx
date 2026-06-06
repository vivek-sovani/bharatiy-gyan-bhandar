'use client';

import { useEffect, useRef } from 'react';
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock background scroll, and manage focus while open:
  // move focus into the dialog, trap Tab within it, and restore focus to
  // whatever opened it on close.
  useEffect(() => {
    if (!contributor) return;
    const opener = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
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
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <CornerOrn className="tl" />
        <CornerOrn className="tr" />
        <CornerOrn className="bl" />
        <CornerOrn className="br" />

        <button
          type="button"
          className="contrib-modal-close"
          ref={closeRef}
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

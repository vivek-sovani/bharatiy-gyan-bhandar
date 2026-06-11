'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import ShareButton from './ShareButton';

type VerseModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  deva: string;
  translit?: string;
  meaning: string;
  explanation: string;
  source?: string;
};

export default function VerseModal({
  open,
  onClose,
  title,
  deva,
  translit,
  meaning,
  explanation,
  source,
}: VerseModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!open) return;
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
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="verse-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="verse-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="verse-modal-close"
          onClick={onClose}
          aria-label={t('verse.close')}
        >
          ×
        </button>

        <div className="verse-modal-head">
          {title && <div className="verse-modal-title deva-only">{title}</div>}
          <div className="verse-modal-deva deva-only">
            {deva.split('\n').map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
          {lang === 'en' && translit && (
            <div className="verse-modal-translit">
              {translit.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
          )}
        </div>

        <div className="verse-modal-body">
          <h4>{t('verse.meaning')}</h4>
          {meaning.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {explanation && (
            <>
              <h4>{t('verse.explanation')}</h4>
              {explanation.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </>
          )}
        </div>

        <div className="verse-modal-footer">
          {source && <div className="verse-modal-source">{source}</div>}
          <ShareButton
            deva={deva}
            translit={translit}
            meaning={meaning}
            explanation={explanation}
            source={source}
            label={title}
            className="verse-modal-share"
          />
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type ShareButtonProps = {
  deva: string;
  translit?: string;
  meaning: string;
  source?: string;
  label?: string;
  className?: string;
};

function buildShareText(deva: string, translit: string | undefined, meaning: string, source: string | undefined, label: string | undefined, lang: string): string {
  const parts: string[] = [];
  if (label) parts.push(label);
  parts.push('');
  parts.push(deva.replace(/\n/g, ' '));
  if (lang === 'en' && translit) parts.push(translit.replace(/\n/g, ' '));
  parts.push('');
  parts.push(meaning.split('\n\n')[0]);
  if (source) parts.push('');
  if (source) parts.push(`— ${source}`);
  return parts.join('\n');
}

export default function ShareButton({ deva, translit, meaning, source, label, className }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const shareText = buildShareText(deva, translit, meaning, source, label, lang);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const fullText = `${shareText}\n\n${url}`;

  const handleClick = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: label || 'Bhāratīya Jñāna Bhaṇḍāra', text: shareText, url });
      } catch { /* user cancelled */ }
      return;
    }
    setOpen((v) => !v);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1600);
    } catch { /* clipboard unavailable */ }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;

  return (
    <div className={`share-wrap${className ? ` ${className}` : ''}`} ref={ref}>
      <button
        className="share-btn"
        onClick={handleClick}
        aria-label={t('verse.share')}
        title={t('verse.share')}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        ↗ {t('verse.share')}
      </button>
      {open && (
        <div className="share-menu" role="menu">
          <button className="share-item" role="menuitem" onClick={handleCopy}>
            {copied ? t('verse.copied') : t('verse.copy')}
          </button>
          <a
            className="share-item"
            role="menuitem"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
          <a
            className="share-item"
            role="menuitem"
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Twitter / X
          </a>
        </div>
      )}
    </div>
  );
}

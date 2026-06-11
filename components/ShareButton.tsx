'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type ShareButtonProps = {
  deva: string;
  translit?: string;
  meaning: string;
  explanation?: string;
  source?: string;
  label?: string;
  className?: string;
};

function buildShareText(
  deva: string,
  translit: string | undefined,
  meaning: string,
  explanation: string | undefined,
  source: string | undefined,
  label: string | undefined,
  lang: string,
  footer: string,
  url: string,
): string {
  const meaningLabel = lang === 'mr' ? 'अर्थ' : 'Meaning';
  const explanationLabel = lang === 'mr' ? 'विवेचन' : 'Explanation';

  const parts: string[] = [];

  if (label) {
    parts.push(`✦ ${label} ✦`);
    parts.push('');
  }

  parts.push(deva.replace(/\n/g, '\n'));
  if (lang === 'en' && translit) {
    parts.push(translit.replace(/\n/g, '\n'));
  }

  parts.push('');
  parts.push(meaningLabel);
  parts.push(meaning.trim());

  if (explanation && explanation.trim()) {
    parts.push('');
    parts.push(explanationLabel);
    parts.push(explanation.trim());
  }

  if (source) {
    parts.push('');
    parts.push(`— ${source}`);
  }

  parts.push('');
  parts.push(footer);
  parts.push(url);

  return parts.join('\n');
}

export default function ShareButton({ deva, translit, meaning, explanation, source, label, className }: ShareButtonProps) {
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

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const footer = t('verse.share_footer');
  const shareText = buildShareText(deva, translit, meaning, explanation, source, label, lang, footer, url);

  const handleClick = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: label || 'Bhāratīya Jñāna Bhaṇḍāra', text: shareText, url });
      } catch { /* user cancelled */ }
      return;
    }
    setOpen((v) => !v);
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1600);
    } catch { /* clipboard unavailable */ }
  };

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

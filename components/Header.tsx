'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HeaderSeal } from './Ornaments';
import ThemeControl from './ThemeControl';
import LangControl from './LangControl';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const { t, lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="hdr">
      <div className="shell hdr-inner">
        <Link href="/" className="hdr-mark" style={{ border: 0 }} onClick={close}>
          <span className="seal"><HeaderSeal /></span>
          <span className="titles">
            {lang === 'mr' ? (
              <div className="name-en deva-only">भारतीय ज्ञान भंडार</div>
            ) : (
              <div className="name-en">Indian Knowledge Bank</div>
            )}
          </span>
        </Link>

        <nav
          id="primary-nav"
          className={`hdr-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <Link href="/#sections" onClick={close}>{t('nav.library')}</Link>
          <Link href="/#concepts" onClick={close}>{t('nav.concepts')}</Link>
          <Link href="/#contributors" onClick={close}>{t('nav.contrib')}</Link>
          <Link href="/#dinacharya" onClick={close}>{t('nav.lifestyle')}</Link>

          <div className="hdr-nav-prefs">
            <span className="hdr-nav-prefs-label">{lang === 'mr' ? 'रंगसंगती' : 'Theme'}</span>
            <ThemeControl variant="menu" />
          </div>
        </nav>

        <div className="hdr-tools">
          <LangControl />
          <ThemeControl />
          <button
            type="button"
            className="hdr-burger"
            aria-label="Menu"
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`hdr-burger-icon${menuOpen ? ' is-open' : ''}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

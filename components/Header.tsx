'use client';

import Link from 'next/link';
import { HeaderSeal } from './Ornaments';
import ThemeControl from './ThemeControl';
import LangControl from './LangControl';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="hdr">
      <div className="shell hdr-inner">
        <Link href="/" className="hdr-mark" style={{ border: 0 }}>
          <span className="seal"><HeaderSeal /></span>
          <span className="titles">
            <div className="name-en">Bhāratīya Jñāna Bhaṇḍāra</div>
            <div className="name-de deva-only">भारतीय ज्ञान भण्डार</div>
          </span>
        </Link>
        <nav className="hdr-nav" aria-label="Primary">
          <Link href="/#tree">{t('nav.texts')}</Link>
          <Link href="/#tree">{t('nav.tree')}</Link>
          <Link href="/#sections">{t('nav.library')}</Link>
          <Link href="/#dinacharya">{t('nav.lifestyle')}</Link>
          <Link href="/#essays">{t('nav.essays')}</Link>
          <Link href="/#sanskrit">{t('nav.sanskrit')}</Link>
        </nav>
        <div className="hdr-tools">
          <LangControl />
          <ThemeControl />
          <label className="search-pill" aria-label="Search the library">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M13.5 13.5 L 18 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input placeholder={t('search.placeholder')} />
            <kbd>⌘ K</kbd>
          </label>
        </div>
      </div>
    </header>
  );
}

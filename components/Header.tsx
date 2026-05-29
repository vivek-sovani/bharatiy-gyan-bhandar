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
          <Link href="/#sections">{t('nav.library')}</Link>
          <Link href="/#contributors">{t('nav.contrib')}</Link>
          <Link href="/#dinacharya">{t('nav.lifestyle')}</Link>
          <Link href="/#sanskrit">{t('nav.sanskrit')}</Link>
        </nav>
        <div className="hdr-tools">
          <LangControl />
          <ThemeControl />
        </div>
      </div>
    </header>
  );
}

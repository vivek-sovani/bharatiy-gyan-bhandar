'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import { useLanguage } from '@/lib/LanguageContext';

export default function NotFound() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <section className="sec-hero">
        <div className="shell">
          <div className="sec-crumb">
            <Link href="/">{t('detail.library')}</Link>
            <span className="sep">→</span>
            <span className="cur">{lang === 'mr' ? 'मजकूर सापडला नाही' : 'Not found'}</span>
          </div>
          <span className="deva-only">न विद्यते</span>
          <h1>{lang === 'mr' ? 'हे पृष्ठ ग्रंथालयात उपलब्ध नाही.' : 'This page is not in the library.'}</h1>
          <p className="lede">
            {lang === 'mr'
              ? 'तुम्ही शोधत असलेला मजकूर अजून येथे समाविष्ट केलेला नाही. कृपया मुख्य ग्रंथालयाला भेट द्या आणि सुरुवातीपासून शोधा.'
              : 'The text you were looking for has not been catalogued here yet. Return to the library and browse the corpus from the beginning.'}
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {t('detail.back')}
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

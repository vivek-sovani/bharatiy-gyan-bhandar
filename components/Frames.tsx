'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mandala, Glyph } from './Ornaments';
import { ESSAYS as ESSAYS_EN } from '@/lib/data';
import { ESSAYS as ESSAYS_MR } from '@/lib/data_mr';
import { SUBHASHITS } from '@/lib/subhashit-data';
import { useLanguage } from '@/lib/LanguageContext';
import { useRandomVerse } from '@/lib/useRandomVerse';
import { getPanchanga, type PanchangaInfo } from '@/lib/panchanga';
import VerseModal from './VerseModal';

export function DailyStrip() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { lang, t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const { index, next } = useRandomVerse(SUBHASHITS.length);

  const sub = SUBHASHITS[index];
  const meaning = lang === 'mr' ? sub.meaningMr : sub.meaningEn;

  return (
    <section
      id="daily"
      className="strip"
      style={{
        '--strip-bg': `url(${basePath}/wisdom-strip.png)`,
      } as React.CSSProperties}
    >
      <div className="shell strip-inner">
        <Mandala className="mandala" />
        <div className="quote">
          <span className="eyebrow verse-label"><Glyph /> {t('verse.subhashit_label')}</span>
          <span className="deva-block">{sub.deva}</span>
          {lang === 'en' && sub.translit && (
            <span className="translit-line">{sub.translit}</span>
          )}
          <span>{meaning}</span>
        </div>
        <div className="strip-meta">
          <div className="attrib">{sub.source}</div>
          <div className="strip-actions">
            <button className="trans-btn" onClick={() => setShowModal(true)}>
              {t('verse.show_explanation')} →
            </button>
            <button className="verse-next" onClick={next} title={t('verse.next')}>
              ↻ {t('verse.next')}
            </button>
          </div>
        </div>
      </div>

      <VerseModal
        open={showModal}
        onClose={() => setShowModal(false)}
        deva={sub.deva}
        translit={sub.translit}
        meaning={meaning}
        explanation={lang === 'mr' ? sub.explanationMr : sub.explanationEn}
        source={sub.source}
      />
    </section>
  );
}

export function Essays() {
  const { lang, t } = useLanguage();
  const ESSAYS = lang === 'mr' ? ESSAYS_MR : ESSAYS_EN;

  return (
    <section id="essays" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('essays.eyebrow')}</div>
            <h2>{t('essays.title')}</h2>
          </div>
          <div className="meta">{t('essays.meta')}</div>
        </div>
        <div className="essays">
          {ESSAYS.map((e) => (
            <article key={e.no} className="essay">
              <div className="no">{e.no}</div>
              <div>
                <h4>{e.title}</h4>
                <p>{e.dek}</p>
                <div className="meta">{e.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();

  // Live Vikram Saṃvat year + masa, matching the header's Panchanga strip.
  // Falls back to the static translation until the client computes it.
  const [info, setInfo] = useState<PanchangaInfo | null>(null);
  useEffect(() => {
    try {
      setInfo(getPanchanga(new Date()));
    } catch (err) {
      console.error('Panchanga compute failed:', err);
    }
  }, []);

  const samvatLine = info
    ? lang === 'mr'
      ? `© विक्रम संवत् ${info.samvat.mr} · ${info.masa.mr}`
      : `© Vikram Saṃvat ${info.samvat.en} · ${info.masa.en}`
    : t('footer.samvat');

  return (
    <footer className="ftr">
      <div className="shell ftr-grid">
        <div className="colophon">
          {lang === 'mr' ? (
            <div className="name-en deva-only">भारतीय ज्ञान भंडार</div>
          ) : (
            <div className="name-en">Indian Knowledge Bank</div>
          )}
          <p>{t('footer.colophon')}</p>
        </div>
        <div>
          <h5>{lang === 'mr' ? 'मार्गदर्शन' : 'Navigate'}</h5>
          <ul>
            <li><Link href="/#sections">{t('nav.library')}</Link></li>
            <li><Link href="/#concepts">{t('nav.concepts')}</Link></li>
            <li><Link href="/#contributors">{t('nav.contrib')}</Link></li>
            <li><Link href="/lifestyle/">{t('nav.lifestyle')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="shell ftr-base">
        <span>{samvatLine}</span>
        <span>{t('footer.setin')}</span>
        <span>{t('footer.license')}</span>
      </div>
    </footer>
  );
}

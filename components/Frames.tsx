'use client';

import { useState } from 'react';
import { Mandala, Glyph } from './Ornaments';
import { ESSAYS as ESSAYS_EN } from '@/lib/data';
import { ESSAYS as ESSAYS_MR } from '@/lib/data_mr';
import { SUBHASHITS } from '@/lib/subhashit-data';
import { useLanguage } from '@/lib/LanguageContext';
import { useRandomVerse } from '@/lib/useRandomVerse';
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
          <h5>{t('footer.sec_texts')}</h5>
          <ul>
            <li><a href="#">{lang === 'mr' ? 'वेद · वेदाः' : 'Vedas · वेदाः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'उपनिषदे · उपनिषदः' : 'Upaniṣads · उपनिषदः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'दर्शने · दर्शनानि' : 'Darśanas · दर्शनानि'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'आगम · आगमाः' : 'Āgamas · आगमाः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'इतिहास · इतिहासः' : 'Itihāsa · इतिहासः'}</a></li>
            <li><a href="/#concepts">{lang === 'mr' ? 'मूलसंकल्पना' : 'Core concepts'}</a></li>
          </ul>
        </div>
        <div>
          <h5>{t('footer.sec_tools')}</h5>
          {lang === 'mr' ? (
            <ul>
              <li><a href="#">ज्ञानवृक्ष</a></li>
              <li><a href="#">श्लोक सूची</a></li>
              <li><a href="#">देवनागरी वाचक</a></li>
              <li><a href="#">उच्चार स्पष्टीकरण</a></li>
              <li><a href="#">संदर्भ मार्गदर्शिका</a></li>
            </ul>
          ) : (
            <ul>
              <li><a href="#">Knowledge tree</a></li>
              <li><a href="#">Verse concordance</a></li>
              <li><a href="#">Devanāgarī reader</a></li>
              <li><a href="#">Pronunciation</a></li>
              <li><a href="#">Citation guide</a></li>
            </ul>
          )}
        </div>
        <div>
          <h5>{t('footer.sec_about')}</h5>
          {lang === 'mr' ? (
            <ul>
              <li><a href="#">संपादकीय मंडळ</a></li>
              <li><a href="#">योगदान द्या</a></li>
              <li><a href="#">स्रोत सूची</a></li>
              <li><a href="#">माहितीपत्रक</a></li>
              <li><a href="#">कोलोफोन</a></li>
            </ul>
          ) : (
            <ul>
              <li><a href="#">Editorial board</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Sources</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Colophon</a></li>
            </ul>
          )}
        </div>
      </div>
      <div className="shell ftr-base">
        <span>{t('footer.samvat')}</span>
        <span>{t('footer.setin')}</span>
        <span>{t('footer.license')}</span>
      </div>
    </footer>
  );
}

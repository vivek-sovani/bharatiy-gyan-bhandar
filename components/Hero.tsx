'use client';

import { useState } from 'react';
import { CornerOrn, Glyph } from './Ornaments';
import { MAHAVAKYAS } from '@/lib/mahavakya-data';
import { useLanguage } from '@/lib/LanguageContext';
import { useRandomVerse } from '@/lib/useRandomVerse';
import Panchanga from './Panchanga';
import VerseModal from './VerseModal';
import ShareButton from './ShareButton';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { lang, t } = useLanguage();
  const { index, next } = useRandomVerse(MAHAVAKYAS.length);

  const vakya = MAHAVAKYAS[index];

  return (
    <section id="hero" className="hero">
      <div className="shell hero-edit">
        <div className="hero-shloka">
          <div className="eyebrow">
            <span className="dot" /> <Panchanga />
          </div>
          <h1>
            {t('hero.title')}
          </h1>
          <div className="shloka">
            <div className="eyebrow verse-label"><Glyph /> {t('verse.mahavakya_label')}</div>
            <div className="deva-line deva-only">
              {vakya.deva.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            {lang === 'en' && vakya.translit && (
              <div className="translit-line">
                {vakya.translit.split('\n').map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
            )}
            <div className="source">
              <span>{vakya.source}</span>
              <span className="verse-actions">
                <button className="trans-btn" onClick={() => setShowModal(true)}>
                  {t('verse.show_explanation')} →
                </button>
                <button className="verse-next" onClick={next} title={t('verse.next')}>
                  ↻ {t('verse.next')}
                </button>
                <ShareButton
                  deva={vakya.deva}
                  translit={vakya.translit}
                  meaning={lang === 'mr' ? vakya.meaningMr : vakya.meaningEn}
                  source={vakya.source}
                  label={t('verse.mahavakya_label')}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="feature-img">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-manuscript.png`}
              alt="Krishna playing the flute under a kadamba tree, 18th-century North Indian Pahari miniature painting folio"
              fetchPriority="high"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
              }}
            />
            <CornerOrn className="tl" />
            <CornerOrn className="tr" />
            <CornerOrn className="bl" />
            <CornerOrn className="br" />
          </div>
        </div>
      </div>

      <VerseModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={vakya.title}
        deva={vakya.deva}
        translit={vakya.translit}
        meaning={lang === 'mr' ? vakya.meaningMr : vakya.meaningEn}
        explanation={lang === 'mr' ? vakya.explanationMr : vakya.explanationEn}
        source={vakya.source}
      />
    </section>
  );
}

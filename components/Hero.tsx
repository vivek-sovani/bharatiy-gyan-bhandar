'use client';

import { useState } from 'react';
import { CornerOrn } from './Ornaments';
import { HERO_SHLOKA as HERO_SHLOKA_EN } from '@/lib/data';
import { HERO_SHLOKA as HERO_SHLOKA_MR } from '@/lib/data_mr';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';
import Panchanga from './Panchanga';

export default function Hero() {
  const [showTrans, setShowTrans] = useState(false);
  const { lang, t } = useLanguage();

  const HERO_SHLOKA = lang === 'mr' ? HERO_SHLOKA_MR : HERO_SHLOKA_EN;

  return (
    <section className="hero">
      <div className="shell hero-edit">
        <div className="hero-shloka">
          <div className="eyebrow">
            <span className="dot" /> <Panchanga />
          </div>
          <h1>
            {t('hero.title')}
          </h1>
          <div className={`shloka ${showTrans ? 'show-trans' : ''}`}>
            <div className="deva-line deva-only">
              {HERO_SHLOKA.deva.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            {lang === 'en' && (
              <div className="translit-line">
                {transliterate(HERO_SHLOKA.deva).split('\n').map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
            )}
            <div className="trans">{HERO_SHLOKA.trans}</div>
            <div className="source">
              <span>{HERO_SHLOKA.source}</span>
              <button className="trans-btn" onClick={() => setShowTrans((v) => !v)}>
                {showTrans ? t('hero.hide_trans') : t('hero.show_trans')}
              </button>
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
    </section>
  );
}

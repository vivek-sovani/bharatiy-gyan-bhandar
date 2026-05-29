'use client';

import { useState } from 'react';
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
      </div>
    </section>
  );
}

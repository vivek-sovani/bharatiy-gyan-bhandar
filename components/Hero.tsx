'use client';

import { useState } from 'react';
import { CornerOrn, Glyph } from './Ornaments';
import { HERO_SHLOKA, FEATURE } from '@/lib/data';

export default function Hero() {
  const [showTrans, setShowTrans] = useState(false);
  return (
    <section className="hero">
      <div className="shell hero-edit">
        <div className="hero-shloka">
          <div className="eyebrow">
            <span className="dot" /> Daily wisdom · 24 Vaiśākha · Saumya saṃvatsara
          </div>
          <h1>
            A digital library of the texts, sciences and ways of living rooted in the Indic knowledge systems.
          </h1>
          <div className={`shloka ${showTrans ? 'show-trans' : ''}`}>
            <div className="deva-line deva-only">
              {HERO_SHLOKA.deva.split('\n').map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <div className="trans">{HERO_SHLOKA.trans}</div>
            <div className="source">
              <span>{HERO_SHLOKA.source}</span>
              <button className="trans-btn" onClick={() => setShowTrans((v) => !v)}>
                {showTrans ? 'Hide translation' : 'Show translation'}
              </button>
            </div>
          </div>
        </div>
        <div className="v-rule" aria-hidden="true" />
        <article className="hero-feature">
          <div className="feature-img">
            <CornerOrn className="tl" />
            <CornerOrn className="tr" />
            <CornerOrn className="bl" />
            <CornerOrn className="br" />
          </div>
          <div className="essay-meta">
            <div className="eyebrow">
              <Glyph /> {FEATURE.eyebrow}
            </div>
            <h2>{FEATURE.title}</h2>
            <p>{FEATURE.dek}</p>
            <div className="byline">
              <span>By {FEATURE.author}</span>
              <span>·</span>
              <span>{FEATURE.reading}</span>
              <span style={{ flex: 1 }} />
              <a className="read" href="#" style={{ borderBottom: 0 }}>Read essay →</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

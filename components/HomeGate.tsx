'use client';

import { useEffect, useRef } from 'react';
import { Glyph } from './Ornaments';
import { enterLibrary, foldPreface, leaveLibrary, markPrefaceRead, unfoldPreface } from '@/lib/home-mode';
import { useLanguage } from '@/lib/LanguageContext';

// Shown under the path chooser until the visitor opts into the full library.
export function HomeGate() {
  const { t } = useLanguage();
  const open = () => {
    enterLibrary();
    // The library was display:none a moment ago; wait a frame so the anchor has a position.
    requestAnimationFrame(() => document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  return (
    <section className="home-gate frame">
      <div className="shell">
        <div className="home-gate-card">
          <div>
            <div className="eyebrow"><Glyph /> {t('home.gate_eyebrow')}</div>
            <h2>{t('home.gate_title')}</h2>
            <p>{t('home.gate_text')}</p>
          </div>
          <button type="button" className="home-gate-btn" onClick={open}>{t('home.gate_btn')} ↓</button>
        </div>
      </div>
    </section>
  );
}

// First thing inside the library: a way back to the guided paths.
export function LibraryBar() {
  const { t } = useLanguage();
  const back = () => {
    leaveLibrary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="home-library-bar">
      <div className="shell">
        <span>{t('home.bar_text')}</span>
        <button type="button" onClick={back}>↑ {t('home.bar_btn')}</button>
      </div>
    </div>
  );
}

// End of the preface. Reaching it (and pausing there) counts as read; the button makes it explicit.
export function PrefaceDone() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(([e]) => {
      window.clearTimeout(timer);
      // Remembered for the next visit only: folding it now would move the page under the reader.
      if (e.isIntersecting) timer = window.setTimeout(markPrefaceRead, 1500);
    }, { threshold: 0.9 });
    io.observe(el);
    return () => { window.clearTimeout(timer); io.disconnect(); };
  }, []);

  const done = () => {
    foldPreface();
    requestAnimationFrame(() => document.getElementById('journeys')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <div ref={ref} className="preface-done">
      <div className="shell">
        <p>{t('home.preface_q')}</p>
        <button type="button" onClick={done}>{t('home.preface_btn')} ↓</button>
      </div>
    </div>
  );
}

// Shown in place of the preface once it has been read.
export function PrefaceBar() {
  const { t } = useLanguage();
  const again = () => {
    unfoldPreface();
    requestAnimationFrame(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  return (
    <div className="preface-bar">
      <div className="shell">
        <span>{t('home.preface_bar')}</span>
        <button type="button" onClick={again}>{t('home.preface_again')}</button>
      </div>
    </div>
  );
}

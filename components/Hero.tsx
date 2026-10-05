'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CornerOrn, Glyph } from './Ornaments';
import { MAHAVAKYAS } from '@/lib/mahavakya-data';
import { JOURNEYS as JOURNEYS_EN, COMPLETE_PATH_ID } from '@/lib/journeys-data';
import { JOURNEYS as JOURNEYS_MR } from '@/lib/journeys-data_mr';
import { useLanguage } from '@/lib/LanguageContext';
import { useDailyVerse } from '@/lib/useRandomVerse';
import { isPrefaceRead } from '@/lib/home-mode';
import { journeyStats } from '@/lib/journey-progress';
import { OPEN_VERSE_EVENT, consumePendingOpen } from '@/lib/notifications';
import Panchanga from './Panchanga';
import VerseModal from './VerseModal';
import ShareButton from './ShareButton';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { lang, t } = useLanguage();
  const { index, next, isToday } = useDailyVerse(MAHAVAKYAS.length);

  // Progress reads localStorage — deferred to a post-mount effect so the
  // server-rendered and first client render agree (no hydration mismatch).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Notification tap (Android) → open today's verse explanation
  useEffect(() => {
    if (consumePendingOpen('daily-mahavakya')) setShowModal(true);
    const onOpen = (e: Event) => {
      if ((e as CustomEvent).detail === 'daily-mahavakya') setShowModal(true);
    };
    window.addEventListener(OPEN_VERSE_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_VERSE_EVENT, onOpen);
  }, []);

  const spine = (lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN).find((j) => j.id === COMPLETE_PATH_ID);
  const stats = mounted && spine ? journeyStats(spine) : null;

  // First-time readers go to the Living Tree (orientation) before any path;
  // once a reading is in progress, the CTA jumps straight back into it.
  let startLabel = t('hero.begin_here');
  let startHref = '#introduction';
  let startSuffix = '↓';
  if (spine && stats && stats.isStarted && !stats.isComplete) {
    startLabel = t('hero.continue_reading');
    startHref = `${spine.steps[stats.nextIndex].path}?j=${COMPLETE_PATH_ID}&s=${stats.nextIndex}`;
    startSuffix = '→';
  } else if (stats && stats.isComplete) {
    startLabel = t('hero.explore_paths');
    startHref = '#journeys';
    startSuffix = '→';
  } else if (mounted && isPrefaceRead()) {
    // The orientation has been read: go straight to choosing a path.
    startLabel = t('home.choose_path');
    startHref = '#journeys';
  }

  const vakya = MAHAVAKYAS[index];
  const verseLabel = isToday
    ? `${t('verse.today_mahavakya')} · ${new Date().toLocaleDateString(
        lang === 'mr' ? 'mr-IN' : 'en-GB',
        { day: 'numeric', month: 'long' }
      )}`
    : t('verse.mahavakya_label');

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
          <div className="hero-cta">
            <Link className="hero-cta-primary" href={startHref}>
              {startLabel} {startSuffix}
            </Link>
            <Link className="hero-cta-secondary" href="#journeys">
              {t('hero.choose_path')}
            </Link>
          </div>
          <div className="shloka">
            <div className="eyebrow verse-label"><Glyph /> {verseLabel}</div>
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
                  explanation={lang === 'mr' ? vakya.explanationMr : vakya.explanationEn}
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

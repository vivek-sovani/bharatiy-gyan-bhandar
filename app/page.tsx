'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import SectionsGrid from '@/components/SectionsGrid';
import Dinacharya from '@/components/Dinacharya';
import { DailyStrip, Essays, Sanskrit, Footer } from '@/components/Frames';
import { Glyph } from '@/components/Ornaments';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <Hero />

      <section id="timeline" className="frame">
        <div className="shell">
          <div className="frame-hd">
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {t('timeline.eyebrow')}</div>
              <h2>{t('timeline.title')}</h2>
            </div>
            <div className="meta">{t('timeline.prompt')}</div>
          </div>
          <Timeline />
        </div>
      </section>

      <DailyStrip />
      <SectionsGrid />
      <Dinacharya />
      <Sanskrit />
      <Essays />
      <Footer />
    </>
  );
}

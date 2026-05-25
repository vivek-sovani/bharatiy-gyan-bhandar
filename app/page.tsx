'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BranchTree from '@/components/BranchTree';
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

      <section id="tree" className="frame">
        <div className="shell">
          <div className="frame-hd">
            <div className="title-block">
              <div className="eyebrow"><Glyph /> {t('tree.eyebrow')}</div>
              <h2>{t('tree.title')}</h2>
            </div>
            <div className="meta">{t('tree.hover_prompt')}</div>
          </div>
          <div className="branches">
            <BranchTree branchId="shruti" />
            <BranchTree branchId="smriti" />
            <BranchTree branchId="itara" />
          </div>
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

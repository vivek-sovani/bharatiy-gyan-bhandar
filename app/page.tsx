'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Introduction from '@/components/Introduction';
import JourneysRail from '@/components/JourneysRail';
import SectionsGrid from '@/components/SectionsGrid';
import Contributors from '@/components/Contributors';
import Concepts from '@/components/Concepts';
import LivingKnowledge from '@/components/LivingKnowledge';
import Dinacharya from '@/components/Dinacharya';
import { DailyStrip, Footer } from '@/components/Frames';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Introduction />
      <DailyStrip />
      <JourneysRail />
      <SectionsGrid />
      <Contributors />
      <Concepts />
      <LivingKnowledge />
      <Dinacharya />
      <Footer />
    </>
  );
}

'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Introduction from '@/components/Introduction';
import JourneysRail from '@/components/JourneysRail';
import MapTeaser from '@/components/MapTeaser';
import SectionsGrid from '@/components/SectionsGrid';
import Contributors from '@/components/Contributors';
import Concepts from '@/components/Concepts';
import LivingKnowledge from '@/components/LivingKnowledge';
import Dinacharya from '@/components/Dinacharya';
import { DailyStrip, Footer } from '@/components/Frames';
import { HomeGate, LibraryBar, PrefaceBar, PrefaceDone } from '@/components/HomeGate';

// Order is a guided-first funnel: orient (Living Tree) → one unified reading
// picker (JourneysRail: Complete Path featured + themed journeys) → then the
// reference library. Daily-delight strip (Subhāṣita) relaxes lower down.
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="home-preface">
        <About />
        <Introduction />
        <PrefaceDone />
      </div>
      <PrefaceBar />
      <JourneysRail />
      <HomeGate />
      <div id="library" className="home-library">
        <LibraryBar />
        <MapTeaser />
        <SectionsGrid />
        <DailyStrip />
        <Contributors />
        <Concepts />
        <LivingKnowledge />
        <Dinacharya />
      </div>
      <Footer />
    </>
  );
}

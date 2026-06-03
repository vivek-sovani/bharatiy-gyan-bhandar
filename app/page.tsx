'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SectionsGrid from '@/components/SectionsGrid';
import Contributors from '@/components/Contributors';
import Concepts from '@/components/Concepts';
import { DailyStrip, Footer } from '@/components/Frames';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <DailyStrip />
      <SectionsGrid />
      <Contributors />
      <Concepts />
      <Footer />
    </>
  );
}

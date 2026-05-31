'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionsGrid from '@/components/SectionsGrid';
import Contributors from '@/components/Contributors';
import Concepts from '@/components/Concepts';
import Dinacharya from '@/components/Dinacharya';
import { DailyStrip, Sanskrit, Footer } from '@/components/Frames';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DailyStrip />
      <SectionsGrid />
      <Contributors />
      <Concepts />
      <Dinacharya />
      <Sanskrit />
      <Footer />
    </>
  );
}

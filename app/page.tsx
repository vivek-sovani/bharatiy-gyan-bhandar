'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionsGrid from '@/components/SectionsGrid';
import Dinacharya from '@/components/Dinacharya';
import { DailyStrip, Essays, Sanskrit, Footer } from '@/components/Frames';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DailyStrip />
      <SectionsGrid />
      <Dinacharya />
      <Sanskrit />
      <Essays />
      <Footer />
    </>
  );
}

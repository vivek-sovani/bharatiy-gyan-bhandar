import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import MapOverview from '@/components/MapOverview';

export const metadata: Metadata = {
  title: 'Jñāna Map',
  description: 'The whole collection at a glance — every section arranged by era, each opening to its own timeline and knowledge cards.',
};

export default function MapPage() {
  return (
    <>
      <Header />
      <MapOverview />
      <Footer />
    </>
  );
}

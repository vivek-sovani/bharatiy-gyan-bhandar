import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import JourneysListView from '@/components/JourneysListView';

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'Curated reading sequences through the collection — pick a path and take the next step.',
};

export default function JourneysPage() {
  return (
    <>
      <Header />
      <JourneysListView />
      <Footer />
    </>
  );
}

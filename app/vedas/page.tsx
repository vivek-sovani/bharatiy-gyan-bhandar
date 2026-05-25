import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import VedasView from '@/components/VedasPage';

export const metadata: Metadata = {
  title: 'The Four Vedas · चत्वारि वेदाः',
  description:
    'Ṛg, Yajur, Sāma, Atharva — four collections, three liturgical roles, one continuously transmitted body of knowledge.',
};

export default function VedasPage() {
  return (
    <>
      <Header />
      <VedasView />
      <Footer />
    </>
  );
}

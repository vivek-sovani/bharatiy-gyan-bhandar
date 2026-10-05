import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import DailyPost from '@/components/DailyPost';

// A working page for the person who posts, not for readers: keep it out of search results.
export const metadata: Metadata = {
  title: 'Daily WhatsApp post',
  robots: { index: false, follow: false },
};

export default function DailyPage() {
  return (
    <>
      <Header />
      <DailyPost />
      <Footer />
    </>
  );
}

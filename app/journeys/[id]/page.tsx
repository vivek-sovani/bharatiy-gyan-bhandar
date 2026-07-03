import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import JourneyDetail from '@/components/JourneyDetail';
import { JOURNEYS } from '@/lib/journeys-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ id: j.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const journey = JOURNEYS.find((j) => j.id === id);
  if (!journey) return {};
  return {
    title: `${journey.title} · ${journey.deva}`,
    description: journey.tagline,
  };
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!JOURNEYS.some((j) => j.id === id)) notFound();

  return (
    <>
      <Header />
      <JourneyDetail id={id} />
      <Footer />
    </>
  );
}

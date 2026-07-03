import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import SciencesDetail from '@/components/SciencesDetail';
import { SCIENCES } from '@/lib/sciences-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return SCIENCES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = SCIENCES.find((s) => s.id === id);
  if (!item) return {};
  return {
    title: `${item.title} · ${item.deva}`,
    description: item.tldr,
  };
}

export default async function SciencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!SCIENCES.some((s) => s.id === id)) notFound();

  return (
    <>
      <Header />
      <SciencesDetail id={id} />
      <Footer />
    </>
  );
}

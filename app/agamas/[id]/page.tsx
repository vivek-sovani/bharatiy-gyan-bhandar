import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import AgamaDetailView from '@/components/AgamaDetail';
import { AGAMAS_DETAILS } from '@/lib/agamas-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(AGAMAS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = AGAMAS_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Āgama`,
    description: data.focus,
  };
}

export default async function AgamaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = AGAMAS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <AgamaDetailView id={id} />
      <Footer />
    </>
  );
}

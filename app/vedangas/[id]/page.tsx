import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import VedangaDetailView from '@/components/VedangaDetail';
import { VEDANGAS_DETAILS } from '@/lib/vedangas-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(VEDANGAS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = VEDANGAS_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Vedāṅga`,
    description: data.scope,
  };
}

export default async function VedangaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = VEDANGAS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <VedangaDetailView id={id} />
    </>
  );
}

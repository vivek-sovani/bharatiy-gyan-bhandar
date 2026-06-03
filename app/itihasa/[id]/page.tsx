import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import ItihasaDetailView from '@/components/ItihasaDetail';
import { ITIHASA_DETAILS } from '@/lib/itihasa-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ITIHASA_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = ITIHASA_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Itihāsa`,
    description: data.explanation[0],
  };
}

export default async function ItihasaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = ITIHASA_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <ItihasaDetailView id={id} />
      <Footer />
    </>
  );
}
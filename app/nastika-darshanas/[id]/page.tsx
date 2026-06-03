import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import NastikaDetailView from '@/components/NastikaDetail';
import { NASTIKA_DETAILS } from '@/lib/nastika-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(NASTIKA_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = NASTIKA_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Nāstika Darśana`,
    description: data.explanation[0],
  };
}

export default async function NastikaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = NASTIKA_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <NastikaDetailView id={id} />
    </>
  );
}

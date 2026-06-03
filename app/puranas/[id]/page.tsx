import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import PuranaDetailView from '@/components/PuranaDetail';
import { PURANAS_DETAILS } from '@/lib/puranas-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PURANAS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = PURANAS_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Purāṇa`,
    description: data.explanation[0],
  };
}

export default async function PuranaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = PURANAS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <PuranaDetailView id={id} />
    </>
  );
}

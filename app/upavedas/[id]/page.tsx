import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import UpavedaDetailView from '@/components/UpavedaDetail';
import { UPAVEDAS_DETAILS } from '@/lib/upavedas-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(UPAVEDAS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = UPAVEDAS_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Upaveda`,
    description: data.focus,
  };
}

export default async function UpavedaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = UPAVEDAS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <UpavedaDetailView id={id} />
    </>
  );
}

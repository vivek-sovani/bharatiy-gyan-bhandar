import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import DarshanaDetailView from '@/components/DarshanaDetail';
import { DARSHANAS_DETAILS } from '@/lib/darshanas-data';
import { withOg } from '@/lib/og';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DARSHANAS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = DARSHANAS_DETAILS[id];
  if (!data) return {};
  return withOg('darshanas', {
    title: `${data.title} · ${data.deva} · Darśana`,
    description: data.explanation[0],
  });
}

export default async function DarshanaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = DARSHANAS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <DarshanaDetailView id={id} />
      <Footer />
    </>
  );
}
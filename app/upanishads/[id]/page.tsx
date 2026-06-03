import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import UpanishadDetailView from '@/components/UpanishadDetail';
import { UPANISHADS_DETAILS } from '@/lib/upanishads-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(UPANISHADS_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = UPANISHADS_DETAILS[id];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva} · Upaniṣad`,
    description: data.focus,
  };
}

export default async function UpanishadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = UPANISHADS_DETAILS[id];
  if (!data) notFound();

  return (
    <>
      <Header />
      <UpanishadDetailView id={id} />
      <Footer />
    </>
  );
}
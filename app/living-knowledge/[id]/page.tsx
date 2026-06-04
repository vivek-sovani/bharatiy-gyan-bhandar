import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import LivingKnowledgeDetail from '@/components/LivingKnowledgeDetail';
import { LIVING_KNOWLEDGE } from '@/lib/living-knowledge-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return LIVING_KNOWLEDGE.map((g) => ({ id: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const gift = LIVING_KNOWLEDGE.find((g) => g.id === id);
  if (!gift) return {};
  return {
    title: `${gift.name} · ${gift.deva} · Living Knowledge`,
    description: gift.blurb,
  };
}

export default async function LivingKnowledgePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gift = LIVING_KNOWLEDGE.find((g) => g.id === id);
  if (!gift) notFound();

  return (
    <>
      <Header />
      <LivingKnowledgeDetail id={id} />
      <Footer />
    </>
  );
}

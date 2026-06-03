import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import SectionDetailView from '@/components/SectionDetail';
import { SECTION_DETAILS } from '@/lib/section-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SECTION_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SECTION_DETAILS[slug];
  if (!data) return {};
  return {
    title: `${data.title} · ${data.deva}`,
    description: data.lede,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SECTION_DETAILS[slug];
  if (!data) notFound();

  return (
    <>
      <Header />
      <SectionDetailView id={slug} data={data} />
    </>
  );
}

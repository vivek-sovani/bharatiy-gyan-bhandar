import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import ItemDetailView from '@/components/ItemDetailView';
import { SECTION_DETAILS } from '@/lib/section-data';

// These sections have their own dedicated /app/[section]/[id]/ routes.
// The generic handler below should NOT generate params for them.
const DEDICATED_SECTIONS = new Set([
  'agamas',
  'darshanas',
  'itihasa',
  'nastika-darshanas',
  'puranas',
  'upanishads',
  'upavedas',
  'vedangas',
  // No item-level pages needed for these:
  'vedas',
  'shruti-smriti',
]);

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { slug: string; id: string }[] = [];

  for (const [slug, section] of Object.entries(SECTION_DETAILS)) {
    if (DEDICATED_SECTIONS.has(slug)) continue;
    if (!section.items) continue;
    for (const item of section.items) {
      params.push({ slug, id: item.id });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}): Promise<Metadata> {
  const { slug, id } = await params;
  const section = SECTION_DETAILS[slug];
  if (!section) return {};
  const item = section.items?.find((i) => i.id === id);
  if (!item) return {};
  return {
    title: `${item.title} · ${item.deva} · ${section.title}`,
    description: item.summary.slice(0, 160),
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;

  if (DEDICATED_SECTIONS.has(slug)) notFound();

  const section = SECTION_DETAILS[slug];
  if (!section) notFound();

  const item = section.items?.find((i) => i.id === id);
  if (!item) notFound();

  return (
    <>
      <Header />
      <ItemDetailView
        slug={slug}
        id={id}
        fallbackData={section}
        fallbackItem={item}
      />
      <Footer />
    </>
  );
}
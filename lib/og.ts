import type { Metadata } from 'next';

// Link-preview card (WhatsApp, Telegram, social) for a section page or one of its item pages:
// the section's own picture plus the page title and description.
export function withOg(sectionId: string, meta: { title: string; description?: string }): Metadata {
  // Small JPEG copies (about 640px, under 100 KB) so WhatsApp and other apps reliably show the preview.
  const image = `/og/${sectionId}.jpg`;
  return {
    ...meta,
    openGraph: {
      type: 'website',
      siteName: 'Bhāratīya Jñāna Bhaṇḍāra',
      title: meta.title,
      description: meta.description,
      images: [{ url: image, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [image],
    },
  };
}

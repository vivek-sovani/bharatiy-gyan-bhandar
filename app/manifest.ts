import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return {
    name: 'Indian Knowledge Bank · भारतीय ज्ञान भंडार',
    short_name: 'Jñāna Bhaṇḍāra',
    description:
      'An open digital collection of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
    start_url: base + '/',
    scope: base + '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#f2e8cc',
    theme_color: '#b5853a',
    categories: ['education', 'books', 'reference'],
    icons: [
      {
        src: base + '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        purpose: 'any' as any,
      },
    ],
  };
}

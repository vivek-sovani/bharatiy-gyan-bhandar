import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import JourneyRibbon from '@/components/JourneyRibbon';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = `https://vivek-sovani.github.io${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Indian Knowledge Bank · भारतीय ज्ञान भंडार',
    template: '%s · Indian Knowledge Bank',
  },
  description:
    'An open digital collection of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'Bhāratīya Jñāna Bhaṇḍāra',
    title: 'Indian Knowledge Bank · भारतीय ज्ञान भंडार',
    description:
      'An open digital collection of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
    images: [
      {
        url: '/hero-manuscript.png',
        width: 1200,
        height: 900,
        alt: "Bhāratīya Jñāna Bhaṇḍāra — India's open digital archive of Indic knowledge systems",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Knowledge Bank · भारतीय ज्ञान भंडार',
    description:
      'An open digital collection of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
    images: ['/hero-manuscript.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jñāna Bhaṇḍāra',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#b5853a' },
    { media: '(prefers-color-scheme: dark)', color: '#8a6428' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// Applies the theme before first paint (no flash).
// Precedence: user's saved preference > system prefers-color-scheme > cream default.
const themeInit = `(function(){try{
  var r=document.documentElement;
  var t=localStorage.getItem('bgb-theme');
  if(!t){
    var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    t = dark ? 'dark' : 'cream';
  }
  r.setAttribute('data-theme',t);
}catch(e){}})();`;

const swInit = `(function(){if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('${basePath}/sw.js').catch(function(e){console.warn('SW registration failed:',e)})})}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="cream" data-deva="on" data-card="stamp">
      <head>
        <link rel="icon" type="image/x-icon" href={`${basePath}/favicon.ico`} />
        <link rel="icon" type="image/svg+xml" href={`${basePath}/icon.svg`} />
        <link rel="apple-touch-icon" href={`${basePath}/icon.svg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Tiro+Devanagari+Sanskrit:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: swInit }} />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <JourneyRibbon />
        </LanguageProvider>
      </body>
    </html>
  );
}

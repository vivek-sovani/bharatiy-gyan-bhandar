import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Bhāratīya Jñāna Bhaṇḍāra · भारतीय ज्ञान भण्डार',
    template: '%s · Bhāratīya Jñāna Bhaṇḍāra',
  },
  description:
    'An open digital library of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
};

// Applies the saved theme + Devanāgarī preference before first paint (no flash).
const themeInit = `(function(){try{var r=document.documentElement;var t=localStorage.getItem('bgb-theme');if(t)r.setAttribute('data-theme',t);var d=localStorage.getItem('bgb-deva');if(d)r.setAttribute('data-deva',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="cream" data-deva="on" data-card="stamp">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Tiro+Devanagari+Sanskrit:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

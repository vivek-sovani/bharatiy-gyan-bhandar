import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: 'Bhāratīya Jñāna Bhaṇḍāra · भारतीय ज्ञान भण्डार',
    template: '%s · Bhāratīya Jñāna Bhaṇḍāra',
  },
  description:
    'An open digital library of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
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
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

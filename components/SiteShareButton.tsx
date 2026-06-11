'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const SITE_SHARE_TEXT: Record<'en' | 'mr', string> = {
  en: `✦ Bhāratīya Jñāna Bhaṇḍāra ✦
India's open digital archive of Indic knowledge systems

A library can show you what a civilization knew. It is harder to show how it came to know it — that grammar was born from a wish to say a prayer correctly, mathematics from building altars, astronomy from ritual timekeeping. None of this was planned. Each grew from the one before it, carried by a single thread of curiosity that never broke.

Bhāratīya Jñāna Bhaṇḍāra maps India's three-thousand-year knowledge tradition — the Vedas, Upaniṣads, six darśanas, Āyurveda, mathematics, the epics, and the Bhakti poets — all in one place, with translations and commentary. Free to read; built to last.

Not a museum of a finished past — the living record of people who asked the largest questions they could, refused easy answers, and passed the conversation forward. To us.

📲 Install as an app (works offline too):
Android — Open in Chrome → tap Menu (⋮) → "Add to Home Screen"
iPhone / iPad — Open in Safari → tap Share (□↑) → "Add to Home Screen"
PC / Mac — Open in Chrome or Edge → click the Install icon (⊕) in the address bar`,

  mr: `✦ भारतीय ज्ञान भंडार ✦

आपल्या ज्ञानपरंपरेचं एक मुक्त डिजिटल संग्रहण.

वेद, उपनिषदं, दर्शनशास्त्र, आयुर्वेद, गणित, महाकाव्यं, संतांचे अभंग — तीन हजार वर्षांचा हा ज्ञानप्रवास एकाच ठिकाणी. मूळ मजकूर, भाषांतर आणि विवेचनासह. वाचायला विनामूल्य.

व्याकरण जन्मलं प्रार्थना नीट म्हणायच्या ओढीतून. भूमिती उभी राहिली वेदी बांधण्यातून. गणित घडलं पंचांग जुळवताना. हे ज्ञान कुणी ठरवून रचलं नाही — एका न थांबणाऱ्या जिज्ञासेतून, एकातून दुसरं, असं आपोआप वाढत गेलं.

भूतकाळाचं संग्रहालय नाही हे. अवघड प्रश्नांना भिडलेल्या, सोप्या उत्तरांना न बधलेल्या, आणि तो संवाद थेट आपल्यापर्यंत पोचवलेल्या असंख्य मनांची ही जिवंत नोंद आहे.

📲 अ‍ॅप म्हणून इन्स्टॉल करा (ऑफलाइनही वापरता येते):
Android — Chrome मध्ये उघडा → मेनू (⋮) → "Add to Home Screen"
iPhone / iPad — Safari मध्ये उघडा → Share (□↑) → "Add to Home Screen"
PC / Mac — Chrome किंवा Edge मध्ये उघडा → पत्ता बारमधील Install (⊕) वर क्लिक करा`,
};

type Props = { variant?: 'footer' | 'icon' };

export default function SiteShareButton({ variant = 'footer' }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const url = typeof window !== 'undefined'
    ? window.location.origin + (window.location.pathname !== '/' ? window.location.pathname : '')
    : '';
  const body = SITE_SHARE_TEXT[lang];
  const shareText = `${body}\n\n${url}`;

  const handleClick = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: lang === 'mr' ? 'भारतीय ज्ञान भंडार' : 'Bhāratīya Jñāna Bhaṇḍāra',
          text: body,
          url,
        });
      } catch { /* user cancelled */ }
      return;
    }
    setOpen((v) => !v);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1600);
    } catch { /* clipboard unavailable */ }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(body)}&url=${encodeURIComponent(url)}`;

  const isIcon = variant === 'icon';

  return (
    <div className={`share-wrap ${isIcon ? 'hdr-share-wrap' : 'ftr-share-wrap'}`} ref={ref}>
      <button
        className={isIcon ? 'hdr-share-btn' : 'ftr-share-btn'}
        onClick={handleClick}
        aria-label={t('site.share_btn')}
        title={t('site.share_btn')}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {isIcon ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        ) : (
          <>↗ {t('site.share_btn')}</>
        )}
      </button>
      {open && (
        <div className={`share-menu ${isIcon ? 'hdr-share-menu' : 'ftr-share-menu'}`} role="menu">
          <button className="share-item" role="menuitem" onClick={handleCopy}>
            {copied ? t('verse.copied') : t('verse.copy')}
          </button>
          <a
            className="share-item"
            role="menuitem"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
          <a
            className="share-item"
            role="menuitem"
            href={twitterHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Twitter / X
          </a>
        </div>
      )}
    </div>
  );
}

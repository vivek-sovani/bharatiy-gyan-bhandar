'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const SITE_SHARE_TEXT: Record<'en' | 'mr', string> = {
  en: `✦ Bhāratīya Jñāna Bhaṇḍāra ✦
India's open digital archive of Indic knowledge systems

A library can show you what a civilization knew. It is harder to show how it came to know it — that grammar was born from a wish to say a prayer correctly, mathematics from building altars, astronomy from ritual timekeeping. None of this was planned. Each grew from the one before it, carried by a single thread of curiosity that never broke.

Bhāratīya Jñāna Bhaṇḍāra maps India's three-thousand-year knowledge tradition — the Vedas, Upaniṣads, six darśanas, Āyurveda, mathematics, the epics, and the Bhakti poets — all in one place, with translations and commentary. Free to read; built to last.

Not a museum of a finished past — the living record of people who asked the largest questions they could, refused easy answers, and passed the conversation forward. To us.`,

  mr: `✦ भारतीय ज्ञान भंडार ✦
भारतीय ज्ञानप्रणालींचे खुले डिजिटल संग्रहण

एखाद्या संस्कृतीला काय ठाऊक होतं, हे ग्रंथालय दाखवू शकतं. ते ज्ञान तिला कसं गवसलं, हे सांगणं अवघड — व्याकरण जन्मलं प्रार्थना नीट म्हणायच्या इच्छेतून, भूमिती घडली वेदी बांधण्यातून, खगोल सुरू झालं विधींची वेळ मोजण्यातून. हे सगळं कुणी ठरवून घडवलंच नाही. प्रत्येक गोष्ट आधीच्यातून जन्म घेत गेली, कधीच खंड न पडलेल्या एका जिज्ञासेच्या धाग्यावर.

भारतीय ज्ञान भंडार — वेद, उपनिषदं, सहा दर्शनं, आयुर्वेद, गणित, महाकाव्यं आणि भक्तिसंतांचे अभंग — तीन हजार वर्षांचा ज्ञानप्रवास एकाच ठिकाणी, भाषांतर व विवेचनासह. वाचनासाठी मुक्त; चिरंतन रचलेले.

संपून गेलेल्या भूतकाळाचं संग्रहालय नाही — अशा माणसांची जिवंत नोंद, ज्यांनी झेपतील तेवढे मोठ्यात मोठे प्रश्न विचारले, सोप्या उत्तरांना बधले नाहीत, आणि तो संवाद थेट आपल्यापर्यंत पोचवला.`,
};

export default function SiteShareButton() {
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

  const url = typeof window !== 'undefined' ? window.location.origin + (window.location.pathname !== '/' ? window.location.pathname : '') : '';
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

  return (
    <div className="share-wrap site-share-wrap" ref={ref}>
      <button
        className="site-share-btn"
        onClick={handleClick}
        aria-label={t('site.share_btn')}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        ↗ {t('site.share_btn')}
      </button>
      {open && (
        <div className="share-menu site-share-menu" role="menu">
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

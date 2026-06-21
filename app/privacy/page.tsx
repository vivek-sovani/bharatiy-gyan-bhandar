'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { Footer } from '@/components/Frames';
import { useLanguage } from '@/lib/LanguageContext';

const CONTACT_EMAIL = 'vivek.sovani@gmail.com';
const EFFECTIVE_DATE = { en: '21 June 2026', mr: '२१ जून २०२६' };

export default function Privacy() {
  const { lang, t } = useLanguage();
  const mr = lang === 'mr';

  const sections = mr
    ? [
        {
          h: 'कोणतीही वैयक्तिक माहिती गोळा केली जात नाही',
          p: 'हे अ‍ॅप कोणतीही वैयक्तिक माहिती गोळा करत नाही, साठवत नाही किंवा कोठेही पाठवत नाही. वापरासाठी कोणतेही खाते किंवा नोंदणी आवश्यक नाही.',
        },
        {
          h: 'विश्लेषण व ट्रॅकिंग नाही',
          p: 'कोणतेही वापर-विश्लेषण (analytics), जाहिरात किंवा तृतीय-पक्ष ट्रॅकिंग सक्षम केलेले नाही. तुमच्या वापरावर लक्ष ठेवले जात नाही.',
        },
        {
          h: 'स्थानिक संचयन (Local storage)',
          p: 'फक्त तुमची थीम व भाषेची निवड तुमच्या उपकरणावर ब्राउझरच्या localStorage मध्ये साठवली जाते. ही माहिती कधीही उपकरणाबाहेर पाठवली जात नाही आणि तुम्ही ब्राउझर डेटा साफ केल्यास ती काढून टाकली जाते.',
        },
        {
          h: 'परवानग्या',
          p: 'अ‍ॅप कोणत्याही संवेदनशील उपकरण-परवानग्या (स्थान, संपर्क, कॅमेरा, मायक्रोफोन इ.) मागत नाही.',
        },
        {
          h: 'मुलांची गोपनीयता',
          p: 'कोणतीही माहिती गोळा केली जात नसल्याने, हे अ‍ॅप सर्व वयोगटांसाठी सुरक्षित आहे.',
        },
        {
          h: 'या धोरणातील बदल',
          p: 'या धोरणात बदल झाल्यास, अद्ययावत आवृत्ती याच पृष्ठावर प्रकाशित केली जाईल.',
        },
        {
          h: 'संपर्क',
          p: `गोपनीयतेविषयी कोणत्याही प्रश्नांसाठी संपर्क साधा: ${CONTACT_EMAIL}`,
        },
      ]
    : [
        {
          h: 'No personal data collected',
          p: 'This app does not collect, store, or transmit any personal data. No account or sign-up is required to use it.',
        },
        {
          h: 'No analytics or tracking',
          p: 'No usage analytics, advertising, or third-party tracking is enabled. Your activity is not monitored.',
        },
        {
          h: 'Local storage',
          p: 'The only data stored is your theme and language preference, saved locally on your device via the browser’s localStorage. It is never sent anywhere and is removed if you clear your browser data.',
        },
        {
          h: 'Permissions',
          p: 'The app requests no sensitive device permissions (location, contacts, camera, microphone, etc.).',
        },
        {
          h: 'Children’s privacy',
          p: 'Because no data is collected, the app is safe for users of all ages.',
        },
        {
          h: 'Changes to this policy',
          p: 'If this policy changes, the updated version will be published on this page.',
        },
        {
          h: 'Contact',
          p: `For any privacy questions, contact: ${CONTACT_EMAIL}`,
        },
      ];

  return (
    <>
      <Header />
      <section className="sec-hero">
        <div className="shell">
          <div className="sec-crumb">
            <Link href="/">{t('detail.library')}</Link>
            <span className="sep">→</span>
            <span className="cur">{mr ? 'गोपनीयता धोरण' : 'Privacy Policy'}</span>
          </div>
          <span className="deva-only">गोपनीयता</span>
          <h1>{mr ? 'गोपनीयता धोरण' : 'Privacy Policy'}</h1>
          <p className="lede">
            {mr
              ? 'भारतीय ज्ञान भंडार हे अ‍ॅप तुमच्या गोपनीयतेचा पूर्ण आदर करते. थोडक्यात: आम्ही कोणतीही वैयक्तिक माहिती गोळा करत नाही.'
              : 'Bhāratīya Jñāna Bhaṇḍāra fully respects your privacy. In short: we collect no personal data whatsoever.'}
          </p>
          <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>
            {mr ? 'लागू दिनांक' : 'Effective'}: {mr ? EFFECTIVE_DATE.mr : EFFECTIVE_DATE.en}
          </p>

          <div style={{ marginTop: '2.5rem', maxWidth: '46rem' }}>
            {sections.map((s, i) => (
              <div key={i} style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {t('detail.back')}
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

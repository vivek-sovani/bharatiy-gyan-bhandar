'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'mr';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.texts': 'Texts',
    'nav.tree': 'Timeline',
    'nav.library': 'Collection',
    'nav.contrib': 'Contributors',
    'nav.concepts': 'Concepts',
    'nav.lifestyle': 'Lifestyle',
    'nav.essays': 'Essays',
    'nav.sanskrit': 'Sanskrit',
    'search.placeholder': 'Search verses, sūktas, schools…',
    // Hero
    'hero.eyebrow': 'Daily wisdom · 24 Vaiśākha · Saumya saṃvatsara',
    'hero.title': 'A digital collection of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
    'hero.show_trans': 'Show translation',
    'hero.hide_trans': 'Hide translation',
    'hero.read_essay': 'Read essay →',
    // Verse (mahāvākya / subhāṣita)
    'verse.mahavakya_label': 'Mahāvākya · the great utterances',
    'verse.subhashit_label': 'Subhāṣita · Bhartṛhari',
    'verse.show_explanation': 'Show explanation',
    'verse.next': 'Another verse',
    'verse.meaning': 'Meaning',
    'verse.explanation': 'Explanation',
    'verse.close': 'Close',
    // Tree
    'tree.eyebrow': 'Map of the corpus',
    'tree.title': 'The three streams',
    'tree.hover_prompt': 'Hover any leaf · click to open',
    'tree.branch': 'Branch',
    'tree.streams': 'streams',
    'tree.open_page': 'Open page →',
    // Timeline
    'timeline.eyebrow': 'Chronology of the corpus',
    'timeline.title': 'The historical timeline',
    'timeline.prompt': 'Click any stream to expand details',
    // Grid
    'grid.eyebrow': 'The collection',
    'grid.title': 'Browse the corpus',
    'grid.showing': 'Showing {count} of {total} streams',
    'grid.tag_era': 'Era',
    'grid.tag_canon': 'Canon',
    'grid.tag_topic': 'Topic',
    // Contributors
    'contrib.eyebrow': 'The makers',
    'contrib.title': 'Ṛṣis, ācāryas, scientists & saints — across the timeline',
    'contrib.meta': '{count} contributors · four eras',
    'contrib.prompt': 'Click any card for the full account of their contributions',
    'contrib.detail.tag': 'Detailed account',
    'contrib.detail.contributions': 'Principal contributions',
    'contrib.detail.legacy': 'Legacy & influence',
    'contrib.detail.works': 'Key works',
    'contrib.detail.explore': 'Explore in the collection',
    'contrib.detail.close': 'Close',
    // Core concepts
    'concepts.eyebrow': 'The framework',
    'concepts.title': 'Core concepts of the Indian knowledge systems',
    'concepts.meta': '{count} concepts · seven domains',
    'concepts.prompt': 'Click any card for the full meaning and significance',
    'concepts.detail.aspects': 'Key aspects',
    'concepts.detail.significance': 'Why it matters',
    'concepts.detail.related': 'Related terms',
    'concepts.detail.appears': 'Where it appears',
    'concepts.detail.first': 'First explained in',
    'concepts.detail.referred': 'Further developed in',
    'concepts.detail.explore': 'Explore in the collection',
    'concepts.detail.close': 'Close',
    // Dinacharya
    'dina.eyebrow': 'Lifestyle',
    'dina.title': 'Dinacaryā — the structure of the day',
    'dina.meta': 'Six segments · classical Āyurveda',
    // Essays
    'essays.eyebrow': 'Editorial',
    'essays.title': 'Essays from the editors',
    'essays.meta': 'Updated weekly',
    // Footer
    'footer.colophon': 'An open digital collection of the Indic knowledge systems. Texts in transliteration and original. Translations and commentary by working scholars. Free to read; built to last.',
    'footer.compiled_by': 'Compiled by Vivek Sovani',
    'footer.sec_texts': 'Texts',
    'footer.sec_tools': 'Tools',
    'footer.sec_about': 'About',
    'footer.samvat': '© Vikram Saṃvat 2083',
    'footer.setin': 'Set in Cormorant, Lora & Tiro Devanagari Sanskrit',
    'footer.license': 'An open archive · CC BY-SA 4.0',
    // Details
    'detail.back': '← Back to the collection',
    'detail.continue': 'Continue in the collection',
    'detail.the_opening': 'The opening',
    'detail.at_a_glance': 'At a glance',
    'detail.practice_focused': 'Practice-focused stream. See the full reading-list in the references panel.',
    'detail.recension': 'Recension',
    'detail.authors': 'Authors',
    'detail.range': 'Range',
    'detail.scope': 'Scope',
    'detail.officiant': 'Officiant',
    'detail.period': 'Period',
    'detail.strata': 'The four strata of every Veda',
    'detail.library': 'Collection',
    // Living Knowledge
    'nav.lk': 'Living Knowledge',
    'lk.eyebrow': 'Living knowledge',
    'lk.title': 'Gifts of Indian knowledge systems to the world',
    'lk.title_short': 'Living Knowledge',
    'lk.meta': '{count} contributions · nine domains',
    'lk.note_label': 'A note on honesty:',
    'lk.prompt': 'Click any domain tile to reveal its contributions, then click a contribution to read more.',
    'lk.count': '{n} contributions',
    'lk.debated': 'Debated claim',
    'lk.expand': 'See contributions',
    'lk.collapse': 'Collapse',
    'lk.read_more': 'Read more →',
    'lk.what': 'What it is',
    'lk.when': 'When it emerged',
    'lk.how': 'How it applies today',
    'lk.back_label': '← Back to Living Knowledge',
    'lk.phase2': 'Detailed account coming soon — check back in Phase II.'
  },
  mr: {
    // Nav
    'nav.texts': 'ग्रंथ',
    'nav.tree': 'कालरेषा',
    'nav.library': 'संग्रहण',
    'nav.contrib': 'योगदाते',
    'nav.concepts': 'संकल्पना',
    'nav.lifestyle': 'दिनचर्या',
    'nav.essays': 'निबंध',
    'nav.sanskrit': 'संस्कृत',
    'search.placeholder': 'श्लोक, सूक्त, संप्रदाय शोधा...',
    // Hero
    'hero.eyebrow': 'दैनिक सुभाषित · २४ वैशाख · सौम्य संवत्सर',
    'hero.title': 'भारतीय ज्ञानप्रणालींमध्ये रुजलेले ग्रंथ, विज्ञान आणि जीवनपद्धतींचे एक खुले डिजिटल संग्रहण.',
    'hero.show_trans': 'भाषांतर दाखवा',
    'hero.hide_trans': 'भाषांतर लपवा',
    'hero.read_essay': 'निबंध वाचा →',
    // Verse (mahāvākya / subhāṣita)
    'verse.mahavakya_label': 'महावाक्य · महान वचने',
    'verse.subhashit_label': 'सुभाषित · भर्तृहरि',
    'verse.show_explanation': 'विवेचन पहा',
    'verse.next': 'दुसरे वचन',
    'verse.meaning': 'अर्थ',
    'verse.explanation': 'विवेचन',
    'verse.close': 'बंद करा',
    // Tree
    'tree.eyebrow': 'ज्ञानकोश नकाशा',
    'tree.title': 'तीन ज्ञानप्रवाह',
    'tree.hover_prompt': 'पानावर माउस फिरवा · उघडण्यासाठी क्लिक करा',
    'tree.branch': 'शाखा',
    'tree.streams': 'प्रवाह',
    'tree.open_page': 'पृष्ठ उघडा →',
    // Timeline
    'timeline.eyebrow': 'ज्ञानकोश कालक्रम',
    'timeline.title': 'ऐतिहासिक कालरेषा',
    'timeline.prompt': 'तपशील पाहण्यासाठी कोणत्याही प्रवाहावर क्लिक करा',
    // Grid
    'grid.eyebrow': 'संग्रहण',
    'grid.title': 'ज्ञानकोश चाळा',
    'grid.showing': '{total} पैकी {count} प्रवाह दर्शवत आहे',
    'grid.tag_era': 'कालखंड',
    'grid.tag_canon': 'प्रमाण ग्रंथ',
    'grid.tag_topic': 'विषय',
    // Contributors
    'contrib.eyebrow': 'योगदाते',
    'contrib.title': 'ऋषी, आचार्य, संत आणि शास्त्रज्ञ — कालक्रमेण',
    'contrib.meta': '{count} योगदाते · चार कालखंड',
    'contrib.prompt': 'त्यांच्या योगदानाचा संपूर्ण तपशील पाहण्यासाठी कोणत्याही कार्डावर क्लिक करा',
    'contrib.detail.tag': 'सविस्तर माहिती',
    'contrib.detail.contributions': 'प्रमुख योगदान',
    'contrib.detail.legacy': 'वारसा व प्रभाव',
    'contrib.detail.works': 'प्रमुख ग्रंथ',
    'contrib.detail.explore': 'संग्रहणात अधिक पहा',
    'contrib.detail.close': 'बंद करा',
    // Core concepts
    'concepts.eyebrow': 'मूलचौकट',
    'concepts.title': 'भारतीय ज्ञानप्रणालींच्या मूलसंकल्पना',
    'concepts.meta': '{count} संकल्पना · सात क्षेत्रे',
    'concepts.prompt': 'पूर्ण अर्थ व महत्त्व पाहण्यासाठी कोणत्याही कार्डावर क्लिक करा',
    'concepts.detail.aspects': 'मुख्य पैलू',
    'concepts.detail.significance': 'महत्त्व',
    'concepts.detail.related': 'संबंधित संज्ञा',
    'concepts.detail.appears': 'ग्रंथसंपदेत कुठे',
    'concepts.detail.first': 'प्रथम विवेचन',
    'concepts.detail.referred': 'पुढील विकास',
    'concepts.detail.explore': 'संग्रहणात अधिक पहा',
    'concepts.detail.close': 'बंद करा',
    // Dinacharya
    'dina.eyebrow': 'जीवनशैली',
    'dina.title': 'दिनचर्या — दिवसाचे नियोजन',
    'dina.meta': 'सहा विभाग · पारंपरिक आयुर्वेद',
    // Essays
    'essays.eyebrow': 'संपादकीय',
    'essays.title': 'संपादकांचे निबंध',
    'essays.meta': 'साप्ताहिक अद्यतने',
    // Footer
    'footer.colophon': 'भारतीय ज्ञानप्रणालींचे खुले डिजिटल संग्रहण. मूळ मजकूर आणि लिप्यंतरण स्वरूपात उपलब्ध. संशोधक आणि विद्वानांद्वारे भाषांतर व स्पष्टीकरण. वाचनासाठी विनामूल्य; चिरंतन रचलेले.',
    'footer.compiled_by': 'संकलन — विवेक सोवनी',
    'footer.sec_texts': 'ग्रंथ संपदा',
    'footer.sec_tools': 'साधने',
    'footer.sec_about': 'माहिती',
    'footer.samvat': '© विक्रम संवत् २०८३',
    'footer.setin': 'कॉर्मोरेंट, लोरा आणि तिरो देवनागरी संस्कृत फॉन्टमध्ये डिझाइन केलेले',
    'footer.license': 'एक खुले संग्रहण · CC BY-SA 4.0',
    // Details
    'detail.back': '← संग्रहणाकडे परत',
    'detail.continue': 'संग्रहणात वाचन सुरू ठेवा',
    'detail.the_opening': 'प्रारंभ',
    'detail.at_a_glance': 'एका दृष्टीक्षेपात',
    'detail.practice_focused': 'सराव-केंद्रित प्रवाह. संदर्भ पॅनेलमध्ये संपूर्ण वाचन-सूची पहा.',
    'detail.recension': 'शाखा/आवृत्ती',
    'detail.authors': 'लेखक/ऋषी',
    'detail.range': 'व्याप्ती',
    'detail.scope': 'विषयक्षेत्र',
    'detail.officiant': 'पुरोहित/ऋत्विज',
    'detail.period': 'कालखंड',
    'detail.strata': 'प्रत्येक वेदाचे चार स्तर',
    'detail.library': 'संग्रहण',
    // Living Knowledge
    'nav.lk': 'जिवंत ज्ञान',
    'lk.eyebrow': 'जिवंत ज्ञान',
    'lk.title': 'भारतीय ज्ञानप्रणालींची जगाला देणगी',
    'lk.title_short': 'जिवंत ज्ञान',
    'lk.meta': '{count} योगदाने · नऊ क्षेत्रे',
    'lk.note_label': 'प्रामाणिकतेची नोंद:',
    'lk.prompt': 'योगदाने पाहण्यासाठी कोणत्याही क्षेत्र टाइलवर क्लिक करा, नंतर अधिक वाचण्यासाठी योगदानावर क्लिक करा.',
    'lk.count': '{n} योगदाने',
    'lk.debated': 'विवादित दावा',
    'lk.expand': 'योगदाने पहा',
    'lk.collapse': 'लपवा',
    'lk.read_more': 'अधिक वाचा →',
    'lk.what': 'हे काय आहे',
    'lk.when': 'कधी उदयास आले',
    'lk.how': 'आज कसे उपयुक्त आहे',
    'lk.back_label': '← जिवंत ज्ञानाकडे परत',
    'lk.phase2': 'सविस्तर माहिती लवकरच येणार आहे — दुसऱ्या टप्प्यात तपासा.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('bgb-lang') as Language;
    if (saved === 'mr' || saved === 'en') {
      setLangState(saved);
      document.documentElement.setAttribute('lang', saved);
    } else {
      document.documentElement.setAttribute('lang', 'en');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('bgb-lang', newLang);
      document.documentElement.setAttribute('lang', newLang);
    } catch {}
  };

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

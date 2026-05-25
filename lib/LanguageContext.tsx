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
    'nav.tree': 'Tree',
    'nav.library': 'Library',
    'nav.lifestyle': 'Lifestyle',
    'nav.essays': 'Essays',
    'nav.sanskrit': 'Sanskrit',
    'search.placeholder': 'Search verses, sūktas, schools…',
    // Hero
    'hero.eyebrow': 'Daily wisdom · 24 Vaiśākha · Saumya saṃvatsara',
    'hero.title': 'A digital library of the texts, sciences and ways of living rooted in the Indic knowledge systems.',
    'hero.show_trans': 'Show translation',
    'hero.hide_trans': 'Hide translation',
    'hero.read_essay': 'Read essay →',
    // Tree
    'tree.eyebrow': 'Map of the corpus',
    'tree.title': 'The three streams',
    'tree.hover_prompt': 'Hover any leaf · click to open',
    'tree.branch': 'Branch',
    'tree.streams': 'streams',
    'tree.open_page': 'Open page →',
    // Grid
    'grid.eyebrow': 'The library',
    'grid.title': 'Browse the corpus',
    'grid.showing': 'Showing {count} of {total} streams',
    'grid.tag_era': 'Era',
    'grid.tag_canon': 'Canon',
    'grid.tag_topic': 'Topic',
    // Dinacharya
    'dina.eyebrow': 'Lifestyle',
    'dina.title': 'Dinacaryā — the structure of the day',
    'dina.meta': 'Six segments · classical Āyurveda',
    // Essays
    'essays.eyebrow': 'Editorial',
    'essays.title': 'Essays from the editors',
    'essays.meta': 'Updated weekly',
    // Footer
    'footer.colophon': 'An open digital library of the Indic knowledge systems. Texts in transliteration and original. Translations and commentary by working scholars. Free to read; built to last.',
    'footer.sec_texts': 'Texts',
    'footer.sec_tools': 'Tools',
    'footer.sec_about': 'About',
    'footer.samvat': '© Saṃvat 2082 · Vaiśākha',
    'footer.setin': 'Set in Cormorant, Lora & Tiro Devanagari Sanskrit',
    'footer.license': 'An open archive · CC BY-SA 4.0',
    // Details
    'detail.back': '← Back to the library',
    'detail.continue': 'Continue in the library',
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
    'detail.library': 'Library'
  },
  mr: {
    // Nav
    'nav.texts': 'ग्रंथ',
    'nav.tree': 'ज्ञानवृक्ष',
    'nav.library': 'वाचनालय',
    'nav.lifestyle': 'दिनचर्या',
    'nav.essays': 'निबंध',
    'nav.sanskrit': 'संस्कृत',
    'search.placeholder': 'श्लोक, सूक्त, संप्रदाय शोधा...',
    // Hero
    'hero.eyebrow': 'दैनिक सुभाषित · २४ वैशाख · सौम्य संवत्सर',
    'hero.title': 'भारतीय ज्ञानप्रणालींमध्ये रुजलेले ग्रंथ, विज्ञान आणि जीवनपद्धतींचे एक खुले डिजिटल ग्रंथालय.',
    'hero.show_trans': 'भाषांतर दाखवा',
    'hero.hide_trans': 'भाषांतर लपवा',
    'hero.read_essay': 'निबंध वाचा →',
    // Tree
    'tree.eyebrow': 'ज्ञानकोश नकाशा',
    'tree.title': 'तीन ज्ञानप्रवाह',
    'tree.hover_prompt': 'पानावर माउस फिरवा · उघडण्यासाठी क्लिक करा',
    'tree.branch': 'शाखा',
    'tree.streams': 'प्रवाह',
    'tree.open_page': 'पृष्ठ उघडा →',
    // Grid
    'grid.eyebrow': 'ग्रंथालय',
    'grid.title': 'ज्ञानकोश चाळा',
    'grid.showing': '{total} पैकी {count} प्रवाह दर्शवत आहे',
    'grid.tag_era': 'कालखंड',
    'grid.tag_canon': 'प्रमाण ग्रंथ',
    'grid.tag_topic': 'विषय',
    // Dinacharya
    'dina.eyebrow': 'जीवनशैली',
    'dina.title': 'दिनचर्या — दिवसाचे नियोजन',
    'dina.meta': 'सहा विभाग · पारंपरिक आयुर्वेद',
    // Essays
    'essays.eyebrow': 'संपादकीय',
    'essays.title': 'संपादकांचे निबंध',
    'essays.meta': 'साप्ताहिक अद्यतने',
    // Footer
    'footer.colophon': 'भारतीय ज्ञानप्रणालींचे खुले डिजिटल ग्रंथालय. मूळ मजकूर आणि लिप्यंतरण स्वरूपात उपलब्ध. संशोधक आणि विद्वानांद्वारे भाषांतर व स्पष्टीकरण. वाचनासाठी विनामूल्य; चिरंतन रचलेले.',
    'footer.sec_texts': 'ग्रंथ संपदा',
    'footer.sec_tools': 'साधने',
    'footer.sec_about': 'माहिती',
    'footer.samvat': '© संवत २०८२ · वैशाख',
    'footer.setin': 'कॉर्मोरेंट, लोरा आणि तिरो देवनागरी संस्कृत फॉन्टमध्ये डिझाइन केलेले',
    'footer.license': 'एक खुले संग्रहण · CC BY-SA 4.0',
    // Details
    'detail.back': '← वाचनालयाकडे परत',
    'detail.continue': 'वाचनालयात वाचन सुरू ठेवा',
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
    'detail.library': 'वाचनालय'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('bgb-lang') as Language;
    if (saved === 'mr' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('bgb-lang', newLang);
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

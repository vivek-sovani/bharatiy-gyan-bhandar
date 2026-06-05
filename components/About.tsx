'use client';

import { Glyph } from './Ornaments';
import { useLanguage } from '@/lib/LanguageContext';
import { ERAS_META } from './SectionsGrid';

export default function About() {
  const { lang } = useLanguage();
  const isMr = lang === 'mr';

  // First four eras form the chronological spine (exclude "Across All Eras").
  const eras = ERAS_META.filter((e) => e.id !== 'all');

  return (
    <section id="about" className="frame">
      <div className="shell about-inner">
        <div className="title-block">
          <div className="eyebrow">
            <Glyph /> {isMr ? 'इथून सुरुवात' : 'Begin here'}
          </div>
          <h2>{isMr ? 'भारतीय ज्ञानाच्या प्रवासाला सुरुवात' : 'Begin a journey through Indic wisdom'}</h2>
        </div>

        <p className="about-lede">
          {isMr ? (
            <>
              भारतीय ज्ञान भंडार हे भारतीय ज्ञानप्रणालींचे ग्रंथ, शास्त्रे आणि जीवनपद्धती एका
              ठिकाणी एकत्र आणते. ही सामग्री तीन हजार वर्षांहूनही अधिक काळ व्यापते — वेदांच्या
              मौखिक प्रकटनापासून (इ.स.पूर्व सुमारे १५००) आजच्या सुधारक आणि कवींपर्यंत — म्हणून येथील
              सर्व काही एका कालक्रमानुसार मांडलेले आहे. प्रत्येक ग्रंथ ज्या कालखंडात निर्माण झाला
              त्यात ठेवलेला आहे, तो <strong>श्रुति</strong> आहे की <strong>स्मृति</strong> आणि तो
              कोणत्या प्रश्नांचा विचार करतो यानुसार चिन्हांकित केलेला आहे.
            </>
          ) : (
            <>
              Bhāratīya Jñāna Bhaṇḍāra gathers the texts, sciences, and ways of living of the
              Indic knowledge systems into one place. The material spans more than three
              thousand years — from the oral revelation of the Vedas (c. 1500 BCE) to
              reformers and poets of the present day — so everything here is arranged along a
              single chronological spine. Each work sits in the era that produced it, marked
              by whether it is <strong>śruti</strong> or <strong>smṛti</strong> and by the
              questions it takes up.
            </>
          )}
        </p>

        <ol className="era-ribbon" aria-label={isMr ? 'कालखंड' : 'Eras'}>
          {eras.map((era) => (
            <li key={era.id} className="era-tick">
              <a className="era-tick-link" href={`#era-${era.id}`}>
                <span className="era-tick-label">{isMr ? era.deva : era.label}</span>
                <span className="era-tick-period mono">{isMr ? era.periodDeva : era.period}</span>
              </a>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

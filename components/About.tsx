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

        <div className="about-guide">
          <div className="eyebrow"><Glyph /> {isMr ? 'कसे पहावे' : 'How to explore'}</div>
          <ol className={`about-steps${isMr ? ' about-steps-deva' : ''}`}>
            {isMr ? (
              <>
                <li>
                  सर्वांत वर त्या दिवसाचे <a href="#hero"><strong>महावाक्य</strong></a> आणि{' '}
                  <a href="#daily"><strong>सुभाषित</strong></a> — श्लोकाचा अर्थ उलगडण्यासाठी{' '}
                  <strong>“विवेचन पहा”</strong> निवडा, किंवा नवीन श्लोकासाठी{' '}
                  <strong>“↻ दुसरे वचन”</strong>.
                </li>
                <li>
                  <a href="#sections"><strong>संग्रहणा</strong>पासून सुरुवात करा</a> — वैदिक ते
                  आधुनिक, कालखंडानुसार मांडलेला संपूर्ण ग्रंथसंभार.
                </li>
                <li>
                  <a href="#contributors"><strong>योगदानकर्त्यांना</strong></a> भेटा — ग्रंथांमागील
                  ऋषी, आचार्य आणि संत.
                </li>
                <li>
                  <a href="#concepts"><strong>मूलसंकल्पना</strong></a> समजून घ्या — धर्म, मोक्ष,
                  ऋत यांसारख्या प्रत्येक कालखंडात व्यापणाऱ्या कल्पना.
                </li>
                <li>
                  <a href="#dinacharya"><strong>दिनचर्येत</strong></a> दिवसाची लय पाहा, आणि नंतर{' '}
                  <a href="#sanskrit"><strong>मार्गदर्शिका</strong></a> वाचा.
                </li>
                <li>
                  वरच्या पट्टीतून <strong>English व मराठी</strong> आणि{' '}
                  <strong>रंगसंगती</strong> केव्हाही बदला — मोबाइलवर मेनूमधून (☰).
                </li>
              </>
            ) : (
              <>
                <li>
                  Right at the top, the day’s{' '}
                  <a href="#hero"><strong>Mahāvākya</strong></a> and{' '}
                  <a href="#daily"><strong>Subhāṣita</strong></a> — tap{' '}
                  <strong>“Show explanation”</strong> to unpack a verse, or{' '}
                  <strong>“↻ Another verse”</strong> for a new one.
                </li>
                <li>
                  Start with <a href="#sections"><strong>the Collection</strong></a> — the
                  corpus grouped era by era, Vedic to modern.
                </li>
                <li>
                  Meet <a href="#contributors"><strong>the Contributors</strong></a> — the
                  ṛṣis, ācāryas, and saints behind the texts.
                </li>
                <li>
                  Follow <a href="#concepts"><strong>the Concepts</strong></a> — ideas like
                  dharma, mokṣa and ṛta that run across every period.
                </li>
                <li>
                  See the shape of a day in{' '}
                  <a href="#dinacharya"><strong>Dinacharya</strong></a>, then read the{' '}
                  <a href="#sanskrit"><strong>field guides</strong></a>.
                </li>
                <li>
                  Switch <strong>English and मराठी</strong> and the{' '}
                  <strong>theme</strong> anytime from the top bar — on mobile, from the
                  menu (☰).
                </li>
              </>
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

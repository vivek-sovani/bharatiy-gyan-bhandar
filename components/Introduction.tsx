'use client';

import { useState } from 'react';
import { Glyph } from './Ornaments';
import { useLanguage } from '@/lib/LanguageContext';
import { INTRO as INTRO_EN } from '@/lib/intro-data';
import { INTRO as INTRO_MR } from '@/lib/intro-data_mr';

// "The Living Tree" — the narrative introduction to the knowledge tree.
// Modeled on SectionTabs: one tab per essay section, with a persistent
// conclusion ("four threads") and the "How to explore" guide below the tabs,
// so the takeaway and the navigation help are never hidden behind a tab.

export default function Introduction() {
  const { lang } = useLanguage();
  const isMr = lang === 'mr';
  const intro = isMr ? INTRO_MR : INTRO_EN;

  const [active, setActive] = useState(intro.sections[0].id);
  const section = intro.sections.find((s) => s.id === active) ?? intro.sections[0];

  return (
    <section id="introduction" className="frame intro-frame">
      <div className="shell">
        {/* Header — same cadence as About / the Collection */}
        <div className="title-block">
          <div className="eyebrow"><Glyph /> {intro.eyebrow}</div>
          <h2 className="intro-title">{intro.title}</h2>
          <p className="intro-subtitle">{intro.subtitle}</p>
        </div>

        <div className="intro-lede">
          {intro.lede.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* Tab strip — reuses the section-tabs styling */}
        <nav
          className="sec-tabs-nav intro-tabs"
          style={{ gridTemplateColumns: `repeat(${intro.sections.length}, 1fr)` }}
          role="tablist"
          aria-label={intro.eyebrow}
        >
          {intro.sections.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active === s.id}
              className={`sec-tab ${active === s.id ? 'is-active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              <span className="intro-tab-num mono">№ {s.number}</span>
              <span className="en intro-tab-label">{s.tabLabel}</span>
            </button>
          ))}
        </nav>

        {/* Active essay section */}
        <article className="intro-panel" key={section.id}>
          <div className="eyebrow">
            {isMr ? `विभाग ${section.number} · ${intro.sections.length} पैकी` : `Part ${section.number} of ${intro.sections.length}`}
          </div>
          <h3 className="intro-panel-title">{section.title}</h3>
          <div className="intro-prose">
            {section.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          {section.pullQuote && (
            <blockquote className="intro-quote">{section.pullQuote}</blockquote>
          )}
        </article>

        {/* Conclusion — the four threads, always visible */}
        <div className="intro-threads">
          <div className="eyebrow"><Glyph /> {intro.conclusion.title}</div>
          <p className="intro-threads-lede">{intro.conclusion.intro}</p>
          <dl className="intro-thread-list">
            {intro.conclusion.threads.map((thread) => (
              <div key={thread.label} className="intro-thread">
                <dt>{thread.label}</dt>
                <dd dangerouslySetInnerHTML={{ __html: thread.text }} />
              </div>
            ))}
          </dl>
          <p className="intro-closing">{intro.closing}</p>
        </div>

        {/* How to explore — moved here from About; the essay's invitation pays
            off in concrete navigation steps. */}
        <div className="about-guide intro-guide">
          <div className="eyebrow"><Glyph /> {intro.guideEyebrow}</div>
          <p className="intro-guide-bridge">{intro.guideBridge}</p>
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
                  <a href="#living-knowledge"><strong>जिवंत ज्ञान</strong></a> अनुभवा —
                  शून्य, बीजगणित, ध्यान, शल्यचिकित्सा आणि शाश्वत जीवनापासून ते आजच्या
                  जगात उपयुक्त असलेल्या भारतीय परंपरेतील ७२ व्यावहारिक योगदानांचा शोध घ्या.
                  क्षेत्र टाइलवर क्लिक करा; कोणत्याही योगदानावर क्लिक केल्यावर संपूर्ण माहिती मिळेल.
                </li>
                <li>
                  <a href="#dinacharya"><strong>दिनचर्येत</strong></a> दिवसाची लय पाहा.
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
                  Explore <a href="#living-knowledge"><strong>Living Knowledge</strong></a> —
                  72 practical contributions of the Indic tradition still relevant today,
                  from zero and algebra to meditation, surgery, and sustainable living.
                  Click a domain tile to browse; click any contribution for the full account.
                </li>
                <li>
                  See the shape of a day in{' '}
                  <a href="#dinacharya"><strong>Dinacharya</strong></a>.
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

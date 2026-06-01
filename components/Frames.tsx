'use client';

import { Mandala, Glyph } from './Ornaments';
import { DAILY as DAILY_EN, ESSAYS as ESSAYS_EN } from '@/lib/data';
import { DAILY as DAILY_MR, ESSAYS as ESSAYS_MR } from '@/lib/data_mr';
import { transliterate } from '@/lib/transliterate';
import { useLanguage } from '@/lib/LanguageContext';

export function DailyStrip() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { lang } = useLanguage();
  const DAILY = lang === 'mr' ? DAILY_MR : DAILY_EN;

  return (
    <section
      className="strip"
      style={{
        '--strip-bg': `url(${basePath}/wisdom-strip.png)`,
      } as React.CSSProperties}
    >
      <div className="shell strip-inner">
        <Mandala className="mandala" />
        <div className="quote">
          <span className="deva-block">{DAILY.deva}</span>
          {lang === 'en' && <span className="translit-line">{transliterate(DAILY.deva)}</span>}
          <span>{DAILY.trans}</span>
        </div>
        <div className="attrib">{DAILY.source}</div>
      </div>
    </section>
  );
}

export function Essays() {
  const { lang, t } = useLanguage();
  const ESSAYS = lang === 'mr' ? ESSAYS_MR : ESSAYS_EN;

  return (
    <section id="essays" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> {t('essays.eyebrow')}</div>
            <h2>{t('essays.title')}</h2>
          </div>
          <div className="meta">{t('essays.meta')}</div>
        </div>
        <div className="essays">
          {ESSAYS.map((e) => (
            <article key={e.no} className="essay">
              <div className="no">{e.no}</div>
              <div>
                <h4>{e.title}</h4>
                <p>{e.dek}</p>
                <div className="meta">{e.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sanskrit() {
  const { lang, t } = useLanguage();

  return (
    <section id="sanskrit" className="frame tight">
      <div className="shell sanskrit-inner">
        {lang === 'mr' ? (
          <div>
            <div className="eyebrow"><Glyph /> मार्गदर्शिका</div>
            <h2 style={{ marginTop: '0.6rem', fontStyle: 'italic', fontWeight: 500 }}>श्रुति आणि स्मृति — परंपरेनुसार धर्मप्रमाण</h2>
            <p style={{ marginTop: '1rem', color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              भारतीय परंपरा एका द्विरचनात्मक फरकावर आधारलेली आहे ज्याला युरोपीय विचारात कोणताही अचूक पर्याय नाही.
              <strong> श्रुति </strong>(<span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>श्रुति</span>) म्हणजे जे <em>ऐकले गेले</em> — अपौरुषेय मानले गेलेले ज्ञान जे ऋषींना ध्यानस्थ अवस्थेत प्रकट झाले.
              <strong> स्मृति </strong>(<span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>स्मृति</span>) म्हणजे जे <em>आठवले गेले</em> — मानवनिर्मित रचना ज्या श्रुतींचा विस्तार आणि व्यावहारिक उपयोग करतात.
            </p>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              जिथे दोन्हीमध्ये मतभेद होतात, तिथे श्रुतींचे प्रामाण्य अंतिम मानले जाते. याच कारणास्तव महाभारत स्वतःला आदरपूर्वक ‘पाचवा वेद’ म्हणते, पण ते वेदांच्या बरोबरीचा दावा करत नाही.
            </p>
          </div>
        ) : (
          <div>
            <div className="eyebrow"><Glyph /> Field guide</div>
            <h2 style={{ marginTop: '0.6rem', fontStyle: 'italic', fontWeight: 500 }}>Śruti & Smṛti — what tradition means by canon</h2>
            <p style={{ marginTop: '1rem', color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              Indic tradition holds itself together by a two-tier distinction that has no exact European parallel.
              <strong> Śruti </strong>(<span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>श्रुति</span>) is what was <em>heard</em> — knowledge held to be apauruṣeya, unauthored, eternally co-present with reality and merely received by ṛṣis.
              <strong> Smṛti </strong>(<span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>स्मृति</span>) is what is <em>remembered</em> — human composition that depends on and applies śruti.
            </p>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              Where the two disagree, śruti takes precedence. This is why the Mahābhārata calls itself the fifth Veda and means it as homage, not as claim of equality.
            </p>
          </div>
        )}

        {lang === 'mr' ? (
          <div>
            <div className="eyebrow"><Glyph /> एक शब्द, चार अर्थ</div>
            <h2 style={{ marginTop: '0.6rem', fontStyle: 'italic', fontWeight: 500 }}>
              <span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.6rem' }}>धर्म</span>
              धर्म
            </h2>
            <ol style={{ marginTop: '1rem', paddingLeft: '1.4rem', color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>जे धारण करते.</strong> <span style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>√धृ</span> धातूपासून — ज्याचा अर्थ “धारण करणे, आधार देणे” असा होतो.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>वस्तूचा स्वभाव.</strong> पाण्याचा धर्म वाहणे; अग्नीचा, जाळणे.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>संदर्भातील नैतिक कर्तव्य.</strong> स्वधर्म — तुम्ही कोण आहात आणि कुठे आहात यावर आधारित तुमचे कर्तव्य.</li>
              <li><strong style={{ color: 'var(--ink)' }}>वैश्विक नियम.</strong> ऋग्वेदाने ज्याला ‘ऋत’ म्हटले आहे — तो नियम जो दिवस, ऋतू आणि श्वासाचे चक्र नियमित ठेवतो.</li>
            </ol>
          </div>
        ) : (
          <div>
            <div className="eyebrow"><Glyph /> One word, four senses</div>
            <h2 style={{ marginTop: '0.6rem', fontStyle: 'italic', fontWeight: 500 }}>
              <span className="deva deva-only" style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)', marginRight: '0.6rem' }}>धर्म</span>
              Dharma
            </h2>
            <ol style={{ marginTop: '1rem', paddingLeft: '1.4rem', color: 'var(--ink-soft)', maxWidth: '54ch' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>That which upholds.</strong> From <span style={{ fontFamily: 'var(--font-deva)', color: 'var(--maroon)' }}>√धृ</span> — the root meaning “to hold, to support.”</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>The nature of a thing.</strong> Water’s dharma is to flow; fire’s, to burn.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>Ethical duty in context.</strong> Sva-dharma — what is yours to do, given who and where you are.</li>
              <li><strong style={{ color: 'var(--ink)' }}>Cosmic order.</strong> What the Ṛgveda called ṛta — the law that keeps day, season and breath returning.</li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="ftr">
      <div className="shell ftr-grid">
        <div className="colophon">
          {lang === 'mr' ? (
            <div className="name-en deva-only">भारतीय ज्ञान भंडार</div>
          ) : (
            <div className="name-en">Indian Knowledge Bank</div>
          )}
          <p>{t('footer.colophon')}</p>
        </div>
        <div>
          <h5>{t('footer.sec_texts')}</h5>
          <ul>
            <li><a href="#">{lang === 'mr' ? 'वेद · वेदाः' : 'Vedas · वेदाः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'उपनिषदे · उपनिषदः' : 'Upaniṣads · उपनिषदः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'दर्शने · दर्शनानि' : 'Darśanas · दर्शनानि'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'आगम · आगमाः' : 'Āgamas · आगमाः'}</a></li>
            <li><a href="#">{lang === 'mr' ? 'इतिहास · इतिहासः' : 'Itihāsa · इतिहासः'}</a></li>
            <li><a href="/#concepts">{lang === 'mr' ? 'मूलसंकल्पना' : 'Core concepts'}</a></li>
          </ul>
        </div>
        <div>
          <h5>{t('footer.sec_tools')}</h5>
          {lang === 'mr' ? (
            <ul>
              <li><a href="#">ज्ञानवृक्ष</a></li>
              <li><a href="#">श्लोक सूची</a></li>
              <li><a href="#">देवनागरी वाचक</a></li>
              <li><a href="#">उच्चार स्पष्टीकरण</a></li>
              <li><a href="#">संदर्भ मार्गदर्शिका</a></li>
            </ul>
          ) : (
            <ul>
              <li><a href="#">Knowledge tree</a></li>
              <li><a href="#">Verse concordance</a></li>
              <li><a href="#">Devanāgarī reader</a></li>
              <li><a href="#">Pronunciation</a></li>
              <li><a href="#">Citation guide</a></li>
            </ul>
          )}
        </div>
        <div>
          <h5>{t('footer.sec_about')}</h5>
          {lang === 'mr' ? (
            <ul>
              <li><a href="#">संपादकीय मंडळ</a></li>
              <li><a href="#">योगदान द्या</a></li>
              <li><a href="#">स्रोत सूची</a></li>
              <li><a href="#">माहितीपत्रक</a></li>
              <li><a href="#">कोलोफोन</a></li>
            </ul>
          ) : (
            <ul>
              <li><a href="#">Editorial board</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Sources</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Colophon</a></li>
            </ul>
          )}
        </div>
      </div>
      <div className="shell ftr-base">
        <span>{t('footer.samvat')}</span>
        <span>{t('footer.setin')}</span>
        <span>{t('footer.license')}</span>
      </div>
    </footer>
  );
}

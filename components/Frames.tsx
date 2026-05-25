import { Mandala, Glyph } from './Ornaments';
import { DAILY, ESSAYS } from '@/lib/data';

export function DailyStrip() {
  return (
    <section className="strip">
      <div className="shell strip-inner">
        <Mandala className="mandala" />
        <div className="quote">
          <span className="deva-block">{DAILY.deva}</span>
          <span>{DAILY.trans}</span>
        </div>
        <div className="attrib">{DAILY.source}</div>
      </div>
    </section>
  );
}

export function Essays() {
  return (
    <section id="essays" className="frame">
      <div className="shell">
        <div className="frame-hd">
          <div className="title-block">
            <div className="eyebrow"><Glyph /> Editorial</div>
            <h2>Essays from the editors</h2>
          </div>
          <div className="meta">Updated weekly</div>
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
  return (
    <section id="sanskrit" className="frame tight">
      <div className="shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
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
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="shell ftr-grid">
        <div className="colophon">
          <div className="name-en">Bhāratīya Jñāna Bhaṇḍāra</div>
          <div className="name-de deva-only">भारतीय ज्ञान भण्डार</div>
          <p>An open digital library of the Indic knowledge systems. Texts in transliteration and original. Translations and commentary by working scholars. Free to read; built to last.</p>
        </div>
        <div>
          <h5>Texts</h5>
          <ul>
            <li><a href="#">Vedas · वेदाः</a></li>
            <li><a href="#">Upaniṣads · उपनिषदः</a></li>
            <li><a href="#">Darśanas · दर्शनानि</a></li>
            <li><a href="#">Āgamas · आगमाः</a></li>
            <li><a href="#">Itihāsa · इतिहासः</a></li>
          </ul>
        </div>
        <div>
          <h5>Tools</h5>
          <ul>
            <li><a href="#">Knowledge tree</a></li>
            <li><a href="#">Verse concordance</a></li>
            <li><a href="#">Devanāgarī reader</a></li>
            <li><a href="#">Pronunciation</a></li>
            <li><a href="#">Citation guide</a></li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul>
            <li><a href="#">Editorial board</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Sources</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Colophon</a></li>
          </ul>
        </div>
      </div>
      <div className="shell ftr-base">
        <span>© Saṃvat 2082 · Vaiśākha</span>
        <span>Set in Cormorant, Lora & Tiro Devanagari Sanskrit</span>
        <span>An open archive · CC BY-SA 4.0</span>
      </div>
    </footer>
  );
}

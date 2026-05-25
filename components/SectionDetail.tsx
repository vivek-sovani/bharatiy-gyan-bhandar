import Link from 'next/link';
import { SECTIONS } from '@/lib/data';
import { sectionPath } from '@/lib/routes';
import type { SectionDetail, SectionItem } from '@/lib/section-data';
import SectionTabs from './SectionTabs';

function Crumb({ items }: { items: string[] }) {
  return (
    <div className="sec-crumb">
      {items.map((it, i) => (
        <span key={i}>
          {i === 0 ? (
            <Link href="/">{it}</Link>
          ) : i < items.length - 1 ? (
            <span>{it}</span>
          ) : (
            <span className="cur">{it}</span>
          )}
          {i < items.length - 1 && <span className="sep">→</span>}
        </span>
      ))}
    </div>
  );
}

function SecHero({ data }: { data: SectionDetail }) {
  return (
    <section className="sec-hero">
      <div className="shell">
        <Crumb items={data.crumb} />
        <span className="deva-only">{data.deva}</span>
        <h1>{data.title}</h1>
        <p className="lede">{data.lede}</p>
      </div>
    </section>
  );
}

function GridLayout({ items }: { items: SectionItem[] }) {
  return (
    <div className="sec-grid">
      {items.map((it, i) => (
        <article key={it.id} className="sec-grid-item">
          <div className="ord">
            <span>№ {String(i + 1).padStart(2, '0')}</span>
            {it.epithet && <span className="tag">{it.epithet}</span>}
          </div>
          <h3>{it.title}</h3>
          <div className="deva-name deva-only">{it.deva}</div>
          <p>{it.summary}</p>
          {it.meta && (
            <div className="meta-strip">
              {it.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function PrimerLayout() {
  return (
    <>
      <div className="primer-grid">
        <div className="primer-col">
          <div className="marker">श्</div>
          <span className="deva-only">श्रुति</span>
          <h2>Śruti</h2>
          <div className="gloss">“That which was heard”</div>
          <p>The eternal body of knowledge that the ṛṣis received in deep contemplation — held by tradition to be <em>apauruṣeya</em>, unauthored, eternally co-present with reality and only “heard” into perception. Receives the highest canonical authority.</p>
          <ul>
            <li><b>The four Vedas</b> — Ṛg, Yajur, Sāma, Atharva, including their Saṃhitā, Brāhmaṇa and Āraṇyaka strata.</li>
            <li><b>The principal Upaniṣads</b> — closing dialogues of each Veda.</li>
            <li><b>Authority</b> — final. Where śruti and any other source disagree, śruti wins.</li>
          </ul>
        </div>
        <div className="primer-col">
          <div className="marker">स्म्</div>
          <span className="deva-only">स्मृति</span>
          <h2>Smṛti</h2>
          <div className="gloss">“That which is remembered”</div>
          <p>Composed by named authors, drawing on and applying śruti. Includes everything that organises the practical life of the tradition — its grammar, its medicine, its epics, its codes of conduct, its philosophy.</p>
          <ul>
            <li><b>The six Vedāṅgas</b> — phonetics, ritual, grammar, etymology, prosody, astronomy.</li>
            <li><b>The four Upavedas</b> — Āyurveda, Dhanurveda, Gāndharvaveda, Sthāpatyaveda.</li>
            <li><b>Itihāsa, Purāṇas, Darśana-sūtras, Dharma-śāstras</b> — the rest of the canon.</li>
            <li><b>Authority</b> — derived. Holds, except where contradicted by śruti.</li>
          </ul>
        </div>
      </div>

      <div className="primer-table">
        <div className="row"><div>Tradition cites itself</div><div>Śruti</div><div>Smṛti</div></div>
        <div className="row"><div>Status</div><div>Unauthored · eternal</div><div>Human authorship · datable</div></div>
        <div className="row"><div>Sanskrit name</div><div className="with-de"><span>“That which is heard”</span><span className="deva">श्रुति</span></div><div className="with-de"><span>“That which is remembered”</span><span className="deva">स्मृति</span></div></div>
        <div className="row"><div>Comprises</div><div>4 Vedas · 10 (108) Upaniṣads</div><div>Vedāṅgas · Upavedas · Itihāsa · Purāṇas · Darśanas · Dharma-śāstras</div></div>
        <div className="row"><div>Authority</div><div>Final (apauruṣeya)</div><div>Derived (pauruṣeya)</div></div>
        <div className="row"><div>On disagreement</div><div>Takes precedence</div><div>Gives way</div></div>
        <div className="row"><div>Mode</div><div>Recited, preserved by ear</div><div>Read, composed, copied</div></div>
      </div>
    </>
  );
}

function SeeAlso({ currentId }: { currentId: string }) {
  const others = SECTIONS.filter((s) => s.id !== currentId).slice(0, 6);
  return (
    <section className="see-also">
      <div className="shell">
        <h4>Continue in the library</h4>
        <div className="see-grid">
          {others.map((s) => (
            <Link key={s.id} className="see-link" href={sectionPath(s)}>
              <span>
                <span className="ttl">{s.title}</span>
                <br />
                <span className="ttl-de deva-only">{s.deva}</span>
              </span>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SectionDetailView({ id, data }: { id: string; data: SectionDetail }) {
  return (
    <>
      <SecHero data={data} />

      <section className="frame">
        <div className="shell">
          {data.layout === 'tabs' && data.items && <SectionTabs items={data.items} />}
          {data.layout === 'grid' && data.items && <GridLayout items={data.items} />}
          {data.layout === 'primer' && <PrimerLayout />}
        </div>
      </section>

      <SeeAlso currentId={id} />
    </>
  );
}

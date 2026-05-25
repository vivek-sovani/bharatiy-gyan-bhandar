'use client';

import Link from 'next/link';
import { SECTIONS as SECTIONS_EN } from '@/lib/data';
import { SECTIONS as SECTIONS_MR } from '@/lib/data_mr';
import { sectionPath } from '@/lib/routes';
import type { SectionDetail, SectionItem } from '@/lib/section-data';
import { SECTION_DETAILS as DETAILS_EN } from '@/lib/section-data';
import { SECTION_DETAILS as DETAILS_MR } from '@/lib/section-data_mr';
import SectionTabs from './SectionTabs';
import { useLanguage } from '@/lib/LanguageContext';

function Crumb({ items }: { items: string[] }) {
  const { t } = useLanguage();
  return (
    <div className="sec-crumb">
      {items.map((it, i) => (
        <span key={i}>
          {i === 0 ? (
            <Link href="/">{t('detail.library')}</Link>
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

function SecHero({ data, id }: { data: SectionDetail; id: string }) {
  const imgPath = `/corpus-${id}.png`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="sec-hero">
      <div className="shell sec-hero-inner">
        <div className="sec-hero-copy">
          <Crumb items={data.crumb} />
          <span className="deva-only">{data.deva}</span>
          <h1>{data.title}</h1>
          <p className="lede">{data.lede}</p>
        </div>
        <div className="sec-hero-img-wrap">
          <img
            src={`${basePath}${imgPath}`}
            alt={data.title}
            fetchPriority="high"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
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
  const { lang } = useLanguage();
  return (
    <>
      <div className="primer-grid">
        {lang === 'mr' ? (
          <div className="primer-col">
            <div className="marker">श्</div>
            <span className="deva-only">श्रुति</span>
            <h2>श्रुति</h2>
            <div className="gloss">“जे ऐकले गेले”</div>
            <p>ज्ञानाचा तो सनातन स्रोत जो ऋषींना ध्यानस्थ अवस्थेत साक्षात्कारातून प्राप्त झाला — ज्याला परंपरा <em>अपौरुषेय</em> (मानवाने न रचलेले) मानते. याला सर्वोच्च अधिकार आहे.</p>
            <ul>
              <li><b>चार वेद</b> — ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद, आणि त्यांचे संहिता, ब्राह्मण व आरण्यक स्तर.</li>
              <li><b>मुख्य उपनिषदे</b> — प्रत्येक वेदाच्या शेवटी होणारे मुख्य संवाद.</li>
              <li><b>अधिकार</b> — अंतिम. जिथे श्रुति आणि इतर स्रोतांमध्ये मतभेद होतात, तिथे श्रुतींचे म्हणणे श्रेष्ठ मानले जाते.</li>
            </ul>
          </div>
        ) : (
          <div className="primer-col">
            <div className="marker">श्</div>
            <span className="deva-only">श्रुति</span>
            <h2>Śruti</h2>
            <div className="gloss">“That which was heard”</div>
            <p>The eternal body of knowledge that the ṛṣis received in deep contemplation — held by tradition to be <em>apauruṣeya</em>, unauthored, eternally co-present with reality and merely received by ṛṣis. Receives the highest canonical authority.</p>
            <ul>
              <li><b>The four Vedas</b> — Ṛg, Yajur, Sāma, Atharva, including their Saṃhitā, Brāhmaṇa and Āraṇyaka strata.</li>
              <li><b>The principal Upaniṣads</b> — closing dialogues of each Veda.</li>
              <li><b>Authority</b> — final. Where śruti and any other source disagree, śruti wins.</li>
            </ul>
          </div>
        )}

        {lang === 'mr' ? (
          <div className="primer-col">
            <div className="marker">स्म्</div>
            <span className="deva-only">स्मृति</span>
            <h2>स्मृति</h2>
            <div className="gloss">“जे आठवले गेले”</div>
            <p>विशिष्ट लेखकांनी रचलेले ग्रंथ, जे श्रुतींचे संदर्भ घेऊन बनवले गेले आहेत. यात मानवी जीवनाचे नियोजन करणारे सर्व ग्रंथ — व्याकरण, वैद्यकशास्त्र, महाकाव्ये, आचारसंहिता आणि दर्शने समाविष्ट आहेत.</p>
            <ul>
              <li><b>सहा वेदांगे</b> — शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष.</li>
              <li><b>चार उपवेद</b> — आयुर्वेद, धनुर्वेद, गांधर्ववेद, स्थापत्यवेद.</li>
              <li><b>इतिहास, पुराणे, दर्शन-सूत्रे, धर्मशास्त्रे</b> — इतर सर्व आदरणीय ग्रंथ.</li>
              <li><b>अधिकार</b> — दुय्यम. श्रुतींशी सुसंगत असेपर्यंतच स्मृतींचे नियम ग्राह्य धरले जातात.</li>
            </ul>
          </div>
        ) : (
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
        )}
      </div>

      <div className="primer-table">
        {lang === 'mr' ? (
          <>
            <div className="row"><div>परंपरा संदर्भ पद्धत</div><div>श्रुति</div><div>स्मृति</div></div>
            <div className="row"><div>स्वरूप</div><div>अपौरुषेय · सनातन</div><div>मानवी निर्मिती · ऐतिहासिक</div></div>
            <div className="row"><div>शाब्दिक अर्थ</div><div className="with-de"><span>“जे ऐकले गेले”</span><span className="deva">श्रुति</span></div><div className="with-de"><span>“जे आठवले गेले”</span><span className="deva">स्मृति</span></div></div>
            <div className="row"><div>समाविष्ट ग्रंथ</div><div>४ वेद · १० (१०८) उपनिषदे</div><div>वेदांगे · उपवेद · इतिहास · पुराणे · दर्शने · धर्मशास्त्रे</div></div>
            <div className="row"><div>अधिकार श्रेणी</div><div>सर्वोच्च (अंतिम)</div><div>Derived (दुय्यम/सापेक्ष)</div></div>
            <div className="row"><div>मतभेदाच्या वेळी</div><div>श्रेष्ठ मानले जाते</div><div>मार्ग सोडून देते</div></div>
            <div className="row"><div>जतन पद्धत</div><div>मौखिक पठण, कानाने ऐकून जतन</div><div>वाचन, लेखन, प्रत तयार करणे</div></div>
          </>
        ) : (
          <>
            <div className="row"><div>Tradition cites itself</div><div>Śruti</div><div>Smṛti</div></div>
            <div className="row"><div>Status</div><div>Unauthored · eternal</div><div>Human authorship · datable</div></div>
            <div className="row"><div>Sanskrit name</div><div className="with-de"><span>“That which is heard”</span><span className="deva">श्रुति</span></div><div className="with-de"><span>“That which is remembered”</span><span className="deva">स्मृति</span></div></div>
            <div className="row"><div>Comprises</div><div>4 Vedas · 10 (108) Upaniṣads</div><div>Vedāṅgas · Upavedas · Itihāsa · Purāṇas · Darśanas · Dharma-śāstras</div></div>
            <div className="row"><div>Authority</div><div>Final (apauruṣeya)</div><div>Derived (pauruṣeya)</div></div>
            <div className="row"><div>On disagreement</div><div>Takes precedence</div><div>Gives way</div></div>
            <div className="row"><div>Mode</div><div>Recited, preserved by ear</div><div>Read, composed, copied</div></div>
          </>
        )}
      </div>
    </>
  );
}

function SeeAlso({ currentId }: { currentId: string }) {
  const { lang, t } = useLanguage();
  const SECTIONS = lang === 'mr' ? SECTIONS_MR : SECTIONS_EN;
  const others = SECTIONS.filter((s) => s.id !== currentId).slice(0, 6);

  return (
    <section className="see-also">
      <div className="shell">
        <h4>{t('detail.continue')}</h4>
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

export default function SectionDetailView({ id, data: fallbackData }: { id: string; data: SectionDetail }) {
  const { lang } = useLanguage();
  const data = lang === 'mr' ? DETAILS_MR[id] : DETAILS_EN[id];
  const finalData = data || fallbackData;

  return (
    <>
      <SecHero data={finalData} id={id} />

      <section className="frame">
        <div className="shell">
          {finalData.layout === 'tabs' && finalData.items && <SectionTabs items={finalData.items} />}
          {finalData.layout === 'grid' && finalData.items && <GridLayout items={finalData.items} />}
          {finalData.layout === 'primer' && <PrimerLayout />}
        </div>
      </section>

      <SeeAlso currentId={id} />
    </>
  );
}

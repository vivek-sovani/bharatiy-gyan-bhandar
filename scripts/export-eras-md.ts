// Exports the corpus content (lib/*.ts) into human-readable markdown, one file
// per era, for content review — in both English and Marathi.
//
//   npx tsc --project scripts/tsconfig.export.json && node scripts/.build/scripts/export-eras-md.js
//
// (Several lib/*_mr.ts files import their English sibling's types without a
// file extension — fine for tsc, but Node's native --experimental-strip-types
// ESM loader requires explicit extensions on relative specifiers. Compiling
// through tsc to plain CommonJS first sidesteps that.)
//
// Reads: lib/data.ts (+ _mr), lib/section-data.ts (+ _mr), lib/intro-data.ts
// (+ _mr), lib/concepts-data.ts (+ _mr), lib/contributors-data.ts (+ _mr),
// lib/living-knowledge-data.ts (+ _mr), and each dedicated *-data.ts file
// (+ its _mr counterpart).
// Writes: docs/eras/{introduction,concepts,contributors,living-knowledge,
// vedic,classical,medieval,modern,all-eras,README}.md (English)
// and the same set under docs/eras/mr/ (Marathi).

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { SECTIONS, FILTERS } from '../lib/data';
import { SECTIONS as SECTIONS_MR, FILTERS as FILTERS_MR } from '../lib/data_mr';
import { SECTION_DETAILS } from '../lib/section-data';
import { SECTION_DETAILS as SECTION_DETAILS_MR } from '../lib/section-data_mr';
import { AGAMAS_DETAILS } from '../lib/agamas-data';
import { AGAMAS_DETAILS as AGAMAS_DETAILS_MR } from '../lib/agamas-data_mr';
import { DARSHANAS_DETAILS } from '../lib/darshanas-data';
import { DARSHANAS_DETAILS as DARSHANAS_DETAILS_MR } from '../lib/darshanas-data_mr';
import { ITIHASA_DETAILS } from '../lib/itihasa-data';
import { ITIHASA_DETAILS as ITIHASA_DETAILS_MR } from '../lib/itihasa-data_mr';
import { NASTIKA_DETAILS } from '../lib/nastika-data';
import { NASTIKA_DETAILS as NASTIKA_DETAILS_MR } from '../lib/nastika-data_mr';
import { PURANAS_DETAILS } from '../lib/puranas-data';
import { PURANAS_DETAILS as PURANAS_DETAILS_MR } from '../lib/puranas-data_mr';
import { UPANISHADS_DETAILS } from '../lib/upanishads-data';
import { UPANISHADS_DETAILS as UPANISHADS_DETAILS_MR } from '../lib/upanishads-data_mr';
import { UPAVEDAS_DETAILS } from '../lib/upavedas-data';
import { UPAVEDAS_DETAILS as UPAVEDAS_DETAILS_MR } from '../lib/upavedas-data_mr';
import { VEDANGAS_DETAILS } from '../lib/vedangas-data';
import { VEDANGAS_DETAILS as VEDANGAS_DETAILS_MR } from '../lib/vedangas-data_mr';
import { SCIENCES } from '../lib/sciences-data';
import { SCIENCES as SCIENCES_MR } from '../lib/sciences-data_mr';
import { INTRO } from '../lib/intro-data';
import { INTRO as INTRO_MR } from '../lib/intro-data_mr';
import { CONCEPTS, CONCEPT_DOMAINS } from '../lib/concepts-data';
import { CONCEPTS as CONCEPTS_MR } from '../lib/concepts-data_mr';
import { CONTRIBUTORS } from '../lib/contributors-data';
import { CONTRIBUTORS as CONTRIBUTORS_MR } from '../lib/contributors-data_mr';
import { LK_DOMAINS, LK_DOMAIN_META, LIVING_KNOWLEDGE, LK_NOTE } from '../lib/living-knowledge-data';
import { LK_DOMAIN_META as LK_DOMAIN_META_MR, LIVING_KNOWLEDGE as LIVING_KNOWLEDGE_MR, LK_NOTE as LK_NOTE_MR } from '../lib/living-knowledge-data_mr';
import {
  SHAKHAS_DATA, SUKTAS_DATA,
  BRAHMANAS_DATA, BRAHMANAS_TEACHINGS_DATA,
  ARANYAKAS_DATA, ARANYAKAS_TEACHINGS_DATA,
  UPANISHADS_DATA, UPANISHADS_TEACHINGS_DATA,
} from '../lib/vedasData';

type Lang = 'en' | 'mr';

// __dirname here is scripts/.build/scripts (tsc's outDir mirrors rootDir ".."
// under scripts/.build), so climb three levels back to the repo root.
const ROOT = join(__dirname, '..', '..', '..');
const OUT_DIR: Record<Lang, string> = {
  en: join(ROOT, 'docs/eras'),
  mr: join(ROOT, 'docs/eras/mr'),
};

// ---- static UI strings ---------------------------------------------------------

const STR: Record<Lang, Record<string, string>> = {
  en: {
    detailContent: 'Detail content',
    noDetail: '*(no detail content on file)*',
    figure: 'figure',
    source: 'Source', gloss: 'Gloss', dates: 'Dates', tradition: 'Tradition',
    significance: 'Significance', origin: 'Origin', references: 'References',
    contributions: 'Contributions', legacy: 'Legacy', aspects: 'Aspects',
    conceptsTitle: 'Core Concepts',
    conceptsIntro: 'The philosophical vocabulary of the corpus, organised into seven domains.',
    contributorsTitle: 'Contributors',
    contributorsIntro: 'Ṛṣis, ācāryas, saints, poets and scientists across four eras — the people behind the corpus.',
    lkTitle: 'Gifts of Indian Knowledge Systems to the World',
    lkMeta: '{count} contributions · nine domains',
    lkWhat: 'What it is', lkWhen: 'When it emerged', lkHow: 'How it applies today',
    lkDebated: 'Debated claim',
    regenNote: 'English content only — the Marathi text lives in the matching `_mr` data file for each module.',
    indexTitle: '# Corpus Content by Era',
    indexBlurb: 'Auto-generated export of the corpus data in `lib/*.ts`, grouped by era for content review.',
    regenCmd: 'Regenerate with `npx tsc --project scripts/tsconfig.export.json && node scripts/.build/scripts/export-eras-md.js`.',
    marathiLink: '- [मराठी आवृत्ती (Marathi)](./mr/README.md)',
    englishLink: '- [English version](../README.md)',
  },
  mr: {
    detailContent: 'तपशीलवार माहिती',
    noDetail: '*(तपशीलवार माहिती उपलब्ध नाही)*',
    figure: 'आकृती',
    source: 'स्रोत', gloss: 'अर्थ', dates: 'कालखंड', tradition: 'परंपरा',
    significance: 'महत्त्व', origin: 'प्रथम विवेचन', references: 'पुढील संदर्भ',
    contributions: 'प्रमुख योगदान', legacy: 'वारसा व प्रभाव', aspects: 'मुख्य पैलू',
    conceptsTitle: 'भारतीय ज्ञानप्रणालींच्या मूलसंकल्पना',
    conceptsIntro: 'ग्रंथसंपदेतील तात्त्विक शब्दसंपत्ती, सात क्षेत्रांत विभागलेली.',
    contributorsTitle: 'योगदाते',
    contributorsIntro: 'ऋषी, आचार्य, संत, कवी आणि शास्त्रज्ञ — चार कालखंडांत विखुरलेले, या ग्रंथसंपदेमागचे लोक.',
    lkTitle: 'भारतीय ज्ञानप्रणालींची जगाला देणगी',
    lkMeta: '{count} योगदाने · नऊ क्षेत्रे',
    lkWhat: 'हे काय आहे', lkWhen: 'कधी उदयास आले', lkHow: 'आज कसे उपयुक्त आहे',
    lkDebated: 'विवादित दावा',
    regenNote: 'केवळ मराठी मजकूर — इंग्रजी मजकुरासाठी `docs/eras/` मधील संबंधित फाइल पाहा.',
    indexTitle: '# कालखंडानुसार ग्रंथसंपदा',
    indexBlurb: '`lib/*.ts` मधील मराठी मजकुराचे, कालखंडानुसार गटबद्ध केलेले स्वयंचलित निर्यात.',
    regenCmd: '`npx tsc --project scripts/tsconfig.export.json && node scripts/.build/scripts/export-eras-md.js` वापरून पुन्हा तयार करा.',
    marathiLink: '- [Marathi version](./mr/README.md)',
    englishLink: '- [English आवृत्ती (इंग्रजी)](../README.md)',
  },
};

// ---- generic entry renderer -------------------------------------------------
// Every content shape in this codebase — SectionItem, *Details, ScienceItem,
// VedicText, VedicTeaching — reduces to the same pattern: a title (+ deva
// script), some short scalar fields, one or two long-text fields, an optional
// quoted verse, and arrays of either strings or {name/desc} sub-entries. One
// renderer walks all of them instead of one bespoke renderer per data file.

const SKIP = new Set(['id', 'href', 'interactive', 'pairedSchoolId']);
// lib/vedasData.ts bundles a Marathi-script duplicate of several fields
// (statusDeva, descDeva, ...) inline rather than in a separate _mr file.
// The English pass drops those alongside the plain `deva` field; the Marathi
// pass swaps them in instead (see toMrText/toMrTeaching below).
const isDevaDup = (key: string) => key !== 'deva' && /Deva$/.test(key);
const TITLE_KEYS = ['title', 'name', 'heading'];
const LONG_TEXT_KEYS = ['tldr', 'summary', 'desc', 'lede', 'blurb'];
const LIST_TEXT_KEYS = ['narrative', 'explanation'];
const VERSE_KEYS = ['opening', 'verse', 'source'];
const INLINE_LIST_KEYS = ['meta', 'facets'];

// Marathi labels for the field names that appear across the dedicated
// *-data.ts detail records (agamas/darshanas/itihasa/.../sciences/vedas).
// English falls back to an automatic camelCase -> Title Case split.
const KEY_LABELS_MR: Record<string, string> = {
  deity: 'देवता', texts: 'ग्रंथ', focus: 'केंद्रबिंदू',
  founder: 'संस्थापक', coreText: 'मूलग्रंथ', epistemology: 'ज्ञानमीमांसा',
  metaphysics: 'तत्त्वमीमांसा', pairedSchool: 'जोडीचे दर्शन',
  author: 'लेखक', verses: 'श्लोकसंख्या', structure: 'रचना', message: 'संदेश',
  guna: 'गुण', vedaAssociation: 'वेद-संबंध', versesCount: 'श्लोकसंख्या',
  vedaPair: 'वेद-जोडी', limb: 'अंग', metaphor: 'रूपक', authorityText: 'प्रमाणग्रंथ',
  keyAuthor: 'प्रमुख लेखक', scope: 'व्याप्ती',
  era: 'कालखंड', status: 'स्थिती', region: 'प्रदेश', category: 'प्रकार',
  role: 'भूमिका', citation: 'संदर्भ',
  concepts: 'संकल्पना', subdivisions: 'उपविभाग', aspects: 'मुख्य पैलू',
  theMath: 'गणित', coreIdeas: 'मूलकल्पना', keyConcepts: 'प्रमुख संकल्पना',
  majorWorks: 'प्रमुख ग्रंथ', branches: 'शाखा', schools: 'संप्रदाय',
  chapters: 'प्रकरणे', textsList: 'ग्रंथसूची',
};

function humanize(key: string, lang: Lang): string {
  if (lang === 'mr' && KEY_LABELS_MR[key]) return KEY_LABELS_MR[key];
  const spaced = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function isVerseObj(v: any): boolean {
  return v && typeof v === 'object' && !Array.isArray(v) &&
    ('deva' in v || 'translit' in v || 'trans' in v || 'citation' in v || 'cite' in v || 'text' in v);
}

function renderVerse(v: any): string {
  const lines: string[] = [];
  if (v.deva) for (const l of String(v.deva).split('\n')) lines.push('> ' + l);
  if (v.translit) lines.push('> *' + String(v.translit).split('\n').join(' ') + '*');
  if (v.text && v.text !== v.deva) lines.push('> ' + v.text);
  const meaning = v.trans || '';
  const cite = v.citation || v.cite || '';
  const quoted = meaning && !/^[“"]/.test(meaning) ? '“' + meaning + '”' : meaning;
  if (quoted) lines.push('> ' + quoted + (cite ? ' — ' + cite : ''));
  else if (cite) lines.push('> — ' + cite);
  return lines.join('\n');
}

function titleOf(entry: any): string {
  for (const k of TITLE_KEYS) if (typeof entry[k] === 'string') return entry[k];
  return '(untitled)';
}

function renderEntry(entry: any, level: number, lang: Lang): string {
  const out: string[] = [];
  const devaSuffix = entry.deva && entry.deva !== titleOf(entry) ? ` — ${entry.deva}` : '';
  const epithetSuffix = entry.epithet ? ` · ${entry.epithet}` : '';
  out.push(`${'#'.repeat(level)} ${titleOf(entry)}${devaSuffix}${epithetSuffix}`);

  const metaScalars: string[] = [];
  for (const [k, v] of Object.entries(entry)) {
    if (SKIP.has(k) || TITLE_KEYS.includes(k) || k === 'deva' || k === 'epithet' || isDevaDup(k)) continue;
    if (typeof v === 'string' && !LONG_TEXT_KEYS.includes(k) && v.length < 60) {
      metaScalars.push(`**${humanize(k, lang)}:** ${v}`);
    }
  }
  if (metaScalars.length) out.push(metaScalars.join(' · '));

  for (const k of INLINE_LIST_KEYS) {
    const v = entry[k];
    if (Array.isArray(v) && v.every((x) => typeof x === 'string') && v.length) {
      out.push(`*${v.join(' · ')}*`);
    }
  }

  for (const k of LONG_TEXT_KEYS) {
    if (typeof entry[k] === 'string') out.push(entry[k]);
  }

  for (const k of VERSE_KEYS) {
    if (isVerseObj(entry[k])) out.push(renderVerse(entry[k]));
  }

  for (const k of LIST_TEXT_KEYS) {
    if (Array.isArray(entry[k]) && entry[k].length) out.push(entry[k].join('\n\n'));
  }

  const handled = new Set([...INLINE_LIST_KEYS, ...LIST_TEXT_KEYS]);
  for (const [k, v] of Object.entries(entry)) {
    if (Array.isArray(v) && !handled.has(k) && v.length && typeof v[0] === 'object') {
      out.push(`${'#'.repeat(Math.min(level + 1, 6))} ${humanize(k, lang)}`);
      for (const item of v as any[]) {
        const t = item.name || item.title || item.heading;
        if (t) {
          const d = item.deva ? ` (${item.deva})` : '';
          const body = item.desc || (Array.isArray(item.body) ? item.body.join(' ') : '');
          out.push(`- **${t}${d}:**${body ? ' ' + body : ''}`.trim());
          if (item.figure) out.push(`  *(${STR[lang].figure}: ${item.figure})*`);
        } else if (isVerseObj(item)) {
          out.push(renderVerse(item));
        }
      }
    }
  }

  return out.join('\n\n');
}

function renderEntries(entries: any[], level: number, lang: Lang): string {
  return entries.map((e) => renderEntry(e, level, lang)).join('\n\n');
}

// ---- introduction essay rendering --------------------------------------------
// lib/intro-data.ts / intro-data_mr.ts is "The Living Tree" — the site's
// narrative essay on how the corpus grew, era by era. Paragraph strings carry
// inline <strong>/<em> markup (rendered via dangerouslySetInnerHTML on the
// site); convert that to markdown emphasis for a plain-text read.

function htmlToMd(s: string): string {
  return s
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*');
}

function renderIntroduction(intro: typeof INTRO, lang: Lang, disclaimer: string): string {
  const lines: string[] = [];
  lines.push(`# ${intro.title}`);
  lines.push(`*${intro.subtitle}*`);
  lines.push('');
  lines.push(`> ${intro.note}`);
  lines.push('');
  lines.push(`> ${disclaimer}`);

  for (const p of intro.lede) {
    lines.push('');
    lines.push(htmlToMd(p));
  }

  for (const section of intro.sections) {
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(`## ${section.number}. ${section.title}`);
    for (const p of section.paragraphs) {
      lines.push('');
      lines.push(htmlToMd(p));
    }
    if (section.pullQuote) {
      lines.push('');
      lines.push(`> ${htmlToMd(section.pullQuote)}`);
    }
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`## ${intro.conclusion.title}`);
  lines.push('');
  lines.push(intro.conclusion.intro);
  for (const thread of intro.conclusion.threads) {
    lines.push('');
    lines.push(`**${htmlToMd(thread.label)}** ${htmlToMd(thread.text)}`);
  }

  lines.push('');
  lines.push(htmlToMd(intro.closing));

  return lines.join('\n');
}

// ---- vedas rendering (vedasData.ts has no _mr file; it bundles a Marathi- ----
// script duplicate of several fields inline instead, e.g. descDeva).

const VEDA_IDS = ['rig', 'yajur', 'sama', 'atharva'] as const;
const VEDA_LABELS: Record<Lang, Record<string, string>> = {
  en: { rig: 'Ṛgveda', yajur: 'Yajurveda', sama: 'Sāmaveda', atharva: 'Atharvaveda' },
  mr: { rig: 'ऋग्वेद', yajur: 'यजुर्वेद', sama: 'सामवेद', atharva: 'अथर्ववेद' },
};
const VEDA_GROUP_LABELS: Record<Lang, string[]> = {
  en: ['Śākhās (recensions)', 'Core teachings', 'Brāhmaṇas', 'Brāhmaṇa teachings', 'Āraṇyakas', 'Āraṇyaka teachings', 'Upaniṣads of this Veda', 'Upaniṣad teachings'],
  mr: ['शाखा (आवृत्त्या)', 'मुख्य शिकवण', 'ब्राह्मणे', 'ब्राह्मण-शिकवण', 'आरण्यके', 'आरण्यक-शिकवण', 'या वेदाची उपनिषदे', 'उपनिषद-शिकवण'],
};

// VedicText: {name, deva, category?, categoryDeva?, status, statusDeva,
// role?, roleDeva?, structure, structureDeva, region?, regionDeva?, desc, descDeva}
function toMrText(t: any) {
  return {
    name: t.name, deva: t.deva,
    category: t.categoryDeva || t.category,
    status: t.statusDeva, role: t.roleDeva || t.role,
    structure: t.structureDeva, region: t.regionDeva, desc: t.descDeva,
  };
}

// VedicTeaching: {name, nameDeva, citation, citationDeva, summary,
// summaryDeva, verse?}. `verse.trans` has no Marathi variant in the source
// data, so it is carried through unchanged.
function toMrTeaching(t: any) {
  return {
    name: t.name, deva: t.nameDeva,
    citation: t.citationDeva || t.citation,
    summary: t.summaryDeva || t.summary,
    verse: t.verse,
  };
}

function renderVedasDetail(lang: Lang): string {
  const out: string[] = [];
  const isTeaching = new Set([SUKTAS_DATA, BRAHMANAS_TEACHINGS_DATA, ARANYAKAS_TEACHINGS_DATA, UPANISHADS_TEACHINGS_DATA]);
  for (const vedaId of VEDA_IDS) {
    out.push(`#### ${VEDA_LABELS[lang][vedaId]}`);
    const groups: Record<string, any[]>[] = [
      SHAKHAS_DATA, SUKTAS_DATA,
      BRAHMANAS_DATA, BRAHMANAS_TEACHINGS_DATA,
      ARANYAKAS_DATA, ARANYAKAS_TEACHINGS_DATA,
      UPANISHADS_DATA, UPANISHADS_TEACHINGS_DATA,
    ];
    groups.forEach((data, i) => {
      let items = data[vedaId];
      if (!items || !items.length) return;
      if (lang === 'mr') {
        const toMr: (t: any) => any = isTeaching.has(data) ? toMrTeaching : toMrText;
        items = items.map(toMr);
      }
      out.push(`##### ${VEDA_GROUP_LABELS[lang][i]}`);
      out.push(renderEntries(items, 6, lang));
    });
  }
  return out.join('\n\n');
}

type DedicatedSpec =
  | { kind: 'record'; record: Record<string, any> }
  | { kind: 'array'; items: any[] }
  | { kind: 'custom'; render: (lang: Lang) => string };

function dedicatedFor(lang: Lang): Record<string, DedicatedSpec> {
  const mr = lang === 'mr';
  return {
    vedas: { kind: 'custom', render: renderVedasDetail },
    upavedas: { kind: 'record', record: mr ? UPAVEDAS_DETAILS_MR : UPAVEDAS_DETAILS },
    vedangas: { kind: 'record', record: mr ? VEDANGAS_DETAILS_MR : VEDANGAS_DETAILS },
    upanishads: { kind: 'record', record: mr ? UPANISHADS_DETAILS_MR : UPANISHADS_DETAILS },
    darshanas: { kind: 'record', record: mr ? DARSHANAS_DETAILS_MR : DARSHANAS_DETAILS },
    'nastika-darshanas': { kind: 'record', record: mr ? NASTIKA_DETAILS_MR : NASTIKA_DETAILS },
    agamas: { kind: 'record', record: mr ? AGAMAS_DETAILS_MR : AGAMAS_DETAILS },
    itihasa: { kind: 'record', record: mr ? ITIHASA_DETAILS_MR : ITIHASA_DETAILS },
    puranas: { kind: 'record', record: mr ? PURANAS_DETAILS_MR : PURANAS_DETAILS },
    sciences: { kind: 'array', items: mr ? SCIENCES_MR : SCIENCES },
  };
}

function renderSectionDetail(id: string, lang: Lang): string {
  const dedicated = dedicatedFor(lang)[id];
  if (dedicated) {
    if (dedicated.kind === 'custom') return dedicated.render(lang);
    if (dedicated.kind === 'array') return renderEntries(dedicated.items, 4, lang);
    return renderEntries(Object.values(dedicated.record), 4, lang);
  }

  const generic = (lang === 'mr' ? SECTION_DETAILS_MR : SECTION_DETAILS) as Record<string, any>;
  const detail = generic[id];
  if (!detail) return STR[lang].noDetail;

  const out: string[] = [];
  if (detail.lede) out.push(detail.lede);
  if (detail.items) out.push(renderEntries(detail.items, 4, lang));
  return out.join('\n\n');
}

// ---- era grouping ------------------------------------------------------------
// Mirrors ERAS_META in components/SectionsGrid.tsx (site copy, both languages).

type EraId = 'vedic' | 'classical' | 'medieval' | 'modern' | 'all';

const ERA_META: Record<EraId, { file: string; title: string; deva: string; period: string; periodDeva: string; gloss: string; glossDeva: string }> = {
  vedic: {
    file: 'vedic.md', title: 'The Vedic Era', deva: 'वैदिक कालखंड',
    period: 'c. 1500 – 500 BCE', periodDeva: 'इ.स.पूर्व १५०० – ५००',
    gloss: 'The foundational era of revelation, oral chanting, and linguistic structure — the Vedas and the disciplines that make them intelligible.',
    glossDeva: 'सृष्टीचा प्रारंभ, मंत्रांचे सस्वर मौखिक पठण आणि भाषिक नियमांचा पाया घालणारा मूलभूत कालखंड — वेद आणि त्यांचा अर्थ स्पष्ट करणाऱ्या विद्या.',
  },
  classical: {
    file: 'classical.md', title: 'The Classical Era', deva: 'अभिजात कालखंड',
    period: 'c. 500 BCE – 800 CE', periodDeva: 'इ.स.पूर्व ५०० – इ.स. ८००',
    gloss: 'The flowering of philosophy, logic, civil law, statecraft, literature, mathematics, and temple ritual — the great age of śāstra, kāvya, darśana, and itihāsa.',
    glossDeva: 'दर्शने, तर्कशास्त्र, नागरिक कायदे, राजधर्म, नाटक-महाकाव्य, गणित आणि मंदिर विधी प्रणालींचा सुवर्णकाळ.',
  },
  medieval: {
    file: 'medieval.md', title: 'The Medieval Era', deva: 'मध्ययुगीन कालखंड',
    period: 'c. 800 – 1800 CE', periodDeva: 'इ.स. ८०० – १८००',
    gloss: 'The shift toward personal devotion, vernacular poetry, and the integration of parallel spiritual lines — the bhakti movement and the parallel canons of Jainism, Buddhism, and Sikhism.',
    glossDeva: 'स्थानिक लोकभाषांमध्ये व्यक्त झालेली वैयक्तिक भक्ती, संतांचे वाङ्मय आणि समांतर आध्यात्मिक मार्गांचा उदय.',
  },
  modern: {
    file: 'modern.md', title: 'The Modern Era', deva: 'आधुनिक कालखंड',
    period: 'c. 1800 CE – Present', periodDeva: 'इ.स. १८०० – वर्तमान',
    gloss: 'The critical re-reading, interpretation, and revival of the Indic corpus in the modern world — reformers, mystics, poets, jurists, and activists who remade the tradition for a republic.',
    glossDeva: 'आधुनिक जगामध्ये प्राचीन भारतीय ज्ञानप्रणालीचे नवीन संदर्भात केलेले पुनरुज्जीवन आणि विश्लेषण.',
  },
  all: {
    file: 'all-eras.md', title: 'Across All Eras', deva: 'सर्व कालखंडात',
    period: 'Timeless · ongoing', periodDeva: 'कालातीत · सतत',
    gloss: 'Field guides, living disciplines, and traditions that span the full chronological arc — texts and practices that do not belong to one period alone.',
    glossDeva: 'सर्व कालखंडांमध्ये पसरलेल्या मार्गदर्शिका, जिवंत साधना-पद्धती आणि समांतर परंपरा — जे एका विशिष्ट काळापुरते मर्यादित नाही.',
  },
};

const ERA_ORDER: EraId[] = ['vedic', 'classical', 'medieval', 'modern', 'all'];

// Mirrors ERAS_META in components/Contributors.tsx — same eras, glosses
// tailored to "who lived when" rather than "what belongs to this era".
const CONTRIB_ERA_GLOSS: Record<Exclude<EraId, 'all'>, { gloss: string; glossDeva: string }> = {
  vedic: {
    gloss: 'The ṛṣis who heard the hymns and the brahmavādinīs who pressed them into dialogue — the seer-poets at the source of the canon.',
    glossDeva: 'ज्यांनी मंत्र ऐकले ते ऋषी आणि ज्यांनी संवादातून ते उलगडले त्या ब्रह्मवादिनी — ग्रंथसंपदेच्या उगमस्थानी असलेले द्रष्टे.',
  },
  classical: {
    gloss: 'The sūtra-kāras of the six darśanas, the founders of the heterodox schools, the grammarians, mathematicians, vaidyas, dramatists and the first Vedānta ācārya.',
    glossDeva: 'षड्दर्शनांचे सूत्रकार, नास्तिक संप्रदायांचे संस्थापक, व्याकरणी, गणितज्ञ, वैद्य, नाट्यकार आणि वेदान्ताचे आदि-आचार्य.',
  },
  medieval: {
    gloss: 'The Vedānta ācāryas after Śaṅkara, the bhakti poet-saints in every regional language, the Kerala mathematicians and the first Sikh gurus.',
    glossDeva: 'शङ्करोत्तर वेदान्ताचार्य, प्रत्येक लोकभाषेतले संतकवी, केरळचे गणितज्ञ आणि सिख गुरूंची प्रारंभिक परंपरा.',
  },
  modern: {
    gloss: 'The reformers, mystics, jurists and freedom-fighters who re-read the tradition in the languages of the colonial encounter and the republic.',
    glossDeva: 'वसाहतकाल आणि प्रजासत्ताकाच्या संदर्भात परंपरेचे पुनर्वाचन करणारे सुधारक, संत, विधिज्ञ आणि स्वातंत्र्यसैनिक.',
  },
};

function eraTitle(era: EraId, lang: Lang): string {
  return lang === 'mr' ? ERA_META[era].deva : ERA_META[era].title;
}
function eraPeriod(era: EraId, lang: Lang): string {
  return lang === 'mr' ? ERA_META[era].periodDeva : ERA_META[era].period;
}
function eraGloss(era: EraId, lang: Lang): string {
  return lang === 'mr' ? ERA_META[era].glossDeva : ERA_META[era].gloss;
}

// ---- concepts rendering -------------------------------------------------------
// Mirrors DOMAINS_META in components/Concepts.tsx (site copy, both languages).

const DOMAIN_META: Record<(typeof CONCEPT_DOMAINS)[number], { label: string; deva: string; gloss: string; glossDeva: string }> = {
  order: {
    label: 'Cosmic & metaphysical order', deva: 'वैश्विक व तात्त्विक व्यवस्था',
    gloss: 'The structure of reality — from the cosmic order of ṛta to the ultimate ground of Brahman and the self.',
    glossDeva: 'वास्तवाची रचना — ऋताच्या विश्वनियमापासून ब्रह्म व आत्म्याच्या परम आधारापर्यंत.',
  },
  ethics: {
    label: 'Action, ethics & society', deva: 'कर्म, नीती व समाज',
    gloss: 'How one ought to live — duty, the law of action, and the balanced aims of a human life.',
    glossDeva: 'कसे जगावे — कर्तव्य, कर्माचा नियम आणि मानवी जीवनाची संतुलित उद्दिष्टे.',
  },
  liberation: {
    label: 'Bondage & liberation', deva: 'बंधन व मुक्ती',
    gloss: 'The cycle of rebirth and the disciplines by which it is brought to an end.',
    glossDeva: 'पुनर्जन्माचे चक्र आणि ज्या साधनांनी त्याचा अंत होतो त्या.',
  },
  mind: {
    label: 'Mind, matter & cosmos', deva: 'मन, द्रव्य व विश्व',
    gloss: 'The analysis of nature — consciousness and matter, the three strands, the elements, and cyclic time.',
    glossDeva: 'निसर्गाचे विश्लेषण — चैतन्य व द्रव्य, तीन गुण, पंचभूते आणि चक्रीय काल.',
  },
  knowledge: {
    label: 'Knowledge & epistemology', deva: 'ज्ञान व ज्ञानमीमांसा',
    gloss: 'How we know what we know — the valid means of knowledge shared across the schools.',
    glossDeva: 'आपण कसे जाणतो — सर्व शाखांत समाईक असलेली ज्ञानाची वैध साधने.',
  },
  heterodox: {
    label: 'Heterodox concepts — Bauddha & Jaina', deva: 'नास्तिक संकल्पना — बौद्ध व जैन',
    gloss: 'Ideas from the schools that stand outside Vedic authority — suffering, no-self, emptiness, non-harm.',
    glossDeva: 'वैदिक प्रामाण्याबाहेरील शाखांतील कल्पना — दुःख, अनात्म, शून्यता, अहिंसा.',
  },
  aesthetics: {
    label: 'Aesthetics & language', deva: 'सौंदर्यशास्त्र व भाषा',
    gloss: 'The theory of art and meaning — aesthetic flavour and the power of poetic suggestion.',
    glossDeva: 'कला व अर्थाचा सिद्धान्त — रससिद्धान्त आणि काव्यात्मक सूचनेची शक्ती.',
  },
};

// The Marathi data mirrors often repeat the Devanāgarī spelling as both
// `name` and `deva` (the English side keeps the Roman/IAST name in `name`);
// only show the `— deva` suffix when it adds information.
function withDeva(name: string, deva: string | undefined): string {
  return deva && deva !== name ? `${name} — ${deva}` : name;
}

function renderConceptEntry(c: any, lang: Lang): string {
  const s = STR[lang];
  const out: string[] = [];
  out.push(`### ${withDeva(c.name, c.deva)}`);
  out.push(`**${s.source}:** ${c.source} · **${s.gloss}:** ${c.gloss}`);
  out.push(c.blurb);
  if (c.tags?.length) out.push(`*${c.tags.join(' · ')}*`);

  const d = c.detail;
  if (d) {
    out.push(d.intro);
    if (d.aspects?.length) {
      out.push([`#### ${s.aspects}`, ...d.aspects.map((a: string) => `- ${a}`)].join('\n'));
    }
    out.push(`**${s.significance}:** ${d.significance}`);
    if (d.origin) {
      out.push(`**${s.origin} — ${d.origin.label}:** ${d.origin.explainer || ''}`.trim());
    }
    if (d.references?.length) {
      out.push([
        `#### ${s.references}`,
        ...d.references.map((r: any) => `- **${r.label}:** ${r.explainer || ''}`.trim()),
      ].join('\n'));
    }
  }

  return out.join('\n\n');
}

function renderConcepts(lang: Lang, disclaimer: string): string {
  const s = STR[lang];
  const concepts = lang === 'mr' ? CONCEPTS_MR : CONCEPTS;
  const lines: string[] = [];
  lines.push(`# ${s.conceptsTitle}`);
  lines.push('');
  lines.push(s.conceptsIntro);
  lines.push('');
  lines.push(`> ${disclaimer}`);

  for (const domainId of CONCEPT_DOMAINS) {
    const meta = DOMAIN_META[domainId];
    const inDomain = concepts.filter((c: any) => c.domain === domainId);
    if (!inDomain.length) continue;
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(`## ${lang === 'mr' ? meta.deva : meta.label}`);
    lines.push(lang === 'mr' ? meta.glossDeva : meta.gloss);
    for (const c of inDomain) {
      lines.push('');
      lines.push(renderConceptEntry(c, lang));
    }
  }

  lines.push('');
  return lines.join('\n');
}

// ---- contributors rendering ---------------------------------------------------

function renderContributorEntry(c: any, lang: Lang): string {
  const s = STR[lang];
  const out: string[] = [];
  const epithet = c.epithet ? ` · ${c.epithet}` : '';
  out.push(`### ${withDeva(c.name, c.deva)}${epithet}`);
  out.push(`**${s.dates}:** ${c.dates} · **${s.tradition}:** ${c.tradition}`);
  out.push(c.blurb);
  if (c.works?.length) out.push(`*${c.works.join(' · ')}*`);

  const d = c.detail;
  if (d) {
    out.push(d.intro);
    if (d.contributions?.length) {
      out.push([`#### ${s.contributions}`, ...d.contributions.map((x: string) => `- ${x}`)].join('\n'));
    }
    out.push(`**${s.legacy}:** ${d.legacy}`);
  }

  return out.join('\n\n');
}

function renderContributors(lang: Lang, disclaimer: string): string {
  const s = STR[lang];
  const contributors = lang === 'mr' ? CONTRIBUTORS_MR : CONTRIBUTORS;
  const lines: string[] = [];
  lines.push(`# ${s.contributorsTitle}`);
  lines.push('');
  lines.push(s.contributorsIntro);
  lines.push('');
  lines.push(`> ${disclaimer}`);

  for (const era of ['vedic', 'classical', 'medieval', 'modern'] as const) {
    const glossPair = CONTRIB_ERA_GLOSS[era];
    const inEra = contributors.filter((c: any) => c.era === era);
    if (!inEra.length) continue;
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(`## ${eraTitle(era, lang)}`);
    lines.push(lang === 'mr' ? glossPair.glossDeva : glossPair.gloss);
    for (const c of inEra) {
      lines.push('');
      lines.push(renderContributorEntry(c, lang));
    }
  }

  lines.push('');
  return lines.join('\n');
}

// ---- living knowledge rendering ------------------------------------------------
// lib/living-knowledge-data.ts — 72 contributions across 9 domains, each with
// a what/when/how structure and an optional "debated claim" editorial flag.

function renderGiftEntry(g: any, lang: Lang): string {
  const s = STR[lang];
  const out: string[] = [];
  out.push(`### ${withDeva(g.name, g.deva)}`);
  if (g.debated) out.push(`*⚠ ${s.lkDebated}*`);
  out.push(g.blurb);
  out.push(`#### ${s.lkWhat}`);
  out.push(g.what);
  out.push(`#### ${s.lkWhen}`);
  out.push(g.when);
  out.push(`#### ${s.lkHow}`);
  out.push(g.how);
  return out.join('\n\n');
}

function renderLivingKnowledge(lang: Lang, disclaimer: string): string {
  const s = STR[lang];
  const domainMeta = lang === 'mr' ? LK_DOMAIN_META_MR : LK_DOMAIN_META;
  const gifts = lang === 'mr' ? LIVING_KNOWLEDGE_MR : LIVING_KNOWLEDGE;
  const note = lang === 'mr' ? LK_NOTE_MR : LK_NOTE;

  const lines: string[] = [];
  lines.push(`# ${s.lkTitle}`);
  lines.push('');
  lines.push(s.lkMeta.replace('{count}', String(gifts.length)));
  lines.push('');
  lines.push(`> ${note}`);
  lines.push('');
  lines.push(`> ${disclaimer}`);

  for (const domainId of LK_DOMAINS) {
    const meta = domainMeta.find((d: any) => d.id === domainId);
    const inDomain = gifts.filter((g: any) => g.domain === domainId);
    if (!meta || !inDomain.length) continue;
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(`## ${meta.label}`);
    lines.push(meta.gloss);
    for (const g of inDomain) {
      lines.push('');
      lines.push(renderGiftEntry(g, lang));
    }
  }

  lines.push('');
  return lines.join('\n');
}

// ---- section-level rendering (the per-era files) -----------------------------

function topicLabel(topicId: string, lang: Lang): string {
  const list = (lang === 'mr' ? FILTERS_MR : FILTERS).topic;
  return list.find((t) => t.id === topicId)?.label || topicId;
}

function run(lang: Lang) {
  const outDir = OUT_DIR[lang];
  mkdirSync(outDir, { recursive: true });
  const s = STR[lang];

  const sectionList = lang === 'mr' ? SECTIONS_MR : SECTIONS;
  const byEra = new Map<string, typeof SECTIONS>();
  for (const era of ERA_ORDER) byEra.set(era, [] as any);
  for (const section of sectionList) {
    if (!byEra.has(section.era)) byEra.set(section.era, [] as any);
    (byEra.get(section.era) as any[]).push(section);
  }

  const dataFile = lang === 'mr' ? '`lib/data_mr.ts`' : '`lib/data.ts`';
  const eraDisclaimer = lang === 'mr'
    ? `${dataFile} आणि संबंधित \`lib/*-data.ts\` फाइल्समधून \`scripts/export-eras-md.ts\` द्वारे स्वयंचलितपणे तयार केले. हाताने संपादन करू नका — पुन्हा तयार करा.`
    : `Auto-generated from ${dataFile} and the corresponding \`lib/*-data.ts\` files by \`scripts/export-eras-md.ts\`. Do not hand-edit — regenerate instead.`;
  const introDisclaimer = lang === 'mr'
    ? '`lib/intro-data_mr.ts` वरून — संकेतस्थळाच्या प्रस्तावना विभागामागील निबंध — `scripts/export-eras-md.ts` द्वारे स्वयंचलितपणे तयार केले. हाताने संपादन करू नका — पुन्हा तयार करा.'
    : 'Auto-generated from `lib/intro-data.ts` — the narrative essay behind the site\'s Introduction component — by `scripts/export-eras-md.ts`. Do not hand-edit — regenerate instead.';
  const conceptsDisclaimer = lang === 'mr'
    ? '`lib/concepts-data_mr.ts` वरून `scripts/export-eras-md.ts` द्वारे स्वयंचलितपणे तयार केले. हाताने संपादन करू नका — पुन्हा तयार करा.'
    : 'Auto-generated from `lib/concepts-data.ts` by `scripts/export-eras-md.ts`. Do not hand-edit — regenerate instead.';
  const contributorsDisclaimer = lang === 'mr'
    ? '`lib/contributors-data_mr.ts` वरून `scripts/export-eras-md.ts` द्वारे स्वयंचलितपणे तयार केले. हाताने संपादन करू नका — पुन्हा तयार करा.'
    : 'Auto-generated from `lib/contributors-data.ts` by `scripts/export-eras-md.ts`. Do not hand-edit — regenerate instead.';
  const livingKnowledgeDisclaimer = lang === 'mr'
    ? '`lib/living-knowledge-data_mr.ts` वरून `scripts/export-eras-md.ts` द्वारे स्वयंचलितपणे तयार केले. हाताने संपादन करू नका — पुन्हा तयार करा.'
    : 'Auto-generated from `lib/living-knowledge-data.ts` by `scripts/export-eras-md.ts`. Do not hand-edit — regenerate instead.';

  const introTitleLine = lang === 'mr'
    ? '- [प्रस्तावना — जिवंत वृक्ष](./introduction.md) — ग्रंथसंपदा कालखंडानुसार कशी वाढली, त्याचा कथात्मक निबंध'
    : '- [Introduction — The Living Tree](./introduction.md) — the narrative essay on how the corpus grew, era by era';
  const conceptsLinkLine = lang === 'mr'
    ? '- [मूलसंकल्पना](./concepts.md) — क्षेत्रानुसार तात्त्विक शब्दसंपत्ती'
    : '- [Core Concepts](./concepts.md) — the philosophical vocabulary, by domain';
  const contributorsLinkLine = lang === 'mr'
    ? '- [योगदाते](./contributors.md) — ऋषी, आचार्य, संत, कवी व शास्त्रज्ञ, कालखंडानुसार'
    : '- [Contributors](./contributors.md) — ṛṣis, ācāryas, saints, poets and scientists, by era';
  const livingKnowledgeLinkLine = lang === 'mr'
    ? '- [जिवंत ज्ञान](./living-knowledge.md) — भारतीय ज्ञानप्रणालींची जगाला देणगी, नऊ क्षेत्रांत'
    : '- [Living Knowledge](./living-knowledge.md) — gifts of Indian knowledge systems to the world, by domain';

  const indexLines = [
    s.indexTitle,
    '',
    s.indexBlurb,
    s.regenCmd,
    s.regenNote,
    '',
    lang === 'en' ? s.marathiLink : s.englishLink,
    '',
    introTitleLine,
    conceptsLinkLine,
    contributorsLinkLine,
    livingKnowledgeLinkLine,
  ];

  writeFileSync(join(outDir, 'introduction.md'), renderIntroduction(lang === 'mr' ? INTRO_MR : INTRO, lang, introDisclaimer) + '\n');
  console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}introduction.md`);

  writeFileSync(join(outDir, 'concepts.md'), renderConcepts(lang, conceptsDisclaimer));
  console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}concepts.md (${(lang === 'mr' ? CONCEPTS_MR : CONCEPTS).length} concepts)`);

  writeFileSync(join(outDir, 'contributors.md'), renderContributors(lang, contributorsDisclaimer));
  console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}contributors.md (${(lang === 'mr' ? CONTRIBUTORS_MR : CONTRIBUTORS).length} contributors)`);

  writeFileSync(join(outDir, 'living-knowledge.md'), renderLivingKnowledge(lang, livingKnowledgeDisclaimer));
  console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}living-knowledge.md (${(lang === 'mr' ? LIVING_KNOWLEDGE_MR : LIVING_KNOWLEDGE).length} gifts)`);

  for (const era of ERA_ORDER) {
    const meta = ERA_META[era];
    const sections = byEra.get(era) || [];
    if (!sections.length) continue;

    const sectionWord = lang === 'mr' ? 'विभाग' : sections.length === 1 ? 'section' : 'sections';
    indexLines.push(`- [${eraTitle(era, lang)}](./${meta.file}) — ${eraPeriod(era, lang)} · ${sections.length} ${sectionWord}`);

    const lines: string[] = [];
    lines.push(lang === 'mr' ? `# ${eraTitle(era, lang)}` : `# ${eraTitle(era, lang)} — ${meta.deva}`);
    lines.push(`*${eraPeriod(era, lang)}*`);
    lines.push('');
    lines.push(eraGloss(era, lang));
    lines.push('');
    lines.push(`> ${eraDisclaimer}`);

    for (const section of sections as any[]) {
      lines.push('');
      lines.push('---');
      lines.push('');
      lines.push(`## ${section.n}. ${section.title} — ${section.deva}`);
      lines.push(`\`${section.id}\` · ${section.tag} · ${topicLabel(section.topic, lang)} · ${section.count}`);
      lines.push('');
      lines.push(section.blurb);
      if (section.facets?.length) {
        lines.push('');
        lines.push(`*${section.facets.join(' · ')}*`);
      }
      lines.push('');
      lines.push(`### ${s.detailContent}`);
      lines.push('');
      lines.push(renderSectionDetail(section.id, lang));
    }

    lines.push('');
    writeFileSync(join(outDir, meta.file), lines.join('\n'));
    console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}${meta.file} (${sections.length} sections)`);
  }

  indexLines.push('');
  writeFileSync(join(outDir, 'README.md'), indexLines.join('\n'));
  console.log(`Wrote docs/eras/${lang === 'mr' ? 'mr/' : ''}README.md`);
}

run('en');
run('mr');

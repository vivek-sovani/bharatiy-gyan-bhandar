// Exports the corpus content (lib/*.ts) into human-readable markdown, one file
// per era, for content review. English content only — Marathi lives in the
// matching `_mr` data file for anyone compiling a bilingual pass.
//
//   node --experimental-strip-types scripts/export-eras-md.ts
//
// Reads: lib/data.ts, lib/section-data.ts, and each dedicated *-data.ts file.
// Writes: docs/eras/{vedic,classical,medieval,modern,all-eras}.md

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SECTIONS } from '../lib/data.ts';
import { SECTION_DETAILS } from '../lib/section-data.ts';
import { AGAMAS_DETAILS } from '../lib/agamas-data.ts';
import { DARSHANAS_DETAILS } from '../lib/darshanas-data.ts';
import { ITIHASA_DETAILS } from '../lib/itihasa-data.ts';
import { NASTIKA_DETAILS } from '../lib/nastika-data.ts';
import { PURANAS_DETAILS } from '../lib/puranas-data.ts';
import { UPANISHADS_DETAILS } from '../lib/upanishads-data.ts';
import { UPAVEDAS_DETAILS } from '../lib/upavedas-data.ts';
import { VEDANGAS_DETAILS } from '../lib/vedangas-data.ts';
import { SCIENCES } from '../lib/sciences-data.ts';
import {
  SHAKHAS_DATA, SUKTAS_DATA,
  BRAHMANAS_DATA, BRAHMANAS_TEACHINGS_DATA,
  ARANYAKAS_DATA, ARANYAKAS_TEACHINGS_DATA,
  UPANISHADS_DATA, UPANISHADS_TEACHINGS_DATA,
} from '../lib/vedasData.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'docs/eras');

// ---- generic entry renderer -------------------------------------------------
// Every content shape in this codebase — SectionItem, *Details, ScienceItem,
// VedicText, VedicTeaching — reduces to the same pattern: a title (+ deva
// script), some short scalar fields, one or two long-text fields, an optional
// quoted verse, and arrays of either strings or {name/desc} sub-entries. One
// renderer walks all of them instead of one bespoke renderer per data file.

const SKIP = new Set(['id', 'href', 'interactive']);
// lib/vedasData.ts bundles a Marathi-script duplicate of several fields
// (statusDeva, descDeva, ...) inline rather than in a separate _mr file.
// This export is English-only, so drop those alongside the plain `deva` field.
const isDevaDup = (key: string) => key !== 'deva' && /Deva$/.test(key);
const TITLE_KEYS = ['title', 'name', 'heading'];
const LONG_TEXT_KEYS = ['tldr', 'summary', 'desc', 'lede', 'blurb'];
const LIST_TEXT_KEYS = ['narrative', 'explanation'];
const VERSE_KEYS = ['opening', 'verse', 'source'];
const INLINE_LIST_KEYS = ['meta', 'facets'];

function humanize(key: string): string {
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

function renderEntry(entry: any, level: number): string {
  const out: string[] = [];
  const devaSuffix = entry.deva ? ` — ${entry.deva}` : '';
  const epithetSuffix = entry.epithet ? ` · ${entry.epithet}` : '';
  out.push(`${'#'.repeat(level)} ${titleOf(entry)}${devaSuffix}${epithetSuffix}`);

  const metaScalars: string[] = [];
  for (const [k, v] of Object.entries(entry)) {
    if (SKIP.has(k) || TITLE_KEYS.includes(k) || k === 'deva' || k === 'epithet' || isDevaDup(k)) continue;
    if (typeof v === 'string' && !LONG_TEXT_KEYS.includes(k) && v.length < 60) {
      metaScalars.push(`**${humanize(k)}:** ${v}`);
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
      out.push(`${'#'.repeat(Math.min(level + 1, 6))} ${humanize(k)}`);
      for (const item of v as any[]) {
        const t = item.name || item.title || item.heading;
        if (t) {
          const d = item.deva ? ` (${item.deva})` : '';
          const body = item.desc || (Array.isArray(item.body) ? item.body.join(' ') : '');
          out.push(`- **${t}${d}:**${body ? ' ' + body : ''}`.trim());
          if (item.figure) out.push(`  *(figure: ${item.figure})*`);
        } else if (isVerseObj(item)) {
          out.push(renderVerse(item));
        }
      }
    }
  }

  return out.join('\n\n');
}

function renderEntries(entries: any[], level: number): string {
  return entries.map((e) => renderEntry(e, level)).join('\n\n');
}

// ---- section-level rendering ------------------------------------------------

const VEDA_LABELS: Record<string, string> = {
  rig: 'Ṛgveda', yajur: 'Yajurveda', sama: 'Sāmaveda', atharva: 'Atharvaveda',
};

function renderVedasDetail(): string {
  const out: string[] = [];
  for (const vedaId of ['rig', 'yajur', 'sama', 'atharva']) {
    out.push(`#### ${VEDA_LABELS[vedaId]}`);
    const groups: [string, Record<string, any[]>][] = [
      ['Śākhās (recensions)', SHAKHAS_DATA],
      ['Core teachings', SUKTAS_DATA],
      ['Brāhmaṇas', BRAHMANAS_DATA],
      ['Brāhmaṇa teachings', BRAHMANAS_TEACHINGS_DATA],
      ['Āraṇyakas', ARANYAKAS_DATA],
      ['Āraṇyaka teachings', ARANYAKAS_TEACHINGS_DATA],
      ['Upaniṣads of this Veda', UPANISHADS_DATA],
      ['Upaniṣad teachings', UPANISHADS_TEACHINGS_DATA],
    ];
    for (const [label, data] of groups) {
      const items = data[vedaId];
      if (!items || !items.length) continue;
      out.push(`##### ${label}`);
      out.push(renderEntries(items, 6));
    }
  }
  return out.join('\n\n');
}

type DedicatedSpec =
  | { kind: 'record'; record: Record<string, any> }
  | { kind: 'array'; items: any[] }
  | { kind: 'custom'; render: () => string };

const DEDICATED: Record<string, DedicatedSpec> = {
  vedas: { kind: 'custom', render: renderVedasDetail },
  upavedas: { kind: 'record', record: UPAVEDAS_DETAILS },
  vedangas: { kind: 'record', record: VEDANGAS_DETAILS },
  upanishads: { kind: 'record', record: UPANISHADS_DETAILS },
  darshanas: { kind: 'record', record: DARSHANAS_DETAILS },
  'nastika-darshanas': { kind: 'record', record: NASTIKA_DETAILS },
  agamas: { kind: 'record', record: AGAMAS_DETAILS },
  itihasa: { kind: 'record', record: ITIHASA_DETAILS },
  puranas: { kind: 'record', record: PURANAS_DETAILS },
  sciences: { kind: 'array', items: SCIENCES },
};

function renderSectionDetail(id: string): string {
  const dedicated = DEDICATED[id];
  if (dedicated) {
    if (dedicated.kind === 'custom') return dedicated.render();
    if (dedicated.kind === 'array') return renderEntries(dedicated.items, 4);
    return renderEntries(Object.values(dedicated.record), 4);
  }

  const generic = (SECTION_DETAILS as Record<string, any>)[id];
  if (!generic) return '*(no detail content on file)*';

  const out: string[] = [];
  if (generic.lede) out.push(generic.lede);
  if (generic.items) out.push(renderEntries(generic.items, 4));
  return out.join('\n\n');
}

// ---- era grouping ------------------------------------------------------------

const ERA_META: Record<string, { file: string; title: string; deva: string; range: string; blurb: string }> = {
  vedic: {
    file: 'vedic.md',
    title: 'The Vedic Era',
    deva: 'वैदिक काल',
    range: 'c. 1500–500 BCE',
    blurb: 'The oldest stratum — the four Vedas, their applied Upaveda sciences, and the six Vedāṅga disciplines that make the Veda intelligible.',
  },
  classical: {
    file: 'classical.md',
    title: 'The Classical Era',
    deva: 'शास्त्रीय काल',
    range: 'c. 500 BCE – 800 CE',
    blurb: 'The great flowering of darśana, śāstra and kāvya — Upaniṣads, the six āstika and three nāstika schools, Itihāsa, Purāṇas, Āgamas, the dharma/artha/kāma-śāstras, and classical literature.',
  },
  medieval: {
    file: 'medieval.md',
    title: 'The Medieval Era',
    deva: 'मध्ययुगीन काल',
    range: 'c. 800 – 1800 CE',
    blurb: 'The bhakti movements and vernacular sant traditions that carried the corpus into everyday devotional life.',
  },
  modern: {
    file: 'modern.md',
    title: 'The Modern Era',
    deva: 'आधुनिक काल',
    range: 'c. 1800 CE – present',
    blurb: 'The re-reading of the Indic corpus under and after colonial rule.',
  },
  all: {
    file: 'all-eras.md',
    title: 'Across All Eras',
    deva: 'सर्वकालीन',
    range: 'spanning every period above',
    blurb: 'Material that runs across every era rather than belonging to one: the śruti/smṛti frame itself, living practice, and the parallel canons standing alongside the Vedic line.',
  },
};

const ERA_ORDER = ['vedic', 'classical', 'medieval', 'modern', 'all'];

function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const byEra = new Map<string, typeof SECTIONS>();
  for (const era of ERA_ORDER) byEra.set(era, [] as any);
  for (const section of SECTIONS) {
    if (!byEra.has(section.era)) byEra.set(section.era, [] as any);
    (byEra.get(section.era) as any[]).push(section);
  }

  const indexLines = [
    '# Corpus Content by Era',
    '',
    'Auto-generated export of the corpus data in `lib/*.ts`, grouped by era for content review.',
    'Regenerate with `node --experimental-strip-types scripts/export-eras-md.ts`.',
    'English content only — the Marathi text lives in the matching `_mr` data file for each module.',
    '',
  ];

  for (const era of ERA_ORDER) {
    const meta = ERA_META[era];
    const sections = byEra.get(era) || [];
    if (!sections.length) continue;

    indexLines.push(`- [${meta.title}](./${meta.file}) — ${meta.range} · ${sections.length} sections`);

    const lines: string[] = [];
    lines.push(`# ${meta.title} — ${meta.deva}`);
    lines.push(`*${meta.range}*`);
    lines.push('');
    lines.push(meta.blurb);
    lines.push('');
    lines.push(`> Auto-generated from \`lib/data.ts\` and the corresponding \`lib/*-data.ts\` files by \`scripts/export-eras-md.ts\`. Do not hand-edit — regenerate instead.`);

    for (const section of sections as any[]) {
      lines.push('');
      lines.push('---');
      lines.push('');
      lines.push(`## ${section.n}. ${section.title} — ${section.deva}`);
      lines.push(`\`${section.id}\` · ${section.tag} · ${section.topic} · ${section.count}`);
      lines.push('');
      lines.push(section.blurb);
      if (section.facets?.length) {
        lines.push('');
        lines.push(`*${section.facets.join(' · ')}*`);
      }
      lines.push('');
      lines.push('### Detail content');
      lines.push('');
      lines.push(renderSectionDetail(section.id));
    }

    lines.push('');
    writeFileSync(join(OUT_DIR, meta.file), lines.join('\n'));
    console.log(`Wrote docs/eras/${meta.file} (${sections.length} sections)`);
  }

  indexLines.push('');
  writeFileSync(join(OUT_DIR, 'README.md'), indexLines.join('\n'));
  console.log('Wrote docs/eras/README.md');
}

main();

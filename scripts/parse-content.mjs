// Parses the two source markdown collections into committed TS data files.
//
//   node scripts/parse-content.mjs
//
// Reads (from the user's Downloads, override via env):
//   MAHAVAKYA_MD  default ~/Downloads/mahavakya_collection_emojified.md
//   SUBHASHIT_MD  default ~/Downloads/bhartuhari_subhashit_complete.md
// Writes:
//   lib/mahavakya-data.ts   (50 mahāvākyas, both languages bundled)
//   lib/subhashit-data.ts   (300 subhāṣitas, both languages bundled)

import { readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DL = join(homedir(), 'Downloads');

const MAHAVAKYA_MD = process.env.MAHAVAKYA_MD || join(DL, 'mahavakya_collection_emojified.md');
const SUBHASHIT_MD = process.env.SUBHASHIT_MD || join(DL, 'bhartuhari_subhashit_complete.md');

// ---- helpers ---------------------------------------------------------------

// Strip markdown emphasis (**bold**, *italic*) and trim. Leaves text content.
function clean(s) {
  return s
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .trim();
}

// Join an array of source lines into paragraphs: blank lines separate paragraphs.
function paragraphs(lines) {
  const out = [];
  let cur = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (line === '' || /^-{3,}$/.test(line)) {
      if (cur.length) { out.push(cur.join(' ')); cur = []; }
    } else {
      cur.push(line);
    }
  }
  if (cur.length) out.push(cur.join(' '));
  return out.map(clean).filter(Boolean).join('\n\n');
}

// Strip leading "> " blockquote markers and join lines with \n.
function blockquote(lines) {
  return lines
    .map((l) => l.replace(/^\s*>\s?/, '').trim())
    .filter((l) => l && !/^-{3,}$/.test(l))
    .map(clean)
    .join('\n');
}

function tsString(s) {
  return JSON.stringify(s);
}

// ---- mahāvākya parser ------------------------------------------------------

function parseMahavakyas(md) {
  const lines = md.split('\n');
  // entry boundaries: ### ... ॥ N ॥ <title>
  const entries = [];
  let cur = null;
  const headRe = /^###\s+.*॥\s*[०-९0-9]+\s*॥\s*(.+?)\s*$/;
  for (const line of lines) {
    const m = line.match(headRe);
    if (m) {
      if (cur) entries.push(cur);
      cur = { title: m[1].trim(), body: [] };
    } else if (cur) {
      cur.body.push(line);
    }
  }
  if (cur) entries.push(cur);

  return entries.map((e, i) => {
    const body = e.body;
    // source line: **स्रोत:** X | **परंपरा:** Y | **Code:** Z
    let source = '';
    const srcLine = body.find((l) => l.includes('स्रोत:'));
    if (srcLine) {
      const parts = srcLine.split('|');
      source = clean(parts[0].replace(/.*स्रोत:\**/, ''));
    }

    // split body into #### field sections
    const fields = {};
    let key = null;
    let buf = [];
    const fieldRe = /^####\s+(.+?)\s*$/;
    const flush = () => { if (key) fields[key] = buf; buf = []; };
    for (const line of body) {
      const m = line.match(fieldRe);
      if (m) {
        flush();
        const name = m[1];
        if (name.includes('मूळ श्लोक')) key = 'deva';
        else if (name.includes('लिप्यंतरण')) key = 'translit';
        else if (name.includes('English Meaning')) key = 'meaningEn';
        else if (name.includes('English Explanation')) key = 'explanationEn';
        else if (name.includes('मराठी अर्थ')) key = 'meaningMr';
        else if (name.includes('मराठी विवेचन')) key = 'explanationMr';
        else key = null;
      } else if (key) {
        buf.push(line);
      }
    }
    flush();

    // explanation may end with a trailing "*— source*" attribution line; drop it.
    const dropAttrib = (arr) =>
      (arr || []).filter((l) => !/^\s*\*?—/.test(l.trim()));

    return {
      id: i + 1,
      title: clean(e.title),
      deva: blockquote(fields.deva || []),
      translit: (fields.translit || [])
        .map((l) => l.trim())
        .filter((l) => l && !/^```/.test(l) && !/Pronunciation/i.test(l))
        .map(clean)
        .join('\n'),
      source,
      meaningEn: paragraphs(fields.meaningEn || []),
      explanationEn: paragraphs(dropAttrib(fields.explanationEn)),
      meaningMr: paragraphs(fields.meaningMr || []),
      explanationMr: paragraphs(dropAttrib(fields.explanationMr)),
    };
  });
}

// ---- subhāṣita parser ------------------------------------------------------

function parseSubhashitas(md) {
  const lines = md.split('\n');
  const entries = [];
  let cur = null;
  const headRe = /^###\s+.*·\s*Verse\s+\d+\s*$/;
  for (const line of lines) {
    if (headRe.test(line)) {
      if (cur) entries.push(cur);
      cur = { body: [] };
    } else if (cur) {
      cur.body.push(line);
    }
  }
  if (cur) entries.push(cur);

  return entries.map((e, i) => {
    const body = e.body;
    // split into **Field** sections
    const fields = {};
    let key = null;
    let buf = [];
    const fieldRe = /^\*\*(.+?)\*\*\s*$/;
    const flush = () => { if (key) fields[key] = buf; buf = []; };
    for (const line of body) {
      const m = line.trim().match(fieldRe);
      if (m && !line.trim().startsWith('> ')) {
        flush();
        const name = m[1];
        if (name === 'Sanskrit Shloka') key = 'deva';
        else if (name === 'English Transliteration') key = 'translit';
        else if (name === 'English Meaning') key = 'meaningEn';
        else if (name === 'मराठी अर्थ') key = 'meaningMr';
        else key = null;
      } else if (key) {
        buf.push(line);
      }
    }
    flush();

    // English Meaning block = plain meaning paragraph + italic note (+ source line)
    const splitMeaning = (arr, takeSource) => {
      const paras = [];
      let b = [];
      for (const raw of arr || []) {
        const l = raw.trim();
        if (l === '---') continue;
        if (l === '') { if (b.length) { paras.push(b.join(' ')); b = []; } }
        else b.push(l);
      }
      if (b.length) paras.push(b.join(' '));
      // last para that is just "— X, verse N" is the source
      let source = '';
      const cleaned = [];
      for (const p of paras) {
        const stripped = clean(p);
        const sm = stripped.match(/^—\s*(.+)$/);
        if (sm) { if (takeSource) source = sm[1].trim(); continue; }
        cleaned.push(stripped);
      }
      const meaning = cleaned[0] || '';
      const explanation = cleaned.slice(1).join('\n\n');
      return { meaning, explanation, source };
    };

    const en = splitMeaning(fields.meaningEn, true);
    const mr = splitMeaning(fields.meaningMr, false);

    // source like "Nītiśataka, verse 20" -> shataka = first token before comma
    let shataka = '';
    if (en.source) shataka = en.source.split(',')[0].trim();

    return {
      id: i + 1,
      shataka,
      deva: blockquote(fields.deva || []),
      translit: blockquote(fields.translit || []),
      meaningEn: en.meaning,
      explanationEn: en.explanation,
      meaningMr: mr.meaning,
      explanationMr: mr.explanation,
      source: en.source,
    };
  });
}

// ---- emit ------------------------------------------------------------------

function emitMahavakyas(items) {
  const header = `// AUTO-GENERATED by scripts/parse-content.mjs — do not edit by hand.
// Source: mahavakya_collection_emojified.md (${items.length} mahāvākyas).

export type Mahavakya = {
  id: number;
  title: string;
  deva: string;
  translit: string;
  source: string;
  meaningEn: string;
  explanationEn: string;
  meaningMr: string;
  explanationMr: string;
};

export const MAHAVAKYAS: Mahavakya[] = [
`;
  const rows = items
    .map(
      (m) => `  {
    id: ${m.id},
    title: ${tsString(m.title)},
    deva: ${tsString(m.deva)},
    translit: ${tsString(m.translit)},
    source: ${tsString(m.source)},
    meaningEn: ${tsString(m.meaningEn)},
    explanationEn: ${tsString(m.explanationEn)},
    meaningMr: ${tsString(m.meaningMr)},
    explanationMr: ${tsString(m.explanationMr)},
  },`
    )
    .join('\n');
  return header + rows + '\n];\n';
}

function emitSubhashitas(items) {
  const header = `// AUTO-GENERATED by scripts/parse-content.mjs — do not edit by hand.
// Source: bhartuhari_subhashit_complete.md (${items.length} subhāṣitas).

export type Subhashit = {
  id: number;
  shataka: string;
  deva: string;
  translit: string;
  meaningEn: string;
  explanationEn: string;
  meaningMr: string;
  explanationMr: string;
  source: string;
};

export const SUBHASHITS: Subhashit[] = [
`;
  const rows = items
    .map(
      (s) => `  {
    id: ${s.id},
    shataka: ${tsString(s.shataka)},
    deva: ${tsString(s.deva)},
    translit: ${tsString(s.translit)},
    meaningEn: ${tsString(s.meaningEn)},
    explanationEn: ${tsString(s.explanationEn)},
    meaningMr: ${tsString(s.meaningMr)},
    explanationMr: ${tsString(s.explanationMr)},
    source: ${tsString(s.source)},
  },`
    )
    .join('\n');
  return header + rows + '\n];\n';
}

// ---- run -------------------------------------------------------------------

const mahavakyas = parseMahavakyas(readFileSync(MAHAVAKYA_MD, 'utf8'));
const subhashitas = parseSubhashitas(readFileSync(SUBHASHIT_MD, 'utf8'));

writeFileSync(join(ROOT, 'lib/mahavakya-data.ts'), emitMahavakyas(mahavakyas));
writeFileSync(join(ROOT, 'lib/subhashit-data.ts'), emitSubhashitas(subhashitas));

console.log(`Wrote lib/mahavakya-data.ts  (${mahavakyas.length} mahāvākyas)`);
console.log(`Wrote lib/subhashit-data.ts  (${subhashitas.length} subhāṣitas)`);

// quick sanity warnings
const warn = (label, arr, fields) => {
  arr.forEach((x) => {
    for (const f of fields) {
      if (!x[f]) console.warn(`  ! ${label} #${x.id} missing ${f}`);
    }
  });
};
warn('mahavakya', mahavakyas, ['title', 'deva', 'meaningEn', 'explanationEn', 'meaningMr', 'explanationMr']);
warn('subhashit', subhashitas, ['deva', 'meaningEn', 'explanationEn', 'meaningMr', 'source']);

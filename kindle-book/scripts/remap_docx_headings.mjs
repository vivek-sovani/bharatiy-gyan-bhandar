// Produces a docx-target HTML variant with a semantically correct heading
// outline (Part > Chapter > Item > Veda-layer), WITHOUT touching the EPUB's
// manuscript-en.html or theme.css. Renaming a tag with cheerio preserves all
// attributes/children/closing tags automatically (no regex collision risk).
import { readFileSync, writeFileSync } from 'fs';
import * as cheerio from 'cheerio';

const SRC = process.argv[2] || '../build/manuscript-en.html';
const OUT = process.argv[3] || '../build/manuscript-en-docx.html';

const html = readFileSync(SRC, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

function renameTag($el, newTag) {
  const el = $el.get(0);
  el.tagName = newTag;
  el.name = newTag;
}

// Order matters: do the "shrinking" renames before they'd collide with a
// still-untouched tag of the target level.
$('h2.item-title').each((_, el) => renameTag($(el), 'h3'));
$('h3.veda-layer-title').each((_, el) => renameTag($(el), 'h4'));
$('h1.chapter-title').each((_, el) => renameTag($(el), 'h2'));
$('h2.part-title').each((_, el) => renameTag($(el), 'h1'));

writeFileSync(OUT, $.html());

const count = (sel) => $(sel).length;
console.log('Rewrote headings ->', OUT);
console.log('  h1.part-title:', count('h1.part-title'));
console.log('  h2.chapter-title:', count('h2.chapter-title'));
console.log('  h3.item-title:', count('h3.item-title'));
console.log('  h4.veda-layer-title:', count('h4.veda-layer-title'));

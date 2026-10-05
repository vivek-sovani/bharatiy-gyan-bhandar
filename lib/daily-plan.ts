// The daily WhatsApp posts: one reading step per post along the Complete Path, repeating after the
// last step. Which post is next is tracked by the poster (see DailyPost), not by the calendar, so a
// missed day never moves the sequence on. The message text lives here; the path is in journeys-data.

import { COMPLETE_PATH_ID, JOURNEYS as JOURNEYS_EN, type JourneyStep } from './journeys-data';
import { JOURNEYS as JOURNEYS_MR } from './journeys-data_mr';
import { SECTIONS as SECTIONS_EN } from './data';
import { SECTIONS as SECTIONS_MR } from './data_mr';
import { SECTION_DETAILS as DETAILS_EN } from './section-data';
import { SECTION_DETAILS as DETAILS_MR } from './section-data_mr';
import { LIVING_KNOWLEDGE as GIFTS_EN } from './living-knowledge-data';
import { LIVING_KNOWLEDGE as GIFTS_MR } from './living-knowledge-data_mr';

type Lang = 'en' | 'mr';

export function planSteps(lang: Lang): JourneyStep[] {
  return (lang === 'mr' ? JOURNEYS_MR : JOURNEYS_EN).find((j) => j.id === COMPLETE_PATH_ID)!.steps;
}

export const DAILY_LENGTH = planSteps('en').length;

// ── Message content ───────────────────────────────────────────────────────────

export type StepContent = { title: string; deva: string; summary: string; shloka?: { deva: string; cite: string } };

export function stepContent(path: string, lang: Lang): StepContent {
  const parts = path.split('/').filter(Boolean);
  const sections = lang === 'mr' ? SECTIONS_MR : SECTIONS_EN;
  const details = lang === 'mr' ? DETAILS_MR : DETAILS_EN;

  if (parts.length === 1) {
    const s = sections.find((x) => x.id === parts[0])!;
    return { title: s.title, deva: s.deva, summary: s.blurb };
  }
  if (parts[0] === 'living-knowledge') {
    const gifts = lang === 'mr' ? GIFTS_MR : GIFTS_EN;
    const g = gifts.find((x) => x.id === parts[1])!;
    return { title: g.name, deva: g.deva, summary: g.blurb };
  }
  const item = details[parts[0]]?.items?.find((i) => i.id === parts[1]);
  if (!item) throw new Error(`daily plan: no content for ${path}`);
  return {
    title: item.title,
    deva: item.deva,
    summary: item.summary,
    shloka: item.opening ? { deva: item.opening.deva, cite: item.opening.cite } : undefined,
  };
}

// First sentences up to roughly `maxWords`, so a WhatsApp post stays short.
export function trimSummary(text: string, maxWords: number): string {
  const sentences = text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?।])\s+/);
  let out = '';
  for (const s of sentences) {
    const next = out ? `${out} ${s}` : s;
    if (out && next.split(' ').length > maxWords) break;
    out = next;
  }
  const words = out.split(' ');
  return words.length > maxWords + 12 ? words.slice(0, maxWords).join(' ') + '…' : out;
}

const DEVA_DIGITS = '०१२३४५६७८९';
const toDeva = (n: number) => String(n).replace(/\d/g, (d) => DEVA_DIGITS[+d]);

// The ready-to-send WhatsApp message: Marathi then English, one link.
export function buildWhatsAppMessage(index: number, siteUrl: string): string {
  const en = planSteps('en')[index];
  const mr = planSteps('mr')[index];
  const ce = stepContent(en.path, 'en');
  const cm = stepContent(mr.path, 'mr');
  const day = index + 1;
  const link = `${siteUrl}${en.path}?j=${COMPLETE_PATH_ID}&s=${index}`;

  const lines = [
    `📖 *दिवस ${toDeva(day)} · Day ${day}*`,
    '',
    `*${cm.title}*`,
    mr.why,
    trimSummary(cm.summary, 32),
    '',
    `*${ce.title}*`,
    en.why,
    trimSummary(ce.summary, 32),
    '',
    `⏱ ${toDeva(en.minutes)} मिनिटे · ${en.minutes} min read`,
    `👉 पुढे वाचा · Read more:`,
    link,
  ];
  return lines.join('\n');
}

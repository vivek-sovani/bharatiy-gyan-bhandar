'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Glyph } from './Ornaments';
import { COMPLETE_PATH_ID } from '@/lib/journeys-data';
import { DAILY_LENGTH, buildWhatsAppMessage, planSteps } from '@/lib/daily-plan';

// Links in a posted message must always point at the live site, whatever the local base path is.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vivek-sovani.github.io/bharatiy-gyan-bhandar';

const KEY = 'bgb-daily-progress';

// `next` counts posts sent so far (it keeps growing past the end of the path, which wraps round).
// The sequence moves only when a post is marked as sent, so a missed day changes nothing.
type Progress = { next: number; log: Record<number, string> };
const EMPTY: Progress = { next: 0, log: {} };

const isoToday = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

// WhatsApp formats *text* as bold; show the same in the preview.
function Bubble({ text }: { text: string }) {
  return (
    <div className="dp-bubble">
      {text.split('\n').map((line, i) => (
        <p key={i}>
          {line.split(/(\*[^*]+\*)/g).map((seg, j) =>
            seg.startsWith('*') && seg.endsWith('*') ? <strong key={j}>{seg.slice(1, -1)}</strong> : seg,
          )}
        </p>
      ))}
    </div>
  );
}

export default function DailyPost() {
  const [prog, setProg] = useState<Progress | null>(null);
  const [view, setView] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setProg(raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY);
    } catch {
      setProg(EMPTY);
    }
  }, []);

  const save = useCallback((p: Progress) => {
    setProg(p);
    setView(null);
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* progress then lasts for this page view only */ }
  }, []);

  const shown = prog ? view ?? prog.next : 0;
  const index = shown % DAILY_LENGTH;
  const round = Math.floor(shown / DAILY_LENGTH) + 1;
  const steps = planSteps('en');
  const step = steps[index];
  const message = useMemo(() => buildWhatsAppMessage(index, SITE_URL), [index]);
  const link = `${step.path}?j=${COMPLETE_PATH_ID}&s=${index}`;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = message;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }, [message]);

  if (!prog) return <section className="frame"><div className="shell"><p className="vx-lede">Loading your next post…</p></div></section>;

  const isNext = shown === prog.next;
  const lastPosted = prog.next > 0 ? prog.log[prog.next - 1] : undefined;
  const roundStart = Math.floor(prog.next / DAILY_LENGTH) * DAILY_LENGTH;

  const markPosted = () => save({ next: prog.next + 1, log: { ...prog.log, [prog.next]: isoToday() } });
  const undo = () => {
    const log = { ...prog.log };
    delete log[prog.next - 1];
    save({ next: prog.next - 1, log });
  };
  const makeNext = () => save({ next: shown, log: prog.log });
  const startOver = () => {
    if (window.confirm('Start again from day 1? The record of what you have posted will be cleared.')) save(EMPTY);
  };

  return (
    <section className="frame">
      <div className="shell dp">
        <div className="sec-crumb">
          <Link href="/">Collection</Link><span className="sep">→</span><span className="cur">Daily WhatsApp post</span>
        </div>
        <div className="frame-hd" style={{ marginTop: '1.5rem' }}>
          <div className="title-block">
            <div className="eyebrow"><Glyph /> For the person who posts</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', marginTop: '0.6rem' }}>
              Daily WhatsApp post
            </h1>
          </div>
        </div>
        <p className="vx-lede">
          One short reading per post, in Marathi and English, with a single link that opens straight into the reading path.
          The sequence moves on only when you mark a post as sent, so a missed day never skips a reading.
        </p>

        <div className="dp-meta">
          <span className="dp-day">{isNext ? 'Your next post' : 'Previewing'} · Day {index + 1} of {DAILY_LENGTH}</span>
          {round > 1 && <span>Round {round}</span>}
          <span>{step.minutes} min read</span>
        </div>
        {!isNext && (
          <p className="dp-preview-note">
            This is not your next post. <button type="button" className="dp-link" onClick={() => setView(null)}>Back to your next post (day {(prog.next % DAILY_LENGTH) + 1})</button>
          </p>
        )}

        <div className="dp-grid">
          <Bubble text={message} />
          <div className="dp-actions">
            <button type="button" className="dp-btn" onClick={copy}>{copied ? 'Copied ✓' : 'Copy message'}</button>
            <a className="dp-btn" href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
              Send on WhatsApp ↗
            </a>
            {isNext ? (
              <button type="button" className="dp-btn is-primary" onClick={markPosted}>Mark as posted ✓ — move to next day</button>
            ) : (
              <button type="button" className="dp-btn is-primary" onClick={makeNext}>Make this my next post</button>
            )}
            <Link className="dp-btn" href={link}>Preview the link →</Link>
            <p className="dp-note">
              “Send on WhatsApp” opens WhatsApp so you can choose the group or contact. After you have sent it, tap
              “Mark as posted” — nothing moves until you do.
            </p>
          </div>
        </div>

        <p className="dp-last">
          {lastPosted ? (
            <>
              Last posted: day {((prog.next - 1) % DAILY_LENGTH) + 1} on {fmtDate(lastPosted)}.{' '}
              <button type="button" className="dp-link" onClick={undo}>Undo</button>
            </>
          ) : prog.next > 0 ? (
            <>Posts sent so far: {prog.next}. <button type="button" className="dp-link" onClick={undo}>Undo the last one</button></>
          ) : (
            'Nothing posted yet.'
          )}
        </p>

        <button type="button" className="dp-toggle" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
          {showAll ? 'Hide the schedule' : `Show all ${DAILY_LENGTH} posts`}
        </button>
        {showAll && (
          <>
            <ol className="dp-schedule">
              {steps.map((s, i) => {
                const abs = roundStart + i;
                const postedOn = prog.log[abs];
                const skipped = abs < prog.next && !postedOn;
                return (
                  <li key={s.path} className={abs === prog.next ? 'is-today' : ''}>
                    <button type="button" onClick={() => setView(abs === prog.next ? null : abs)}>
                      <span className="dp-s-n">{postedOn ? '✓' : skipped ? '–' : i + 1}</span>
                      <span className="dp-s-t">{s.title}</span>
                      <span className="dp-s-d">{postedOn ? fmtDate(postedOn) : skipped ? 'skipped' : abs === prog.next ? 'next' : ''}</span>
                      <span className="dp-s-m">{s.minutes} min</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="dp-note">
              Your progress is saved in this browser only. Tap any row to preview that post, then “Make this my next post” to jump there.{' '}
              <button type="button" className="dp-link" onClick={startOver}>Start over from day 1</button>
            </p>
          </>
        )}
      </div>
    </section>
  );
}

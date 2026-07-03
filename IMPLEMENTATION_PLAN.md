# Implementation Plan — Phase A, Phase C, Android Widgets & Journeys

> Detailed expansion of IMPROVEMENTS.md Phases A and C, plus two additions: **Android home-screen widgets** (Subhāṣita & Mahāvākya) and a full design for **Journeys**. Every feature respects the existing architecture: static Next.js export, no backend, TypeScript data files in `lib/`, single `globals.css`, localStorage with `bgb-*` keys, Capacitor for Android.

---

# Part 1 — Phase A: Quick Wins (expanded)

## A1. Verse of the Day (date-seeded rotation) — ✅ DONE (July 2026)

> Shipped: `dailyIndex()` + `useDailyVerse()` in `lib/useRandomVerse.ts`; Hero (Mahāvākya) and DailyStrip (Subhāṣita) show the same date-seeded verse for all visitors, labeled *"Today's Mahāvākya · 3 July"* / *"आजचे महावाक्य · ३ जुलै"*. "Another verse" still browses randomly (label reverts to the generic one); reload returns to today's. Keys `verse.today_mahavakya` / `verse.today_subhashit` added EN+MR.

**What changes for the reader:** Today, the Hero Mahāvākya and DailyStrip Subhāṣita are random per visit. After this change, everyone sees the *same* verse on the same date — it becomes "today's verse," shareable and discussed, and tomorrow is guaranteed new. The "Another verse" button still lets readers browse; a reload returns to today's.

**Implementation**

- Add a deterministic day-hash in `lib/useRandomVerse.ts`:

```ts
// djb2 hash over the local date string — MUST stay identical to the
// Kotlin implementation in the Android widget (see Part 3.4)
export function dailyIndex(poolSize: number, date = new Date()): number {
  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  let h = 5381;
  for (let i = 0; i < key.length; i++) h = ((h * 33) ^ key.charCodeAt(i)) >>> 0;
  return h % poolSize;
}
```

- New hook `useDailyVerse(pool)` — returns `pool[dailyIndex(pool.length)]` after mount (index 0 on server render, same SSR-safety pattern as today), and keeps `next()` for manual browsing.
- `Hero.tsx` and `Frames.tsx` (DailyStrip) switch from `useRandomVerse` to `useDailyVerse`.
- Label the verse with the date: *"Today's Mahāvākya · 3 July"* — use the existing Panchanga tithi for extra flavor (*"Mahāvākya for Caturdaśī"*).
- Hashing the date string (rather than `dayOfYear % n`) avoids the Mahāvākya and Subhāṣita pools marching in lockstep and looking correlated day after day.

**Why the hash matters beyond the website:** the same deterministic function lets the Android widget (Part 3) and pre-scheduled notifications (C5) show the identical verse with no network and no coordination.

**Effort:** ~half a day. **Files:** `lib/useRandomVerse.ts`, `components/Hero.tsx`, `components/Frames.tsx`, 2 translation keys.

---

## A2. Client-side Search — DEFERRED by design

> **Editorial decision (July 2026):** the app is designed for *sequential* reading — the reader is meant to be led (era groups, journeys), not to dip in and out. Search stays out of scope for now; the Journeys feature (Part 4) is the intended answer to "where do I find X". The design below is kept as a ready blueprint in case app-store reviews or user feedback show readers getting lost — it can be implemented at any time without touching anything else.

**What it would change for the reader:** a search icon in the header opens an overlay; typing "karma", "kena", or "ज्ञानेश्वर" instantly lists matching sections, items, concepts, and contributors.

**Implementation**

1. **Index module — `lib/search-index.ts`.** No build script needed: a module that imports the existing data files and flattens them at load into ~600 entries:

```ts
type SearchEntry = {
  title: string;      // "Kaṭha Upaniṣad"
  deva?: string;      // "कठोपनिषद्"
  path: string;       // "/upanishads/katha/"
  group: 'section' | 'item' | 'concept' | 'contributor';
  keywords: string;   // pre-normalized haystack: title + deva + blurb + facets
};
```

   Sources: `SECTIONS` (28), `SECTION_DETAILS` items (~180), `upanishads/darshanas/puranas/agamas/itihasa/nastika/vedangas/upavedas-data.ts`, `concepts-data.ts` (~140), `contributors-data.ts` (~60), Living Knowledge domains. Build both EN and MR entries pointing at the same paths.

2. **Diacritic folding — the detail that makes or breaks it.** Users type `krishna`, the data says `Kṛṣṇa`. Normalize both sides: NFD-decompose, strip combining marks, then map the leftovers Unicode misses:

```ts
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/ṛ/g, 'r').replace(/ṝ/g, 'r').replace(/ḷ/g, 'l')
  .replace(/ṃ/g, 'm').replace(/ḥ/g, 'h').replace(/ṅ|ñ|ṇ/g, 'n')
  .replace(/ś|ṣ/g, 's').replace(/ṭ|ḍ/g, m => m === 'ṭ' ? 't' : 'd');
```

   Also index common anglicizations as extra keywords where spelling diverges a lot (`gyan`/`jnana`, `dnyaneshwar`/`jnanesvar`).

3. **Matching:** at 600 entries, plain scoring beats a library — rank: exact title prefix > word prefix > substring in title > substring in keywords. Devanāgarī queries match the `deva` field directly. No dependency added; if fuzzy matching is ever wanted, `minisearch` (~7 kB) drops in behind the same interface.

4. **UI — `components/SearchOverlay.tsx`:** full-screen overlay (reuse `VerseModal`'s backdrop/Escape/focus-trap patterns), autofocused input, results grouped by `group` with the era accent colors, arrow-key navigation + Enter, highlighted match. Trigger: search icon in `Header.tsx` (desktop bar + mobile menu) and the `/` key. The `search.placeholder` translation key already exists.

**Effort:** 2–3 days (index 1 day, overlay 1–2 days). **Files:** new `lib/search-index.ts`, new `components/SearchOverlay.tsx`, `Header.tsx`, `globals.css`, translation keys.

---

## A3. Font-size Control

**What changes for the reader:** an A− / A / A+ control (header menu + reader pages) with four steps, persisted across visits. Currently body text is fixed at 17px — a real barrier for older readers, especially in the Android app.

**Implementation** — mirror the theme mechanism exactly:

- `data-fontsize` attribute on `<html>`: `sm | md | lg | xl` (default `md`).
- CSS in `globals.css`:

```css
html[data-fontsize="sm"] { --fs-body: 15px; }
:root, html[data-fontsize="md"] { --fs-body: 17px; }
html[data-fontsize="lg"] { --fs-body: 19px; }
html[data-fontsize="xl"] { --fs-body: 22px; }
```

  Then change `body { font-size: 17px }` to `font-size: var(--fs-body)` — and audit `globals.css` for other hard px font sizes on long-form text (`.detail-body p`, `.item-lede`, verse meaning blocks), converting them to `em` or a `calc()` off `--fs-body`. Headings and UI chrome stay fixed; only reading text scales, so layouts don't break.
- localStorage key `'bgb-fontsize'`, initialized in the same pre-paint inline script in `layout.tsx` that sets the theme (no flash of wrong size).
- New `components/FontSizeControl.tsx` modeled on `ThemeControl.tsx`, including its `CustomEvent` sync pattern for the two header instances.

**Effort:** ~1 day (mostly the CSS audit). **Files:** `globals.css`, `layout.tsx`, new `FontSizeControl.tsx`, `Header.tsx`.

---

## A4. Bookmarks + Continue Reading

**What changes for the reader:** a ☆ on every verse modal and detail page; saved things live in "My Collection"; the home page grows a "Continue reading" card. The app starts *accumulating* — the difference between a site you visit and an app you own.

**Implementation**

- **Storage** (`lib/bookmarks.ts`):

```ts
// key 'bgb-bookmarks'
type Bookmark =
  | { kind: 'verse'; collection: 'mahavakya' | 'subhashita'; index: number; ts: number }
  | { kind: 'page'; path: string; title: string; section: string; ts: number };
```

  Small module with `getBookmarks / toggle / has`, a `useBookmarks()` hook, and a `bgb-bookmarks-change` CustomEvent so every star updates when one toggles (the established sync pattern).
- **BookmarkButton** in: `VerseModal.tsx` (next to Share/Copy), the hero block of `ItemDetailView.tsx` and each dedicated `*Detail.tsx`.
- **`/collection/` page** — client-rendered from localStorage: two groups (Saved verses / Saved pages), newest first; verses re-open `VerseModal` in place; a warm empty state ("Tap ☆ anywhere to keep it here"). Link it from Header and Footer.
- **Continue reading:** every detail page writes `'bgb-last-read'` (`{path, title, section, ts}`) on mount; the home page shows a slim dismissible card under the Hero when it exists: *"Continue: Sāṅkhya — the count of what is →"*.
- Honest caveat shown once on the collection page: saved on this device only (localStorage; clearing browser data clears it). Fine for the Android app, worth stating on web.

**Effort:** 2 days. **Files:** new `lib/bookmarks.ts`, new `components/BookmarkButton.tsx`, new `app/collection/page.tsx`, edits to `VerseModal`, `ItemDetailView`, 8 dedicated detail components, `Header`, home page.

---

## A5. Reading-time & Level Badges — DROPPED

> Removed from scope per editorial review (July 2026) — not needed for a sequentially-read gateway app.

---

## A6. TL;DR Lines — refined against the existing data

**The context that matters:** `SectionItem` in `lib/section-data.ts` *already* carries a shallow layer:

```ts
epithet: string;   // a poetic label   — "Naciketas and Death", "The eye — astronomy"
summary: string;   // 50–80 words      — often already accessible
```

So a blanket `tldr` on all ~200 items would duplicate work already done. The refined proposal: **`tldr` is a different species from `epithet`** — the epithet is a *label* (names the thing), the TL;DR is a *hook* (one full sentence that makes you want the thing). Compare, using real items:

| Item | Existing `epithet` (label) | New `tldr` (hook) |
|---|---|---|
| Kaṭha Upaniṣad | "Naciketas and Death" | "A boy waits three nights at Death's door — and Death, won over, teaches him what survives dying." |
| Chandas (Vedāṅga) | "The foot — prosody" | "The study of poetic rhythm that quietly invented binary numbers and Pascal's triangle." |
| Advaita (Vedānta school) | "Non-dualism" | "One reality appearing as many — half of Indian philosophy after Śaṅkara is a reply to this single claim." |
| Vijñāna Bhairava (Tantra) | "112 dhāraṇās" | "A manual of 112 doorways into meditation — one of them begins with the moment just before a sneeze." |
| Śrī Yantra | "The great yantra" | "Nine interlocking triangles that claim to map the entire cosmos onto a diagram the size of your palm." |
| Vākyapadīya (Language) | "Word and sentence" | "Before asking what a word means, Bhartṛhari asks what *meaning itself* is made of — and answers: language, all the way down." |

**Where it renders:** on the item detail page, one italic `.item-tldr` line between the epithet and the summary/lede. Optional field — pages without it render exactly as today, so it ships section by section.

**Where to write it (and where not to):**
- **Skip** sections whose summaries are already story-first — the Upaniṣads entries above are fine as-is.
- **Prioritize** the dense, scholarly sections where a reader most needs one plain-speech sentence before the terminology starts: `language-philosophy` (17 items), `vedanta-schools` (22 items), `tantra-texts`, `yantra`, `darshanas`, `agamas` — roughly 70 items × 2 languages, not 200.

**Effort:** ~20 lines of code; the writing batches at 10–15 per session.

---

## A7. Essays — ✅ Already handled

The essays teaser has already been removed from the app. No action. (If long-form essays return someday, the `app/essays/[id]/page.tsx` + `lib/essays-data.ts` pattern sketched in earlier drafts still applies.)

---

# Part 2 — Phase C: New Capabilities (expanded)

## C1. Sciences with Real Mathematics

**Goal:** the section stops *telling* readers Indian mathematics was great and *shows* the actual mathematics — the strongest "wow" content for students and skeptics. Everything renders with inline SVG + Unicode; no KaTeX/MathJax dependency (keeps static export lean; the design language already includes fine SVG line-art in `Ornaments.tsx`).

**New file `lib/sciences-data.ts`** (+ `_mr`), item shape:

```ts
type ScienceItem = {
  id: string; title: string; deva?: string; era: string; tldr: string;
  narrative: string[];        // the story (exists today in prose form)
  theMath: { heading: string; body: string[]; figure?: string }[]; // NEW — the actual content
  source: { text: string; citation: string };  // the primary verse, quoted & decoded
};
```

**The seven launch items** (each with its figure component in a new `components/figures/`):

| Item | The actual math shown | Figure (SVG) |
|---|---|---|
| **Śulba-sūtra √2** | Baudhāyana's rule: *1 + ⅓ + 1/(3·4) − 1/(3·4·34)* = 1.4142157 (true value 1.4142136 — five decimals correct, ~800 BCE), stated for the diagonal of a unit square | Square with diagonal, the approximation built up strip by strip |
| **Squaring the circle & altar geometry** | The vedi constructions; transforming a square into a circle of equal area — geometry as ritual necessity | Falcon-altar (śyena-citi) outline; square↔circle construction |
| **Piṅgala's binary & Meru-prastāra** | Laghu/guru syllables as 0/1 (~300 BCE); the *meru-prastāra* = Pascal's triangle centuries before Pascal; Hemachandra counts rhythm patterns → Fibonacci numbers 50 years before Fibonacci | Meru triangle with the binary expansion of a meter alongside |
| **Āryabhaṭa** | π ≈ 62832/20000 = 3.1416 — quote the actual āryā verse and decode it word by word (*caturadhikaṃ śatam…*); the sine-difference table; earth's rotation stated plainly | Sine quarter-circle with the 24 table values |
| **Brahmagupta** | The rules for zero and negatives quoted from *Brāhmasphuṭasiddhānta* (628 CE) — debts × fortunes; the cyclic-quadrilateral area formula | Cyclic quadrilateral inscribed in a circle |
| **Bhāskara & the kuṭṭaka** | A worked linear indeterminate problem from *Līlāvatī* — posed to the reader first, solution revealed on tap | Step ladder of the pulverizer algorithm |
| **Mādhava & the Kerala school** | π/4 = 1 − ⅓ + ⅕ − ⅐ … (c. 1400, ~250 years before Leibniz), with the correction terms that made it actually converge | Bar chart of partial sums closing in on π |

**Presentation:** each `theMath` block sits in a bordered "The mathematics" panel (reuse the ornamental verse-frame style) so narrative readers can skim past and curious readers sink in — progressive disclosure inside one page. The *Līlāvatī* problem's tap-to-reveal is the one interactive element; optionally a small slider on the Mādhava chart showing convergence (a 20-line client component).

**Routing:** point the `sciences` section at a dedicated `app/sciences/[id]/page.tsx` + `SciencesDetail` component (add `sciences` to `DEDICATED_SECTIONS`), following the established dedicated-page pattern.

**Effort:** the largest Phase C item — ~1 week: 7 SVG figures (half a day each), data writing, one new detail component. Ship 2–3 items first; the structure supports incremental additions.

## C2. Journeys → fully specified in Part 4.

## C3. Festival-aware "Today" Panel — DEFERRED (not now)

> Parked per editorial review (July 2026). The design below is retained because it is also the content seed for the standalone Panchāṅga app (APP_FAMILY.md Tier 1) — when that app is built, start from here.

**Goal:** the Panchanga strip already tells readers *what* day it is; now it tells them *why it matters* — and each observance links into the corpus. The calendar becomes a recurring doorway into the knowledge, which is exactly the gateway mission.

**New file `lib/festival-data.ts`** (+ `_mr`):

```ts
type Observance = {
  match: { masa?: string; paksha?: 'shukla' | 'krishna'; tithi?: string }  // lunar match
       | { gregorian: { month: number; day: number } };                    // solar (Sankrānti)
  name: { en: string; mr: string };
  why: { en: string; mr: string };      // ONE sentence — why this day matters
  link?: string;                        // path into the corpus
  recurring?: boolean;                  // every-month observances
};
```

**Launch list (~30 entries):**
- **Recurring monthly:** every Ekādaśī (→ `/bhakti/`), Pūrṇimā, Amāvasyā, Saṅkaṣṭī Caturthī (Kṛṣṇa-pakṣa Caturthī — significant for the Marathi audience).
- **Annual (lunar):** Gudhī Pāḍvā, Rāma Navamī (→ `/itihasa/ramayana/`), Hanumān Jayantī, Akṣaya Tṛtīyā, Vaṭa Pūrṇimā, Āṣāḍhī Ekādaśī (→ `/marathi-sants/`), Guru Pūrṇimā (→ `/upanishads/`), Nāga Pañcamī, Rakṣā Bandhana, Kṛṣṇa Janmāṣṭamī (→ `/gita/`), Gaṇeśa Caturthī, Navarātra + Vijayādaśamī, Kojāgirī, Dīpāvalī (Dhanatrayodaśī → Bhāūbīja, day by day), Kārtikī Ekādaśī, Datta Jayantī, Mahā Śivarātrī (→ `/agamas/`), Holī.
- **Solar:** Makara Saṅkrānti (gregorian match, Jan 14–15).

**Matching logic** in `lib/festival.ts`: run `getPanchanga(today)`, match against entries; skip annual matches in an **adhika māsa** (the traditional rule — festivals fall in the nija month; the panchanga lib already detects adhika). Show at most one annual + one recurring badge.

**UI:** the Hero Panchanga strip gains a subtle saffron-dot badge and one line: *"Today is Guru Pūrṇimā — the day teachers are honored. → The Upaniṣads"*. Optionally a "coming this week" line computed by running the match over the next 7 days (7 `getPanchanga` calls, cheap). Same line reused in the Footer.

**Honest limits, stated in code comments:** tithi-at-sunrise convention from a fixed Ujjain anchor is right for a general-audience site, but regional/sampradāya variations exist (a festival can differ by a day) — the panel says *"observances follow the Ujjain panchāṅga"* in small print rather than pretending universal authority.

**Effort:** 2–3 days once the observance list is compiled. This feature is also the content seed for the standalone **Panchāṅga app** (APP_FAMILY.md Tier 1) — build it here first, lift it there.

## C4. Daily Quiz

**Goal:** a 5-question daily quiz — the strongest hook for students, and every answer links back into the corpus, so wrong answers *create* readers.

**Implementation**

- **`lib/quiz-data.ts`** (+ `_mr`): hand-written questions (hand-written beats auto-generated on quality; the data files make writing them fast):

```ts
type QuizQ = {
  q: string; options: string[]; answer: number;
  why: string;          // one-line explanation shown after answering
  link: string;         // "Read more →" into the corpus
  level: 'easy' | 'medium' | 'hard';
  section: string;      // provenance tag
};
```

  Launch with ~100 questions (4–5 per section is enough variety for months of daily 5s); grow over time.

**Sample questions** — all facts drawn from data already in the app, which is the rule: every question must be answerable *from* the corpus, so "Read more →" always lands somewhere:

```ts
// EASY — recognition, warm feelings, everyone scores
{ q: 'Which Upaniṣad gave India its national motto, "satyam eva jayate"?',
  options: ['Kaṭha', 'Muṇḍaka', 'Īśa', 'Kena'], answer: 1,
  why: 'Muṇḍaka 3.1.6 — "truth alone triumphs" — also home of the famous two-bird verse.',
  link: '/upanishads/mundaka/', level: 'easy', section: 'upanishads' },

{ q: 'How many verses does the Bhagavad Gītā contain?',
  options: ['108', '700', '1,008', '18,000'], answer: 1,
  why: '700 verses across 18 chapters, set inside the Mahābhārata.',
  link: '/gita/', level: 'easy', section: 'gita' },

{ q: 'The boy Naciketas questions whom in the Kaṭha Upaniṣad?',
  options: ['Indra', 'His father', 'Yama, Death itself', 'Śiva'], answer: 2,
  why: 'He waits three nights at Death\'s door; Yama, won over, teaches what survives dying.',
  link: '/upanishads/katha/', level: 'easy', section: 'upanishads' },

// MEDIUM — the surprising fact that gets shared
{ q: 'Piṅgala\'s Chanda-sūtra, a treatise on poetic metre, contains the earliest known description of…',
  options: ['The decimal system', 'Binary numbers & Pascal\'s triangle', 'Trigonometry', 'Algebra'], answer: 1,
  why: 'Counting light/heavy syllable patterns led Piṅgala (~300 BCE) straight to binary mathematics.',
  link: '/vedangas/chandas/', level: 'medium', section: 'vedangas' },

{ q: 'Which Upaveda is paired with the Sāmaveda?',
  options: ['Āyurveda', 'Dhanurveda', 'Gāndharvaveda', 'Sthāpatyaveda'], answer: 2,
  why: 'Music descends from chant — the science of music grows out of the sung Veda.',
  link: '/upavedas/gandharvaveda/', level: 'medium', section: 'upavedas' },

{ q: 'Pāṇini\'s Aṣṭādhyāyī derives every Sanskrit word from how many sūtras?',
  options: ['108', '1,000', '3,959', '10,000'], answer: 2,
  why: 'A complete generative grammar — twenty-five centuries before modern formal grammar.',
  link: '/vedangas/vyakarana/', level: 'medium', section: 'vedangas' },

// HARD — for the reader who wants to be tested
{ q: 'In the Māṇḍūkya Upaniṣad, the fourth state of consciousness — beyond waking, dream and deep sleep — is called…',
  options: ['Mokṣa', 'Turīya', 'Samādhi', 'Nirvāṇa'], answer: 1,
  why: 'Twelve verses map the states onto A-U-M; turīya is the silence after the syllable.',
  link: '/upanishads/mandukya/', level: 'hard', section: 'upanishads' },

{ q: 'Which two darśanas are traditionally treated as a pair?',
  options: ['Nyāya & Vaiśeṣika', 'Yoga & Mīmāṃsā', 'Sāṅkhya & Vedānta', 'Nyāya & Yoga'], answer: 0,
  why: 'The school of logic and the school of atomism merged their toolkits by the classical period. (Sāṅkhya pairs with Yoga, Mīmāṃsā with Vedānta.)',
  link: '/darshanas/nyaya/', level: 'hard', section: 'darshanas' },
```

Writing rhythm: with the data files open, a batch of ~20 questions (EN + MR) takes about an hour. The *why* line is compulsory — it converts a wrong answer into curiosity instead of defeat.
- **Daily selection:** reuse `dailyIndex()` from A1 with per-slot salts to pick 5 (aim for 2 easy / 2 medium / 1 hard by partitioning the pool by level).
- **`app/quiz/page.tsx` + `components/Quiz.tsx`:** one question at a time, tap an option → immediate reveal with the *why* line and "Read more →" link, running score, end screen ("4/5 — Paṇḍita in the making"), share-as-text button (reuse `ShareButton` patterns).
- **Streak:** `'bgb-quiz'` in localStorage `{ lastPlayed: 'YYYY-MM-DD', streak: number, history: … }` — a quiet "day 6" line, consistent with the no-loud-gamification rule.
- Entry points: a home-page tile ("Today's five questions") + header link.

**Effort:** 2–3 days of code; question-writing is an ongoing editorial task (a batch of 20 takes ~an hour with the data files open).

## C5. Daily Notification (Android) — ✅ DONE (July 2026)

> Shipped: `@capacitor/local-notifications` installed and synced into `android/`. `lib/notifications.ts` holds the 30-day rolling scheduler off `dailyIndex()` (settings in `'bgb-notify'`), the permission flow (requested on enable), and the tap → verse deep link (`bgb-open-verse` CustomEvent + pending-open handoff for cold starts — the same handler the widgets will reuse). Settings card (`components/NotifySettings.tsx`) lives in the header menu below the Theme row, native-only: enable toggle, time picker, collection choice Subhāṣita / Mahāvākya / both alternating. (Being in the Header also means the notification scheduler re-initializes on every page, not just home.) Hero and DailyStrip open their verse modal on notification tap. **Device-tested July 3, 2026 (Samsung SM-S938B):** permission prompt shown on enable, notification delivered at the chosen time with the verse text, and the full 30-day rolling window confirmed queued via `dumpsys alarm` (one alarm per day, July 4 → Aug 1).

**Goal:** "Today's Subhāṣita" arrives at 7 am. The single strongest retention feature for the Play Store app — and thanks to A1's determinism it works **fully offline with no server**.

**Implementation**

- Add `@capacitor/local-notifications`.
- **The offline trick:** local notifications are scheduled with fixed text ahead of time. Because `dailyIndex()` is deterministic, on every app open (re)schedule the **next 30 days** — each notification carrying that date's actual verse text:

```ts
const pending = days(30).map(d => ({
  id: yyyymmdd(d),
  title: 'Today's Subhāṣita · आजचे सुभाषित',
  body: SUBHASHITS[dailyIndex(SUBHASHITS.length, d)].trans,  // that date's verse
  schedule: { at: at7am(d) },
  extra: { open: 'daily-subhashita' },
}));
```

  Rolling window: cancel + reschedule on each open; even if the app isn't opened for a month, notifications never show a *wrong* verse — they just stop until next open.
- **Settings UI:** a small card on `/collection/` (or a new `/settings/`): enable toggle, time picker, collection choice (Subhāṣita / Mahāvākya / both alternating). Stored in `'bgb-notify'`. Android 13+ requires the `POST_NOTIFICATIONS` runtime permission — request it on enable, not on launch.
- **Tap → verse:** notification `extra` is read via the LocalNotifications action-performed listener; app opens the Hero/DailyStrip verse modal for that day (same deep-link handling the widget uses, Part 3.6).
- Guard all of it with `Capacitor.isNativePlatform()` — the web build simply doesn't render the settings card (web push needs a server; out of scope by design).

**Effort:** 2 days including the settings UI. **Prerequisite:** A1.

---

# Part 3 — Android Home-screen Widgets: Subhāṣita & Mahāvākya

**Goal:** today's verse on the user's home screen — the app delivers value *without being opened*, and every glance is a tap away from the full explanation. This pairs with A1: web, app, notification, and widget all show the same daily verse.

## 3.1 The technical reality

Capacitor has **no widget bridge** — widgets are native Android territory: a Kotlin `AppWidgetProvider` + XML `RemoteViews` living in the `android/` project you already maintain for signing/builds. The web app is not involved at render time. That's fine: verse data + the deterministic index are all a widget needs, and both can live on the native side.

**Recommendation:** classic RemoteViews (XML layouts), not Jetpack Glance — Glance drags in Compose dependencies for what is a static text card; RemoteViews is simpler, lighter, and fully sufficient here.

## 3.2 Getting verse data to the widget

Cleanest pipeline — keep `lib/*.ts` the single source of truth:

1. A small Node script `scripts/export-widget-data.mjs` imports `SUBHASHITS` and `MAHAVAKYAS` and writes trimmed JSON (deva, translit, meaning EN + MR, source) to **`android/app/src/main/assets/widget/subhashita.json`** and **`mahavakya.json`**. Writing directly into `assets/` (not routing through `public/` → `cap sync`) keeps widget data out of the website bundle.
2. Wire into the build: `"build:android": "next build && node scripts/export-widget-data.mjs && npx cap sync android"`.
3. Kotlin reads the JSON from assets with `org.json` (no Gson/Moshi dependency needed).

## 3.3 One widget, configurable — not two

Ship a **single widget type** with a configuration step (collection: Subhāṣita / Mahāvākya; language: EN / MR; theme: Cream / Dark / Saffron / follow-system), rather than two near-identical widgets. Per-widget config is stored in `SharedPreferences` keyed by `appWidgetId`. Users who want both simply place two instances.

## 3.4 The shared daily index — must match A1 exactly

```kotlin
fun dailyIndex(poolSize: Int, date: LocalDate = LocalDate.now()): Int {
    val key = "%04d-%02d-%02d".format(date.year, date.monthValue, date.dayOfMonth)
    var h = 5381L
    for (c in key) h = ((h * 33) xor c.code.toLong()) and 0xFFFFFFFFL
    return (h % poolSize).toInt()
}
```

Same djb2, same `YYYY-MM-DD` key, same unsigned-32-bit masking as the TS version. **Add a comment in both files pointing at the other** — if one changes, the other must. (Both use local device time; widget and app on the same phone always agree, which is the consistency that matters.)

## 3.5 Files to create in `android/`

| File | Purpose |
|---|---|
| `app/src/main/java/com/bharatiyagyan/bhandar/widget/VerseWidgetProvider.kt` | `AppWidgetProvider`: onUpdate → load JSON, compute `dailyIndex`, build RemoteViews |
| `.../widget/VerseWidgetConfigActivity.kt` | Config screen shown on placement (collection/language/theme radio groups) |
| `.../widget/WidgetData.kt` | Asset JSON loading + SharedPreferences per-widget config |
| `res/layout/widget_verse.xml` | Card: Devanāgarī line · meaning · source · tiny seal icon |
| `res/xml/widget_verse_info.xml` | `appwidget-provider`: 4×2 default, resizable both axes, `widgetCategory="home_screen"`, preview image |
| `res/drawable/widget_bg_{cream,dark,saffron}.xml` | Rounded-rect backgrounds using the app's palette hexes |
| `AndroidManifest.xml` | `<receiver>` for the provider + `APPWIDGET_UPDATE` intent filter; config activity |

## 3.6 Behavior details

- **Midnight rollover:** `updatePeriodMillis` can't be relied on (min 30 min, batched by the OS). Schedule an exact-enough refresh: `AlarmManager.setInexactRepeating` at next-midnight (or a `WorkManager` daily task) that calls `updateAppWidget` for all instances. Also refresh in `onUpdate` and on `ACTION_BOOT_COMPLETED` / `ACTION_TIMEZONE_CHANGED`.
- **Tap → the app, on today's verse:** `PendingIntent` launching `MainActivity` with an extra (`open=daily-subhashita`). On the web side, a tiny hook in the home page reads the Capacitor App-plugin launch intent (or a `?open=` query param) and opens the corresponding verse modal. This is the same deep-link handler C5's notifications use — build once.
- **Text fitting:** verses vary wildly in length. Rules: Devanāgarī line `maxLines=2, ellipsize=end`; meaning `maxLines=3` at 4×2, `maxLines=6` at 4×3+ (use `onAppWidgetOptionsChanged` to pick a compact vs tall layout). Never clip the source line — attribution always shows.
- **Fonts:** RemoteViews can't load custom fonts reliably (only API 31+, partially) — the widget renders Devanāgarī in the system's Noto Serif Devanagari, which is handsome. Accept this; don't fight it.
- **Battery/perf:** everything is local JSON + one alarm/day — effectively zero cost. No network permission touched.

## 3.7 Effort & sequencing

~3–4 days for a developer new to app widgets (config activity and text-fitting are the fiddly parts). **Prerequisite: A1** (the shared index). Natural pairing: ship widgets + C5 notifications in the same Play Store release — "your daily verse, on your home screen" is a store-listing feature worth announcing.

---

# Part 4 — Journeys: Guided Reading Sequences

## 4.1 What a Journey is

**Yes — a Journey is a curated reading sequence**: an ordered trail through pages that *already exist*, with a stated promise ("7 steps · ~35 minutes · no prior knowledge needed"), a progress indicator, and a Next button. Think of it as a syllabus, a museum trail, or a playlist for the corpus.

Why it fits the gateway mission precisely: the app's stated objective is to *spark interest and lead to exploration*. The 28-section grid is a map — great for browsers, paralyzing for newcomers. A Journey converts "where do I even start?" into "just take the next step." And because steps are links to existing pages, **Journeys are ~90% curation and ~10% code — no new content is written.**

## 4.2 Data model — `lib/journeys-data.ts` (+ `_mr`)

```ts
export type JourneyStep = {
  path: string;        // existing route, e.g. '/upanishads/isha/'
  title: string;       // display name for the step
  why: string;         // one line: why this step, why now — the connective tissue
  minutes: number;     // honest estimate
};

export type Journey = {
  id: string;          // 'first-steps'
  title: string;       // 'First Steps'
  deva: string;        // 'प्रथम पदानि'
  tagline: string;     // 'From "what is all this?" to your first Upaniṣad — in seven short reads.'
  audience: string;    // 'No prior knowledge needed'
  accent: string;      // existing --ac-* CSS var name
  steps: JourneyStep[];
};
```

The `why` line is the secret ingredient — it's the narration a museum guide provides between rooms: *"You've seen how the canon is organized; now meet the shortest complete Upaniṣad — 18 verses you can read before your tea cools."*

## 4.3 The five launch Journeys (mapped to existing routes)

**1. First Steps** — *no prior knowledge* · ~35 min · 7 steps
1. `/shruti-smriti/` — the map: what Śruti and Smṛti even mean
2. `/vedas/` — where it all starts
3. `/upanishads/` — where ritual turns into philosophy
4. `/upanishads/isha/` — your first complete text: 18 verses
5. `/gita/` — the corpus's most beloved distillation *(ends with the "full Gītā app →" card)*
6. `/subhashita/` — wisdom you can quote at dinner
7. `/lifestyle/` — how this was meant to be lived, daily

**2. The Philosophy Path** — *for the systematically minded* · ~55 min · 8 steps
`/darshanas/` → `/darshanas/nyaya/` (how to argue) → `/darshanas/sankhya/` (what exists) → `/darshanas/yoga/` (what to do about it) → `/darshanas/vedanta/` → `/vedanta-schools/` (where interpreters disagree) → `/nastika-darshanas/` (the loyal opposition) → `/language-philosophy/` (the summit: meaning itself)

**3. Stories First** — *all ages, families* · ~40 min · 6 steps
`/itihasa/` → `/itihasa/ramayana/` → `/itihasa/mahabharata/` → `/gita/` (the conversation inside the epic) → `/puranas/` → `/bhakti/` (how the stories became song)

**4. The Scientific Mind** — *students & skeptics* · ~45 min · 7 steps
`/sciences/` → `/living-knowledge/math/` → `/living-knowledge/astronomy/` → `/vedangas/jyotisha/` → `/living-knowledge/language/` (Pāṇini: grammar as engineering) → `/living-knowledge/medicine/` → `/upavedas/ayurveda/`
*(This journey gets dramatically better after C1 ships — sequence C1 first if possible.)*

**5. संत-वाट (The Sant Path)** — *Marathi-first* · ~40 min · 6 steps
`/bhakti/` → `/marathi-sants/` → Jñāneśvar → Nāmdev → Tukārām → Rāmdās items
*(Ends with the future Dnyāneshwarī app card — APP_FAMILY.md Tier 2.)*

Journeys are data, so seasonal ones cost nothing later (*"A Dīpāvalī journey"*, 5 steps, ships as a data edit).

## 4.4 Progress model

localStorage `'bgb-journeys'`:

```ts
type JourneyProgress = Record<string, {         // key: journey id
  visited: string[];                            // step paths, in visit order
  startedAt: number; lastAt: number;
}>;
```

- **Auto-mark on arrival:** navigating to a step *via the journey* appends a `?j=<journeyId>` query param; the destination page's journey ribbon (below) records the visit. No "mark as done" homework — reading the page is completing the step.
- Steps can be done out of order; progress = `visited.length / steps.length`.
- A finished journey shows a completion note and hands the reader onward: *"You've walked First Steps. Two paths continue from here → The Philosophy Path · Stories First."* — journeys chain into each other.

## 4.5 UI — three pieces

1. **`components/JourneysRail.tsx`** (home page, between About and SectionsGrid): five cards — title, tagline, `7 steps · ~35 min`, thin progress bar when started, CTA "Begin" / "Continue → step 4". First-visit readers see this *before* the 28-card grid — that ordering is the point.

2. **`app/journeys/[id]/page.tsx` — the trail map:** a vertical stepper (numbered nodes on a connecting line, era-accent colored — visually kin to `BranchTree`): each step shows title, the `why` line, minutes, and a ✓ once visited. One glance answers *what am I signing up for and where am I in it*. Plus `app/journeys/page.tsx` listing all journeys.

3. **`components/JourneyRibbon.tsx` — the guide that walks with you:** on any detail page opened with `?j=`, a slim sticky bar at the bottom:

   > **First Steps · step 4 of 7** ─────────●──── **Next: The Gītā →**

   Reads the journey + position from the param and current path, records the visit, offers Next / trail-map / dismiss (✕ drops back to normal browsing; progress kept). Rendered by the shared detail layout — one integration point covers `ItemDetailView` and all dedicated `*Detail` components. Because navigation is param-based and progress is client-side, this needs **no route changes and no static-export gymnastics.**

## 4.6 Effort

~3 days of code (ribbon is the main piece) + the curation writing (5 journeys × ~7 `why` lines × 2 languages — a day of editorial work). No new content pages. **Dependency:** none — but reading-time badges (A5) make the minute estimates honest, and journeys 4's value multiplies after C1.

---

# Coding Session Plan (token-budgeted, Fable model)

> Scope after the July 2026 review: **in** — A1, A3, A4, A6 (refined), Journeys, C4 quiz, C5 notifications, Android widgets, C1 sciences. **Out** — A5, A7 (done), C3 (parked), A2 (deferred; blueprint kept).
>
> **How the budgets work:** each session is scoped so the whole job — reading the relevant files, writing code, building (`npx tsc --noEmit` / `next build`), and fixing fallout — fits in a single Claude Code session without context compaction (comfort zone ≲ 150k tokens; compaction degrades quality on precise multi-file edits). Estimates are total session tokens (input + output). Rules of thumb behind them: `globals.css` and `section-data.ts` are the two big files — sessions touching them budget higher; native Android sessions run heavier because Kotlin/XML boilerplate plus Gradle troubleshooting is verbose; pure data-writing sessions are cheap per file but bilingual (every EN edit has an `_mr` twin).

| # | Session scope | Deliverable at session end | Est. tokens |
|---|---|---|---|
| 1 ✅ | **A1 — Verse of the day.** `dailyIndex()` in `useRandomVerse.ts`, new `useDailyVerse`, wire Hero + DailyStrip, date label, translation keys | Same verse for everyone all day; "Another verse" still browses — **DONE July 2026** | ~40–60k |
| 2 | **A3 — Font-size control.** CSS variable + 4 steps, pre-paint init in `layout.tsx`, `FontSizeControl.tsx`, px-audit of long-form text styles in `globals.css` | A−/A/A+ working, persisted, no flash | ~60–80k |
| 3 | **A4a — Bookmark core.** `lib/bookmarks.ts`, `BookmarkButton.tsx`, integrate into `VerseModal` + `ItemDetailView` + 8 dedicated `*Detail` components | ☆ works everywhere, syncs across instances | ~70–90k |
| 4 | **A4b — Collection page + continue reading.** `/collection/` route, last-read tracking, home-page continue card, header/footer links | Accumulation loop closed | ~50–70k |
| 5 | **J1 — Journeys data + pages.** `journeys-data.ts` (+`_mr`) with all 5 journeys, `JourneysRail` on home, `/journeys/` + `/journeys/[id]/` trail-map stepper | Journeys browsable end to end (no ribbon yet) | ~80–100k |
| 6 | **J2 — Journey ribbon + progress.** `lib/journey-progress.ts`, `JourneyRibbon.tsx` reading `?j=`, auto-mark on visit, Next/dismiss, completion + chaining, integrate into the shared detail layout | The guided sequential-reading experience is live — the flagship | ~80–100k |
| 7 | **A6 — TL;DR.** Add `tldr?` to types + render line; write hooks for `language-philosophy` + `vedanta-schools` (EN+MR, ~39 items) | Densest sections gain their hook line | ~60–80k |
| 8 | **A6 writing batch 2.** `tantra-texts`, `yantra`, `darshanas`, `agamas` (EN+MR, ~30 items) | TL;DR coverage complete for priority sections | ~40–60k |
| 9 | **C4a — Quiz engine.** `quiz-data.ts` schema + first 20 questions, `Quiz.tsx`, `/quiz/` route, daily-5 selection via `dailyIndex`, streak in localStorage, home tile | Playable daily quiz | ~80–100k |
| 10 | **C4b — Question bank.** ~40 more questions EN+MR across remaining sections | ~60-question launch bank | ~50–70k |
| 11 | **W1 — Widget foundation.** `scripts/export-widget-data.mjs`, assets JSON, `VerseWidgetProvider.kt`, `WidgetData.kt`, `widget_verse.xml` layouts + backgrounds, manifest receiver, Kotlin `dailyIndex` (mirror of A1) | Widget renders today's verse on a test device | ~100–130k |
| 12 | **W2 — Widget polish.** Config activity (collection/language/theme), midnight refresh (AlarmManager + boot/timezone receivers), size-adaptive layouts, tap → deep link, preview image | Ship-ready widget | ~90–120k |
| 13 ✅ | **C5 — Daily notifications.** `@capacitor/local-notifications`, 30-day rolling scheduler off `dailyIndex`, settings card in the header menu, Android 13 permission flow, shared deep-link handler with W2 | **DONE July 2026** (device-tested on Samsung SM-S938B: delivery + 30-day queue confirmed). W2 reuses the `bgb-open-verse` deep-link handler | ~70–90k |
| 14 | **S1 — Sciences foundation.** `sciences-data.ts` schema, `SciencesDetail` component + route + `DEDICATED_SECTIONS` entry, first 2 items with figures (Śulba √2, Piṅgala/Meru) | New section live with 2 rich items | ~90–120k |
| 15 | **S2 — Sciences batch 2.** Āryabhaṭa, Brahmagupta + figures (EN+MR) | 4 of 7 items | ~80–110k |
| 16 | **S3 — Sciences batch 3.** Bhāskara kuṭṭaka (tap-to-reveal), Mādhava (partial-sums chart), altar geometry + figures | Section complete | ~80–110k |

**Total: ~1.1–1.5M tokens across 16 sessions.**

Sequencing constraints (everything else can reorder freely):
- 1 → before 9, 11, 13 (they all reuse `dailyIndex`)
- 3 → before 4; 5 → before 6; 11 → before 12; 12 & 13 share the deep-link handler (build it in whichever ships first)
- Sessions 7, 8, 10 are writing-heavy and make good "low-energy" sessions between the two native-Android ones.

Release grouping for the Play Store: **R1** = sessions 1–4 (daily verse + collection), **R2** = 5–8 (guided reading), **R3** = 11–13 (widget + notification — the marquee update), **R4** = 9–10 + 14–16 (quiz + sciences).

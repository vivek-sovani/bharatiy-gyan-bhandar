# Bhāratīya Jñāna Bhaṇḍāra — Project Context

> **Purpose of this document:** A complete technical and editorial reference for any new Claude session. Written by reading the actual source code as of June 2026. Drop this file into context and the model will know the entire codebase.

---

## 1. What This Is

**Bhāratīya Jñāna Bhaṇḍāra** (भारतीय ज्ञान भंडार — "Indian Knowledge Bank") is an open digital archive of the Indic knowledge systems. It presents texts, sciences, and ways of living rooted in Indian tradition — free to read, built for permanence, licensed CC BY-SA 4.0. Compiled by **Vivek Sovani**.

The app is deployed as a **static Next.js site** on GitHub Pages (`vivek-sovani.github.io`) and packaged as an **Android APK** via Capacitor for Google Play Store.

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| UI | React 19, pure CSS (no Tailwind, no UI library) |
| Language | TypeScript 5.7 |
| Mobile | Capacitor 8 (Android) |
| Panchanga | `mhah-panchang` npm package |
| Fonts | Cormorant Garamond (display), Lora (body), Tiro Devanagari Sanskrit (Devanāgarī), JetBrains Mono (mono) — all Google Fonts |
| Hosting | GitHub Pages (static) |
| Build | `next build` → static export → Capacitor sync for Android |

No backend, no database, no API calls. All data is bundled as TypeScript files.

---

## 3. Repository Structure

```
bharatiy-gyan-bhandar/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — metadata, fonts, theme init, SW registration
│   ├── page.tsx                # Home page (assembles all sections)
│   ├── globals.css             # All CSS (theming, layout, components)
│   ├── manifest.ts             # PWA manifest
│   ├── not-found.tsx           # 404 page
│   ├── privacy/page.tsx        # Privacy policy (Play Store requirement)
│   ├── [slug]/page.tsx         # Section overview pages (generic)
│   ├── [slug]/[id]/page.tsx    # Item detail pages (generic)
│   ├── vedas/page.tsx          # Dedicated Vedas page
│   ├── agamas/[id]/page.tsx    # Dedicated Agama detail
│   ├── darshanas/[id]/page.tsx # Dedicated Darshana detail
│   ├── itihasa/[id]/page.tsx   # Dedicated Itihasa detail
│   ├── living-knowledge/[id]/  # Dedicated Living Knowledge detail
│   ├── nastika-darshanas/[id]/ # Dedicated Nastika detail
│   ├── puranas/[id]/page.tsx   # Dedicated Purana detail
│   ├── upanishads/[id]/        # Dedicated Upanishad detail
│   ├── upavedas/[id]/          # Dedicated Upaveda detail
│   └── vedangas/[id]/          # Dedicated Vedanga detail
│
├── components/                 # All React components
├── lib/                        # All data + utility modules
├── public/                     # Static assets (images, icons, sw.js)
├── android/                    # Capacitor Android project
├── capacitor.config.ts         # Capacitor config (appId: com.bharatiyagyan.bhandar)
├── package.json
└── tsconfig.json
```

---

## 4. Home Page Structure (`app/page.tsx`)

The home page composes these sections in order:

1. **`<Header />`** — sticky top nav with logo, nav links, theme toggle, language toggle, share button, mobile hamburger
2. **`<Hero />`** — headline, live Panchanga strip, rotating Mahāvākya verse with modal
3. **`<About />`** — editorial intro
4. **`<Introduction />`** — extended about text
5. **`<DailyStrip />`** — rotating Subhāṣita strip (Bhartṛhari verse) with share
6. **`<SectionsGrid />`** — the main corpus browser (28 sections, filterable, era-grouped)
7. **`<Contributors />`** — ṛṣis, ācāryas, scientists, saints — click for detail modal
8. **`<Concepts />`** — core philosophical concepts — click for detail modal
9. **`<LivingKnowledge />`** — India's contributions to the world (9 domains)
10. **`<Dinacharya />`** — Āyurvedic daily schedule (6 segments)
11. **`<Footer />`** — colophon, navigation, live samvat year

---

## 5. Routing

### `lib/routes.ts`
Maps content IDs to URL paths. Two functions:
- `sectionPath(section)` — builds `/slug/` URL from a Section's `id` or `href`
- `treeNodePath(id)` — maps tree node IDs (e.g. `'rig'`, `'upani'`) to section URLs

### Dedicated vs Generic Routes
Some sections have hand-crafted detail pages (in dedicated `app/agamas/[id]/`, etc.). Others fall through to the generic `app/[slug]/[id]/page.tsx` + `ItemDetailView` component. The generic handler's `DEDICATED_SECTIONS` set lists what to skip.

---

## 6. Data Architecture

All content lives in `lib/` as plain TypeScript. Pattern: every data module has an `_mr` (Marathi) variant containing the same structure with Marathi text.

### Core data files

| File | What it holds |
|---|---|
| `lib/data.ts` | `SECTIONS` array (28 corpus sections), `FILTERS`, `HERO_SHLOKA`, `FEATURE`, `DAILY`, `DINACHARYA`, `ESSAYS`, `TREE` (knowledge tree nodes) |
| `lib/data_mr.ts` | Marathi versions of the above |
| `lib/section-data.ts` | `SECTION_DETAILS` — detailed content for item-level pages (each section's items with summary, description, etc.) |
| `lib/section-data_mr.ts` | Marathi version |
| `lib/upanishads-data.ts` | Upanishad entries |
| `lib/vedangas-data.ts` | Vedāṅga entries |
| `lib/upavedas-data.ts` | Upaveda entries |
| `lib/darshanas-data.ts` | Darśana entries |
| `lib/puranas-data.ts` | Purāṇa entries |
| `lib/agamas-data.ts` | Āgama entries |
| `lib/itihasa-data.ts` | Itihāsa entries |
| `lib/nastika-data.ts` | Nāstika Darśana entries |
| `lib/living-knowledge-data.ts` | 9 domains, contributions, debated-claim flags |
| `lib/concepts-data.ts` | Core concepts (7 domains) |
| `lib/contributors-data.ts` | Ṛṣis, ācāryas, saints, scientists across 4 eras |
| `lib/mahavakya-data.ts` | Mahāvākya verses (rotating in Hero) |
| `lib/subhashit-data.ts` | Subhāṣita verses (rotating in DailyStrip) |
| `lib/intro-data.ts` | Introduction section content |
| `lib/vedasData.ts` | Vedas page data |

### `Section` type (from `lib/data.ts`)
```ts
type Section = {
  id: string;        // e.g. 'vedas', 'upanishads'
  title: string;     // English title
  deva: string;      // Devanāgarī
  n: string;         // Card number e.g. '01'
  tag: string;       // e.g. 'Śruti', 'Applied'
  era: string;       // 'vedic' | 'classical' | 'medieval' | 'modern' | 'all'
  type: string;      // 'shruti' | 'smriti' | 'tantra' | 'heterodox' | 'parallel' | 'auxiliary' | 'primer' | 'practice'
  topic: string;     // 'foundational' | 'philosophy' | 'applied' | 'language' | 'literature' | 'practice'
  count: string;     // Short descriptor e.g. '4 saṃhitās'
  blurb: string;     // Card description
  facets: string[];  // 3 facet tags on the card
  href: string;      // Legacy .html link (stripped to clean URL by sectionPath())
};
```

---

## 7. Language System

### `lib/LanguageContext.tsx`

- Languages: English (`'en'`) and Marathi (`'mr'`)
- Stored in `localStorage` under key `'bgb-lang'`
- React Context: `LanguageProvider` wraps the entire app in `layout.tsx`
- Hook: `useLanguage()` returns `{ lang, setLang, t }`
- `t(key)` is a simple string lookup against `TRANSLATIONS[lang]` with English fallback
- All translation keys are in a single `TRANSLATIONS` object inside the context file
- Data modules have `_mr` variants; components pick the right one with `lang === 'mr' ? DATA_MR : DATA_EN`

### `components/LangControl.tsx`
Toggle button for switching between EN and MR — sets lang in context + localStorage.

---

## 8. Theme System

Three themes: **Cream** (default), **Dark**, **Saffron**.

- Saved in `localStorage` under key `'bgb-theme'`
- Applied via `data-theme` attribute on `<html>`
- Initialized before first paint via an inline `<script>` in `layout.tsx` (no flash of wrong theme)
- Prefers system dark mode if no saved preference
- CSS variables defined in `globals.css` for each theme (`:root`, `[data-theme="dark"]`, `[data-theme="saffron"]`)
- Theme toggle component: `components/ThemeControl.tsx` — can render as `variant="bar"` or `variant="menu"` (inside mobile nav)
- Two instances of ThemeControl exist (header bar + mobile menu); they stay in sync via a custom `bgb-theme-change` `CustomEvent`

### Accent palette (CSS vars)
Era groups and concept domains each get a CSS accent colour:
- `--ac-vedic`, `--ac-classical`, `--ac-medieval`, `--ac-modern`
- `--ac-order`, `--ac-ethics`, `--ac-liberation`, `--ac-mind`, `--ac-knowledge`, `--ac-heterodox`, `--ac-aesthetics`

---

## 9. Panchanga (Live Hindu Calendar)

**`lib/panchanga.ts`** — Computes live Vikram Saṃvat calendar data using `mhah-panchang`.

- Uses **Ujjain coordinates** (23.1765°N, 75.7885°E) — canonical reference for Vikram Saṃvat
- `getPanchanga(date)` returns `PanchangaInfo` with bilingual `{ en, mr }` fields for:
  - **Tithi** (lunar day — 30 names, mapped from mhah-panchang's Telugu-style names)
  - **Paksha** (Śukla / Kṛṣṇa)
  - **Masa** (lunar month, with leap month / adhika detection)
  - **Vāra** (day of week)
  - **Samvat** (Vikram Saṃvat year — Gregorian + 56 before Mar 22, + 57 after)
- **`components/Panchanga.tsx`** — renders the strip in Hero: `Caturdaśī · Śukla Pakṣa · Vaiśākha · Guruvāra · Vikram Saṃvat 2083`
- Footer also shows samvat + masa via the same `getPanchanga()` call

---

## 10. Verse Rotation

**`lib/useRandomVerse.ts`** — Custom hook for rotating verses without SSR/hydration mismatch.

- Renders item 0 on first server render
- Post-mount, picks a random index (avoids hydration mismatch with `Math.random`)
- `next()` re-rolls to a *different* index

Used by:
- **Hero** → rotates through `MAHAVAKYAS` (mahāvākya verses)
- **DailyStrip** → rotates through `SUBHASHITS` (Bhartṛhari subhāṣitas)

Both have a `VerseModal` that opens on "Show explanation →" with full meaning + explanation.

---

## 11. Key Components

### `components/Header.tsx`
- Sticky header with: logo seal + name, nav links (`/#sections`, `/#concepts`, `/#contributors`, `/#living-knowledge`, `/lifestyle/`), share button, language toggle, theme toggle, hamburger (mobile)
- Mobile menu closes on `Escape` key
- Logo shows Marathi name in Devanāgarī when `lang === 'mr'`

### `components/SectionsGrid.tsx`
- The main corpus browser — 28 sections as clickable cards
- Filter chips: **Canon type** (Śruti, Smṛti, Āgama/Tantra, Nāstika, Parallel, Auxiliary) and **Topic** (Foundational, Philosophy, Applied, Language, Literature, Practice)
- Sections are grouped by **era** with full-width era banners (`EraHeader`)
- Era banners have emblems (SVG line-art) from `Ornaments`
- Each card shows: thumbnail image (`/corpus-{id}.png`), number, tag, title, Devanāgarī name, blurb, 3 facet chips
- Uses `saveScroll` / `useScrollRestoration` so back-navigation returns to the same position

### `components/LivingKnowledge.tsx`
- 9 domain tiles (Mathematics, Astronomy, Medicine, Mind Sciences, Body Sciences, Environment, Language, Materials, Life Sciences)
- Click a tile → expand contributions list (with keyboard/focus management, smooth scroll)
- Items can be tagged `debated: true` → shown with "Debated claim" label
- Detail pages at `/living-knowledge/[id]/`

### `components/Contributors.tsx`
- Contributors across 4 eras (Vedic, Classical, Medieval, Modern)
- Click card → `ContributorModal` with: contributions, legacy, key works, links to corpus sections

### `components/Concepts.tsx`
- Core concepts across 7 domains
- Click card → `ConceptModal` with: aspects, significance, related terms, where it appears in the corpus

### `components/Dinacharya.tsx`
- 6 Āyurvedic day segments rendered as a timeline/ribbon

### `components/Frames.tsx`
- `DailyStrip` — rotating Subhāṣita strip
- `Essays` — editorial essays list
- `Footer` — colophon with live samvat, navigation links, license

### `components/Ornaments.tsx`
- SVG decorative elements: `HeaderSeal`, `CornerOrn`, `Glyph`, `Mandala`, `Emblem`
- `Emblem` renders era-specific line art by name (`vedic`, `classical`, `medieval`, `modern`)

### `components/ShareButton.tsx` / `SiteShareButton.tsx`
- Uses Web Share API with clipboard fallback
- `ShareButton` — shares individual verses (deva + translit + meaning + explanation + source)
- `SiteShareButton` — shares the site URL; two variants: `'icon'` (header) and `'footer'`

### `components/VerseModal.tsx`
- Full-screen modal for verse detail: Sanskrit + transliteration + meaning + explanation
- Has its own share and copy-text buttons
- Closes on backdrop click or `Escape`

### `components/BranchTree.tsx`
- Interactive knowledge tree visualization showing the three-stream structure (Śruti / Smṛti / Itara)

---

## 12. Detail Page Architecture

### Generic detail (`app/[slug]/[id]/page.tsx`)
- Statically generated at build time via `generateStaticParams()`
- Skips sections that have dedicated routes (`DEDICATED_SECTIONS` set)
- Uses `ItemDetailView` component

### Dedicated detail pages
Some sections have their own components for richer presentation:
- `AgamaDetail`, `DarshanaDetail`, `ItihasaDetail`, `NastikaDetail`, `PuranaDetail`, `UpanishadDetail`, `UpavedaDetail`, `VedangaDetail`
- `LivingKnowledgeDetail` — for living knowledge items
- `SectionDetail` — used by generic section overview pages (`app/[slug]/page.tsx`)

---

## 13. CSS Architecture

**Single file: `app/globals.css`** — no CSS modules, no Tailwind.

Structure:
1. `:root` CSS variables (cream palette defaults)
2. Theme overrides (`[data-theme="dark"]`, `[data-theme="saffron"]`)
3. Typography (font families, scale)
4. Layout helpers (`.shell` max-width container, `.frame` section wrapper)
5. Component styles (`.hdr`, `.hero`, `.strip`, `.card`, `.ftr`, etc.)
6. Devanāgarī control (`[data-deva="off"] .deva-only { display: none }`)
7. Card style variant (`[data-card="stamp"]` for the stamp-style card corners)

The `data-deva` attribute on `<html>` controls whether Devanāgarī script elements show. Currently defaults to `"on"`.

---

## 14. Transliteration

**`lib/transliterate.ts`** — Devanāgarī → IAST transliteration.

- Maps vowels, mātrās, consonants, virama (halant), misc characters
- Handles virama-joined consonant clusters
- Special-cases a few Tamil strings (Āḷvār songs)
- Used to generate IAST from stored Devanāgarī where needed

---

## 15. Scroll Restoration

**`lib/scroll.ts`**

- `saveScroll(key)` — saves `window.scrollY` to `sessionStorage` before navigating away
- `useScrollRestoration(key)` — on mount, reads saved position and scrolls back (via `requestAnimationFrame`)
- Used in `SectionsGrid` so that clicking a card and pressing back returns to the same scroll position

---

## 16. Service Worker / PWA

- `public/sw.js` — a simple service worker for offline capability
- Registered in `layout.tsx` via an inline script after page load
- `app/manifest.ts` — generates the PWA web manifest
- Enables "Add to Home Screen" on Android Chrome

---

## 17. Android / Capacitor

- **App ID:** `com.bharatiyagyan.bhandar`
- **App name:** `Bhāratīya Jñāna Bhaṇḍāra`
- **Web dir:** `out` (Next.js static export output)
- **Scheme:** `https` on Android
- Build flow: `next build` → `out/` directory → `npx cap sync android` → Android Studio / Gradle build
- Release APK signing config is in `android/app/build.gradle`
- The app is essentially a WebView wrapping the static Next.js export

---

## 18. Environment Variables

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages sub-path prefix (e.g. `/bharatiy-gyan-bhandar`). Empty string for root domain or local dev. Used in image paths, SW registration URL, layout links. |

---

## 19. The 28 Corpus Sections

Sections are numbered 01–28, grouped into four eras:

**Vedic Era** (c. 1500–500 BCE)
1. The Four Vedas (`vedas`) — Ṛg, Yajur, Sāma, Atharva
2. The Upavedas (`upavedas`) — Āyurveda, Dhanurveda, Gāndharvaveda, Sthāpatyaveda
3. The Six Vedāṅgas (`vedangas`) — phonetics, ritual, grammar, etymology, prosody, astronomy

**Classical Era** (c. 500 BCE–800 CE)
4. Upaniṣads (`upanishads`) — 108 total, 10 principal
5. Āstika Darśanas (`darshanas`) — Nyāya, Vaiśeṣika, Sāṅkhya, Yoga, Mīmāṃsā, Vedānta
6. Vedānta Schools (`vedanta-schools`) — Advaita, Viśiṣṭādvaita, Dvaita
7. Philosophy of Language (`language-philosophy`) — Bhartṛhari, Vākyapadīya
8. Nāstika Darśanas (`nastika-darshanas`) — Cārvāka, Bauddha, Jaina
9. Śruti & Smṛti (`shruti-smriti`) — field guide
10. Āgamas & Tantra (`agamas`) — Śaiva, Vaiṣṇava, Śākta
11. Tantra & Āgama Texts (`tantra-texts`) — Śiva-sūtra, Vijñāna Bhairava, Tantrāloka
12. Yantra & Maṇḍala (`yantra`) — Śrī Yantra, maṇḍala, vāstu-puruṣa
13. Itihāsa (`itihasa`) — Rāmāyaṇa, Mahābhārata
14. Purāṇas (`puranas`) — 18 Mahā-purāṇas
15. Dinacaryā & Living (`lifestyle`) — Āyurvedic daily structure
16. Rangoli & Ritual Art (`rangoli`) — kolam, alpana, mandana
17. Bhagavad Gītā (`gita`) — 700 verses, 18 chapters
18. Dharma-śāstra (`dharmashastra`) — Manu, Yājñavalkya, Nārada
19. Artha-śāstra (`arthashastra`) — Kauṭilya
20. Kāma-śāstra (`kamashastra`) — Vātsyāyana
21. Kāvya & Nāṭya (`kavya`) — Kālidāsa, Pañcatantra
22. The Kāvya Poets (`kavya-poets`) — Kālidāsa to Jayadeva
23. Bhakti Traditions (`bhakti`) — Ālvārs, Nāyanārs, Vārkarī, Sants

**Medieval Era** (c. 800–1800 CE)
24. Marathi Sants (`marathi-sants`) — Jñāneśvar, Nāmdev, Eknāth, Tukārām, Rāmdās

**Classical + Applied**
25. Indic Sciences & Mathematics (`sciences`) — Śulba-sūtras, decimal/zero, Āryabhaṭa, Kerala school
26. Subhāṣita & Nīti (`subhashita`) — Bhartṛhari śatakas, aphoristic tradition

**Across All Eras**
27. Parallel Canons (`parallel`) — Jain Āgamas, Buddhist Tripiṭaka, Gurū Granth Sāhib
28. Modern Indic Thought (`modern`) — Vivekananda, Aurobindo, Gandhi, Ambedkar

---

## 20. Knowledge Tree (`TREE` in `lib/data.ts`)

Three-stream tree rooted at **Sanātana**:
- **Śruti** — apauruṣeya (not human-authored): Vedas + Upaniṣads (5 leaf nodes)
- **Smṛti** — human-authored compositions: Vedāṅgas, Upavedas, Darśanas, Itihāsa, Purāṇas, Āgamas, Dharmaśāstra, Arthaśāstra, Kāvya, Subhāṣita, Gaṇita, Bhakti (12 leaf nodes)
- **Itara** — outside Vedic line: Nāstika, Parallel, Ādhunika (3 leaf nodes)

Rendered by `components/BranchTree.tsx`.

---

## 21. Living Knowledge (9 Domains)

India's contributions to the world, with debated-claim transparency:

| Domain ID | Domain |
|---|---|
| `math` | Mathematics |
| `astronomy` | Astronomy |
| `medicine` | Medicine (Āyurveda) |
| `mind` | Mind sciences (Yoga, meditation) |
| `body` | Body sciences |
| `environment` | Environmental knowledge |
| `language` | Linguistics (Pāṇini, etc.) |
| `materials` | Materials science / metallurgy |
| `life` | Life sciences |

Each contribution can be flagged `debated: true`, shown with a "Debated claim" label — editorial honesty feature.

---

## 22. What Is Not Yet Built

- Essays are static placeholder text (no CMS, no real routing to individual essay pages)
- Sanskrit learning section (listed in nav translations as `'nav.sanskrit'`) — not yet implemented
- Phase II living knowledge detail pages (some show "Detailed account coming soon")
- Full Vedas page has content but some sub-sections may be stubs

---

## 23. Conventions to Know

- **`'use client'`** — most components are client components (no RSC-specific patterns)
- **Bilingual data pattern:** `const DATA = lang === 'mr' ? DATA_MR : DATA_EN`
- **Image paths:** corpus thumbnail images follow `/corpus-{section-id}.png` naming; accessed via `NEXT_PUBLIC_BASE_PATH` prefix
- **CSS class naming:** BEM-adjacent but not strict — `.hdr`, `.hdr-inner`, `.hdr-nav`, `.card`, `.card-thumb`, `.frame`, `.frame-hd`, `.shell`, etc.
- **No test suite** exists in the project
- **`data-deva` attribute** on `<html>` (default `"on"`) gates `.deva-only` elements — designed to allow a future "hide Devanāgarī" toggle
- **`data-card` attribute** on `<html>` (default `"stamp"`) drives card corner ornament style

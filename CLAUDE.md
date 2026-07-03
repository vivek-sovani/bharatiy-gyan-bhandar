# CLAUDE.md — Bhāratīya Jñāna Bhaṇḍāra

> For a full technical deep-dive, read **PROJECT_CONTEXT.md** in this repo. This file covers what Claude needs to work efficiently on day one.

---

## What This Project Is

An open digital archive of Indic knowledge systems — Vedas, Upaniṣads, Darśanas, Itihāsa, Purāṇas, Āgamas, and more. Bilingual (English + Marathi). Three themes. Deployed as a static Next.js site on GitHub Pages and as an Android APK via Capacitor.

**Author:** Vivek Sovani  
**Live site:** `https://vivek-sovani.github.io/bharatiy-gyan-bhandar/`  
**Android package:** `com.bharatiyagyan.bhandar`

---

## Tech Stack

- **Next.js 15** (App Router, `output: 'export'` — fully static)
- **React 19**, TypeScript 5.7
- **Capacitor 8** for Android
- **No backend, no database, no API calls** — all content is TypeScript data files
- **No Tailwind, no UI library** — pure CSS in `app/globals.css`
- **`mhah-panchang`** npm package for live Hindu calendar computation

---

## Essential Commands

```bash
npm run dev        # Local dev server
npm run build      # Static export → out/
npx cap sync android   # Sync web build into Android project
```

TypeScript check (no emit):
```bash
npx tsc --noEmit
```

Android release build:
```bash
cd android && ./gradlew bundleRelease
# Output: android/app/build/outputs/bundle/release/app-release.aab
```

---

## Key Conventions

### Data files
- All content lives in `lib/` as plain TypeScript arrays/objects — no CMS, no API
- Every data module has an `_mr` Marathi variant (e.g. `lib/data.ts` + `lib/data_mr.ts`)
- Components pick the right variant: `const DATA = lang === 'mr' ? DATA_MR : DATA_EN`

### Language
- Two languages: `'en'` (English) and `'mr'` (Marathi)
- Context: `lib/LanguageContext.tsx` → `useLanguage()` returns `{ lang, setLang, t }`
- `t(key)` looks up string in `TRANSLATIONS[lang]` with English fallback
- Stored in `localStorage` under key `'bgb-lang'`

### Theme
- Three themes: `cream` (default), `dark`, `saffron`
- Applied via `data-theme` on `<html>` — set before first paint in `layout.tsx` (no flash)
- Stored in `localStorage` under key `'bgb-theme'`
- All colors are CSS variables in `globals.css`; never hardcode colors

### Routing
- Section overview: `app/[slug]/page.tsx` (generic) — some sections have dedicated pages
- Item detail: `app/[slug]/[id]/page.tsx` (generic) or dedicated `app/agamas/[id]/`, etc.
- Dedicated sections (have own routes): `agamas`, `darshanas`, `itihasa`, `nastika-darshanas`, `puranas`, `upanishads`, `upavedas`, `vedangas`
- `lib/routes.ts` → `sectionPath()` builds clean URLs from section objects

### Images
- Corpus card thumbnails: `/corpus-{section-id}.png` (in `public/`)
- Always prefix with `process.env.NEXT_PUBLIC_BASE_PATH || ''` for GitHub Pages compatibility

### CSS
- Single file: `app/globals.css` — do not create CSS modules or component CSS files
- Class naming: BEM-adjacent (`.hdr`, `.hdr-inner`, `.hdr-nav`, `.card`, `.frame`, `.shell`)
- `.shell` = max-width container; `.frame` = section wrapper
- `.deva-only` = Devanāgarī text (hidden when `data-deva="off"` on `<html>`)

### Components
- Almost all components are `'use client'` — no RSC-specific patterns needed
- No comments unless WHY is non-obvious
- No Tailwind classes, no inline style objects for layout (use CSS vars for dynamic values)

---

## Section IDs (the 28 corpus sections)

`vedas`, `upavedas`, `vedangas`, `upanishads`, `darshanas`, `vedanta-schools`, `language-philosophy`, `nastika-darshanas`, `shruti-smriti`, `agamas`, `tantra-texts`, `yantra`, `itihasa`, `puranas`, `lifestyle`, `rangoli`, `gita`, `dharmashastra`, `arthashastra`, `kamashastra`, `kavya`, `kavya-poets`, `bhakti`, `marathi-sants`, `sciences`, `subhashita`, `parallel`, `modern`

---

## What Is NOT Yet Built

- Individual essay pages (essays are placeholder text; no routing)
- Sanskrit learning section (`nav.sanskrit` key exists but no page)
- Some Living Knowledge detail pages show "Phase II coming soon"

---

## Android / Play Store

- **App ID:** `com.bharatiyagyan.bhandar`
- **Build:** `next build` → `out/` → `npx cap sync android` → `./gradlew bundleRelease`
- **Signing:** keystore path/alias/passwords sourced from env vars (`KEYSTORE_PATH`, `KEYSTORE_PASS`, `KEY_ALIAS`, `KEY_PASS`)
- **Privacy policy:** lives at `/privacy/` — required for Play Store
- **Contact email:** `vivek.sovani@gmail.com`
- See `store.md` for full Play Store listing metadata and asset specs

---

## Panchanga

`lib/panchanga.ts` computes live Vikram Saṃvat calendar using `mhah-panchang`:
- Anchored to **Ujjain coordinates** (23.1765°N, 75.7885°E)
- Returns bilingual `{ en, mr }` for tithi, paksha, masa, vara, samvat year
- Used in `components/Panchanga.tsx` (Hero eyebrow) and `Footer`

---

## Verse Rotation

`lib/useRandomVerse.ts` — picks random verse post-mount (SSR-safe, avoids hydration mismatch). Used by Hero (Mahāvākyas) and DailyStrip (Subhāṣitas). Both open a `VerseModal` for full explanation.

---

## Scroll Restoration

`lib/scroll.ts` — `saveScroll(key)` + `useScrollRestoration(key)` via `sessionStorage`. Used in `SectionsGrid` so back-navigation returns to the same card position.

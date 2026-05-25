# Bhāratīya Jñāna Bhaṇḍāra · भारतीय ज्ञान भण्डार

An open digital library of the texts, sciences and ways of living rooted in the
Indic knowledge systems. Built as a static site so it is fast, free to host, and
built to last.

Recreated from a [Claude Design](https://claude.ai/design) handoff as a real,
data-driven [Next.js](https://nextjs.org) app.

## Stack

- **Next.js (App Router)** with **static export** (`output: 'export'`) — every page
  is pre-rendered to HTML, which is good for SEO and lets GitHub Pages serve it directly.
- **TypeScript** + plain global CSS (ported faithfully from the design; no UI framework).
- Three themes (cream / dark / saffron) and a Devanāgarī on/off toggle, persisted
  to `localStorage`.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # static site exported to ./out
```

Locally the site is served from `/`. The deploy workflow sets
`PAGES_BASE_PATH=/<repo>` so the same build works under a GitHub Pages project path.

## Project structure

```
app/                 routes (App Router) + global CSS + mask SVGs
  page.tsx           home (hero, knowledge tree, library grid, lifestyle, essays)
  [slug]/page.tsx    one page per library section (tabs / grid / primer layouts)
  vedas/page.tsx     bespoke page for the four Vedas
components/          React components (Header, Hero, BranchTree, SectionTabs, …)
lib/
  data.ts            SECTIONS, FILTERS, TREE and home-page content
  section-data.ts    detail content for each section page
  routes.ts          maps section ids → clean routes
```

## Adding a text

The library is data-driven, so adding a text is a content edit, not a code change:

1. Add an entry to `SECTIONS` in [`lib/data.ts`](lib/data.ts) (this lists it in the
   library grid and, if relevant, the knowledge tree).
2. Add a matching detail entry to `SECTION_DETAILS` in
   [`lib/section-data.ts`](lib/section-data.ts), choosing a layout:
   `tabs` (2–6 items), `grid` (many items) or `primer`.

A static page at `/<id>` is generated automatically on the next build.

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.

To enable it the first time: repository **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

## Content note

All copy is original synthesis written for an educational platform.
Released under CC BY-SA 4.0.

# The Jñāna Bhaṇḍāra App Family — Which Topics Deserve a Full App

> Context: Bhāratīya Jñāna Bhaṇḍāra is the **gateway** — awareness-level content across 28 sections. Deep exploration lives in dedicated apps, like the existing **Gītā app**. This document ranks which topics can carry a full standalone app, using the Gītā app as the template.

---

## What Made the Gītā Work as a Full App (the test)

A topic earns a dedicated app when it passes four tests:

1. **Bounded canonical corpus** — a fixed text you can *complete* (700 verses, 18 chapters). Not an open-ended subject.
2. **Daily-use ritual** — a reason to open it every day (a verse, a chapter, a calendar), not just once.
3. **Named demand** — people search the Play Store for it by name ("Gita", "panchang", "Dnyaneshwari"), so the app is discoverable without marketing.
4. **Reusable stack** — verse-level structure (Devanāgarī + transliteration + meaning + explanation) that fits the architecture you already have: bilingual EN/MR context, three themes, VerseModal, share, Capacitor.

Scored against these, here is the ranking.

---

## Tier 1 — Build Next (content or tech already half-done)

### 1. Subhāṣita — "A Verse a Day" app ⭐ lowest effort, fastest to ship
- **Corpus:** Bhartṛhari's three śatakas (~300 verses) + Cāṇakya-nīti + Hitopadeśa selections. Bounded and extendable.
- **Head start:** `lib/subhashit-data.ts` already holds **300 fully-treated verses** — Sanskrit, transliteration, translation, explanation. The content for v1 exists *today*.
- **Daily ritual:** verse of the day + Android notification + home-screen widget + share card. This is the purest daily-habit app in the whole list.
- **Audience:** universal — the WhatsApp-forward audience is enormous, and quote apps have proven retention.
- **App shape:** Today's verse · browse by theme (nīti/vairāgya/śṛṅgāra) · favorites · share as image.

### 2. Panchanga & Festivals — the daily utility app
- **Head start:** `lib/panchanga.ts` with `mhah-panchang`, Ujjain-anchored, bilingual output — the hard engine is **already built and running** in the gateway app.
- **Daily ritual:** strongest of all — a calendar is opened every day by definition. Panchang apps are among the highest-install Indic apps on the Play Store, but most are cluttered and ad-ridden; your clean, dignified design is a genuine differentiator.
- **App shape:** today's full panchanga (tithi, nakṣatra, yoga, karaṇa, muhūrta) · month view · festival dates with *why this day matters* (each festival becomes a doorway into the knowledge, echoing the gateway app's mission) · Marathi-first option (huge for sankashti/ekadashi tracking).
- **Note:** needs nakṣatra/yoga/karaṇa added on top of what the gateway shows — `mhah-panchang` already computes them.

### 3. Upaniṣads — the natural sibling of the Gītā app
- **Corpus:** the 10 principal Upaniṣads, verse by verse. Genuinely bounded — Īśa is 18 verses, Kena 35, Māṇḍūkya 12; the two large ones (Chāndogya, Bṛhadāraṇyaka) can ship section-wise.
- **Head start:** structure and openings exist in `lib/upanishads-data.ts` + 50 Mahāvākyas already fully treated.
- **Audience:** the same person who installed your Gītā app — this is the direct upsell. "Finished the Gītā? The Upaniṣads are where its ideas come from."
- **App shape:** identical to the Gītā app — chapter/verse reader, meaning + commentary, bookmarks, verse of the day.

---

## Tier 2 — Strong Candidates (more content work, distinct audiences)

### 4. Dnyāneshwarī & Marathi Sants — your unfair advantage 🥇 in differentiation
- **Corpus:** Dnyāneshwarī (~9,000 ovīs, 18 chapters — mirrors the Gītā app's structure exactly, since it *is* a Gītā commentary), Hāripāṭh (28 abhaṅgas — perfect daily unit), Tukārām Gāthā selections, Manāche Śloka (205 — another perfect daily unit).
- **Why you:** you already write bilingual Marathi content natively; the Vārkarī audience is millions strong in Maharashtra, deeply engaged (daily Hāripāṭh recitation is an existing habit you'd be digitizing, not creating); quality competition is thin.
- **Daily ritual:** abhaṅga of the day, Hāripāṭh mode, Āṣāḍhī/Kārtikī Vārī countdown.
- **Could be one "Sant Sāhitya" app or start with Dnyāneshwarī alone.**

### 5. Rāmāyaṇa — the story app (the all-ages play)
- **Corpus:** bounded epic; ship as **episodes** (7 kāṇḍas → ~60–80 story episodes), not verse-by-verse. Selected ślokas decorate each episode rather than drive it.
- **Audience:** the only candidate that genuinely serves children and families — bedtime-story mode, one episode a day.
- **Daily ritual:** episode-a-day with "continue the story" — the serial format is a retention machine.
- **Effort:** high (it's a writing project), but the gateway app's Itihāsa story-arc work (see IMPROVEMENTS.md §2.2) becomes the seed content.
- Mahābhārata follows the same template later — bigger, so do Rāmāyaṇa first.

### 6. Yoga-sūtras of Patañjali — the global-audience play
- **Corpus:** exactly **196 sūtras** in 4 pādas — the most bounded text in the entire list.
- **Audience:** the worldwide English-speaking yoga community — the only app in this family with a natural international market. App stores are full of shallow yoga-asana apps; a serious, beautiful sūtra-by-sūtra reader is a gap.
- **App shape:** sūtra reader (Devanāgarī + IAST + word-by-word gloss + meaning) · sūtra of the day · thematic paths (what is citta, the eight limbs).

---

## Tier 3 — Viable Later

| Topic | Corpus | Why not yet |
|---|---|---|
| **Mahābhārata episodes** | 18 parvas → ~150 episodes | Do Rāmāyaṇa first, reuse the template |
| **Cāṇakya-nīti / Arthaśāstra wisdom** | Bounded aphorisms | Strong genre, but overlaps the Subhāṣita app — could be a *mode* inside it |
| **Stotra-saṅgraha** (daily prayers, āratīs) | Bounded, high daily use | Crowded market; differentiation is audio quality, which is a production project |
| **Sanskrit learning** | Open-ended | The `nav.sanskrit` placeholder in the gateway hints at this — but a *learning* app (lessons, exercises, progress) is a different product category and 5–10× the effort of a reader app. Park it. |
| **Āyurveda / Dinacaryā** | Semi-bounded | Wellness market is large, but health-adjacent content triggers Play Store medical-claims scrutiny; keep it awareness-level in the gateway |
| **108 Upaniṣads complete** | Bounded but vast | Extension of the Upaniṣads app, not a separate one |

---

## Recommended Sequence

1. **Subhāṣita app** — content is 80% written, smallest build, proves the "family" model fast.
2. **Panchanga app** — engine exists; the daily-utility anchor of the family that cross-promotes all others.
3. **Upaniṣads app** — direct sequel for the Gītā app's audience; reuse its codebase wholesale.
4. **Dnyāneshwarī / Sant Sāhitya** — the Marathi flagship no one else will build as well.
5. **Rāmāyaṇa episodes** — the all-ages expansion.
6. **Yoga-sūtras** — the international expansion.

## Making the Family Work Together

- **Gateway integration:** in Bhāratīya Jñāna Bhaṇḍāra, each section that has a full app gets a quiet card — *"Go deeper: the complete Gītā, verse by verse →"* linking to the Play Store / web app. The gateway's job (spark interest) and the family's job (satisfy it) stay cleanly separated.
- **One shared core:** LanguageContext, themes, VerseModal, ShareButton, panchanga lib, and Capacitor config are already app-agnostic — extract them once into a shared template so every new app starts at 60%.
- **Consistent identity:** same fonts, same three themes, same seal — the Play Store developer page becomes a recognizable "Bhāratīya Jñāna" shelf, and each app's users discover the others.
- **Naming pattern:** e.g. *"Gītā — Jñāna Bhaṇḍāra"*, *"Panchāṅga — Jñāna Bhaṇḍāra"* so search finds the topic and the brand accumulates.

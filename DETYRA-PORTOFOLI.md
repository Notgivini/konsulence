# DETYRA — Portofoli DSS

**Task brief for Claude Code. Read `CLAUDE.md` first.**
Version 1.1 · 2 August 2026

---

## Why this task exists

`software.html` currently describes six things DSS builds and shows **zero** of them. Every visitor who arrives from a social bio, an ad, or a WhatsApp link reads a list of promises with no evidence behind it.

DSS has shipped real, live, working sites for named local businesses. That work is the single most persuasive asset the company owns and it is currently invisible.

**Goal:** make the work visible, in a way a restaurant owner can verify on their phone in ten seconds.

---

## What to build

Two deliverables, in this order.

### A — A dedicated portfolio page: `/punet.html`
The full list. This is the URL sent to prospects.

### B — A teaser section on `software.html`
Three highlights plus a link to the full page. Placed **between** the existing "Linja DSS" services section and the "Kontakti DSS" contact block.

### Navigation
- **Add** `Punët Tona` to the footer's `Faqet` list.
- **Do NOT add** it to the main navigation without asking. The nav already carries seven items and is crowded on mobile.

---

## Step 0 — Discovery (do this before anything else)

Read the repo and report back:

1. How is i18n implemented? Data attributes, JSON dictionaries, separate files per language, something else?
2. What are the CSS custom properties — colours, spacing scale, breakpoints?
3. What is the reusable markup pattern for a section with an eyebrow + heading + items? (Copy the structure of the existing "Linja DSS" section.)
4. Is there a build step, or is this hand-written HTML deployed directly?
5. How are images referenced and are they optimised anywhere?

**Then propose an approach and wait for approval before writing code.**

---

## Content — Albanian is canonical

Every string below is real. Do not alter client names, do not "improve" the URLs.

### Section eyebrow
```
Portofoli DSS
```

### Heading
```
Punë që mund t'i hapni tani.
```
*(italicise `hapni`, following the site's heading convention)*

### Sub-line
```
Çdo projekt më poshtë është online dhe funksionon. Hapeni dhe shikojeni vetë.
```

---

### § 01 — Fantazia

- **Client:** Fantazia · Velipojë
- **Type:** Hotel · Bar · Restorant
- **Description:** `Menu digjitale dygjuhëshe, QR i personalizuar për tavolinat.`
- **Live link:** https://fantaziamenu.com
- **Link label:** `Hap menunë →`
- **Image:** the gold-and-dark branded QR code (asset supplied)

### § 02 — Kulla e Bajraktarit

- **Client:** Kulla e Bajraktarit
- **Type:** Agroturizëm · Hotel & Spa
- **Description:** `Menu digjitale dygjuhëshe e personalizuar dhe kartë tavoline A6 me QR-Code të integruar.`
- **Live link:** https://kullaebajraktarit-menu.com
- **Link label:** `Hap menunë →`
- **Image:** the cream A6 table card (asset supplied)

### § 03 — Marku Rent a Bike

- **Client:** Marku Rent a Bike
- **Type:** Qira biçikletash · Shkodër
- **Description:** `QR i personalizuar për vlerësime në Google, i dizajnuar dhe personalizuar sipas identitetit të biznesit.`
- **No live link** — image only
- **Image:** orange-and-teal QR with the bicycle logo (asset supplied)

### § 04 — Rrjolli Resort

- **Client:** Rrjolli Resort
- **Type:** Resort
- **Description:** `QR i personalizuar për vlerësime në Google, i integruar me logon dhe ngjyrat e resortit.`
- **No live link** — image only
- **Image:** teal-and-gold QR with the RR monogram (asset supplied)

### § 05 — Hotel Bardhyl Hysaj

- **Client:** Hotel Bardhyl Hysaj · Velipojë
- **Type:** Hotel
- **Description:** `Krijim logoje dhe kartë A6 me QR-Code për vlerësime në Google.`
- **No live link** — image only

### § 06 — konsulencë arGEar

- **Client:** konsulencë arGEar
- **Type:** Konsulencë · Shkodër
- **Description:** `Faqja që po lexoni, ka pesë gjuhë, kalkulator taksash dhe nënfaqe të tjera.`
- **Live link:** https://konsulenceargear.com
- **Link label:** `Je këtu →`

---

### Closing block

```
Doni diçka të ngjashme për biznesin tuaj?
```
Buttons: `Shkruaj DSS` (mailto:dss.argear@gmail.com) · `WhatsApp` (https://wa.me/355694341434)

---

## English version

| Element | EN |
|---|---|
| Eyebrow | `DSS Portfolio` |
| Heading | `Work you can open right now.` *(italicise `open`)* |
| Sub-line | `Every project below is live and working. Open it and see for yourself.` |
| § 01 | `Bilingual digital menu and a custom QR code for the tables.` |
| § 02 | `Custom bilingual digital menu and an A6 table card with an integrated QR code.` |
| § 03 | `Custom Google review QR code, designed and personalised around the business's own identity.` |
| § 04 | `Custom Google review QR code, built into the resort's logo and colours.` |
| § 05 | `Logo design and an A6 card with a Google review QR code.` |
| § 06 | `The site you're reading — five languages, a tax calculator, and further subpages.` |
| Link labels | `Open the menu →` · `You're here →` |
| Closing | `Want something like this for your business?` |

**DE, IT, ES:** translate from the Albanian, following whatever key structure Step 0 reveals. Keep the formal register in German (**Sie**). Flag any Italian or Spanish phrasing you're less than confident about rather than shipping it silently.

---

## Design direction

Match the existing site. Do not introduce a new visual language.

- Reuse the `§ 01` numbering, the eyebrow-above-heading pattern, and the one-italicised-word heading style already used on `software.html`.
- **Let the QR cards carry the visuals.** They are the strongest assets DSS owns — each one is colour-matched to its client's brand, and shown together they demonstrate range better than any copy could.
- Live projects (§ 01, § 02, § 06) get a visible link. Design-only projects (§ 03, § 04, § 05) get an image and no link — do not fake a link.
- Every card must be tappable on mobile, not just the small link text.
- Archivo only.

---

## Performance requirements

This page is the destination for paid traffic on Albanian mobile data. Slow means lost.

- Serve QR and card images as **WebP** with correct dimensions — do not ship full-resolution PDF exports scaled down in CSS.
- `loading="lazy"` on everything below the fold.
- Explicit `width`/`height` on images to prevent layout shift.
- Target: Lighthouse Performance ≥ 90 on mobile throttling. Report the actual measured score, don't assert it.

---

## SEO and metadata

New page `/punet.html` needs, matching the pattern already used on `software.html`:

- `<title>`, meta description, canonical
- Full Open Graph set: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` (`sq_AL`)
- Twitter card set
- Alternate language links, matching whatever the existing pages do

**Suggested title (SQ):** `Punët tona — DSS @ konsulencë arGEar`
**Suggested meta description (SQ):** `Menu digjitale, QR të personalizuar dhe faqe interneti për biznese në Shkodër, Velipojë e më gjerë. Shikoni punët reale të DSS.`

---

## Verification before reporting done

Do not report completion until every one of these has actually been run:

1. All three live links open and load: fantaziamenu.com, kullaebajraktarit-menu.com, konsulenceargear.com
2. All five languages render with no missing keys and no untranslated fallback text
3. Page renders correctly at 360px, 768px and 1440px
4. Lighthouse run on mobile — report the real numbers
5. No console errors
6. `software.html` teaser links correctly to `/punet.html`
7. Footer `Faqet` list updated
8. Nothing outside the scope above was modified — state explicitly which files changed and which lines

---

## Open decisions — ask, do not assume

1. **Berberi.** The barber-booking platform is code-complete at berberi.konsulenceargear.com but not publicly launched. Include it as an in-house product, or leave it out until launch? **Ask Arlind before adding it.**
2. **Labiatan Zogaj** and the **Kiki Lounge / Hotel Kiki** work — include, or hold back? Not currently in the list above.
3. **Client permission.** Confirm each named business is happy to appear publicly. Albanian hospitality owners generally are, but ask before publishing — a client discovering their name on an agency site without being asked is an avoidable way to lose them.
4. **Testimonials.** If quotes from Fantazia or Kulla arrive, where should they sit — inside each card, or as a separate band below the grid?

---

## Assets to be supplied by Arlind

Place in `/assets/portfolio/` before starting:

- `card fantazia.pdf` — the actual source (black background, gold trim, blue/red crest, encodes fantaziamenu.com). `qr_fantazia.svg` in the same folder is a plain backup QR, not this card. A same-named JPG in this folder ("HOTEL FANTAZIA BAR RESTORANT...") belongs to an unrelated Fantazia business in Shkodër — do not use it.
- `kulla-card.png` — cream A6 table card
- `kulla-qr.png` — plain black QR (backup, may not be needed)
- `marku-qr.png` — orange and teal QR
- `rrjolli-qr.png` — teal and gold QR
- `bardhyl-card.png` — A6 card with Google review QR (**now required** — § 05 has a firm description)

Convert to WebP as part of the task. Keep originals.

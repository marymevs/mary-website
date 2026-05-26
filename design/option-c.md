# Option C — Brutalist Grid

> Strict 12-column grid, large sans, one accent color used systematically. Capital-D Design.

## The one-line pitch

Reads like an art-school portfolio that happens to belong to an engineer. Maximum confidence, zero apology.

## What stays

- Honest content, no inflating
- No images, no JS, no backend
- The voice
- Existing structure

## What changes

A complete visual reset. Different family of decisions from both other options.

### Typography

- **Headlines:** Inter Display (or Inter, the same family used heavy) at SIZE. h1 at 96-128px. Tight letter-spacing (`-0.04em`). Weight 700–800.
- **Body:** Inter Regular, 16px, 1.5 line-height. Falls back to system-ui.
- **Small / meta:** Inter Medium, 12px, letter-spaced, often uppercased.
- **No serifs anywhere.** No monospace anywhere. Consistent sans across the whole site.
- **Numbering** is loud — `01 / 02 / 03 / 04` as big visual elements, not subtle list-style.

### Color

- Background: pure white (`#fff`)
- Foreground: true black (`#000`)
- Muted: `#666`
- Accent: `#0040ff` (electric blue) — used SYSTEMATICALLY on every link, every active state, every "interactive element"
- Border: `#000` (always)

Note: This is the only option that uses a *true* white-on-black inversion of the current site. The other two soften their backgrounds.

### Spacing

- Scale: 4 / 8 / 16 / 24 / 32 / 48 / 80 / 128 — strict 8-multiples plus 4
- Section gap: 128 (deliberately huge whitespace between major sections)
- Grid: 12 columns, gap 24px, max-width 1200px

### Layout

This is the option that **uses a visible grid**.

- **12-column grid** structures every page. Implemented with `display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px;`
- **Asymmetric column assignments** — h1 spans cols 1–8, body sits cols 1–6, "meta" sidebar sits cols 9–12. Intentional negative space on the right.
- **Numbered sections** — `01.` / `02.` / `03.` printed huge in the left margin (col 1), section content in cols 3–10.
- **Heavy black 1px rules** between sections. No subtle hairlines; the lines have weight.
- **Cards (or rather, "items") are flush black rectangles** with 1px black border and lots of internal padding. The border is the affordance.

### Motion

None. Brutalism is anti-motion. The hover state on links: the underline becomes solid (from invisible) and the text color shifts to electric blue. That's the entire interaction language.

### Cards (Selected Work)

Items in the grid, not "cards" exactly. Each Selected Work entry:
- Numbered prefix: `01` (massive — 64px), `02`, etc.
- Project name (Inter Bold, 28px)
- Tagline (Inter Regular, 16px)
- Link row (Inter Medium, 12px uppercase) — `CASE STUDY · LIVE · SOURCE`
- 1px black border, 32px internal padding, hovers to electric-blue border + blue text

### Press strip

- Label "AS SEEN IN" in Inter Medium uppercase, 12px, letter-spaced
- Publications in Inter Regular, 16px, separated by hairlines (not dots) — `[Today Show] [Vogue] [The Cut]` with thin black brackets or vertical bars

## How writing & YouTube fit

Both fit cleanly as additional gridded sections, treated the same as Selected Work:

```
04. WRITING

01. How I think about cross-cutting orchestration         2026-05-20
02. Notes on the Shopify revert at Waeve                  2026-04-12
03. What I learned shipping HIPAA APIs at 22              2026-03-01
```

Each row: number · title · date — laid out in grid columns, hover shifts the row to electric-blue text.

YouTube section identical structure, labeled "RECORDED" or "VIDEO."

## How the design system applies to other pages

- **Case studies:** the numbered-section pattern works for technical decisions (`01. Parallel connector fan-out` / `02. Resilient batch with allSettled` / etc.). File:line citations sit in a meta column to the right of the body text.
- **Resume:** rendered as a structured grid — Experience / Education / Speaking / Press as numbered sections. Less elegant than Option B for resume specifically.
- **works.html:** the homepage's gridded Selected Work pattern, but with more detail per entry (longer tagline, all links shown).
- **get-in-touch.html:** giant `04. CONTACT` with email and LinkedIn as oversized black-bordered boxes.

## Tradeoffs

**Strengths**
- Most distinctive of the three. Will be remembered.
- Confidence is the dominant signal. Reads as "this person has taste and isn't afraid to use it."
- Adapts well to lots of content — the grid scales with section count
- Works on every page (the grid system is universal)

**Weaknesses**
- "Designer's site" risk. May read to some recruiters as "Mary spent more time on design than engineering" — which the case-study content rebuts, but the first-impression cost is real
- Quant/healthtech/fintech hiring managers often read brutalist design as "art-school cute" — possible mismatch with the roles you're targeting
- Electric blue is opinionated; if it doesn't sit right with you, the whole palette needs to shift
- More fragile to content variance — adding short content next to long content in the grid creates awkward asymmetric whitespace

## References / inspirations

- Pentagram's [pentagram.com](https://www.pentagram.com)
- [are.na](https://are.na) — minimal sans, visible grid
- [klimm.de](https://www.klimm.de) (Janek Klimmek's portfolio)
- Ableton's site
- [carbon design system](https://www.carbondesignsystem.com) — IBM's brutalist-flavored modern
- Linear's marketing pages (less brutal, but the type+grid discipline applies)

# Option B — Editorial Print

> Pivot to a longform-magazine aesthetic. Reads like a New Yorker piece, not a terminal.

## The one-line pitch

Treats the site like a published essay collection. Confidence comes from typography and restraint, not from monospace cred.

## What stays

- Honest content, no inflating
- No images, no JS, no backend
- The voice ("Brooklyn. Let's build something.")
- Existing structure: bio, Selected Work, case studies, resume

## What changes

Almost every visual choice.

### Typography

- **Body:** Source Serif 4 (Google Fonts), 17px, 1.6 line-height. Falls back to `Georgia, "Times New Roman", serif`. Source Serif 4 reads warm without being floral; size is generous for longform legibility.
- **UI / labels / nav:** Inter, 13px. Falls back to `system-ui, sans-serif`. The serif/sans pairing is the most-tested combination in editorial design.
- **Headings:** Source Serif 4 Bold. Sizes: h1 64px, h2 32px, h3 20px. Tighter letter-spacing on h1 (`-0.02em`).
- **Drop cap:** First letter of the lead bio paragraph is a 4-line drop cap (`initial-letter: 4`) — visual marker that "this is the start of a real piece."
- **Justified body** with hyphenation enabled (`hyphens: auto`) — reads as print.

### Color

- Background: `#faf8f3` (off-white paper)
- Foreground: `#0d0d1a` (ink black with a deep blue cast — easier than pure black)
- Muted: `#6b6560` (warm grey, for metadata)
- Accent: `#7a1f2b` (deep burgundy) — used ONLY on pull-quote borders and one or two emphasis moments per page. Restraint is the rule.
- Hairline rule: `#ddd8d0`

### Spacing

- Scale: 4 / 8 / 12 / 16 / 24 / 36 / 56 / 80 / 128 — wider than monospace direction
- Body column: 65ch max-width, centered
- Section gap: 80
- Generous top margin on page (96px) — print magazines breathe at the top

### Layout

- **Centered single column** at 65ch. Body text sits in the middle of the page.
- **Marginalia** for case-study citations — `file-path:line` references appear in the LEFT margin (at ~32ch from page edge), tied visually to the paragraph they annotate. Not inline. Footnote-style.
- **Section headers** are small, sans-serif, all-caps, with a thin rule above:
  ```
  ─────────────────────────────────
  SELECTED WORK
  ```
- **No cards** for Selected Work. Instead a **numbered list** with roman numerals:
  ```
  I. Gist
     A daily personalized morning briefing built on Firebase and Claude.
     Case study · Live · Source

  II. MOYE
     ...
  ```
- **Pull quotes** from press articles can appear as block-level callouts with a burgundy left border, full-italic Source Serif.

### Motion

None. Print magazines don't animate. The hover state on links is a color shift to burgundy and underline-from-dotted-to-solid; that's it.

### Cards (Selected Work)

Not cards. **Numbered list** as described above. Each entry:
- Roman numeral + project name (Source Serif Bold, 24px)
- Tagline (Source Serif, 17px, regular)
- Link row (Inter sans, 13px) — Case study · Live · Source

No borders. No padding boxes. The numbering and typography do the visual work.

### Press strip

- Label "AS SEEN IN" in Inter, uppercase, 11px, letter-spaced
- Publications in Source Serif italic, separated by middle dots
- Smaller than current — feels like a magazine masthead's "previously appeared in" line

## How writing & YouTube fit

Writing is the **native** fit for this design. It's a writing-forward aesthetic.

```
─────────────────────────────────
WRITING

I.   How I think about cross-cutting orchestration
     2026-05-20 · 7 min read

II.  Notes on the Shopify revert at Waeve
     2026-04-12 · 4 min read

III. What I learned shipping HIPAA APIs at 22
     2026-03-01 · 6 min read
```

A nice add: each writing entry can have a one-sentence excerpt below the title, set in muted Source Serif italic. Optional.

YouTube is **less native** to this design. The "Recorded" section can be a similar numbered list, but the video-as-text-link is a thinner artifact than an essay-as-text-link. Two options:
1. Treat it the same as Writing (just a list of video titles) — works but doesn't shine
2. Drop YouTube from this direction entirely — lean fully into the writing-forward identity

Recommend: include YouTube, but keep it lower in the page hierarchy than Writing.

## How the design system applies to other pages

- **Case studies:** beautiful in this direction. The engineering decisions become numbered subsections, file:line citations move to margin notes, problem/architecture/decisions read as essay chapters. Real depth.
- **Resume:** rendered as a print resume — that's literally what this design language is. Likely the strongest of the three options for the resume page.
- **works.html:** the numbered list pattern from the homepage extends here, with the four entries getting more space and a brief teaser paragraph each.
- **get-in-touch.html:** "Drop a line." headline reads great in Source Serif Bold. Form (or email/LinkedIn block) gets sans-serif treatment.

## Tradeoffs

**Strengths**
- Most differentiated from "typical engineer portfolio" — recruiters who see hundreds of these will remember it
- Signals "thoughtful, writes well, has depth" — useful if applying to roles where communication matters (founding eng, eng manager, devrel)
- The longform aesthetic gives case studies room to breathe — readers will actually read them
- Print-ready resume page comes for free with this design system
- Writing section fits perfectly

**Weaknesses**
- Risks signaling "writer / thinker" more than "engineer" — some quant-dev managers may bounce
- Loses the terminal/monospace identity entirely. If your current site fans see it as "Mary's terminal portfolio," this direction breaks that brand
- More design surface to maintain (drop caps, marginalia, hyphenation) — if you tweak content frequently you'll fight the layout
- The burgundy accent is opinionated; if it doesn't feel right, the whole palette has to be re-picked

## References / inspirations

- [The Pudding](https://pudding.cool) — editorial-data hybrid
- New Yorker, Paris Review, n+1 — magazine typography
- [Stripe Press](https://press.stripe.com) — serif-forward tech writing
- [Maggie Appleton's digital garden](https://maggieappleton.com) — engineer who writes well, design supports it
- Manuel Moreale's [people-and-blogs.com](https://peopleandblogs.com) — minimal serif treatment

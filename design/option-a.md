# Option A — Terminal Refined

> Evolves the current monospace black/white aesthetic, sharpens it.

## The one-line pitch

The current site is a college student's terminal. This makes it a senior engineer's `.zshrc`.

## What stays

- Black background, white text
- Monospace as the primary typeface
- Text-only cards, no images
- Hover-invert interaction language
- No images, no motion-heavy animation, no JS
- The voice: "Brooklyn. Let's build something."

## What changes

### Typography
- **Body:** JetBrains Mono Regular, 14px, 1.6 line-height. Falls back to `ui-monospace, "SF Mono", Menlo, Consolas, "Courier New", monospace`. JetBrains Mono is free, ligature-aware, and signals "engineer who knows their tools" without being precious.
- **Headings:** Same family, weight 700. Sizes: h1 48px (down from current 75px — feels designed instead of throwaway), h2 24px, h3 16px.
- **Labels:** `text-transform: uppercase; letter-spacing: 0.3em; font-size: 11px` — used for section dividers and metadata
- **Consistent ramp:** 11 / 13 / 14 / 16 / 24 / 48 — six sizes, no others

### Color
- Background: `#0d0d0d` (off-pure-black — easier on eyes than `#000`)
- Foreground: `#f5f5f0` (off-pure-white — same reason)
- Muted: `#888` (timestamps, metadata)
- Accent: `#f0c674` (Solarized amber-light) — used ONLY for hover states and active links. One accent, used systematically.
- Border: `#2a2a2a` (faint hairlines)

### Spacing
- Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 (multiples of 4)
- Section gap: 64 (not 100). Tighter, more deliberate.
- Card padding: 24
- Inline gaps: 8 or 12

### Layout
- Single column, max-width 72ch, centered with a left bias (margin-left: 64; margin-right: auto). Reads more like a terminal output than a centered essay.
- Sections separated by ASCII rule: `/* ─────────────────────────── */` — actually rendered as a CSS border + `::before` content, but visually reads as a comment-style divider.
- Hero gets a "prompt" feel: `mary@imevbore:~$` style label above the name.

### Motion
- **Cursor blink** after h1 — a `_` character that blinks (CSS keyframe, no JS). Signals "alive, terminal."
- **Hover invert** preserved from current — card backgrounds invert to amber-on-black or white-on-black on hover, 120ms ease
- **Link underlines** — dotted on rest, solid on hover. Same as current case study links.
- That's it. No fade-in-on-scroll, no parallax. Restraint signals confidence.

### Cards (Selected Work)
- Card title: 16px bold
- Tagline: 13px, muted
- Link rows: 13px monospace, dotted underline
- Border: 1px solid `#2a2a2a` (lighter than the current 2px solid white — less wall-of-cards energy)
- Hover: background fills to a subtle amber tint, border solidifies, all text inverts to background color

### Press strip
- "As seen in" label in uppercase-letter-spaced format
- Publications: inline, dot-separated (current pattern preserved)
- Each link: amber on hover, white at rest

## How writing & YouTube fit

This direction handles both natively. New sections render as "directory listings":

```
WRITING
  2026-05-20  How I think about cross-cutting orchestration  →
  2026-04-12  Notes on the Shopify revert at Waeve           →
  2026-03-01  What I learned shipping HIPAA APIs at 22       →

RECORDED
  2025-09  Williams Women's Conference keynote               →
  2024-11  Drake of the Day, explained                       →
  2021-06  Today Show segment — Waeve launch                 →
```

Each row: date (muted, fixed-width) · title · arrow link. No thumbnails, no excerpts on the index. Click through for the full read or watch.

Both sections can be added or omitted independently. If you skip both, the rest of the site is unchanged.

## How the design system applies to other pages

- **Case studies:** existing structure works. Refine `case-study.css` to use the new ramp + amber accent.
- **Resume:** keep the current section pattern (Professional Experience, Education, etc.) but tighten the spacing scale. Drop the print-button boxes' heavy border in favor of dotted-underline links.
- **works.html:** preserve the Engineering / Companies sections, switch card styling to the new lighter-border treatment.
- **get-in-touch.html:** the "Drop a line." headline works as-is. Footer form gets the Formspree treatment (or drops to email + LinkedIn — separate decision in #35).

## Tradeoffs

**Strengths**
- Lowest risk migration — preserves what's already working
- Signals "I am at home in a terminal" cleanly. Quant-dev hiring managers, senior eng managers, devtools companies — all read this fluently.
- The cursor blink + amber accent + uppercase labels gives the site a "real designed thing" feel without abandoning the monospace identity
- Writing + YouTube fit native here

**Weaknesses**
- "Engineer with a terminal-themed portfolio" is a crowded look — many devs do this
- Doesn't differentiate as boldly as Options B or C
- Amber accent is the riskiest decision; could read as kitsch if overused. Use sparingly.

## References / inspirations

- [suckless.org](https://suckless.org/) — minimal monospace
- [modal.com](https://modal.com) (early site) — terminal-flavored modern devtools
- Solarized + Gruvbox color palettes
- JetBrains' own marketing site for JetBrains Mono
- [usegraphite.dev](https://usegraphite.dev) early versions — engineer-confident type

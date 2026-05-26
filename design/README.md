# Design alternatives — maryimevbore.com

Three directions for a design rethink. Each has a written design doc + a working HTML mockup of the homepage. Open the `.html` files locally (`open design/option-a.html`) to see the actual look.

## How to evaluate these

Each option preserves the **content** of the current site — bio, Selected Work, case studies, resume, get-in-touch — but proposes a different **visual language** for presenting it. They all respect the project constraints (HTML + CSS only at runtime, no backend, no JavaScript).

Two open questions in the content surface:
- **Writing** — a "notes" or "essays" section, if you decide to publish
- **YouTube** — a "recorded" section linking out to videos

Each option's design doc explains how those sections fit in that direction. Each mockup includes both so you can see them in context.

## The three options at a glance

| | A. Terminal Refined | B. Editorial Print | C. Brutalist Grid |
|---|---|---|---|
| **Direction** | Evolves the current monospace aesthetic, sharpens it | Pivot to serif + sans, longform-magazine feel | Pivot to large sans + visible grid, gallery feel |
| **Stays** | Black/white, monospace, text-only | Honesty, no-images, no-quant claims | Honesty, no-images, no-quant claims |
| **Changes** | Type scale, spacing rhythm, accent color, motion | Almost everything visual | Almost everything visual |
| **Typeface** | JetBrains Mono (or refined Courier) | Source Serif 4 + Inter | Inter Display (heavy) + Inter |
| **Background** | Pure black | Off-white paper (`#faf8f3`) | True white |
| **Text color** | Pure white | Ink black (`#0d0d1a`) | True black (`#000`) |
| **Accent** | Amber (`#f0c674`) — minimal | Deep burgundy (`#7a1f2b`) — minimal | Electric blue (`#0040ff`) — systematic |
| **Layout** | Single column, generous gaps | Centered ~65ch column, marginalia | 12-column grid, asymmetric placement |
| **Cards** | Text rows with hover invert | Numbered list (I. II. III.), no cards | Strict black-bordered boxes |
| **Motion** | Cursor blink on h1, soft hover | None | None |
| **Writing fits as** | `~/writing` directory listing | First-class section, native fit | Numbered grid items |
| **YouTube fits as** | `~/recorded` listing | "Recorded" section (less native) | Grid items |
| **Signals** | "I write code, terminals are home" | "I write essays, I think carefully" | "I have taste, I design with intent" |
| **Quant-dev cred** | Strong | Medium (writing-forward) | Medium (designer-forward) |
| **Risk** | "Too much like every other dev's site" | "Looks like a writer, not an engineer" | "Looks like a designer, not an engineer" |

## Recommended path forward

I'd pick **one** of these to develop further rather than mixing pieces — each has internal coherence that breaks if you take elements from different systems. Once you pick a direction:

1. Use the existing case study + resume content (no content rewrite needed; the design pivot is purely visual)
2. Build out the full design system (the doc has spacing scale, type ramp, etc.)
3. Migrate `styles.css` + page-specific CSS to the new system
4. Decide on writing + YouTube inclusion separately — the design supports both, but they're not required to make the design work

## What's NOT in any of these

- New content. These mockups use your existing bio, press list, case study names, and "Brooklyn. Let's build something." personality line verbatim.
- JS. All three are pure HTML + CSS, no runtime dependencies.
- Images. Preserving the current no-image constraint.
- Sticky / floating nav, complex animations, dark mode toggle. Out of scope for a "rethink the language" pass — those are details for after you pick a direction.

## File map

```
design/
├── README.md                      <- this file
├── option-a.md                    <- Terminal Refined: design doc
├── option-a.html                  <- Terminal Refined: homepage mockup
├── option-b.md                    <- Editorial Print: design doc
├── option-b.html                  <- Editorial Print: homepage mockup
├── option-c.md                    <- Brutalist Grid: design doc
└── option-c.html                  <- Brutalist Grid: homepage mockup
```

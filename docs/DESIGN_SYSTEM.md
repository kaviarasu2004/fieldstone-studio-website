# Design System

Full brief and rationale lived in the design-plan step; this is the reference
version for anyone extending the site.

## Subject & audience

Fieldstone Studio is a fictional 3-person brand & web design studio. The
audience is small-business founders comparing design partners — the site
needs to read as meticulous and production-aware, not flashy.

## Color

| Token          | Light      | Dark       | Use                          |
|----------------|------------|------------|-------------------------------|
| `--bg`         | `#f7f4ec`  | `#16181a`  | Page background               |
| `--bg-raised`  | `#fffdf8`  | `#1e2124`  | Cards, form panels             |
| `--text`       | `#201f1c`  | `#ede9dd`  | Headings, primary text         |
| `--text-soft`  | `#55524a`  | `#a7a297`  | Body copy, labels              |
| `--accent`     | `#2b4536`  | `#6fa085`  | Links, buttons, active states  |
| `--highlight`  | `#b9852f`  | `#d9ae55`  | Small accents (eyebrow "+", underline on active nav) |
| `--border`     | `#d8d2c4`  | `#34383a`  | Hairline dividers              |

Deliberately not the two most common AI-generated defaults (warm cream +
terracotta, or near-black + neon accent) — paper/ink was chosen because it
reads as a print studio's stock, not a generic SaaS palette.

## Type

- **Display:** Fraunces — characterful serif, used for all headings
- **Body:** Inter — neutral sans for paragraph text
- **Mono:** IBM Plex Mono — used only for labels, nav, spec tags, and buttons,
  to read like production/spec annotations

Type scale is fluid (`clamp()`) from `--step-1` (small labels) to `--step4`
(hero headline) in `variables.css`.

## Signature element

`.reg-frame` — corner brackets styled after print registration/crop marks,
applied to cards (features, portfolio, testimonials, team, contact form).
It's the one recurring visual motif and ties directly to the studio's stated
print-production work, rather than being decorative.

## Spacing

8px baseline grid via `--space-1` (8px) through `--space-7` (112px).

## Components

See `docs/ARCHITECTURE.md` for the component list and folder structure.

# Fieldstone Studio — Business Website

A responsive, multi-page React business website for **Fieldstone Studio**, a fictional
brand & web design studio. Built for the Month 1 (Frontend Foundations) project.

## Tech stack

- React 19 + Vite
- React Router (client-side routing across 5 pages)
- Plain CSS with a custom design-token system (no framework/preprocessor)
- No external UI kit — all components are hand-built

## Pages

| Route         | Page       | Notes                                              |
|---------------|------------|-----------------------------------------------------|
| `/`           | Home       | Hero, services overview, testimonials, CTA          |
| `/services`   | Services   | 4 service tiers with pricing and deliverables       |
| `/portfolio`  | Portfolio  | Filterable grid of 6 case studies                   |
| `/about`      | About      | Studio story, values, team                          |
| `/contact`    | Contact    | Validated contact form                              |

## Features implemented

- 5 fully responsive pages with distinct layouts
- 10+ reusable React components (Header, Footer, Navigation, FeatureCard,
  PortfolioCard, ThemeToggle, plus page-level components)
- Client-side form validation (name, email format, message length) with inline errors
- Responsive design across mobile / tablet / desktop breakpoints
- CSS transitions and hover/focus micro-interactions
- Dark / light theme toggle (persisted to `localStorage`, respects system preference on first visit)
- Responsive mobile navigation with an accessible toggle button
- Semantic HTML, visible focus states, skip-to-content link, `aria-*` attributes
  on interactive elements, `prefers-reduced-motion` support

## Design system

- **Color:** paper/ink base palette with a forest-green primary accent and an
  ochre highlight; a separate dark-mode token set (see `src/styles/variables.css`)
- **Type:** Fraunces (display serif), Inter (body), IBM Plex Mono (labels/data)
- **Signature element:** print "registration mark" corner brackets (`.reg-frame`)
  used throughout as a nod to the studio's print-production work

## Getting started

```bash
npm install
npm run dev         # start dev server
npm run build        # production build to dist/
npm run preview      # preview the production build
npm test              # run the test suite once
npm run test:watch    # run tests in watch mode
npm run lint           # oxlint
```

## Project structure

```
.github/workflows/  CI: lint, test, build on every push/PR
docs/                 ARCHITECTURE.md, DESIGN_SYSTEM.md, TESTING.md
lighthouse/          AUDIT.md — manual performance/a11y review + how to run a real report
src/
  components/         Header, Footer, Navigation, FeatureCard, PortfolioCard, ThemeToggle
  pages/               Home, Services, Portfolio, About, Contact
  styles/               global.css, variables.css (design tokens)
  utils/                constants.js (site content), helpers.js
  App.jsx               Routes + theme state
  main.jsx              Entry point
tests/               Vitest + React Testing Library specs
```

## Known limitations / next steps

- Contact form submission is client-side only (no backend wired up yet)
- Test coverage is a starting set (utils, two components, the contact form) —
  see `docs/TESTING.md` for what's not covered yet
- No headless browser was available in the environment this was built in, so
  `lighthouse/AUDIT.md` is a manual review, not a generated report — see that
  file for the exact command to produce real Lighthouse numbers

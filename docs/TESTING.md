# Testing

## Stack

- [Vitest](https://vitest.dev) as the test runner (works natively with Vite,
  no separate Babel/webpack config needed)
- [React Testing Library](https://testing-library.com/react) for rendering
  components and querying them the way a user would (by role/label text,
  not implementation detail)
- `jsdom` as the DOM environment

## Running tests

```bash
npm test          # single run
npm run test:watch  # watch mode
```

## What's covered

- `tests/helpers.test.js` — `isValidEmail` and `classNames` utility functions
- `tests/components.test.jsx` — `FeatureCard` and `PortfolioCard` render their
  props correctly, including the category-label fallback in `PortfolioCard`
- `tests/contact.test.jsx` — the Contact form's validation logic: empty
  submission shows all three required-field errors, a malformed email is
  rejected, and a valid submission shows the success message

## What's not covered yet

- `Portfolio.jsx`'s filter interaction (clicking a filter pill narrows the grid)
- `Header.jsx`'s mobile menu open/close toggle
- Routing (navigating between pages via `<Link>`)

These are reasonable next additions — the pattern in `contact.test.jsx`
(render, `fireEvent`, assert on the DOM) extends directly to all three.

## Conventions

- One test file per unit under test, named `<subject>.test.jsx` (or `.js` for
  plain-function modules)
- Query by role/label text (`getByRole`, `getByLabelText`) over test IDs or
  class names, so tests break when behavior changes, not when styling does

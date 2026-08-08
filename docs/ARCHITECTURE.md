# Architecture

## Stack

- **Build tool:** Vite
- **UI:** React 19 (function components + hooks only, no class components)
- **Routing:** React Router v7, `BrowserRouter` mounted once in `main.jsx`
- **Styling:** Plain CSS, no framework. Design tokens live in
  `src/styles/variables.css` as CSS custom properties; `[data-theme="dark"]`
  overrides the same variable names for dark mode.
- **State:** Local component state only (`useState`/`useEffect`). No global
  state library — the only cross-cutting state is the theme, held in `App.jsx`
  and passed down as props.
- **Content:** All copy/data (nav links, services, portfolio items,
  testimonials) lives in `src/utils/constants.js` as plain JS objects/arrays,
  not hardcoded in components. Swapping in a CMS later means changing this
  file (or replacing it with a fetch) without touching component code.

## Folder layout and why

```
src/
  components/<Name>/<Name>.jsx + .css   # one folder per component, co-located styles
  pages/<Name>/<Name>.jsx + .css        # one folder per route
  styles/                                # global.css (resets, base type, .btn, .reg-frame)
                                          # variables.css (design tokens, light + dark)
  utils/
    constants.js                         # site content
    helpers.js                           # isValidEmail, classNames
  App.jsx                                # routes + theme state
  main.jsx                               # BrowserRouter + root render
```

Each component/page owns its own CSS file rather than one large stylesheet,
so styles are easy to find and delete when a component is removed.

## Theming

Theme is stored in React state, mirrored to `data-theme` on `<html>`, and
persisted to `localStorage` under `fieldstone-theme`. On first visit (no
stored value) it falls back to `prefers-color-scheme`. All color usage in CSS
goes through the custom properties in `variables.css` — no component hardcodes
a hex value — so adding a third theme later is a matter of adding another
`[data-theme="..."]` block.

## Data flow

There's no backend yet. `Contact.jsx` validates and holds form state locally;
submission just flips a `status` flag to show a success message. Wiring a
real endpoint means replacing the body of `handleSubmit` with a `fetch` call
— the validation logic doesn't need to change.

## Testing approach

See `docs/TESTING.md`.

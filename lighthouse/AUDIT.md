# Performance & Accessibility — Audit Notes

This sandbox has no headless Chromium available (Lighthouse needs it, and
`apt-get install chromium-browser` fails here because it depends on `snapd`,
which isn't installable in this environment). Rather than invent Lighthouse
scores, this is a manual review plus the exact command to get real numbers
on your own machine or in CI.

## Run a real report

```bash
npm run build
npm install -g lighthouse
npx serve dist -p 4173 &
lighthouse http://localhost:4173 --output html --output-path ./lighthouse/report.html --view
```

Or, in Chrome DevTools: open the built site → Lighthouse tab → Analyze page load.
That's also what the GitHub Actions workflow in `.github/workflows/` can be
extended to do with `treosh/lighthouse-ci-action` if you want it automated.

## What's measurable right now (from `npm run build`)

| Asset                | Size   | Gzipped |
|-----------------------|--------|---------|
| `index-*.css`         | 13.3 KB | 3.2 KB  |
| `index-*.js`           | 250.6 KB | 79.4 KB |
| `index.html`           | 0.6 KB  | 0.4 KB  |

Total gzipped payload is under 85 KB, which is light for a React + Router app.

## Manual review against Lighthouse's categories

**Performance**
- Single JS bundle, no code-splitting per route yet — reasonable at this
  size, but if the site grows, `React.lazy` per page would cut initial load.
- Google Fonts loaded via `@import` in CSS, which blocks rendering slightly;
  switching to `<link rel="preconnect">` + `<link rel="stylesheet">` in
  `index.html` would be a quick win.
- No images in the current build (copy-only content), so there's nothing to
  lazy-load or compress yet — will matter once real photography goes in.

**Accessibility**
- Skip-to-content link, visible focus states (`:focus-visible`), and
  `prefers-reduced-motion` handling are in place.
- Form fields use `<label htmlFor>`, `aria-invalid`, and `aria-describedby`
  for errors.
- Mobile menu button has `aria-expanded` / `aria-controls` / `aria-label`.
- Not yet verified: color contrast ratios for `--text-soft` on `--bg-raised`
  in dark mode — worth checking with a contrast checker before shipping.

**Best Practices**
- No console errors/warnings on build or in the dev server.
- HTTPS, no mixed content (N/A until deployed).

**SEO**
- `<title>` and meta description are set in `index.html`.
- Only one `<h1>` per page.
- No `sitemap.xml` / `robots.txt` yet — add before a real launch.

## Known gaps to close before a production launch

1. Run the actual Lighthouse CLI/CI command above and commit `report.html` here.
2. Verify dark-mode contrast ratios.
3. Add `sitemap.xml` and `robots.txt`.
4. Consider route-based code splitting if more pages are added.

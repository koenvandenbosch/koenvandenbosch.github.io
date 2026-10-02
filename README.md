# koenvandenbosch.github.io

Academic website of Koen van den Bosch — https://koenvandenbosch.github.io

Plain HTML/CSS on GitHub Pages (no build step).

| Path | Contents |
|---|---|
| `index.html` | Home: photo, intro, contact icons, short bio, references |
| `research.html` | Job market paper, publications, working papers, teaching |
| `css/style.css` | All styling (colours and fonts in `:root` at the top) |
| `js/main.js` | Mobile menu and abstract toggles |
| `assets/` | `headshot.jpg`, `favicon.svg` |
| `pdf/` | `CV_KoenvandenBosch.pdf`, `JMP_KoenvandenBosch.pdf` |
| `404.html`, `sitemap.xml`, `robots.txt`, `.nojekyll` | Site plumbing |

**Update a PDF:** upload a new file with the same name into `pdf/`.
**Add a paper:** copy a `<div class="paper-card">…</div>` block in `research.html`; give its
abstract a unique `id` and point the button's `aria-controls` at it.
**Badges:** `badge` (grey), `badge-jmp`, `badge-published`, `badge-policy`.

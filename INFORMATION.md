# INFORMATION.md — Where everything lives

This file is a map of the whole site: which file renders each page/section,
which file holds its text/data, and how its logic works. Use it whenever you
want to change something and aren't sure where to look.

**Golden rule:** almost all *text, numbers, names and image URLs* live in one
place — `src/data/content.js`. You will edit that file far more often than
any component file.

---

## 0. What changed in this version

This build turned the original single-page design into a full **multi-page,
themeable, animated** site:

- **Multiple pages** with real URLs — `/`, `/shows`, `/speakers`, `/events`,
  `/about`, `/journal` — using **React Router**, not anchor links.
- **Day / night theme** that now covers every pixel of the site (not just
  borders) and is remembered between visits.
- **Micro-interactions & 3D-style animations**: scroll-reveal on nearly every
  section, a 3D tilt-on-hover effect on cards, an animated theme toggle icon,
  a stat counter that counts up on scroll, animated page transitions between
  routes, and hover/tap "spring" feedback on buttons.
- **New fonts**: `Fraunces` (headings) is now paired with `Plus Jakarta Sans`
  (body) instead of `Inter`, for a more premium editorial feel.
- **New packages**: `react-router-dom` and `framer-motion` were added — see
  `package.json`. Run `npm install` again after pulling this version.

---

## 1. Project shape

```
tanza-talks/
├── index.html                    → fonts, title/meta tags
├── src/
│   ├── main.jsx                   → mounts <BrowserRouter><ThemeProvider><App/></.../> to #root
│   ├── App.jsx                    → defines every ROUTE (page) in the site
│   ├── index.css                  → theme variables (day/night), global styles, 3D tilt helper CSS
│   ├── data/
│   │   └── content.js             → ALL copy, stats, names, image URLs, for every page
│   ├── context/
│   │   └── ThemeContext.jsx       → day/night theme state + persistence
│   ├── components/                → shared building blocks (see section 3)
│   └── pages/                     → one file per ROUTE (see section 4)
├── tailwind.config.js             → color tokens (as CSS variables), fonts
└── package.json                   → dependencies & npm scripts
```

## 2. Routing — `src/App.jsx`

Every URL in the site is declared here as a `<Route>`:

| URL | Page file | Renders |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Landing page (Hero, Featured Series, etc.) |
| `/shows` | `src/pages/Shows.jsx` | Full episode catalogue with category filter |
| `/speakers` | `src/pages/Speakers.jsx` | Full speaker directory with category filter |
| `/events` | `src/pages/Events.jsx` | Upcoming live events |
| `/about` | `src/pages/AboutPage.jsx` | Mission, timeline, values, team |
| `/journal` | `src/pages/Journal.jsx` | Blog / article listing |
| anything else | `src/pages/NotFound.jsx` | 404 page |

All routes are nested inside one `<Route path="/" element={<Layout />}>` —
`Layout.jsx` renders the `Navbar`, the current page (via `<Outlet/>`), and
the `Footer`, so the nav/footer never reload between pages, only the middle
content swaps (with a fade/slide transition — see section 5).

**To add a new page:** create a file in `src/pages/`, add a `<Route>` for it
in `App.jsx`, and add a link to it in `nav.links` inside `content.js`.

---

## 3. Shared components — `src/components/`

| File | What it does |
|---|---|
| `Layout.jsx` | Navbar + page content + Footer wrapper for every route |
| `Navbar.jsx` | Top nav — highlights the active page, blurs/shrinks on scroll, animated mobile menu |
| `ThemeToggle.jsx` | The day/night switch button, with an animated sun↔moon icon swap |
| `Footer.jsx` | Link columns + newsletter + socials, shared on every page |
| `PageHeader.jsx` | The eyebrow + title + description banner used at the top of every inner page (Shows/Speakers/Events/About/Journal) |
| `Reveal.jsx` | Wraps content so it fades/slides into view the first time it's scrolled to. Used almost everywhere. |
| `TiltCard.jsx` | Wraps a card so it tilts in 3D toward the cursor on hover, with a soft light "shine" that follows the pointer. Used on episode, speaker, event and article cards. |
| `MagButton.jsx` | Wraps a button/link so it scales slightly on hover and "presses" on click (spring animation) |
| `PageTransition.jsx` | Wraps each page's content for the fade/slide-in animation when navigating between routes |
| `ScrollToTop.jsx` | Invisible helper that scrolls the window to the top every time the route changes (React Router doesn't do this automatically) |
| `Hero.jsx`, `FeaturedSeries.jsx`, `LatestConversations.jsx`, `About.jsx`, `FeaturedSpeakers.jsx`, `StatsBar.jsx` | The Home-page-only sections (see section 4.1) |

---

## 4. Pages — `src/pages/`

### 4.1 Home (`/`) — `Home.jsx`
Assembles the original landing-page sections, each its own file in
`src/components/`:
`Hero → FeaturedSeries → LatestConversations → About → FeaturedSpeakers → StatsBar`
Reorder or remove a section by editing this file. Their text/data comes from
`content.js` exports `hero`, `featuredSeries`, `conversations`, `about`,
`speakers`, `stats` respectively (unchanged from the original build, still
documented in detail further below).

### 4.2 Shows (`/shows`) — `Shows.jsx`
- **Data:** `content.js` → `showsPage` (`eyebrow`, `title`, `description`,
  `categories`, `episodes` — 9 episodes, each with a `category` field).
- **Logic:** `activeCategory` is local state; clicking a category pill
  filters `showsPage.episodes` client-side (`.filter()`), no network call.
  Cards use `TiltCard` for the 3D hover effect and `Reveal` for scroll-in.

### 4.3 Speakers (`/speakers`) — `Speakers.jsx`
- **Data:** `content.js` → `speakersPage` (`categories`, `directory` — 10
  speakers, each with a `category`: Business / Education / Creators / Sports
  / Entertainment).
- **Logic:** identical filter pattern to Shows — `activeCategory` state +
  `.filter()`.

### 4.4 Events (`/events`) — `Events.jsx`
- **Data:** `content.js` → `eventsPage.list` (title, date, city, venue,
  type, image). No filtering — just a responsive card grid.

### 4.5 About (`/about`) — `AboutPage.jsx`
- **Data:** `content.js` → `aboutPage` (`mission`, `timeline` — array of
  `{year, text}`, `values` — array of `{title, description, icon}`, `team` —
  array of `{name, role, image}`).
- **Logic:** the timeline is a plain `.map()` over `aboutPage.timeline` with
  a vertical line drawn via a left border on the wrapping `<div>` and a small
  dot (`<span>`) absolutely positioned on each entry — no animation library
  needed for the line itself, just CSS.

### 4.6 Journal (`/journal`) — `Journal.jsx`
- **Data:** `content.js` → `journalPage.articles` (title, excerpt, category,
  date, readTime, image). Simple grid, no filtering.

### 4.7 NotFound (`*`) — `NotFound.jsx`
Shown for any URL that doesn't match a route above.

---

## 5. Animation & micro-interaction system

All animation is done with **CSS transitions** (simple hover states) or
**Framer Motion** (`framer-motion` package) for anything scroll- or
state-driven. None of it needs a 3D graphics library — it's all CSS
`transform`/`perspective` tricks, which keeps the bundle small and the
animations buttery on any device.

| Effect | Where it's implemented |
|---|---|
| 3D tilt-on-hover cards | `components/TiltCard.jsx` — tracks the mouse position over the card and rotates it in 3D (`rotateX`/`rotateY`) toward the cursor, plus a radial "shine" gradient that follows the pointer (`.tilt-shine` in `index.css`) |
| Scroll-reveal (fade + slide up) | `components/Reveal.jsx` — a thin wrapper around Framer Motion's `whileInView` |
| Button hover/tap spring feedback | `components/MagButton.jsx` — `whileHover`/`whileTap` scale animation |
| Animated theme icon swap | `components/ThemeToggle.jsx` — sun/moon icons cross-fade and rotate in/out |
| Stat counter count-up | `components/StatsBar.jsx` — uses Framer Motion's `useInView` to detect when the stats scroll into view, then animates a number from 0 to its target with `requestAnimationFrame` |
| Page-to-page transition | `components/PageTransition.jsx` (wraps each page) + `AnimatePresence` in `App.jsx` — fades/slides the new page in when the URL changes |
| Navbar scroll effect | `components/Navbar.jsx` — a scroll listener toggles a stronger blur/shadow once you've scrolled past ~12px |
| Hero entrance | `components/Hero.jsx` — headline lines stagger in one at a time; background image gently zooms out from a slight crop on load |
| Animated mobile menu | `components/Navbar.jsx` — the mobile panel expands/collapses its height with Framer Motion instead of just appearing |

**To turn off an animation** for a specific element, just remove its
`Reveal`/`TiltCard`/`MagButton` wrapper and use a plain `<div>`/`<a>`/`<button>`
instead — none of these wrappers change the markup structure inside them.

---

## 6. Day / night theme system

Unchanged in spirit from the previous version, but now covers the entire
site (previously only some borders were hardcoded).

- **Toggle button:** `components/ThemeToggle.jsx`, shown in the navbar.
- **State + persistence:** `context/ThemeContext.jsx` — saves the choice to
  `localStorage` and checks the visitor's OS-level preference on first visit.
- **How the colors actually change:** `tailwind.config.js` defines colors
  (`bg`, `panel`, `panel2`, `cream`, `muted`, `line`) as CSS variables via
  `rgb(var(--color-x) / <alpha-value>)`. `src/index.css` defines the "night"
  values under `:root` and the "day" values under `:root.light`. Toggling
  adds/removes the `light` class on `<html>`, and every Tailwind color
  utility (`bg-panel`, `text-cream/70`, `border-line/10`, etc.) updates
  instantly across the whole app — no component needed to know about theme.
- **Orange stays orange:** `accent`/`accent2` are fixed hex values, not
  theme variables, so the brand color is identical in both modes.

---

## 7. Fonts

- **Headings** (`font-display` Tailwind class): `Fraunces`, an elegant serif
  with some personality — used for every `<h1>`/`<h2>`/`<h3>` and the logo.
- **Body / everything else**: `Plus Jakarta Sans`, a clean, modern
  sans-serif that reads as more premium/professional than the previous
  `Inter`. It's the default body font, so you don't need to add a class for
  it anywhere.
- Both are loaded via a single Google Fonts `<link>` in `index.html`. To
  change either font, swap the family name in that `<link>` **and** in
  `tailwind.config.js` → `theme.extend.fontFamily`.

---

## 8. Data reference (`src/data/content.js`)

| Export | Used by |
|---|---|
| `nav` | `Navbar.jsx`, `Footer.jsx` (logo + link list, now with real `to` paths) |
| `hero` | `Hero.jsx` (Home) |
| `featuredSeries` | `FeaturedSeries.jsx` (Home) |
| `conversations` | `LatestConversations.jsx` (Home — short list) |
| `showsPage` | `pages/Shows.jsx` (full catalogue + categories) |
| `about` | `About.jsx` (Home teaser) |
| `aboutPage` | `pages/AboutPage.jsx` (full story, timeline, values, team) |
| `speakers` | `FeaturedSpeakers.jsx` (Home — short list) |
| `speakersPage` | `pages/Speakers.jsx` (full directory + categories) |
| `eventsPage` | `pages/Events.jsx` |
| `journalPage` | `pages/Journal.jsx` |
| `stats` | `StatsBar.jsx` (Home) |
| `footer` | `Footer.jsx` |

Adding a new item to any array (an episode, a speaker, an event, an article)
is enough on its own — every page maps over its array and needs no other
code change.

---

## 9. Images

Every image is a hotlinked Unsplash URL declared in `content.js`. No image
files are stored in the repo, so an internet connection is required for
photos to load. Swap any photo by replacing its URL. Real, named public
figures referenced by name in the original design (e.g. as example podcast
guests) keep their original placement; every newly added speaker/episode/
article in this version uses a fictional name to avoid implying real people
gave quotes or appearances they didn't.

## 10. Responsiveness

Unchanged approach: Tailwind's `sm:`/`md:`/`lg:` breakpoints handle grid
column counts, the hamburger menu, and stacking on every page — new pages
follow the exact same patterns as the original Home sections.

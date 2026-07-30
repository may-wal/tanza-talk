# SETUP.md — Step-by-step setup guide

This is a **front-end-only** React project (Vite + Tailwind CSS + React
Router + Framer Motion). No backend, database, or server code is included.
Follow these steps to run it on your own computer.

> **Multiple pages now:** the site has real URLs — `/`, `/shows`,
> `/speakers`, `/events`, `/about`, `/journal` — instead of one long
> scrolling page. Everything below still works the same way; `npm run dev`
> serves all of them.

---

## 1. Install prerequisites (one-time)

You need **Node.js** (which includes `npm`) installed on your computer.

1. Go to https://nodejs.org
2. Download and install the **LTS** version (18 or newer).
3. Confirm it installed correctly by opening a terminal / command prompt and running:
   ```
   node -v
   npm -v
   ```
   Both should print a version number (not an error).

> Already have Node installed? Skip to step 2.

---

## 2. Unzip the project

1. Unzip the file you downloaded (`tanza-talks.zip`) anywhere on your computer,
   e.g. your Desktop.
2. Open a terminal / command prompt.
3. Navigate into the unzipped folder:
   ```
   cd path/to/tanza-talks
   ```
   (On Windows, you can also just type `cd ` then drag the folder into the
   terminal window and press Enter.)

---

## 3. Install dependencies

Still inside the `tanza-talks` folder, run:
```
npm install
```
This downloads all the packages the project needs (React, Tailwind, icons,
etc.) into a new `node_modules` folder. It can take 1-2 minutes and requires
an internet connection. You only need to do this once (or again if you pull
new changes that add a new package).

---

## 4. Run the site locally

```
npm run dev
```

You'll see output like:
```
  VITE ready in 400 ms
  ➜  Local:   http://localhost:5173/
```

Open that `http://localhost:5173/` address in your browser (Chrome, Edge,
Firefox, Safari all work) — the site is now running live on your machine.
Any time you edit a file and save it, the browser will automatically refresh
with your change (this is called Hot Module Reload).

To stop the server, go back to the terminal and press `Ctrl + C`.

---

## 5. Check mobile responsiveness

1. With `npm run dev` running, open the site in Chrome.
2. Press `F12` (or right-click → Inspect) to open DevTools.
3. Click the small phone/tablet icon (top-left of the DevTools panel, or
   `Ctrl+Shift+M` / `Cmd+Shift+M`) to enter device toolbar mode.
4. Pick a device preset (iPhone, Pixel, iPad) or drag the edges to test any
   width — the layout will adapt (hamburger menu appears, grids stack, etc.)

---

## 6. Build for production (when you're ready to deploy)

```
npm run build
```
This creates an optimized `dist/` folder containing plain HTML/CSS/JS —
this is what you actually upload to a web host. To preview that production
build locally before deploying:
```
npm run preview
```

### Where to host it (all free/cheap options for a static React site)
- **Netlify** — drag-and-drop the `dist` folder at https://app.netlify.com/drop.
  A `public/_redirects` file is already included in this project so deep
  links like `yoursite.com/shows` work correctly after deploying (without
  it, refreshing on any page but the homepage would 404).
- **Vercel** — https://vercel.com, connect your Git repo, it builds
  automatically. A `vercel.json` rewrite rule is already included for the
  same reason as above.
- **GitHub Pages** — free if your code is on GitHub, but note GitHub Pages
  doesn't support the same kind of rewrite rule out of the box — search
  "React Router GitHub Pages 404" if you go this route.
- **Any regular web host** — upload the contents of `dist/` via FTP, and
  configure your host to redirect all unknown paths to `index.html`.

---

## 7. Making changes

- **To change any text, name, stat, or image** — open `src/data/content.js`.
  This one file holds essentially all the copy on the site. See
  `INFORMATION.md` for exactly which export controls which section.
- **To change colors or fonts** — open `tailwind.config.js`.
- **To change layout/structure of a specific section** — open the matching
  file in `src/components/` (see `INFORMATION.md` for the full list).

After any edit, just save the file — `npm run dev` will hot-reload automatically.

---

## 8. Connecting the newsletter form (optional)

The email signup box in the footer is currently front-end only — it does not
send the email anywhere. To make it functional, you have a few options:

- **Formspree / Getform** (easiest, no backend code): sign up for a free
  account, get a form endpoint URL, and change the `<form onSubmit={...}>`
  in `src/components/Footer.jsx` to POST to that URL instead of just calling
  `preventDefault()`.
- **Mailchimp / ConvertKit**: use their JS embed snippet or API, following
  their docs, in the same `onSubmit` handler.
- **Your own backend**: if you build an API later, `fetch()` it from the
  same handler.

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| `npm: command not found` | Node.js isn't installed — repeat step 1. |
| `npm install` fails / hangs | Check your internet connection; try again. |
| Port 5173 already in use | Close other running `npm run dev` terminals, or Vite will automatically try the next free port — check the terminal output for the actual URL. |
| Images not loading | They're hotlinked from Unsplash — check your internet connection. |
| Blank white/black page in browser | Open DevTools (`F12`) → Console tab, and check for a red error message; it usually names the file and line. |

---

## 10. Project scripts reference

| Command | What it does |
|---|---|
| `npm install` | Installs all dependencies (run once after unzipping) |
| `npm run dev` | Starts the local dev server with hot reload |
| `npm run build` | Builds an optimized static site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally, to sanity-check before deploying |

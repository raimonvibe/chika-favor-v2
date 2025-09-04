![Chika Favor Portfolio Screenshot](/chika.png)

# Chika Favor — Graphic Designer Portfolio

A fast, lightweight portfolio site for **Chika Favor**, showcasing services, work samples, and contact options. Built with a modern front‑end stack for simple customization and quick deployment.

> Live site: https://chika-favor.vercel.app/

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Environment & Configuration](#environment--configuration)
- [Deployment (Vercel)](#deployment-vercel)
- [Customization Guide](#customization-guide)
- [Accessibility & SEO](#accessibility--seo)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview
This repository contains the source code for a one‑page portfolio / landing site. It’s optimized for fast loads, clean typography, and straightforward edits. Content and visuals are organized so you can quickly replace text, images, and links without digging through framework internals.

## Tech Stack
- **Build tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (PostCSS pipeline)
- **UI components (optional):** shadcn/ui (configured via `components.json`)
- **Tooling:** ESLint, modern TS configs

> This setup works well for small, static portfolio sites that need minimal JavaScript and excellent Lighthouse scores.

## Getting Started
**Prerequisites**
- Node.js ≥ 18
- npm (or pnpm/yarn)

**Install & run**
```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

## Available Scripts
Most Vite projects expose these scripts via `package.json`:
- `dev` — Start the local development server.
- `build` — Create an optimized production build in `dist/`.
- `preview` — Serve the `dist/` build locally to verify before deploying.
- `lint` — Lint TypeScript and project files (if configured).

## Project Structure
```
chika-favor/
├─ public/                 # Static assets (images, icons, favicons, social cards)
├─ src/                    # App source (TS/TSX files, components, pages/sections)
├─ index.html              # App entry (links to compiled assets)
├─ tailwind.config.ts      # Tailwind theme, colors, fonts
├─ postcss.config.js       # PostCSS plugins (tailwindcss, autoprefixer)
├─ vite.config.ts          # Vite build + dev server config
├─ tsconfig*.json          # TypeScript configs
├─ components.json         # shadcn/ui configuration (if used)
└─ package.json            # Scripts & dependencies
```

> Tip: Images (hero background, logo, gallery thumbnails) typically live in `public/`. You can reference them in HTML/TSX with `/your-file.png` paths.

## Styling
Tailwind is used for utility‑first styling:
- Customize theme (colors, fonts, spacing) in `tailwind.config.ts`.
- Global styles (if any) can be added in `src/index.css` or the main CSS import.
- Prefer semantic HTML + Tailwind classes for readability and a11y.

**Fonts**
- For self‑hosted or Google Fonts, add the `<link>` in `index.html` and extend Tailwind’s `fontFamily` in the config.

## Environment & Configuration
If you add environment variables (e.g., for contact forms or analytics):
- Create `.env` (local) and `.env.production` as needed.
- With Vite, expose public variables using the `VITE_` prefix (e.g., `VITE_SITE_TITLE`).
- Never commit secrets; use your hosting provider’s environment variable manager.

## Deployment (Vercel)
Vercel is a great fit for static Vite builds.

**Steps**
1. Run `npm run build` to generate `dist/`.
2. Push to GitHub (or connect the repo to Vercel).
3. In Vercel:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Set environment variables (if any) in **Vercel → Settings → Environment Variables**.
5. Redeploy to apply changes.

## Customization Guide
- **Site Title & Metadata:** Edit `<head>` tags in `index.html` (title, description, social preview).
- **Hero & Sections:** Update content in `src/` (e.g., components or section files). Keep headings in sequence (h1 → h2) for SEO.
- **Gallery / Portfolio Grid:** Add images to `public/portfolio/` and update the corresponding data/markup in `src/`.
- **Contact Links:** Replace social and email links in the footer or contact section. Consider `mailto:` for email and `tel:` for phone if desired.
- **Brand Colors:** Adjust Tailwind theme tokens (e.g., `primary`, `secondary`) then use them via class names like `bg-primary`, `text-primary`.

## Accessibility & SEO
- Use descriptive alt text for all images.
- Ensure color contrast meets WCAG AA (adjust Tailwind colors as needed).
- Keep one `<h1>` per page, followed by logical heading levels.
- Add `meta` description and Open Graph/Twitter cards in `index.html`.
- Validate with Lighthouse (Chrome DevTools → Lighthouse).

## Troubleshooting
- **Blank page / 404 on refresh:** If you add client‑side routing, configure Vercel to fallback to `index.html` or use Vite’s single‑page app handling.
- **Styles not applied:** Verify Tailwind `content` globs include your `src/**/*.{ts,tsx,html}` files.
- **Images not loading in production:** Check paths (leading slash vs relative) and that the files live under `public/`.
- **Type errors:** Run `npm run lint` (if configured) and fix TS errors surfaced by your editor.

## License
MIT © 2025 raimonvibe

---

Made with ♥ and a focus on fast, accessible web experiences.

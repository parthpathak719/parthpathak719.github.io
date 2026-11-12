# Parth Pathak — Portfolio

A personal portfolio built with Astro. A dark interface with Space Grotesk headings, Manrope body text, a violet/cyan Light Pillar background, and a matching fluid cursor with independently reduced click intensity.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## Content and structure

- `src/pages/index.astro`: about, categorized skills, selected projects, internships with expandable details and reports, linked credentials, and contact.
- `src/pages/projects.astro`: the complete filterable index of 12 projects in personal priority order.
- `src/data/projects.ts`: curated project stacks, descriptions, categories, links, and technical context.
- `src/data/skills.ts`: compact skill groups covering languages, web, AI, infrastructure, and security.
- `src/components/`: shared navigation, project cards, and project browser.
- `src/styles/global.css`: design system, responsive layouts, and reduced-motion support.

The site does not include a photograph or resume download. Project figures distinguish test and validation results and retain relevant simulation limitations.

Project details use native HTML disclosures. Navigation and filtering are progressively enhanced with small client scripts. Contact uses email and social links; no form backend or visitor data collection is required.

## Visual effects and reports

React Bits Light Pillar and Splash Cursor are bundled in `src/components/effects/`, mounted through a React island. The upstream license is preserved in `THIRD_PARTY_LICENSES/React-Bits.txt`. Source: [React Bits](https://github.com/DavidHDev/react-bits).

- Effects pause when the page is hidden and can be paused manually. Pause/Resume is saved in localStorage across every page and reload, and synchronizes between tabs. Pausing unmounts the entire backdrop and cursor.
- Reduced-motion users get a static background and no cursor effect.
- The cursor is disabled on coarse-pointer devices; the background uses reduced resolution on small screens.
- WebGL is optional; the document and its controls remain usable without it.
- The documented training assessment is served at `/reports/web-application-penetration-test.pdf` (24 pages). The original source document is unchanged.
- The Vidyakosh development internship report is served at `/reports/web-development-internship.pdf` (7 pages). Both reports appear inside their respective internship details.

## Deployment

GitHub Pages is configured in `.github/workflows/deploy.yml`. A push to `main` builds the site with `npm ci` and `npm run build`, then deploys `dist/`. The site URL is configured in `astro.config.mjs`.

Brand marks are rendered at build time from Iconify’s Logos and Simple Icons collections. Concepts without a distinct brand mark use text-only badges, without substitute symbols. Brand names and marks belong to their respective owners.

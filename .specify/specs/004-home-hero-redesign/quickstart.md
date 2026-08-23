# Quickstart: Home Hero Neural Face Redesign

## Prerequisites

- Node.js and npm installed.
- Repository checked out on `feature/002-home-hero-redesign`.
- Dependencies installed in `portfolio_app/`.
- Approved reference available at `.specify/specs/003-about-me/mockups/about-me-approved.png`.

## Development

```powershell
Set-Location portfolio_app
npm start
```

Open the local URL printed by Angular and review the Home page Hero.

## Automated Validation

```powershell
Set-Location portfolio_app
npm run lint
npm run build
npm run build:prod
```

Use `npm ci` in CI environments. Do not add a package for the visualization.

## Manual Validation

1. Check desktop, tablet, and mobile Hero layouts.
2. Confirm the SVG is inside `.hero__visual` and the old abstract labels are gone.
3. Compare profile direction, proportions, node/connection density, line weight, glow, accents, and negative space with the approved About reference.
4. Confirm the visual fills the available Hero visual area without covering copy or actions.
5. Confirm `document.documentElement.scrollWidth` does not exceed `document.documentElement.clientWidth`.
6. Enable reduced motion in browser accessibility settings and confirm continuous neural animation stops while the static SVG remains visible.
7. Inspect the accessibility tree and confirm the neural SVG is hidden while Hero text and links remain available.

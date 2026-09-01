# Quickstart - 002-home-project

## 1. Prerequisites

- Node.js 22.x and npm.
- Branch checked out to `002-home-project`.

## 2. Install dependencies

From repository root:

```bash
cd portfolio_app
npm ci
```

## 3. Implement feature scope

Primary implementation targets:
- `src/app/features/home/` (route + page)
- `src/app/app.routes.ts` (route handoff from bootstrap)
- `src/assets/documents/alejandro-sierra-cv.pdf` (static CV)
- If needed for asset publishing parity, adjust `angular.json` assets configuration to include `src/assets`

Scope guards:
- Keep Home-specific code inside `features/home`
- Do not add backend/API/AI integrations
- Do not add unnecessary dependencies

## 4. Local validation

```bash
npm run lint
npm run build -- --configuration production --base-href "/portfolio/"
```

Optional:

```bash
npm run test
npm run start
```

## 5. Manual acceptance checks

- Hero renders eyebrow, heading, supporting text, both CTAs, and architecture visual
- Engineering Focus shows exactly three cards
- Selected Work shows exactly three previews
- Journey narrative is present and coherent
- Technology Stack shows all six categories
- Final CTA includes View Projects and Download CV plus GitHub/LinkedIn links
- Explore my work and View projects scroll to `#selected-work`
- Download CV resolves and works under `/portfolio/`
- Keyboard navigation, visible focus, and reduced-motion behavior are verified
- No horizontal scrolling on mobile

## 6. CI/CD and GitHub Pages compatibility

- Preserve `.github/workflows/deploy.yml` behavior
- Ensure route and asset references remain base-href compatible
- Final CV asset must resolve as `/portfolio/assets/documents/alejandro-sierra-cv.pdf`

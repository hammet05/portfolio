# Contract: Home Design System and Delivery Constraints

## Purpose

Constrain Home implementation to design-system and deployment rules.

## Design System Contract

- Reuse existing token system for color, spacing, radius, shadows, and typography.
- Avoid duplicating hardcoded visual primitives.
- Keep Home-specific styles inside feature scope unless true global reuse exists.

## Dependency Contract

- No new dependency may be added solely for visual effects, state management, or speculative needs.
- Prefer existing Angular and project tooling.

## CV and Asset Delivery Contract

- CV file is a static PDF at `src/assets/documents/alejandro-sierra-cv.pdf`.
- Build output must expose CV at `/assets/documents/alejandro-sierra-cv.pdf`.
- Download links must remain valid under repository base href (`/portfolio/`).

## CI/CD Compatibility Contract

- Existing GitHub Pages workflow remains the deployment mechanism.
- Home route and static assets must work without domain-root assumptions.

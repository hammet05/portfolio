# Contract: Quality and Delivery

## Purpose

Define local and CI quality/deployment obligations for bootstrap.

## Local Validation Contract

Executed from `portfolio_app`:
- `npm ci`
- `npm run build`
- `npm run lint` (when configured)
- `npm run format:check` (when configured)

Expected outcomes:
- Build succeeds.
- Lint and formatting checks pass.
- Lockfile and package manifest remain synchronized.

## CI Contract

Workflow file target:
- `.github/workflows/deploy.yml`

Required CI steps:
- Checkout repository.
- Setup Node.js and npm cache.
- Run `npm ci` in `portfolio_app`.
- Run production build.
- Upload GitHub Pages artifact.
- Deploy artifact to GitHub Pages.

## GitHub Pages Contract

- Build must use repository-accurate base href.
- Deployed app must work at `https://<user>.github.io/<repository>/`.
- Base href strategy must avoid hardcoded repository names when practical.

## Dependency Governance Contract

- No out-of-scope dependency classes from FR-026.
- Chatbase remains optional/future and is not required for bootstrap acceptance.

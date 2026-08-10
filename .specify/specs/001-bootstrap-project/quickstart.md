# Quickstart - 001-bootstrap-project

## 1. Prerequisites

- Node.js 22.x available for CI parity.
- npm available.
- Repository cloned locally.

## 2. Install dependencies

From repository root:

```bash
cd portfolio_app
npm ci
```

Expected result:
- Dependencies install successfully from lockfile.

## 3. Run local validation

```bash
npm run build
```

When quality scripts exist in `package.json`, also run:

```bash
npm run lint
npm run format:check
```

Expected result:
- Production build completes without errors.
- Lint/format checks pass without rule suppression.

## 4. Run app shell locally

```bash
npm run start
```

Verify at `http://localhost:4200/`:
- Global shell structure appears (header, main, footer).
- Route `/` is functional with bootstrap placeholder content.
- Mobile navigation toggles open/closed and remains keyboard accessible.

## 5. CI/CD validation expectations

Workflow target:
- `.github/workflows/deploy.yml`

Required behavior:
- Checkout repository.
- Setup Node and cache lockfile from `portfolio_app`.
- Run `npm ci` inside `portfolio_app`.
- Run production build with repository-aware base href.
- Upload pages artifact and deploy.

## 6. Scope guardrails

Do not implement final portfolio pages in this spec:
- Home final content
- About
- Experience
- Projects
- AI Lab
- Contact

Do not add out-of-scope dependencies listed in FR-026.

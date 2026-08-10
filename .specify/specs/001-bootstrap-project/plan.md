# Implementation Plan: 001-bootstrap-project

**Branch**: `feature/001-bootstrap-project` (canonical), current local `feature/001-bootstrap-project` | **Date**: 2026-08-09 | **Spec**: `.specify/specs/001-bootstrap-project/spec.md`

**Input**: Feature specification from `.specify/specs/001-bootstrap-project/spec.md`

## Summary

Establish a minimal but production-ready Angular bootstrap foundation for the portfolio frontend: upgrade to Angular 19 standalone stack, implement global app shell boundaries, prepare tokenized styling and baseline shared UI components, enforce quality checks (TypeScript strictness, ESLint, Prettier), and deliver GitHub Pages CI/CD with dynamic repository-aware base href.

## Technical Context

**Language/Version**: TypeScript (strict mode enabled), Angular CLI/app stack targeting Angular 19 standalone (current repo baseline is Angular 18.1.x and must be upgraded in this spec)

**Primary Dependencies**: Angular 19 (`@angular/*`, router, standalone APIs), SCSS, Tailwind CSS, ESLint (`@angular-eslint`), Prettier, Lucide Angular icons

**Storage**: N/A (frontend-only bootstrap, no API/database scope)

**Testing**: Baseline validation through `npm ci`, `npm run build`; add and validate `npm run lint` and `npm run format:check` when configured; existing unit test harness remains Karma/Jasmine

**Target Platform**: Modern desktop/mobile browsers, static hosting on GitHub Pages, CI on GitHub Actions (Ubuntu runners)

**Project Type**: Angular single-page web application located in `portfolio_app/`

**Performance Goals**: Preserve Angular production build budgets; avoid horizontal overflow on supported breakpoints; keep bootstrap shell lightweight without feature-page payload

**Constraints**: Simplicity-first implementation, no speculative abstractions, no future feature pages, minimal external dependencies, accessible keyboard navigation, mobile breakpoint at 1024px, dynamic GitHub Pages base href

**Scale/Scope**: One bootstrap route (`/`) with technical placeholder content; global layout foundation (`app-shell`, `site-header`, `mobile-navigation`, `site-footer`), style token system, CI/CD deploy path

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Simplicity First | PASS | Plan keeps only bootstrap infrastructure required by spec; excludes feature pages and speculative abstractions. |
| Specification Before Implementation | PASS | Decisions map to FR-001..FR-030 and AC-01..AC-22; unresolved items were closed in Phase 0 research. |
| Angular Standards | PASS | Targets standalone Angular 19 architecture with Router and TypeScript strictness. |
| Feature Boundaries | PASS | Uses `core/`, `shared/`, `layout/`, `features/` split without promoting speculative reuse. |
| Dependency Discipline | PASS | Only required stack additions (Tailwind, ESLint/Prettier, Lucide). 
| CI/CD + Reproducibility | PASS | Requires `npm ci`, lockfile sync, build-and-deploy workflow for Pages. |
| Branch Governance | PASS WITH ACTION | Canonical branch is `feature/001-bootstrap-project`; local branch should be aligned before implementation PR. |

Post-Phase-1 re-check result: PASS. Design artifacts remain constitution-compliant and within bootstrap scope.

## Project Structure

### Documentation (this feature)

```text
.specify/specs/001-bootstrap-project/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── app-shell-contract.md
│   ├── design-system-contract.md
│   └── quality-delivery-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
.github/
└── workflows/
    └── deploy.yml (single target workflow for this spec)

portfolio_app/
├── angular.json
├── package.json
├── package-lock.json
├── src/
│   ├── styles.scss
│   ├── styles/
│   │   ├── _tokens.scss
│   │   ├── _typography.scss
│   │   ├── _layout.scss
│   │   └── _utilities.scss
│   └── app/
│       ├── core/
│       ├── shared/
│       │   └── ui/
│       │       ├── button/
│       │       ├── icon-button/
│       │       └── section-header/
│       ├── layout/
│       │   ├── app-shell/
│       │   ├── site-header/
│       │   ├── mobile-navigation/
│       │   └── site-footer/
│       ├── features/
│       │   └── home-bootstrap/
│       ├── app.routes.ts
│       └── app.config.ts
└── eslint/prettier config files
```

**Structure Decision**: Single Angular frontend project in `portfolio_app/` with feature-oriented app folders (`core/shared/layout/features`) and spec-local planning artifacts under `.specify/specs/001-bootstrap-project/`.

## Phase Plan

### Phase 0 - Research

Resolved in `research.md`:
- Angular 19 upgrade timing and migration strategy.
- Dynamic GitHub Pages base href strategy.
- Minimal ESLint/Prettier baseline strategy.
- Tailwind and Lucide introduction sequence.

### Phase 1 - Design and Contracts

Produced:
- `data-model.md` for bootstrap entities and validation rules.
- `contracts/` artifacts for app shell, design system, and quality/delivery behavior.
- `quickstart.md` with local and CI validation flow.
- Agent context update in `.github/copilot-instructions.md` (Speckit plan pointer).

Phase 2 validation results:
- Artifact completeness validated: `data-model.md`, `quickstart.md`, `contracts/app-shell-contract.md`, `contracts/design-system-contract.md`, and `contracts/quality-delivery-contract.md` are present and aligned with FR-007..FR-030 scope.
- Branch and reference integrity validated: canonical branch naming remains `feature/001-bootstrap-project` and active plan pointer in `.github/copilot-instructions.md` resolves to `.specify/specs/001-bootstrap-project/plan.md`.

### Phase 2 - Task Planning (for `/speckit.tasks`)

Workflow migration decision for tasks:
- `deploy.yml` MUST be the only GitHub Pages deployment workflow for this spec.
- Existing `angular-ci.yml` MUST be removed in the same PR that introduces `deploy.yml`.
- Verification: exactly one pages deployment workflow remains active under `.github/workflows/`.

Task generation should produce dependency-ordered workstreams:
1. Angular 19 stack and tooling baseline.
2. App shell and route foundation.
3. Design tokens and shared UI components.
4. Accessibility and responsive behavior checks.
5. GitHub Actions deploy workflow and base href compatibility.
6. Final verification against AC-01..AC-22.

## Complexity Tracking

No constitution violations require exception handling.

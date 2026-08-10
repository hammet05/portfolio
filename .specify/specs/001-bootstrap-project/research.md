# Research - 001-bootstrap-project

## Decision 1: Upgrade to Angular 19 during bootstrap

- Decision: Perform Angular 18.1.x -> Angular 19 upgrade inside this bootstrap spec before adding shell/UI foundations.
- Rationale: FR-004 explicitly targets Angular 19; doing this in bootstrap avoids mixed concerns later and keeps future specs on a stable baseline.
- Alternatives considered:
  - Keep Angular 18 and defer upgrade: rejected because it violates the stated target stack and creates rework.
  - Upgrade during first feature spec: rejected because it couples migration risk with feature delivery risk.

## Decision 2: Dynamic GitHub Pages base href in CI

- Decision: Build with repository-aware base href derived from GitHub Actions context, not hardcoded path literals.
- Rationale: FR-029 and edge-case requirements demand resilience to repository rename/transfer. Dynamic derivation avoids manual edits.
- Alternatives considered:
  - Hardcode `/portfolio/`: rejected because it breaks when repo path changes.
  - Runtime base tag manipulation in app code: rejected as unnecessary complexity compared to build-time configuration.

## Decision 3: Minimal quality baseline using ESLint + Prettier

- Decision: Add minimal Angular-compatible ESLint and Prettier configuration with scripts `lint`, `format`, and `format:check`.
- Rationale: FR-023, AC-05, and AC-06 require quality checks. Minimal baseline satisfies governance while avoiding speculative rule complexity.
- Alternatives considered:
  - Only TypeScript strict checks: rejected because spec requires ESLint and Prettier.
  - Full custom lint architecture: rejected as overengineering for bootstrap.

## Decision 4: Introduce Tailwind and Lucide in the foundation layer

- Decision: Add Tailwind CSS and Lucide during bootstrap and validate via in-scope shared components (`button`, `icon-button`, `section-header`).
- Rationale: FR-004 and FR-019 require these technologies in the foundation. Introducing them now avoids retrofitting core UI primitives later.
- Alternatives considered:
  - Delay Tailwind/Lucide to later specs: rejected because this spec defines the design and shell baseline.
  - Use alternate icon package: rejected because Lucide is the declared primary icon system.

## Decision 5: Keep Chatbase deferred

- Decision: Do not install or configure Chatbase in this spec.
- Rationale: Chatbase is the only allowed external integration candidate (FR-025) but not required for bootstrap acceptance criteria.
- Alternatives considered:
  - Install placeholder Chatbase integration now: rejected because it adds non-essential dependency and scope.

## Decision 6: Contracts required for frontend bootstrap

- Decision: Publish three contract artifacts covering shell behavior, design-system usage, and quality/deployment flow.
- Rationale: This spec exposes interfaces to developers, CI, and deployed users even without backend APIs. Contracts reduce ambiguity for `/speckit.tasks` and implementation.
- Alternatives considered:
  - No contracts: rejected because key interfaces (route shell, quality commands, CI deploy) would remain implicit.
  - Single monolithic contract file: rejected in favor of focused reviewable artifacts.

## Decision 7: Branch naming alignment before implementation

- Decision: Treat `feature/001-bootstrap-project` as canonical branch name for implementation/PR even if local setup produced `001-bootstrap-project`.
- Rationale: Constitution Principle VIII requires `feature/<spec-id>-<short-name>`.
- Alternatives considered:
  - Keep short branch name: rejected because it diverges from governance.

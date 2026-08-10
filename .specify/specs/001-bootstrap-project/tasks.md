# Tasks: 001-bootstrap-project

## Task Numbering

Tasks are grouped by the phases defined in `plan.md`.
For numbering consistency with the requested format, plan phases are mapped as:
- Plan Phase 0 (Research) -> Task Phase 1 (`T1.x`)
- Plan Phase 1 (Design and Contracts) -> Task Phase 2 (`T2.x`)
- Plan Phase 2 (Implementation Planning Workstreams) -> Task Phase 3 (`T3.x`)

## Phase 1 - Research Validation (from Plan Phase 0)

- [ ] T1.1 Validate research decisions against current plan and spec.
  - Action: Cross-check `research.md` decisions with `plan.md` summary and technical context.
  - Verification: No conflicting decision statements remain across `research.md`, `spec.md`, and `plan.md`.

- [ ] T1.2 Resolve dependency governance wording in FR-025.
  - Action: Complete FR-025 sentence in `spec.md` with explicit dependency policy wording.
  - Verification: FR-025 is complete and testable as written (no trailing/unfinished text).

- [ ] T1.3 Resolve assumptions path contradiction in `spec.md`.
  - Action: Update assumptions so compatibility paths and authoritative sources are unambiguous.
  - Verification: Assumptions no longer state both "not present" and "provided" for the same path.

## Phase 2 - Design and Contract Lock (from Plan Phase 1)

- [ ] T2.1 Validate artifact completeness for design outputs.
  - Action: Confirm presence and relevance of `data-model.md`, `quickstart.md`, and all files under `contracts/`.
  - Verification: All referenced Phase 1 artifacts exist and align with FR-007..FR-030 scope.

- [ ] T2.2 Add acceptance-to-artifact traceability notes.
  - Action: Add or update concise mapping in `plan.md` or `tasks.md` linking AC-01..AC-22 to implementation workstreams.
  - Verification: Each acceptance criterion has at least one explicit implementation or validation task reference.

- [ ] T2.3 Confirm branch and plan reference integrity.
  - Action: Ensure branch naming is consistent with constitution and the active plan pointer in `.github/copilot-instructions.md` is correct.
  - Verification: Branch naming follows `feature/<spec-id>-<short-name>` and active plan path resolves correctly.

## Phase 3 - Implementation Workstreams (from Plan Phase 2)

### Workstream 1 - Angular 19 Stack and Tooling Baseline

- [ ] T3.1 Upgrade Angular workspace to Angular 19.
  - Action: Update Angular packages and related toolchain in `portfolio_app/package.json` and lockfile.
  - Verification: `npm ci` and `npm run build` succeed in `portfolio_app` with Angular 19.

- [ ] T3.2 Configure ESLint and Prettier baseline.
  - Action: Add ESLint and Prettier configs and scripts (`lint`, `format`, `format:check`) in `portfolio_app`.
  - Verification: `npm run lint` and `npm run format:check` execute successfully.

- [ ] T3.3 Configure Tailwind CSS foundation.
  - Action: Install and wire Tailwind in Angular styles pipeline.
  - Verification: Tailwind utility classes compile in production build output.

- [ ] T3.4 Add Lucide icon library and usage conventions.
  - Action: Install Lucide Angular and implement baseline usage in shell/shared components.
  - Verification: Icons render correctly; decorative icons can be hidden from assistive tech.

### Workstream 2 - App Shell and Route Foundation

- [ ] T3.5 Create app folder boundaries under `src/app/`.
  - Action: Establish `core/`, `shared/`, `layout/`, and `features/` structure with minimal bootstrap scope.
  - Verification: Project tree contains required boundaries and no future feature pages are implemented.

- [ ] T3.6 Implement layout shell components.
  - Action: Implement `app-shell`, `site-header`, `mobile-navigation`, and `site-footer` with standalone components.
  - Verification: `/` renders header, main (`router-outlet`), and footer in the expected shell hierarchy.

- [ ] T3.7 Implement bootstrap route scope.
  - Action: Configure routing with only functional `/` route pointing to bootstrap placeholder content.
  - Verification: Route table exposes `/` only for bootstrap and excludes final feature routes.

### Workstream 3 - Design Tokens and Shared UI

- [ ] T3.8 Implement style token files under `src/styles/`.
  - Action: Create `_tokens.scss`, `_typography.scss`, `_layout.scss`, `_utilities.scss`, and compose from `styles.scss`.
  - Verification: Build succeeds and shell components consume semantic tokens.

- [ ] T3.9 Implement shared UI scope components.
  - Action: Implement only `button`, `icon-button`, and `section-header` as shared UI baseline.
  - Verification: No additional shared UI primitives are introduced in this spec.

### Workstream 4 - Accessibility and Responsive Behavior

- [ ] T3.10 Implement keyboard and focus accessibility baseline.
  - Action: Ensure interactive controls are keyboard reachable with visible focus and accessible names.
  - Verification: Keyboard-only walkthrough passes for header nav and mobile menu controls.

- [ ] T3.11 Implement responsive navigation switch behavior.
  - Action: Apply mobile/desktop behavior switch at `1024px` and stable menu state transitions.
  - Verification: RVC-01..RVC-04 pass at 375px, 768px, 1024px, and 1280px without horizontal overflow.

### Workstream 5 - GitHub Actions and Pages Deployment

- [ ] T3.12 Implement `.github/workflows/deploy.yml` as single Pages workflow.
  - Action: Create/update `deploy.yml` with checkout, setup-node, `npm ci`, production build, artifact upload, and deploy steps.
  - Verification: Workflow run publishes pages artifact successfully.

- [ ] T3.13 Remove legacy Pages workflow duplication.
  - Action: Remove `angular-ci.yml` in the same PR that finalizes `deploy.yml`.
  - Verification: Exactly one active pages deployment workflow remains in `.github/workflows/`.

- [ ] T3.14 Implement dynamic repository-aware base-href in CI build.
  - Action: Derive and pass base-href from GitHub Actions repository context during production build.
  - Verification: Deployed site resolves correctly at `https://<user>.github.io/<repository>/`.

### Workstream 6 - Final Validation and Acceptance

- [ ] T3.15 Execute local validation suite from `portfolio_app`.
  - Action: Run `npm ci`, `npm run build`, `npm run lint`, and `npm run format:check` (when configured).
  - Verification: All commands pass without rule suppression.

- [ ] T3.16 Run acceptance criteria closure review.
  - Action: Validate implementation against AC-01..AC-22 and confirm no out-of-scope feature delivery.
  - Verification: Every AC is marked as satisfied with objective evidence.

- [ ] T3.17 Confirm lockfile and dependency discipline.
  - Action: Ensure `package.json` and `package-lock.json` are synchronized and committed for `portfolio_app`.
  - Verification: CI installs dependencies with `npm ci` without drift.

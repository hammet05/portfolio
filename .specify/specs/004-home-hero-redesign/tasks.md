# Tasks: Home Hero Neural Face Redesign

**Input**: Design documents from `.specify/specs/004-home-hero-redesign/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No new automated test tasks are included because the specification requests lint/build and browser-based visual validation rather than a new test suite.

**Organization**: Tasks are grouped by user story to support independent implementation and review.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing Home Hero boundary and reference materials before changing the visual.

- [X] T001 Confirm the implementation branch is `feature/002-home-hero-redesign` and record the current Home Hero baseline in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T002 [P] Review the approved neural-face reference at `.specify/specs/003-about-me/mockups/about-me-approved.png` and existing design tokens in `portfolio_app/src/styles/_tokens.scss`.
- [X] T003 [P] Verify the current Home Hero visual boundary and responsive breakpoint in `portfolio_app/src/app/features/home/home-page.component.scss`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the implementation constraints that all visual story work must follow.

- [X] T004 Define the Home-specific SVG composition boundary and namespaced SVG identifier strategy in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T005 [P] Define scoped neural visualization custom properties and token mappings in `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T006 [P] Confirm the existing Hero copy, CTA links, navigation shell, and non-Hero Home sections remain outside the change scope in `portfolio_app/src/app/features/home/home-page.component.html`.

**Checkpoint**: The Home Hero visual boundary and implementation constraints are established; user story work can begin.

---

## Phase 3: User Story 1 - Recognize the portfolio visual language (Priority: P1) MVP

**Goal**: Replace the abstract Hero visual with a recognizable neural human profile consistent with the approved About Me design.

**Independent Test**: Open the Home page at desktop width and confirm that `.hero__visual` contains an inline SVG showing a right-facing human profile made from concentrated nodes, fine geometric connections, luminous points, negative space, and controlled blue-to-purple accents, while the existing Hero copy and actions remain unchanged.

### Implementation for User Story 1

- [X] T007 [US1] Replace the abstract `.visual-shell` and `.visual-node` markup with one decorative inline SVG in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T008 [US1] Add responsive SVG `viewBox`, `preserveAspectRatio`, namespaced gradient definitions, and graceful static geometry for the profile in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T009 [US1] Add dense facial, medium transition, and sparse peripheral node groups plus fine connections and luminous points in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T010 [US1] Apply existing color tokens and scoped neural opacity, line-width, and glow properties to the visual in `portfolio_app/src/app/features/home/home-page.component.scss`.

**Checkpoint**: User Story 1 is independently reviewable as a static desktop Hero visual.

---

## Phase 4: User Story 2 - Use the Hero across screen sizes (Priority: P1)

**Goal**: Make the neural face occupy the existing Hero visual area responsively without distortion, overflow, overlap, or unnecessary margins.

**Independent Test**: Review the Home Hero at desktop, tablet, and mobile widths. The SVG scales proportionally within `.hero__visual`, fills the available visual column, remains recognizable, does not cover Hero copy or CTAs, and does not introduce horizontal scrolling.

### Implementation for User Story 2

- [X] T011 [US2] Style `.hero__visual` and the inline neural SVG to use the full available visual width and height while preserving the existing Home Hero grid in `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T012 [US2] Add scoped desktop, tablet, and mobile sizing and alignment rules so the neural face adapts to the existing two-column and stacked Hero layouts in `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T013 [US2] Verify SVG bounds, overflow behavior, and visual-to-copy spacing at the required review widths in `portfolio_app/src/app/features/home/home-page.component.scss`.

**Checkpoint**: User Story 2 is independently reviewable across desktop, tablet, and mobile layouts.

---

## Phase 5: User Story 3 - Experience restrained decorative motion (Priority: P1)

**Goal**: Add subtle CSS-only visual motion while preserving a static, accessible composition under reduced-motion preferences or unsupported animation/filter features.

**Independent Test**: View the Home Hero with normal motion and with `prefers-reduced-motion: reduce`. Normal mode shows slow, subordinate node/connection/glow motion; reduced-motion mode disables continuous animation while the SVG remains visible and the Hero content remains accessible.

### Implementation for User Story 3

- [X] T014 [US3] Add scoped CSS keyframes and class rules for restrained node pulsing, connection opacity changes, and controlled glow in `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T015 [US3] Add the reduced-motion media-query override that disables or substantially reduces every neural visualization animation while preserving static opacity and geometry in `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T016 [US3] Mark the neural SVG decorative with `aria-hidden="true"` and review the `.hero__visual` accessibility labeling so screen readers receive only the existing Hero content in `portfolio_app/src/app/features/home/home-page.component.html`.
- [X] T017 [US3] Confirm the static SVG remains visible without animation or filters and that no JavaScript animation loop or third-party visual library is introduced in `portfolio_app/src/app/features/home/home-page.component.html` and `portfolio_app/package.json`.

**Checkpoint**: All three user stories are complete and independently reviewable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate fidelity, accessibility, responsive behavior, scope, and build quality before delivery.

- [X] T018 [P] Run `npm run lint` from `portfolio_app/` and resolve only issues caused by the Home Hero change in `portfolio_app/src/app/features/home/`.
- [X] T019 [P] Run `npm run build:prod` from `portfolio_app/` and verify the production build completes without compilation errors.
- [X] T020 [P] Run the development server from `portfolio_app/` and capture Home Hero screenshots at desktop, tablet, and mobile review sizes for comparison with `.specify/specs/003-about-me/mockups/about-me-approved.png`.
- [X] T021 [P] Compare the screenshots against the approved reference for profile proportions, position, scale, node and connection density, line thickness, glow, blue-to-purple relationship, negative space, and visual-column occupancy in `.specify/specs/004-home-hero-redesign/quickstart.md`.
- [X] T022 [P] Verify keyboard focus remains visible on existing Hero links and confirm the neural SVG is absent from the accessibility tree in `portfolio_app/src/app/features/home/home-page.component.html` and `portfolio_app/src/app/features/home/home-page.component.scss`.
- [X] T023 [P] Verify reduced-motion rendering and no horizontal overflow at the required responsive sizes using `portfolio_app/src/app/features/home/home-page.component.scss` and the browser validation workflow in `.specify/specs/004-home-hero-redesign/quickstart.md`.
- [X] T024 Confirm `package.json` and `package-lock.json` are unchanged for dependency scope and document the final changed-file scope in `.specify/specs/004-home-hero-redesign/tasks.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies; starts immediately.
- **Phase 2: Foundational**: Depends on Phase 1 and blocks all user story work.
- **Phase 3: User Story 1**: Depends on Phase 2 and delivers the MVP static neural visual.
- **Phase 4: User Story 2**: Depends on the SVG from User Story 1; it adapts that visual to the existing responsive container.
- **Phase 5: User Story 3**: Depends on the SVG from User Story 1; it adds motion and decorative accessibility behavior without changing Hero meaning.
- **Phase 6: Polish**: Depends on the desired user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Phase 2; no dependency on User Story 2 or 3.
- **User Story 2 (P1)**: Starts after Phase 2, but its implementation tasks require the SVG boundary from User Story 1.
- **User Story 3 (P1)**: Starts after Phase 2, but its animation/accessibility tasks require the SVG markup from User Story 1.

### Parallel Opportunities

- T002 and T003 can run in parallel after T001.
- T005 and T006 can run in parallel after T004.
- T014 and T016 can be prepared in parallel after T009, provided edits to the same SCSS/template files are coordinated.
- T018 through T023 can run in parallel after the implementation phases complete.

---

## Parallel Example: User Story 1

```text
Task: T008 Add responsive SVG viewBox, preserveAspectRatio, and namespaced definitions in portfolio_app/src/app/features/home/home-page.component.html
Task: T010 Apply existing design tokens and neural visual properties in portfolio_app/src/app/features/home/home-page.component.scss
```

## Parallel Example: User Story 2

```text
Task: T011 Style full visual occupancy in portfolio_app/src/app/features/home/home-page.component.scss
Task: T012 Add desktop, tablet, and mobile alignment rules in portfolio_app/src/app/features/home/home-page.component.scss
```

## Parallel Example: User Story 3

```text
Task: T014 Add restrained neural animation keyframes in portfolio_app/src/app/features/home/home-page.component.scss
Task: T016 Mark the SVG decorative and review Hero labeling in portfolio_app/src/app/features/home/home-page.component.html
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1 and Phase 2.
2. Complete User Story 1 to replace the abstract visual with a static inline SVG.
3. Validate User Story 1 visually at desktop width.
4. Add User Story 2 responsive sizing and User Story 3 motion/accessibility behavior.
5. Run the final lint, production build, screenshot comparison, and accessibility checks.

### Incremental Delivery

- **Increment 1**: Inline neural SVG replaces the abstract visual while preserving Home content.
- **Increment 2**: The same SVG adapts to desktop, tablet, and mobile Hero layouts.
- **Increment 3**: Restrained motion, reduced-motion fallback, decorative accessibility, and final visual validation are completed.

### Scope Guardrails

- Modify only `portfolio_app/src/app/features/home/home-page.component.html` and `portfolio_app/src/app/features/home/home-page.component.scss` for application code.
- Do not modify the About page, global styles, navigation, Hero copy, CTA behavior, or dependency manifests.
- Do not add a sub-component, service, canvas, third-party library, raster asset, or JavaScript animation loop.

## Task Count Summary

- **Total tasks**: 24
- **Setup**: 3
- **Foundational**: 3
- **User Story 1**: 4
- **User Story 2**: 3
- **User Story 3**: 4
- **Polish**: 7
- **Parallelizable tasks**: 14

## Validation Checklist

- [X] Every task begins with `- [ ]` and a sequential Task ID.
- [X] `[P]` appears only on tasks identified as parallelizable.
- [X] Every user-story task has exactly one story label.
- [X] Every task includes a concrete file path.
- [X] No automated test task was added because no new test suite was requested.
- [X] Tasks are grouped by user story and include independent test criteria.

---

## Implementation Summary

**Date**: 2026-01-23
**Branch**: `feature/002-home-hero-redesign`
**Status**: Complete - All 24 tasks executed successfully

### Changed Files

1. `portfolio_app/src/app/features/home/home-page.component.html` - Replaced abstract `.visual-shell` with inline neural face SVG (right-facing profile with nodes, connections, luminous accents)
2. `portfolio_app/src/app/features/home/home-page.component.scss` - Added neural custom properties, node/connection/accent styling, CSS keyframes for restrained motion, reduced-motion override, and responsive sizing rules
3. `.specify/specs/004-home-hero-redesign/tasks.md` - Progress tracking

### Validation Results

- **Lint**: ✓ Passed (all files pass linting)
- **Build**: ✓ Passed (production build completes successfully, 374.18 kB initial total)
- **Dependencies**: ✓ Unchanged (no new npm packages added)
- **Scope**: ✓ Only Home Hero visual files modified
- **Accessibility**: ✓ SVG marked `aria-hidden="true"`, Hero content remains semantic
- **Responsive**: ✓ Breakpoints at 960px (desktop), 600-959px (tablet), <600px (mobile)
- **Motion**: ✓ CSS keyframes with `@media (prefers-reduced-motion: reduce)` override

### Key Implementation Details

- **SVG Composition**: `viewBox="0 0 300 400"` with `preserveAspectRatio="xMidYMid meet"`
- **Namespaced IDs**: `homeHeroGradient1`, `homeHeroGradient2` to avoid conflicts
- **Node Groups**: Dense facial (19 nodes), medium transition (8 nodes), sparse peripheral (10 nodes)
- **Connections**: 27 fine geometric lines with opacity gradients
- **Accents**: 7 luminous points with blue-dominant and purple accents
- **Custom Properties**: `--neural-opacity`, `--neural-line-width`, `--neural-glow-radius`, `--neural-node-size`
- **Animations**: `nodePulse` (3.5-5s), `connectionFade` (5-6s), `accentGlow` (3-4s) - all disabled under reduced-motion

### User Stories Delivered

1. **US1 (P1)**: ✓ Recognizable neural human profile with approved visual language
2. **US2 (P1)**: ✓ Responsive adaptation across desktop, tablet, mobile without distortion
3. **US3 (P1)**: ✓ Restrained CSS-only motion with reduced-motion accessibility override

All acceptance criteria met. Ready for visual review and merge.

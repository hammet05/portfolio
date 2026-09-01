# Implementation Plan: About Me

**Branch**: `feature/003-about`
**Date**: 2026-08-19
**Spec**: `specs/003-about-me/spec.md`
**Visual validation artifact**: `specs/003-about-me/checklists/visual-verification.md`
**Status**: Planned

## Summary

Complete the About Me page as a single Angular standalone feature under
`portfolio_app/src/app/features/about/`, using the existing application shell,
router, design tokens, SCSS/Tailwind setup, and Lucide icon dependency. The
implementation must close the visual gaps identified by the visual verification
report: composition fidelity, neural-face density, Engineering Journey hierarchy,
Project Growth architecture diagram, AI Chapter visual field, responsive
behavior, accessibility evidence, and GitHub Pages runtime verification.

The approved mockup remains the visual source of truth. The visual verification
artifact is a validation input and acceptance record only; it does not replace
`spec.md`, this `plan.md`, or `tasks.md`.

## Technical Context

**Language/Version**: TypeScript with Angular 19 standalone components
**Primary Dependencies**: Angular Router, SCSS, Tailwind CSS, existing `@lucide/angular`; no new dependency
**Storage**: N/A; all About content is static component data
**Testing**: `npm run lint`, `npm run build`, `ng build --base-href /portfolio/`, browser viewport checks, manual accessibility and visual comparison
**Target Platform**: Modern desktop, tablet, and mobile browsers; GitHub Pages under `/portfolio/`
**Project Type**: Angular frontend feature
**Performance Goals**: Preserve current production build budgets; animation limited to opacity/transform and lightweight SVG/CSS effects
**Constraints**: No backend/API calls, no new visualization or animation library, no raster neural-face asset, no parallel design system, no horizontal scrolling, content available without animation
**Scale/Scope**: One static About page with six sections, one primary component, one inline SVG visualization, four capability areas, five journey stages, and one project-growth diagram

## Constitution Check

### Initial Gate

- **Simplicity First**: PASS. Keep one feature component and use existing Angular, SCSS, SVG, and Lucide capabilities. No speculative abstraction.
- **Feature Organization**: PASS. Feature code remains under `portfolio_app/src/app/features/about/`.
- **Separation of Responsibilities**: PASS. Content/state remains in the feature component; application shell and router remain outside feature-specific logic.
- **Angular Standards**: PASS. Use standalone component, existing Router, and typed component data.
- **Dependency Discipline**: PASS. Reuse existing `@lucide/angular`; add no package.
- **Code Quality**: PASS WITH VALIDATION. Preserve ESLint/Prettier conventions and require build/lint after each implementation slice.
- **Type Safety**: PASS. Use meaningful interfaces/unions; no `any`.
- **Git/Branching**: PASS. Active branch is `feature/003-about`; `main` remains stable.
- **CI/CD and Dependencies**: PASS. Validate normal build, lint, and `/portfolio/` base-href build; do not alter lockfiles without dependency changes.

No constitution violation requires a complexity exception.

## Source-of-Truth and Validation Rules

1. Functional and technical requirements come from `spec.md`.
2. Visual composition and fidelity come from `mockups/about-me-approved.png`.
3. The existing report at `specs/003-about-me/checklists/visual-verification.md` supplies the current discrepancy baseline and required verification tasks.
4. The report must remain at its current path. Do not move, rename, duplicate, or replace it.
5. A task requiring visual, responsive, accessibility, runtime, or deployment evidence is not complete merely because TypeScript, build, or lint succeeds.
6. Every completed task must record its evidence in `tasks.md` after the evidence is obtained.

## Existing Visual Baseline

The current report scores the rendered implementation **46/100** and identifies
these critical gaps:

- Complete-page composition and closing CTA relationship are incomplete.
- Neural face is too sparse and does not match the approved profile density.
- Engineering Journey is a generic card row rather than the richer timeline.
- Project Growth diagram lacks the approved narrative-plus-architecture composition.
- AI Chapter lacks sufficient icon-led capability treatment and technical-field depth.

These gaps define the implementation order below. Do not optimize microanimation
before composition and hierarchy are corrected.

## Remediation Acceptance Gates

The existing visual report is currently **46/100** with five CRITICAL findings.
Implementation checkboxes in `tasks.md` describe code existence; they do not
close these visual findings. The following gates are mandatory before the
feature may be considered complete:

1. **Composition gate**: one continuous page matches the approved shell,
    section hierarchy, negative space, and closing CTA relationship.
2. **Neural gate**: the SVG presents a recognizable right-facing profile with
    concentrated facial nodes, connected lines, peripheral fade, and comparable
    scale/density in desktop and tablet renders.
3. **Journey gate**: the desktop timeline reads as one architectural system,
    includes stage metadata/icons, and becomes a readable vertical progression
    on mobile.
4. **Project gate**: Project Growth combines the narrative with a meaningful
    two-column architecture diagram, labeled nodes, connections, and impact
    annotation.
5. **AI gate**: AI Chapter contains four icon-led capabilities and a visible,
    restrained blue-to-purple technical field without the rejected neural-head
    graphic.

Each gate requires screenshot evidence against
`checklists/visual-verification.md`. Build, lint, and route success cannot close
a visual gate. If a gate fails, its corresponding visual tasks remain open and
the report must retain the discrepancy with CRITICAL/WARNING/SUGGESTION
severity.

## Implementation Strategy

Use a vertical slice with one `AboutPageComponent` and static typed data. Keep
feature-specific styles in the existing global Sass architecture only when
required by Angular component budget constraints; otherwise keep styles local to
the About feature. Do not create child components unless the current markup
becomes demonstrably unmaintainable.

Use:

- Semantic sections, headings, lists, articles, and native links.
- Existing application shell and global navigation.
- Existing design tokens for colors, spacing, borders, and container width.
- Existing Lucide icons for descriptors, journey stages, capabilities, and diagram nodes.
- Inline SVG for the neural face and architecture connections.
- CSS Grid/Flexbox with mobile-first breakpoints.
- Intersection Observer plus CSS opacity/transform animation, with visible content fallback.
- `prefers-reduced-motion: reduce` to disable non-essential motion.

Avoid:

- New packages.
- Canvas or third-party visualization libraries.
- Third-party animation libraries.
- Backend data, HTTP services, or state-management layers.
- A second token system.
- Generic card grids that replace the approved editorial composition.

## Implementation Phases

### Phase 0 — Baseline and Evidence Setup

1. Confirm the active branch is `feature/003-about`.
2. Read `spec.md`, the Constitution, frontend instructions, and the existing visual report.
3. Preserve the visual report path exactly: `checklists/visual-verification.md`.
4. Confirm all approved and current render assets are available.
5. Record the current build/lint baseline before modifying implementation.

Exit criteria: branch and source-of-truth documents are confirmed; baseline
commands are recorded; no validation artifact is moved.

### Phase 1 — Composition First

1. Recompose the About page as one continuous document inside the existing shell.
2. Preserve the exact six-section order and section labels.
3. Match the approved container width, negative space, section rhythm, and desktop Hero two-column layout.
4. Add the approved closing philosophy/CTA relationship without duplicating global shell responsibility.
5. Ensure mobile and tablet layouts have an explicit single-column fallback.

Exit criteria: all major bands exist in the correct order and the page no longer
reads as an unrelated collection of generic cards.

### Phase 2 — Hero and Neural Face

1. Match Hero headline scale, line breaks, supporting copy position, and phrase-level blue/purple emphasis.
2. Replace the sparse neural structure with a recognizable right-facing profile.
3. Concentrate nodes and connections around facial geometry; fade peripheral density and opacity.
4. Keep the SVG transparent and decorative with `aria-hidden="true"`.
5. Add controlled glow and restrained node/connection motion.
6. Keep the neural visualization large enough on desktop/tablet without crowding copy.

Exit criteria: desktop screenshot comparison shows a recognizable neural human
profile with density, placement, and glow comparable to the approved mockup;
reduced-motion keeps the content fully understandable.

### Phase 3 — Engineering Journey

1. Expand each stage data object with concise technology metadata and existing icon.
2. Render a continuous desktop architectural line with nodes and integrated stage content.
3. Preserve Intersection Observer activation but keep content visible if motion is disabled or unavailable.
4. Convert the timeline into an explicit vertical progression on mobile.
5. Tune card/surface treatment so the timeline reads as one system, not five unrelated cards.

Exit criteria: desktop and mobile screenshots demonstrate the intended horizontal
and vertical timeline treatments; stage content remains readable without motion.

### Phase 4 — What I Build

1. Keep four capabilities: Enterprise Systems, Integration & APIs, Automation, Modernization.
2. Add existing Lucide icons and concise supporting descriptions.
3. Use an editorial row/grid with strong icon and title hierarchy.
4. Reduce generic rounded-card dominance and preserve restrained borders/surfaces.

Exit criteria: capability section matches the approved density and hierarchy and
uses no new icon dependency.

### Phase 5 — Project Growth

1. Keep the three narrative stages: Started as, Grew to include, Became important at scale.
2. Build the visual diagram with Medical Contracting, Integration Layer, and three destinations.
3. Add directional architectural connections, node icons, and the scale/impact annotation represented by the reference.
4. Use a two-column desktop composition and stacked mobile fallback.
5. Keep narrative readable if diagram motion is disabled.

Exit criteria: the section reads as a healthcare system evolution rather than a
stack of text blocks followed by an isolated diagram.

### Phase 6 — AI Chapter and Philosophy

1. Render four icon-led AI capabilities: Chatbots, LLMs, RAG, and AI Applications.
2. Add the restrained blue-to-purple technical field/wave treatment.
3. Do not reuse the rejected large neural-head graphic.
4. Preserve the philosophy statement and supporting line with the approved visual conclusion hierarchy.
5. Connect the closing statement to the existing portfolio CTA pattern only where the mockup requires it.

Exit criteria: AI and Philosophy sections have the intended visual weight,
content density, and blue/purple relationship without excessive gradients.

### Phase 7 — Responsive, Accessibility, and Runtime Validation

Validate at 375, 768, 1024, and 1280 pixel widths:

- Hero stacking and neural-face scale.
- Mobile vertical timeline.
- Project diagram stacking.
- AI field and philosophy wrapping.
- No horizontal overflow using DOM width checks.
- Keyboard navigation and visible focus.
- Heading hierarchy and semantic section structure.
- Decorative SVG behavior with assistive technology.
- Text contrast with an accessibility audit.
- Reduced-motion behavior using browser emulation.

Validate routing and deployment:

- `/` and `/about` respond in local development.
- `ng build --base-href /portfolio/` succeeds.
- `/portfolio/about` works from the built/deployed site.
- GitHub Pages deployment serves the feature without broken relative assets.

Exit criteria: each runtime or visual task has concrete evidence in `tasks.md`.

### Phase 8 — Visual Acceptance

Compare the rendered page and supplied viewport screenshots against
`mockups/about-me-approved.png` section by section:

1. Overall composition.
2. Hero typography and neural profile.
3. Engineering Journey.
4. What I Build.
5. Project Growth.
6. AI Chapter.
7. Philosophy and CTA.
8. Spacing, borders, gradients, icon weight, density, and alignment.
9. Responsive and overflow behavior.

Use the severity scheme already defined in
`checklists/visual-verification.md`: CRITICAL, WARNING, SUGGESTION.

Exit criteria: no unresolved CRITICAL discrepancy; remaining WARNING/SUGGESTION
items are documented with a deliberate acceptance decision.

### Remediation Traceability

| Critical finding | Remediation phase | Required evidence |
|---|---|---|
| Complete-page composition/CTA | Phase 1 and Phase 8 | Desktop full-page render; T088, T095, T099 |
| Neural-face density/recognition | Phase 2 and Phase 8 | Desktop/tablet renders; T031, T089, T090 |
| Engineering Journey hierarchy | Phase 3 and Phase 8 | Desktop/mobile renders; T074, T091 |
| Project Growth composition | Phase 5 and Phase 8 | Desktop/mobile renders; T093 |
| AI Chapter visual treatment | Phase 6 and Phase 8 | Desktop render and accent review; T094, T097 |

## Data and Component Design

The feature remains static and does not need a service or API. Component data
should use these typed concepts:

- `AboutPageNarrative`: title, supporting description, descriptors.
- `EngineeringJourneyStage`: id, order number, icon, title, description, technology tags.
- `FocusArea`: id, icon, title, description, optional topic labels.
- `ProjectGrowthStory`: starting state, included capabilities, scale/impact statement.
- `AIDirection`: transition statement, four capabilities, practical goal.
- `CorePhilosophy`: primary statement and supporting line.

All data is `protected readonly`; no `any`, HTTP call, or mutable application
state is required.

## File and Responsibility Map

```text
portfolio_app/
└── src/
    ├── styles.scss                         # global entry; imports existing partials
    ├── styles/
    │   ├── _tokens.scss                    # existing semantic tokens
    │   └── _about.scss                     # only if global budget requires feature rules
    └── app/
        ├── app.routes.ts                   # existing /about route
        ├── layout/                         # existing shell and navigation
        └── features/
            └── about/
                ├── about-page.component.ts
                ├── about-page.component.html
                └── about-page.component.scss

.specify/specs/003-about-me/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── checklists/
    └── visual-verification.md              # preserve; validation artifact only
```

**Structure decision**: retain the existing Angular vertical slice and use one
feature component. A small global About partial is allowed only to satisfy the
existing Angular component style budget while preserving feature selectors.

## Validation Matrix

| Validation | Command/Method | Evidence | Blocks completion |
|---|---|---|---|
| Type safety/template | `npm run lint` and editor diagnostics | Clean lint and no diagnostics | Yes |
| Production build | `npm run build` | No errors or warnings | Yes |
| Base path build | `npx ng build --base-href /portfolio/` | Successful output | Yes |
| Route runtime | Local server requests to `/` and `/about` | HTTP 200 responses | Yes |
| Desktop visual | Screenshots at 1024/1280 | Section comparison report | Yes |
| Tablet visual | Screenshot at 768/iPad width | Layout and neural-face evidence | Yes |
| Mobile visual | Screenshots at 375/390 | Vertical timeline and overflow evidence | Yes |
| Overflow | `document.documentElement.scrollWidth <= window.innerWidth` | true at each viewport | Yes |
| Accessibility | Keyboard, focus, contrast, semantic audit | No critical violations | Yes |
| Reduced motion | Browser media emulation | No non-essential motion; content visible | Yes |
| GitHub Pages | Deployed `/portfolio/about` | Successful route and assets | Yes |

## Constitution Re-check After Design

- **Simplicity**: PASS. The plan adds no new runtime dependency and keeps one feature component.
- **Feature boundaries**: PASS. Feature behavior remains in `features/about`; global partial is limited to styles required by the existing budget boundary.
- **Angular**: PASS. Standalone component and existing Router remain the integration points.
- **Type safety**: PASS. Typed static models and existing Lucide component imports are sufficient.
- **Quality**: PASS WITH GATES. Build, lint, visual comparison, responsive checks, accessibility audit, and base-path checks are explicit completion gates.
- **Dependency discipline**: PASS. Existing Lucide is reused; no package or lockfile change is planned.
- **Git**: PASS. Work is planned on `feature/003-about`; integration to `main` remains a later PR action.
- **CI/CD**: PASS. The plan requires production build/lint and GitHub Pages base-path/deployment verification before completion.

No unresolved `NEEDS CLARIFICATION` remains in the technical design. The only
known limitation is that visual/runtime evidence must be captured during
implementation; it cannot be inferred from a successful build.

## Complexity Tracking

No violations. The plan deliberately avoids new components, services, state
management, graphics libraries, animation libraries, and backend integration.

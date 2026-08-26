# Implementation Plan: Home Visual Refinement

**Branch**: `feature/004-home-visual-refinement` | **Date**: 2026-08-25 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/004-home-visual-refinement/spec.md`

## Summary

Refine the existing Home page to improve vertical rhythm, section spacing, card composition, and typography while preserving the current content structure and portfolio design system. The work focuses on the Hero, Engineering Focus, and Selected Work sections, bringing them into closer visual alignment with the approved About page without copying its composition.

## Technical Context

**Language/Version**: Angular + TypeScript + SCSS

**Primary Dependencies**: Angular standalone components, existing portfolio styles, Lucide icons, Tailwind CSS, ESLint, Prettier

**Storage**: N/A

**Testing**: Angular build validation, ESLint, browser/manual visual review

**Target Platform**: Web frontend for GitHub Pages deployment

**Project Type**: Frontend web application

**Performance Goals**: Lightweight CSS-only refinement; no new libraries or heavy animation dependencies

**Constraints**: Preserve existing content and structure; keep semantic tokens centralized; avoid visual duplication from About page; maintain responsive and accessible behavior

**Scale/Scope**: Single feature refinement for the Home page only

## Constitution Check

This feature is aligned with the project constitution and frontend requirements because it:

- keeps the change scoped to the Home page only
- preserves Angular standalone architecture and existing structure
- reuses existing design tokens instead of creating a parallel system
- avoids unnecessary dependency additions
- maintains accessibility, responsive behavior, and reduced-motion support
- keeps modifications limited to the feature layer and existing shared tokens only when required

No constitution violations are identified.

## Project Structure

### Documentation (this feature)

```text
specs/004-home-visual-refinement/
├── plan.md              # This file
├── spec.md              # Feature specification
├── checklists/
│   └── requirements.md  # Specification review checklist
└── tasks.md             # Generated after plan when implementation work begins
```

### Source Code (repository root)

```text
portfolio_app/src/app/
├── features/
│   └── home/
│       ├── home-page.component.ts
│       ├── home-page.component.html
│       └── home-page.component.scss
├── layout/
│   ├── app-shell/
│   ├── site-header/
│   └── ...
├── shared/
│   └── ui/
└── styles/
    ├── _tokens.scss
    ├── _typography.scss
    ├── _layout.scss
    └── ...
```

**Structure Decision**: Keep the implementation entirely within the existing Home feature and the existing global token/style system. No new application architecture is introduced.

## Phase 0: Design Review and Scope Lock

1. Review the existing Home page structure and spacing at key viewport widths.
2. Verify the About page establishes the reference dark technical tone, border treatment, surface contrast, and restrained accent language.
3. Confirm the visual refinement remains scoped to spacing, typography, cards, and rhythm rather than content or architecture.

## Phase 1: Header / Hero Refinement

1. Reduce the vertical gap between the global navigation and the Hero content.
2. Preserve the Hero typography and content hierarchy while keeping the strongest focus on the main headline.
3. Apply the purple AI accent to the phrase “Exploring intelligence.” using the existing token strategy.
4. Reduce the Hero-to-Engineering Focus spacing to create a natural transition without a large page break.

### Files likely involved

- `portfolio_app/src/app/features/home/home-page.component.scss`
- `portfolio_app/src/app/features/home/home-page.component.html`
- existing shared token files in `portfolio_app/src/styles/`

## Phase 2: Engineering Focus Refinement

1. Add intentional spacing between the section heading and the focus grid.
2. Refine the focus card visual treatment to feel architectural and technical rather than generic.
3. Apply subtle border, accent, and hover/focus states using existing tokens and restrained motion.
4. Reduce the spacing between Engineering Focus and Selected Work to preserve continuity.

### Files likely involved

- `portfolio_app/src/app/features/home/home-page.component.scss`
- relevant card markup in `portfolio_app/src/app/features/home/home-page.component.html`

## Phase 3: Selected Work Refinement

1. Increase the visual gap between the section title and the project grid.
2. Improve the work-card hierarchy with a stronger project title, secondary metadata, and controlled visual weight.
3. Refine hover/focus states without adding heavy motion or layout disruption.
4. Keep technology badges secondary to the main content and preserve the dark portfolio aesthetic.

### Files likely involved

- `portfolio_app/src/app/features/home/home-page.component.scss`
- `portfolio_app/src/app/features/home/home-page.component.html`

## Phase 4: Responsive and Accessibility Validation

1. Validate the page at desktop, tablet, and mobile breakpoints.
2. Confirm no horizontal overflow, overlap, or cramped card widths are introduced.
3. Check keyboard focus visibility, reduced-motion behavior, and contrast.
4. Verify the build remains clean and the GitHub Pages base path remains compatible.

## Complexity Tracking

No constitution violations or additional architectural complexity are required for this refinement. The solution remains intentionally simple and scoped.

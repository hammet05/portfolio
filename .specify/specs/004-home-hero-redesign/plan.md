# Implementation Plan: Home Hero Neural Face Redesign

**Branch**: `feature/002-home-hero-redesign` | **Date**: 2026-08-23 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `.specify/specs/004-home-hero-redesign/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Replace the existing abstract Home Hero visual inside `.hero__visual` with a focused inline SVG representing the right-facing neural human profile from the approved About Me visual language. Preserve the Home Hero copy, actions, shell, and responsive layout. Use a Home-specific SVG composition with namespaced gradients, dense facial nodes, sparse peripheral connections, existing design tokens, and restrained CSS motion that becomes static under reduced-motion preferences.

## Technical Context

**Language/Version**: TypeScript 5.5.x, Angular 19 standalone, HTML, SCSS, inline SVG

**Primary Dependencies**: Existing Angular core/router, existing SCSS and CSS custom properties; no new dependencies

**Storage**: N/A; decorative static visual

**Testing**: Angular ESLint, production build, existing browser/screenshot validation workflow, manual responsive and reduced-motion review

**Target Platform**: Modern desktop, tablet, and mobile browsers; GitHub Pages under the repository base path

**Project Type**: Angular single-page application feature

**Performance Goals**: Keep the Hero first render lightweight; use a bounded inline SVG and no runtime animation loop or external visualization library

**Constraints**: Preserve existing Home structure and content; no new packages; no raster image, canvas, particle, or visualization library; no horizontal overflow; accessible decorative SVG; reduced-motion support; existing global tokens only

**Scale/Scope**: One Home Hero visual slot, one inline SVG, and directly related Home feature SCSS/template changes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Simplicity First**: PASS. The visual is implemented directly in the existing Home template and SCSS with no new abstraction or library.
- **Feature-Oriented Organization**: PASS. Changes remain under `portfolio_app/src/app/features/home/`.
- **Clear Separation of Responsibilities**: PASS. The Home component owns presentation; no global layout or business logic changes are introduced.
- **Angular Standards**: PASS. Existing standalone Angular architecture and template syntax are preserved.
- **Dependency Discipline**: PASS. Inline SVG and CSS use existing platform capabilities; no npm dependency is required.
- **Code Quality and Type Safety**: PASS. No new TypeScript model or `any` usage is needed for the static visual.
- **Accessibility and Responsiveness**: PASS. The SVG is decorative and hidden from assistive technology; Hero content remains semantic; responsive sizing and reduced motion are specified.
- **Git and Branching**: PASS. Work is planned for `feature/002-home-hero-redesign`, not `main`.

**GATE STATUS**: PASS. No constitution violations.

**Post-design gate**: PASS. The Phase 1 design preserves the existing Home feature boundary, avoids new dependencies and global styles, and satisfies the SVG accessibility, responsive, and reduced-motion constraints.

## Project Structure

### Documentation (this feature)

```text
specs/004-home-hero-redesign/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
```text
portfolio_app/
├── src/
│   ├── app/
│   │   └── features/
│   │       └── home/
│   │           ├── home-page.component.html  # update Hero visual only
│   │           └── home-page.component.scss  # add scoped neural visual styles
│   └── styles/
│       └── _tokens.scss                     # existing, no changes
└── package.json                              # existing scripts, no dependency changes
```

**Structure Decision**: Keep the feature inside the existing Home vertical slice. Replace the contents of the existing `.hero__visual` element in `home-page.component.html` and add only directly related SVG, responsive, animation, and reduced-motion rules in `home-page.component.scss`. Do not create a sub-component, service, asset URL, or global style.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | No constitution violations require an exception. |

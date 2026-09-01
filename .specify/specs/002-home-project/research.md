# Research - 002-home-project

## Decision 1: Replace bootstrap placeholder with dedicated Home feature route

- Decision: Implement Home under `src/app/features/home/` and route `/` to this feature.
- Rationale: Matches AC-013 and keeps shell/layout boundaries intact.
- Alternatives considered:
  - Keep production Home in `home-bootstrap`: rejected due to scope blending.
  - Add many child components upfront: rejected as premature abstraction.

## Decision 2: Keep Home content static and local to feature code

- Decision: Use static constants/content in feature scope only.
- Rationale: Spec excludes backend, CMS, and dynamic content.
- Alternatives considered:
  - Fetch content from API/CMS: rejected as out of scope.
  - Introduce app-level state store: rejected as unnecessary.

## Decision 3: Architecture visual via HTML/SVG/SCSS only

- Decision: Build abstract architecture visual with SVG/CSS and subtle transitions.
- Rationale: Meets visual intent without adding heavy dependencies.
- Alternatives considered:
  - Three.js/WebGL/GSAP: rejected by scope exclusions.
  - Large hero image assets: rejected for payload/performance reasons.

## Decision 4: Clarified placeholder navigation strategy

- Decision: Map future-feature actions to meaningful in-page anchors until real routes exist.
- Rationale: Clarified spec requires no dead links or fake pages.
- Alternatives considered:
  - Fake coming-soon routes/pages: rejected.
  - Non-functional CTA controls: rejected.

## Decision 5: CV delivery strategy for GitHub Pages

- Decision: Provide CV as static PDF under `src/assets/documents/alejandro-sierra-cv.pdf` and ensure build outputs to `/assets/documents/...`.
- Rationale: Clarification requires static in-repo asset and base-href-compatible access.
- Alternatives considered:
  - External file hosting: rejected by specification intent.
  - Backend-generated CV endpoint: rejected as out of scope.

## Decision 6: Design consistency via existing tokens only

- Decision: Consume established design tokens and avoid duplicating visual primitives.
- Rationale: AC-010 and frontend instructions require tokenized consistency.
- Alternatives considered:
  - Feature-local color/spacing systems: rejected for drift risk.
  - New UI framework adoption: rejected as unnecessary complexity.

## Decision 7: Accessibility and reduced-motion as first-class constraints

- Decision: Implement semantic landmarks/headings, keyboard focus visibility, and `prefers-reduced-motion` behavior from first pass.
- Rationale: Required by AC-009 and DoD.
- Alternatives considered:
  - Defer accessibility to later pass: rejected.
  - Disable all interaction motion globally: rejected; subtle purposeful interactions are allowed.

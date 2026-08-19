
---

# 2. `specs/003-about-me/plan.md`

Aquí cambia la naturaleza del documento. **La spec dice qué debe existir; el plan dice cómo vamos a construirlo.**

Yo usaría un plan sencillo, evitando sobrearquitectura:

```md
# Implementation Plan: About Me

**Feature:** 003-about-me  
**Branch:** `feature/003-about`  
**Specification:** `specs/003-about-me/spec.md`  
**Status:** Draft  
**Language:** English

---

## 1. Objective

Implement the About Me feature according to:

1. `constitution.md`
2. `instructions.frontend.md`
3. `specs/003-about-me/spec.md`
4. `mockups/about-me-approved.png`

The implementation must reproduce the approved visual composition while
remaining simple, maintainable, responsive, accessible, and dependency-free.

---

## 2. Implementation Strategy

The feature will be implemented using the existing Angular 19 standalone
architecture.

No new frontend dependency will be introduced.

The implementation will use:

- Angular standalone component.
- Existing application router.
- Existing application shell.
- Existing global design tokens.
- SCSS/CSS.
- CSS custom properties where feature-level values are required.
- Inline SVG or component-local SVG for the neural visualization.
- CSS animations.
- Intersection Observer only where progressive visual activation is required.

The implementation will avoid unnecessary abstractions.

---

## 3. Component Structure

Primary feature structure:

```text
portfolio_app/
└── src/
    └── app/
        └── features/
            └── about/
                ├── about-page.component.ts
                ├── about-page.component.html
                └── about-page.component.scss
```                
 The default implementation will use one primary component.

Sub-components will only be introduced if implementation complexity clearly
justifies them.

The following should NOT automatically become separate components:

- Hero.
- Engineering Journey.
- What I Build.
- Project Growth.
- AI Chapter.
- Philosophy.

The neural SVG may remain inside the About page component unless extraction
provides a clear maintainability benefit.

# 4. Layout Strategy

The page will use one continuous vertical document.

Desktop:
```
Hero
  ├── Narrative
  └── Neural visualization


Engineering Journey
  └── Horizontal timeline


What I Build + Project That Grew
  ├── Capability editorial layout
  └── Architecture diagram

AI Chapter + Philosophy
  ├── AI visual treatment
  └── Philosophy statement


Closing CTA / existing portfolio shell
```
The layout must preserve the composition of the approved mockup.

CSS Grid will be preferred for major page-level compositions.

Flexbox will be preferred for local alignment and repeated horizontal groups.

# 5. Visual Implementation

The implementation must first establish the global page composition before
adding animation.

Implementation order:

1. Page container.
2. Hero composition.
3. Hero typography.
4. Neural SVG.
5. Engineering Journey timeline.
6. What I Build.
7. Project Growth diagram.
8. AI Chapter.
9. Philosophy.
10. Responsive behavior.
11. Accessibility.
12. Microanimations.

The implementation must NOT start with animation.

# 6. Neural Face Implementation

The neural face will use SVG.

The SVG should contain:

- Profile geometry.
- Nodes.
- Connection paths.
- Focal points.
- Peripheral points.

The geometry should remain static.

CSS will provide:

- Glow.
- Opacity.
- Node pulse.
- Selected connection animation.

The SVG should use a stable viewBox so that it scales responsively.

The neural visualization must not use canvas or external visualization
libraries.

The SVG must remain decorative and should be hidden from assistive
technology unless meaningful accessible text is explicitly required.

# 7. Engineering Journey Implementation

The Engineering Journey will use a semantic list structure.

Desktop layout:

> Stage 01 ─── Stage 02 ─── Stage 03 ─── Stage 04 ─── Stage 05

A shared architectural line will visually connect the stages.

Intersection Observer may add an active/visible class when the timeline enters
the viewport.

CSS @keyframes will provide the visual activation.

Content must remain visible and readable without JavaScript.

Mobile will convert the timeline into a vertical progression.

# 8. Project Growth Implementation

The Project Growth section will use a semantic content structure with a
visual architecture diagram.

The diagram will represent:
```
Medical Contracting
        ↓
Integration Layer
   ↙      ↓      ↘
Auth.   Contact   Admin
```
SVG or CSS may be used for the architectural connections.

The visual diagram must remain secondary to the narrative but must be
clearly visible.

# 9. AI Chapter

The AI Chapter will use:

- Strong typography.
- Four capability indicators.
- Controlled blue/purple accents.
- Subtle technical visual field.

The rejected neural-head illustration will not be reused.

No external graphic library will be introduced.

# 10. Design Tokens

The feature must consume the global token system.

Only feature-specific values that do not already exist globally may be added.

Potential feature-level token categories:
```scss
--about-neural-line
--about-neural-line-faint
--about-neural-node
--about-neural-node-bright
--about-neural-glow
--about-accent-blue
--about-accent-purple
```
Actual values must be reconciled with the project's existing design tokens
before implementation.

The plan does not authorize creation of a second independent design system.

# 11. Typography

The visual hierarchy should follow the approved mockup.

Initial implementation targets:
```
Hero headline:      clamp(3rem, 6vw, 4.5rem)
Section heading:    responsive display scale
Card/feature title: medium display scale
Body:               existing project body token
Labels:             existing project label token
```
These values are implementation targets, not independent design-system
tokens.

The final values must be consistent with instructions.frontend.md.

# 12. Animation

Animation will be progressive enhancement only.

Required principles:

- No animation is required to understand the content.
- No continuous high-frequency animation.
- Neural animation must be subtle.
- Engineering timeline activation must be subtle.
- Hover effects must remain optional.
- Reduced motion must disable or substantially reduce non-essential motion.

Implementation technologies:

- CSS @keyframes.
- Intersection Observer.
- CSS classes.

No animation library will be added.

# 13. Responsive Strategy

Desktop:

- wo-column Hero.
- orizontal Engineering Journey.
- wo-column lower section composition.
- arge typography.
- ull visual treatment.

Tablet:

- Reduced spacing.
- Reduced Hero typography.
- Preserved two-column composition where practical.

Mobile:

- Single-column Hero.
- Neural visual repositioned below or beside Hero text.
- Vertical Engineering Journey.
- Vertical Project Growth diagram.
- Reduced typography.
- Preserved visual hierarchy.

No horizontal overflow is permitted.

# 14. Accessibility

Implementation must include:

- Semantic headings.
- Semantic sections.
- Keyboard-accessible interactive elements.
- Visible focus states.
- Appropriate decorative SVG handling.
- Sufficient contrast.
- Reduced-motion support.
- No color-only communication.

Animations must never be required for content comprehension.

# 15. GitHub Pages Compatibility

The route and assets must work under:

> /portfolio/

The implementation must not assume the application is hosted at domain root.

Asset and navigation references must use Angular-compatible routing and asset
handling.

# 16. Validation Strategy

The feature will be validated in the following order:

- TypeScript compilation.
- ESLint.
- Production build.
- Route verification.
- Responsive verification.
- Keyboard/accessibility verification.
- Reduced-motion verification.
- Visual comparison against:
  - mockups/about-me-approved.png
  
- Visual validation must verify:

- Hero proportions.
- Typography scale.
- Neural face size.
- Timeline composition.
- Project diagram.
- AI visual treatment.
- Section spacing.
- Accent colors.
- Negative space.
- Overall visual hierarchy.

A page that passes compilation but does not visually resemble the approved
mockup is not considered complete.

# 17. Out-of-Scope Implementation

Do not implement:

- New dependencies.
- Backend APIs.
- AI services.
- LLM integrations.
- RAG.
- SignalR.
- Database access.
- Analytics.
- Contact form.
- Projects.
- AI Lab.
# 18. Plan Completion Criteria

The implementation plan is considered complete when it provides enough
information for task generation without requiring architectural decisions
to be invented during implementation.

The implementation should remain intentionally small.

No additional framework, abstraction layer, state-management library, or
visualization library is required.
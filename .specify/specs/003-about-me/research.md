# Research: About Me Page Technical Decisions

**Date**: 2026-08-18  
**Status**: Complete  
**Scope**: Technical patterns, browser compatibility, Angular patterns

## 9. Visual Verification-Guided Planning

### Decision
Treat `checklists/visual-verification.md` as a required validation artifact
that informs implementation order and acceptance evidence, while keeping
`spec.md` as the functional source of truth and `plan.md` as the implementation
source of truth.

### Rationale
- The current visual report identifies critical composition gaps that build and
  lint cannot detect.
- The approved mockup is explicitly the visual source of truth.
- Visual, responsive, accessibility, base-path, and deployment tasks require
  concrete runtime evidence before their task checkboxes may be marked.
- Preserving the checklist path avoids losing the existing discrepancy baseline.

### Decisions from the report
- Correct composition and hierarchy before microanimation.
- Rebuild neural-face density and recognition before tuning glow.
- Use the existing Lucide dependency for icon-led stages and capabilities.
- Keep the Project Growth diagram and AI field as explicit visual structures,
  not plain text fallbacks.
- Validate desktop, tablet, and mobile renders separately.

### Alternatives considered
- Treating a successful build as visual acceptance: rejected because it cannot
  detect hierarchy, density, alignment, or composition regressions.
- Replacing the checklist with a new report: rejected because the user requires
  the existing validation artifact to remain in place.
- Adding a screenshot/visual regression dependency: rejected under the
  project's dependency-discipline and simplicity principles; manual/browser
  evidence is sufficient for this static feature.
---

## 1. Intersection Observer for Animation

### Decision
Use native Intersection Observer API with CSS `@keyframes` for section entrance animations. No animation library required.

### Rationale
- **Built-in**: Available in all modern browsers (IE 11+ with polyfill not needed for this portfolio)
- **Performance**: No runtime overhead, works with CSS GPU acceleration
- **Accessibility**: Native support for `prefers-reduced-motion` via CSS media query
- **Simplicity**: Angular component can add/remove CSS classes on observed elements
- **No new dependencies**: Pure browser API + existing CSS capabilities

### Implementation Pattern
```typescript
// In about-page.component.ts
constructor() {
  this.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
}

ngAfterViewInit() {
  const sections = this.elementRef.nativeElement.querySelectorAll('[data-animate]');
  sections.forEach(section => this.observer.observe(section));
}
```

### CSS Pattern
```scss
[data-animate] {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Verified**: Angular 19 supports full TypeScript + DOM APIs without polyfills for modern targets.

---

## 2. Reduced Motion Support

### Decision
Implement `prefers-reduced-motion` support at CSS level. Disable animations entirely when preference is set.

### Rationale
- **Accessibility**: WCAG 2.1 guideline (AC-013 requirement)
- **CSS-first approach**: No JavaScript logic needed for motion preference
- **Performant**: Preference detection is automatic in CSS

### Implementation Pattern
```scss
// Global reset for all animations
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

// Component-level: disable entrance animations
.about-page [data-animate] {
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
}
```

**Verified**: Angular 19 processes CSS media queries natively; no additional configuration needed.

---

## 3. Design Token Consumption in SCSS

### Decision
Import `_tokens.scss` globally and consume `--color-*`, `--space-*`, `--radius-*` custom properties in component SCSS.

### Rationale
- **Consistency**: Existing design system already in place (project bootstrap feature)
- **No duplication**: Reuse tokens from `.specify/specs/002-home-project` implementation
- **Scoped styling**: Component SCSS can override locally without affecting other features
- **Token location**: Already defined in `portfolio_app/src/styles/_tokens.scss`

### Implementation Pattern
```scss
// In about-page.component.scss
@use '../../../styles/tokens';

.about-page {
  background: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-8);

  .section {
    margin-bottom: var(--space-12);
    max-width: var(--container-max-width);
    margin-inline: auto;
  }

  h1 {
    font-size: clamp(2.8rem, 5vw, 5.25rem);
    color: var(--color-text);
  }
}
```

**Verified**: Existing project uses same pattern in home-page component (spec 002 implementation).

---

## 4. GitHub Pages Base Path Compatibility

### Decision
Use Angular's built-in relative routing and ensure no hardcoded absolute paths. The `/about` route works automatically under `https://[user].github.io/portfolio/about`.

### Rationale
- **Angular Router built-in**: Already handles base href from `index.html`
- **No additional config needed**: GitHub Actions workflow already sets base-href during build
- **Test on GitHub Pages**: Deployment validates base-path behavior automatically

### Implementation Pattern
```typescript
// In app.routes.ts
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];
```

**Verified**: Home page (spec 002) already follows this pattern and deploys correctly.

---

## 5. Monolithic Component Architecture

### Decision
Single `AboutPageComponent` containing all six sections. No sub-components. Content data embedded in component class (or inline template).

### Rationale
- **Simplicity**: No props/inputs drilling, no child component communication
- **Static content**: No data transformation or reuse logic justifies extraction
- **Maintainability**: Single file is easier to locate and modify than multiple components
- **Precedent**: Home page (spec 002) follows same pattern for similar static content feature

### Content Data Strategy
Store content in component class as constants or inline in template:
```typescript
export class AboutPageComponent {
  protected readonly aboutTitle = 'From building software to exploring intelligence.';
  protected readonly engineeringStages = [
    { title: 'Building Applications', focus: '.NET / C# / Desktop' },
    { title: 'Connecting Systems', focus: 'Web / Angular / APIs' },
    // ...
  ];
}
```

**Verified**: Aligns with FR-059 (monolithic structure) and Clarification #2 decision.

---

## 6. Responsive Layout Strategy

### Decision
Use CSS Grid/Flexbox from Tailwind CSS. Mobile-first approach with breakpoint-specific modifications.

### Rationale
- **No additional framework**: Tailwind already configured project-wide
- **Modern CSS**: Grid and Flexbox handle all About page layout needs
- **Accessible**: Semantic HTML + CSS layout (no JavaScript for layout)
- **Tested breakpoints**: Project already validates 375px, 768px, 1024px, 1280px (spec requirement AC-011)

### Implementation Pattern
```html
<!-- Responsive two-column section on larger screens -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="content">...</div>
  <div class="visual">...</div>
</section>
```

**Verified**: Home page uses identical Tailwind responsive patterns.

---

## 7. Content Word Count Validation

### Decision
Implement word count as a development checklist item (non-automated). Target: 300-400 words total (all visible text).

### Rationale
- **Clarification #3**: "All visible text" includes headings, labels, body, descriptors
- **Manual verification**: During content creation, count final rendered text
- **Acceptance Criterion AC**: AC-048 requires staying within range; dev should validate before PR

### Implementation Pattern
```typescript
// Pseudo-code for content outline
const wordCount = {
  "01 About Me": "Primary heading + 3 descriptors = ~10 words",
  "02 Engineering Journey": "Stage titles + brief descriptions = ~80 words",
  "03 What I Build": "Section title + 3 subsections = ~60 words",
  "04 Project That Grew": "Three-part narrative (Started/Grew/Became) = ~120 words",
  "05 AI Chapter": "Narrative paragraph = ~80 words",
  "06 Philosophy": "Core statement + optional supporting line = ~20 words",
  // Total: ~370 words
};
```

**Verified**: Tracking method aligns with Clarification #3 decision.

---

## 8. Testing and Validation Strategy

### Decision
Validation via:
1. **ESLint**: Existing project configuration (no additional rules)
2. **Production build**: `ng build --configuration production` must pass
3. **Visual regression**: Compare against approved mockup (`.specify/specs/003-about-me/mockups/about-me-approved.png`)
4. **Responsive testing**: Browser DevTools at 375px, 768px, 1024px, 1280px
5. **Accessibility audit**: Manual keyboard navigation, focus visibility, color contrast

### Rationale
- **No new frameworks**: Project doesn't require Cypress, Playwright, or Karma beyond existing lint
- **Build-time validation**: ESLint catches type/style issues early
- **Manual visual**: Low-code-complexity feature doesn't justify test automation overhead
- **Alignment**: Matches project practices from bootstrap (spec 001) and home (spec 002)

**Verified**: Project uses same validation approach for existing features.

---

## Summary of Research Decisions

| Topic | Decision |
|-------|----------|
| Animation mechanism | Intersection Observer + CSS @keyframes |
| Reduced motion | CSS media query `@media (prefers-reduced-motion: reduce)` |
| Design tokens | Import from existing `_tokens.scss`, use CSS custom properties |
| GitHub Pages base path | Angular Router built-in + existing build config |
| Component structure | Single monolithic AboutPageComponent |
| Responsive layout | Tailwind CSS Grid/Flexbox, mobile-first |
| Content word count | Manual validation, target 300-400 words (all visible text) |
| Testing | ESLint + build validation + manual visual/accessibility checks |

All decisions maintain **Simplicity First** principle and avoid introducing new dependencies.

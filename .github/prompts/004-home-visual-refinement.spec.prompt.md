---
name: 004-home-visual-refinement
description: Refinement the Home page feature visual composition to align with the approved About page visual language.
---
/speckit.specify

# Feature Specification: Home Visual Refinement

**Feature ID:** 004-home-visual-refinement  
**Feature Name:** Home Visual Refinement  
**Feature Branch:** `feature/004-home-visual-refinement`  
**Created:** 2026-08-25  
**Status:** Draft  
**Language:** English  

---

## 1. Purpose

Refine the existing Home page visual composition so that the vertical rhythm, spacing, typography, cards, and section relationships are visually consistent with the approved visual language established by the About page.

This feature is a visual refinement of the existing Home page.

It MUST NOT redesign the Home page content structure, introduce a new application architecture, or replace the established design system.

The primary objective is to improve:

- Vertical spacing between sections.
- Relationship between section headings and their content.
- Visual hierarchy.
- Card composition.
- Surface treatment.
- Borders.
- Accent lighting.
- Typography.
- Negative space.
- Overall visual rhythm.

The final result MUST feel like part of the same portfolio system as the approved About page while maintaining its own visual identity.

---

# 2. Governing Documents

This feature MUST follow:

1. `.specify/memory/constitution.md`
2. `.github/instructions/frontend.instructions.md`
3. `.github/copilot-instructions.md`
4. Existing Home page implementation.
5. Existing global design tokens.
6. Existing approved About page visual language.

The Constitution has priority over this specification.

The frontend instructions have priority over local visual preferences.

No implementation decision in this feature may justify modifying the
Constitution or frontend instructions.

---

# 3. Scope

This feature modifies only the existing Home page visual presentation.

The following sections are explicitly in scope:

1. Header / Hero
2. Engineering Focus
3. Selected Work

The implementation MUST be performed incrementally in this order:

```text
Header / Hero
      ↓
Engineering Focus
      ↓
Selected Work
```
# 4. Design Direction

The Home page MUST preserve the established portfolio visual language:

- Dark technical environment.
- Large and controlled typography.
- Generous but intentional negative space.
- Very subtle borders.
- Restrained surfaces.
- Small luminous accents.
- Controlled blue-to-purple gradients.
- Architectural lines.
- Minimal visual noise.
- Subtle micro-interactions.
- Strong visual hierarchy.

The page MUST NOT become:

- A generic dashboard.
- A traditional CV.
- A Bootstrap-style layout.
- A Material Design implementation.
- A collection of unrelated cards.
- A glassmorphism-heavy interface.
- A visually dense technology showcase.

The visual language must remain consistent with the approved About page.

However, the Home page MUST NOT simply copy the About page's card layouts.

The Home should share the same design language while using its own visual
composition.

# 5. Global Vertical Rhythm

The current Home page contains excessive vertical separation between
sections.

This feature MUST reduce the vertical distance between major sections while
preserving sufficient visual breathing room.

The goal is:
``` text
Section
   ↓
controlled spacing
   ↓
next section
```
rather than:
``` text
Section
   ↓
large empty gap
   ↓
large empty gap
   ↓
next section
```

Spacing MUST be controlled using the existing design tokens.

Do not introduce arbitrary one-off spacing values unless required by the
specific composition.

The implementation SHOULD prefer existing spacing tokens and introduce a
new token only if the existing token scale cannot express the required
relationship.

The visual rhythm must feel intentional rather than compressed.

# 6. Section 01 — Header / Hero
## 6.1 Header Position

The Home Hero/header content MUST be moved visually closer to the global
navigation.

The current excessive vertical distance between the navigation and Hero
content MUST be reduced.

The header MUST retain sufficient breathing room so that the navigation and
Hero do not appear visually merged.

The intended relationship is:
``` text
Global Navigation
        ↓
small controlled gap
        ↓
Hero content
```
rather than:
``` text
Global Navigation
        ↓
large empty space
        ↓
Hero content
```
## 6.2 Hero Heading

The Hero heading MUST preserve its existing content.

The phrase:

> Exploring intelligence.

MUST use the portfolio's characteristic purple accent.

The purple treatment MUST be implemented using the existing semantic design
tokens or an appropriate existing gradient/accent token.

Do not introduce an unrelated purple color.

The accent MUST remain restrained and consistent with the About page visual
language.

## 6.3 Hero Bottom Spacing

The excessive space between the Hero and the Engineering Focus section MUST
be reduced.

The Hero MUST transition naturally into the Engineering Focus section.

The final composition should create a clear visual progression:
``` text
Hero
  ↓
controlled breathing space
  ↓
Engineering Focus
```
The bottom spacing MUST NOT create the impression that the two sections belong
to separate pages.

# 7. Section 02 — Engineering Focus
## 7.1 Section Heading Relationship

The cards currently appear too close to:
``` html
<h2 id="engineering-focus-title">
  Three areas of practice
</h2>
```
A deliberate visual separation MUST be introduced between the heading block
and:

<div class="focus-grid">

The spacing must be sufficient to establish:
``` text
Section eyebrow
      ↓
Section title
      ↓
short descriptive relationship
      ↓
focus grid
```
The grid MUST NOT visually collide with the heading.

The spacing MUST remain consistent with the established portfolio spacing
scale.

## 7.2 Focus Grid Visual Design

The existing:
```html
<div class="focus-grid">
```


MUST receive a visual refinement.

The cards MUST NOT be redesigned as copies of the About page cards.

Instead, the Engineering Focus cards SHOULD use a more architectural,
technical composition.

The visual direction SHOULD include:

- Subtle borders.
- Controlled surface contrast.
- Small luminous accents.
- Clear iconography.
- Strong title hierarchy.
- Concise supporting text.
- Controlled hover feedback.
- Subtle internal alignment.
- Minimal decorative geometry where appropriate.

The cards SHOULD feel like technical capability modules rather than generic
UI cards.

## 7.3 Focus Card Structure

Each focus item SHOULD visually communicate:
``` text
Icon / visual identifier

Title

Short supporting statement

Optional technical accent

```
The icon MUST remain secondary to the title.

Icons MUST use the existing icon system.

Lucide SHOULD be used where an appropriate icon exists.

No additional icon library may be introduced.

If a required visual cannot reasonably be represented by Lucide, a simple
inline SVG may be used.

## 7.4 Focus Card Interaction

Interactive focus cards MUST support appropriate states:
``` text
default
hover
focus
active
```
Hover effects MUST remain subtle.

Possible effects include:

- Border illumination.
- Small accent movement.
- Slight surface elevation.
- Controlled icon glow.
- Very small translation.

Avoid:

- Large scaling.
- Strong shadows.
- Excessive glow.
- Continuous animation.

Motion MUST respect:
```css
@media (prefers-reduced-motion: reduce)
```
The frontend instructions define subtle purposeful motion and recommend short
transitions around 150–250ms.

## 7.5 Engineering Focus Bottom Spacing

The excessive space between Engineering Focus and Selected Work MUST be
reduced.

The transition should feel like:
``` text
Engineering Focus
       ↓
controlled section spacing
       ↓
Selected Work
```
rather than a large isolated gap.

# 8. Section 03 — Selected Work
## 8.1 Section Heading Relationship

The cards currently appear too close to the title:

Practical Experimentation

A deliberate vertical separation MUST be introduced between the section
heading and:
``` html
<div class="work-grid">
```

The heading must remain visually dominant.

The cards should begin after a controlled breathing space.

# 9. Selected Work Grid

The existing:

<div class="work-grid">

MUST receive a complete visual refinement while preserving its existing
content and purpose.

The resulting cards MUST be visually attractive, technically oriented, and
consistent with the About page visual language.

The design MUST use the existing design tokens.

The cards SHOULD visually communicate technical case studies rather than
generic portfolio tiles.

## 9.1 Work Card Visual Characteristics

Selected Work cards SHOULD use:

- Dark surface.
- Very subtle border.
- Clear hierarchy.
- Strong project title.
- Concise project description.
- Technology indicators.
- Controlled accent lighting.
- Minimal architectural details.
- Subtle hover feedback.
- Carefully controlled internal spacing.

The cards MUST NOT become visually heavy.

## 9.2 Work Card Hierarchy

The preferred visual hierarchy is:
``` text
Project identifier / category

Project title

Short problem / solution description

Technology indicators

Action / link
```
The project title MUST remain the strongest element inside each card.

Technology badges MUST remain visually secondary.

This follows the frontend instruction that badges should remain secondary to
main content.

## 9.3 Selected Work Interaction

Interactive project cards MUST provide:

- Default state.
- Hover state.
- Focus state.
- Active state.

The hover state SHOULD provide a subtle visual response without changing
the fundamental layout.

Recommended effects:

- Border accent.
- Small glow.
- Subtle background transition.
- Icon or arrow translation.
- Slight accent line activation.

No excessive animation is permitted.

## 10. Design Tokens

The implementation MUST consume the existing global design token system.

Do NOT create a parallel token system inside the Home feature.

The following semantic categories MUST be used where applicable:
```scss
--color-bg
--color-surface
--color-surface-elevated
--color-text
--color-text-muted
--color-text-subtle
--color-border
--color-primary
--color-primary-hover
--color-primary-active
```
The frontend instructions explicitly define these semantic color categories
and require components to consume semantic tokens instead of repeatedly
using raw hexadecimal values.

If the current project already contains equivalent tokens, those tokens MUST
be reused.

Do not duplicate existing tokens.

## 11. Typography

Typography MUST follow the project's established hierarchy.

Recommended hierarchy:
```
Hero title
    ↓
Section title
    ↓
Card title
    ↓
Supporting text
    ↓
Technology metadata
```
The Hero must remain the largest typographic element.

Section headings MUST have enough visual weight to establish clear section
boundaries.

Card typography MUST remain compact.

The page MUST avoid excessive text density.

The frontend instructions define:
```
H1 → 3rem–4rem desktop
H2 → 2rem–2.5rem
H3 → 1.25rem–1.5rem
Body → 1rem
Small → 0.875rem
```
These values should be treated as the baseline rather than copied blindly
into component styles.

## 12. Color and Accent Strategy

The existing blue accent remains the primary technical accent.

Purple is used as a secondary accent associated with:
```
AI
Exploration
Intelligence
Future direction
```
The purple accent MUST NOT dominate the page.

Preferred visual relationship:
```
Blue
  ↓
primary technical identity

Purple
  ↓
AI / intelligence emphasis
```
Gradients MUST remain controlled.

Avoid full-card gradients or large decorative gradient backgrounds.

## 13. Borders and Surfaces

Cards and containers SHOULD primarily use:

- Border.
- Surface contrast.
- Small accent details.

Strong shadows MUST NOT be used as the primary separation mechanism.

The frontend instructions explicitly recommend borders and surface contrast
for cards, reserving shadows for elevated UI.

Borders MUST remain subtle.

## 14. Icons

The existing icon strategy MUST be preserved.

Lucide is the primary icon library.

Do not introduce:

- Font icon libraries.
- Emoji as functional icons.
- Unicode symbols as functional icons.
- Additional icon libraries.

Icons MUST NOT replace meaningful text.

Decorative icons MUST be hidden from assistive technologies when
appropriate.

Interactive icons MUST have accessible names.

These requirements follow the project's frontend iconography rules.


## 15. SCSS / CSS Constraints

Only the SCSS necessary to achieve this visual refinement SHOULD be
modified.

The implementation MUST NOT rewrite unrelated global styles.

The implementation MUST NOT introduce:

- A second design system.
- New global CSS architecture.
- Unnecessary utility layers.
- New CSS frameworks.
- New animation libraries.

Component-specific styles MUST remain inside the Home feature.

Global tokens MUST remain centralized.

This follows the project's requirement to keep global styles separated from
component styles.

## 16. Responsive Behavior

The visual refinement MUST work across:

- Desktop.
- Tablet.
- Mobile.

The desktop composition is the primary visual reference.

Responsive layouts MUST adapt rather than simply scale down the desktop
layout.

The implementation MUST avoid:

- Horizontal overflow.
- Cards becoming unreadably narrow.
- Excessive vertical compression.
- Overlapping decorative elements.
- Broken heading hierarchy.

The visual rhythm MUST remain intentional at all supported breakpoints.

## 17. Accessibility

The visual refinement MUST NOT reduce accessibility.

The implementation MUST preserve:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Sufficient contrast.
- Accessible names for interactive elements.
- Reduced-motion support.
- Meaningful text hierarchy.

Color MUST NOT be the only mechanism used to communicate state.

Decorative visual elements MUST NOT interfere with screen readers.

The frontend instructions require accessibility to be considered during
feature development rather than treated as a final-stage task.

## 18. Performance

The refinement MUST remain lightweight.

No new dependency may be added for:

- Cards.
- Animation.
- Gradients.
- Layout.
- Icons.
- Visual effects.

CSS and existing Angular capabilities MUST be preferred.

Animations SHOULD use CSS whenever possible.

## 19. Out of Scope

The following are explicitly out of scope:

- New Home sections.
- New application routes.
- About page changes.
- Experience page changes.
- Projects page changes.
- AI Lab changes.
- Contact page changes.
- New frontend dependencies.
- New UI frameworks.
- New icon libraries.
- New animation libraries.
- Backend integration.
- API integration.
- Content rewrite unrelated to visual hierarchy.
- Application architecture changes.
- Global redesign of the portfolio.
- Replacement of the existing design system.

## 20. Acceptance Criteria    
Header / Hero
- AC-001: The Hero is visually closer to the global navigation.
- AC-002: The excessive vertical space between navigation and Hero is removed.
- AC-003: "Exploring intelligence." uses the established purple AI  accent.
- AC-004: The excessive bottom spacing between Hero and Engineering Focus is reduced.
- AC-005: Hero typography remains the strongest typographic element on the page.

Engineering Focus
- AC-006: A deliberate visual gap exists between the section heading and.focus-grid.
- AC-007: .focus-grid has a refined technical visual treatment.
- AC-008: Focus cards use the existing design tokens.
- AC-009: Focus cards do not visually copy the About page cards.
- AC-010: Focus cards provide subtle hover and focus states.
- AC-011: The bottom spacing between Engineering Focus and Selected Work is reduced.

Selected Work
- AC-012: A deliberate visual gap exists between "Practical Experimentation" and .work-grid.
- AC-013: .work-grid has a visually refined portfolio-oriented design.
- AC-014: Work cards use the established dark surface, subtle borders,controlled accents and typography hierarchy.
- AC-015: Technology indicators remain visually secondary.
- AC-016: Work cards provide appropriate hover and focus states.

Global Visual Consistency

- AC-017: The Home uses the same semantic design-token system as the existing portfolio.
- AC-018: No unnecessary hard-coded colors are introduced.
- AC-019: Blue remains the primary technical accent.
- AC-020: Purple remains the secondary AI/intelligence accent.
- AC-021: Gradients remain controlled and restrained.
- AC-022: Borders remain subtle.
- AC-023: The page preserves the dark technical visual identity.
- AC-024: The Home feels visually related to the approved About page without duplicating its layout.

Accessibility and Responsive
- AC-025: The page remains usable on desktop, tablet and mobile.
- AC-026: No horizontal scrolling is introduced.
- AC-027: Keyboard focus remains visible.
- AC-028: Contrast remains sufficient.
- AC-029: prefers-reduced-motion disables or substantially reduces non-essential animations.
- AC-030: Decorative visual effects do not interfere with assistive technology.

Technical

- AC-031: No new frontend dependency is introduced.
- AC-032: Existing Angular standalone architecture is preserved.
- AC-033: Existing global design tokens are reused.
- AC-034: Only Home-related SCSS/templates/styles are modified unless a change to an existing shared token is demonstrably required.
- AC-035: ESLint passes.
- AC-036: Production build passes.
- AC-037: The GitHub Pages /portfolio/ base path remains functional.

21. Validation Strategy

The implementation MUST be validated visually in stages.

Stage 1 — Header

Verify:

- Navigation-to-Hero spacing.
- Hero typography.
- Purple AI accent.
- Hero-to-Engineering Focus spacing.

Do not proceed to Engineering Focus until Stage 1 visually satisfies the
acceptance criteria.

Stage 2 — Engineering Focus

Verify:

- Heading-to-grid spacing.
- Card composition.
- Card hierarchy.
- Hover/focus states.
- Engineering Focus-to-Selected Work spacing.

Stage 3 — Selected Work

Verify:

- Heading-to-grid spacing.
- Work card hierarchy.
- Technology metadata.
- Hover/focus states.
- Overall visual density.

**Final Validation**

Verify the entire Home page at:

- Desktop
- Tablet
- Mobile

Verify:

- No horizontal overflow
- Accessible keyboard navigation
- Visible focus
- Reduced motion
- Contrast
- Production build
- GitHub Pages base path

# 22. Expected Result

The final Home page should feel like:
```
Professional
        +
Technical
        +
Minimal
        +
AI-oriented
        +
Architectural
        +
Visually refined
```
The page should visually belong to the same portfolio system as the
approved About page while remaining distinct in composition.

The most important improvement is not adding more decoration.

The most important improvement is establishing a stronger visual rhythm:
```
Navigation
    ↓
Hero
    ↓
Engineering Focus
    ↓
Selected Work
```
with controlled spacing, stronger hierarchy, better card composition and
consistent use of the existing design system.


### A final decision

I did not interpret your request as **“make Home look like About”**. The spec explicitly says:

> **same design language, different composition**

This is important because the About page we designed has a very particular narrative composition. If we copied its cards literally, we would end up with a repetitive portfolio.

For the Home page, I would look for this difference:


Home
```
Identity
   ↓
Capabilities
   ↓
Selected Work
   ↓
Direction / CTA
```
but both should share:

- dark background
- subtle borders
- blue accent
- purple AI accent
- large typography
- controlled spacing
- architectural details
- restrained glow
- microinteractions
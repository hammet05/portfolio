---
name: 002-home-redesign
description: Respecify the Home page redesign feature to include the neural-face Hero visual.
---
/speckit.specify

# 004-home-hero-redesign.prompt.md

/speckit.specify

Create the specification for feature `004-home-hero-redesign`.

## OBJECTIVE

Redesign the visual area of the Home page Hero section while preserving the
existing Home page structure, content hierarchy, design system, accessibility
requirements, responsive behavior, and technical constraints established by:

- `constitution.md`
- `instructions.frontend.md`
- `copilot-instructions.md`

The primary goal is to replace the current abstract Hero visual with a
visual representation of the neural human face used in the approved
About Me design.

The redesign must feel like a natural continuation of the portfolio's
existing visual language and must NOT introduce a new visual identity.

---

## REQUIRED GIT BRANCH

Before implementing this feature, create a dedicated Git branch:

`feature/002-home-hero-redesign`

The implementation MUST NOT be performed directly on `main`.

The branch name MUST follow the project's established feature branch
convention.

The specification MUST document this branch as the target implementation
branch.

---

## APPROVED VISUAL REFERENCE

The approved neural-face reference is:

`.specify/specs/003-about-me/mockups/about-me-approved.png`

The relevant visual element is the human-profile neural visualization
located in the right column of the approved About Me design.

The implementation MUST use this approved visual language as the reference.

The image itself MUST NOT simply be inserted into the Home page as a bitmap
background or `<img>` element.

The neural face MUST be recreated as an implementation asset suitable for
the existing Home Hero visual container.

**Important:**
> **Recreate the neural face as an inline SVG implementation based on the approved visual reference.**
---

## HOME HERO TARGET

The existing Home Hero contains the following visual container:

```html
<header class="home-section hero">
  <div class="hero__visual" aria-label="Abstract systems and AI visual">
  </div>
</header>
````
The new visual MUST be implemented inside:
```html
<div class="hero__visual" aria-label="Abstract systems and AI visual"></div>
```
The existing Hero structure MUST be preserved unless a structural change is
strictly required by the approved design.

The implementation MUST replace the current abstract visual with the new
neural-face visualization.

## NEURAL FACE REQUIREMENTS

The visual MUST represent a human side-profile constructed from:

- Neural nodes
- Thin geometric connections
- Small luminous points
- Subtle blue illumination
- Controlled blue-to-purple accents where appropriate
- Fine SVG lines
- Transparent negative space

The visual MUST preserve the visual characteristics of:

.specify/specs/003-about-me/mockups/about-me-approved.png

The face MUST remain recognizable as a human profile.

The visual MUST NOT become:

- A generic particle system
- A random node network
- A circular network
- A stock AI illustration
- A solid human silhouette
- A conventional face icon
- A raster image stretched inside the container

## VISUAL OCCUPANCY

The neural-face visualization MUST occupy the available Hero visual area.

The visual should effectively use the full available width and height of:

> .hero__visual

The implementation MUST avoid unnecessary empty margins around the
visualization.

The neural face should visually extend through the complete right-side Hero
column while preserving the negative-space characteristics of the approved
design.

The visualization MUST scale responsively with the container.

It MUST NOT cause horizontal scrolling.

## IMPLEMENTATION TECHNOLOGY

Do NOT add any new npm dependency.

The implementation MUST use only technologies already available in the
project.

Preferred implementation:

- Inline SVG
- Existing CSS/SCSS
- Existing Angular capabilities
- Existing Lucide icons only when an icon is actually required

Lucide MUST NOT be used to construct the neural face.

If Lucide does not provide an appropriate visual element, use custom SVG.

No additional:

- Canvas libraries
- Particle libraries
- Charting libraries
- Animation libraries
- Visualization libraries
- UI libraries
- Icon libraries

may be introduced.

## SVG REQUIREMENTS

The neural face SHOULD be implemented as inline SVG inside:

.hero__visual

The SVG SHOULD contain:
```
- <svg>
- <g>
- <path>
- <line>
- <circle>
- <defs>
- <linearGradient> when required
```

SVG filters only when justified

The SVG MUST be responsive using an appropriate viewBox.

The SVG MUST preserve its proportions when the container changes size.

The implementation SHOULD use reusable SVG definitions where practical
instead of duplicating identical elements unnecessarily.

The SVG MUST remain maintainable and understandable.

Avoid generating an excessively large or unnecessarily complex SVG.

## ACCESSIBILITY

The neural visualization is decorative.

It MUST NOT be interpreted as meaningful content by screen readers.

The implementation MUST therefore use an appropriate accessibility strategy,
such as:

- aria-hidden="true" for the decorative SVG
- Decorative elements excluded from the accessibility tree

The existing Hero content remains the semantic and accessible source of
information.

The existing aria-label MUST be reviewed and updated if necessary so that
it accurately describes the visual without pretending that the visualization
contains meaningful semantic information.

## ANIMATION

The neural face SHOULD include subtle motion consistent with the portfolio
design system.

Possible motion includes:

- Subtle node pulsing
- Very subtle opacity changes
- Slow connection illumination
- Minimal movement of selected nodes
- Controlled glow animation

Animation MUST remain restrained.

The visual MUST NOT become a high-energy particle animation.

All non-essential animation MUST respect:

prefers-reduced-motion: reduce

When reduced motion is enabled:

- Disable continuous animation
- Preserve the static neural-face composition
- Preserve readability
- Preserve visual hierarchy

Do NOT add an animation library.

Use CSS @keyframes and existing browser capabilities.

## SCSS REQUIREMENTS

Modify the existing Home SCSS only where necessary.

Do NOT rewrite unrelated styles.

Do NOT introduce a second design-token system.

Use the existing global CSS custom properties and design tokens defined by
instructions.frontend.md.

Feature-specific variables MAY be introduced only when they represent
values genuinely specific to the neural visualization.

Examples include:
```scss
.hero__visual {
  --neural-opacity: ...;
  --neural-node-size: ...;
  --neural-line-width: ...;
  --neural-glow: ...;
}
```
Exact values MUST be determined from the approved visual reference and the
existing design token system.

Avoid hardcoded color values when an existing project token already provides
the required color.

Do NOT modify unrelated Home sections.

## EXISTING HOME DESIGN MUST REMAIN INTACT

The following MUST NOT be redesigned as part of this feature unless strictly
required to integrate the new visual:

- Hero copy
- Navigation
- CTA structure
- Header structure
- Other Home sections
- Global typography
- Global spacing system
- Global color system
- Global component architecture

The primary visual change is the Hero visual.

Any additional SCSS modification MUST have a direct relationship to the
new neural-face visualization or its responsive integration.

## RESPONSIVE BEHAVIOR

The visual MUST be validated at minimum at:

- Desktop
- Tablet
- Mobile

Desktop is the primary composition.

Tablet and mobile MUST preserve the same visual language while adapting the
visual scale and positioning.

The implementation MUST NOT:

- Overflow horizontally
- Cover the Hero text
- Push critical content outside the viewport
- Become unreadably small
- Distort the human profile

If the current responsive Hero layout stacks the visual below the content,
the neural face MUST adapt to that layout rather than forcing the desktop
composition onto mobile.

## DESIGN FIDELITY

The implementation MUST preserve:

- Dark background
- Large negative space
- Fine geometric lines
- Subtle borders
- Controlled gradients
- Small luminous accents
- Blue/purple accent relationship
- Technical/architectural aesthetic
- Restrained visual density
- Minimal visual noise

The result MUST look like part of the same portfolio as:

>.specify/specs/003-about-me/mockups/about-me-approved.png

It MUST NOT look like a generic AI landing-page illustration.

## VISUAL VALIDATION

The implementation MUST be compared against the approved reference after
implementation.

Screenshots MUST be captured for the relevant Home Hero viewports.

The comparison MUST evaluate:

- Neural-face proportions
- Face position
- Face scale
- Node density
- Connection density
- Line thickness
- Glow intensity
- Blue/purple relationship
- Negative space
- Hero column occupancy
- Alignment with Hero content
- Responsive behavior

The visual verification MUST use the project's existing validation
workflow.

## FILES EXPECTED TO BE AFFECTED

The implementation SHOULD be limited to files directly related to the
Home Hero.

Expected areas may include:

> portfolio_app/src/app/features/home/

and the relevant Home component template and SCSS.

Do NOT modify unrelated features.

Do NOT modify global styling unless the implementation proves that a global
change is strictly necessary.

If no global change is required, keep the change entirely within the Home
feature.

## OUT OF SCOPE

This feature MUST NOT:

- Redesign the entire Home page
- Redesign the About Me page
- Add npm dependencies
- Add animation libraries
- Add visualization libraries
- Add canvas libraries
- Replace Angular architecture
- Replace the existing design system
- Modify unrelated features
- Introduce a new icon library
- Convert the neural face into a raster image
- Replace the approved neural-face visual with a generic AI graphic

## SPECIFY ONLY

This prompt is ONLY for /speckit.specify.

Do NOT:

- Generate plan.md
- Generate tasks.md
- Implement code
- Modify SCSS
- Modify Angular templates
- Generate the SVG
- Create screenshots
- Execute tests
- Install dependencies
- Execute the build

The result of this command MUST ONLY be the feature specification.

After the specification has been reviewed and approved, the project workflow
will continue with clarification, analysis, planning, tasks, implementation,
and visual verification.








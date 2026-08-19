# Feature Specification: About Me

- **Feature ID:** 003-about-me
- **Feature Name:** About Me
- **Feature Branch:** `feature/003-about`
- **Created:** 2026-08-18
- **Status:** Draft
- **Language:** English
- **Input:** User description: "Create the portfolio's dedicated About Me page as a concise professional narrative that explains the developer's evolution from software engineering toward Artificial Intelligence."

---

## 1. Purpose

Create a dedicated About Me page for the portfolio that communicates a concise
professional narrative about the developer's evolution from software
engineering toward Artificial Intelligence.

The page must establish the developer's experience, technical evolution,
problem-solving approach, real-world impact, and current AI direction without
duplicating a CV.

The page must feel like a natural extension of the existing portfolio rather
than a standalone microsite.

The implementation MUST remain simple, maintainable, dependency-light, and
compatible with the project's existing Angular and GitHub Pages foundation.

The implementation MUST NOT replace the approved visual language with a
generic dashboard, resume template, Material Design, Bootstrap, Tailwind UI,
or other template-based interpretation.

---

## 2. Specification-Only Execution Constraint

This specification defines the requirements for the feature.

When this specification is created or updated through `/speckit.specify`:

- Only the feature specification MUST be created or updated.
- No implementation code MUST be generated.
- No Angular components MUST be created.
- No SCSS/CSS MUST be generated.
- No SVG implementation MUST be generated.
- No `plan.md` MUST be generated or modified.
- No `tasks.md` MUST be generated or modified.
- No dependencies MUST be installed.
- No build, test, lint, or deployment command MUST be executed.

Implementation planning belongs to `/speckit.plan`.

Implementation task generation belongs to `/speckit.tasks`.

---

# 3. Approved Visual Reference

The approved visual reference for this feature is:

`mockups/about-me-approved.png`

The mockup is the **visual source of truth for the composition and visual
direction of this feature**.

It is NOT an inspirational reference.

The implementation MUST reproduce the visual composition represented by the
approved mockup while respecting the project's higher-level technical,
accessibility, maintainability, and responsive constraints.

The mockup MUST NOT be embedded as a single bitmap to reproduce the page.

The visual design MUST be recreated using the existing project capabilities,
including:

- Angular templates.
- Semantic HTML.
- SCSS/CSS.
- Existing CSS custom properties and design tokens.
- SVG where appropriate.
- CSS animations where appropriate.
- Existing project iconography.

No new frontend dependency may be introduced solely to reproduce the mockup.

---

## 3.1 Visual Source-of-Truth Hierarchy

When requirements appear to conflict, use the following hierarchy:

1. `constitution.md`
2. `instructions.frontend.md`
3. `specs/003-about-me/spec.md`
4. `mockups/about-me-approved.png`

The mockup MUST NOT override accessibility, maintainability, responsive
behavior, technical constraints, or architectural rules defined by the
project documentation.

However, when implementing the visual design within those constraints, the
approved mockup MUST be treated as the target composition rather than merely
as inspiration.

---

# 4. Visual Fidelity Requirements

The implementation MUST preserve the following visual characteristics from
the approved mockup:

1. Overall composition and section hierarchy.
2. Hero two-column composition on desktop.
3. Large display typography.
4. Generous negative space.
5. Dark visual environment.
6. Subtle borders.
7. Restrained card/surface treatment where shown in the mockup.
8. Blue-to-purple accent system.
9. Controlled gradients.
10. Architectural lines.
11. Neural network face visualization in the Hero.
12. Horizontal Engineering Journey timeline.
13. Visual Project Growth diagram.
14. AI Chapter visual treatment.
15. Consistent iconography.
16. Controlled luminous accents.
17. Subtle microanimations.
18. Consistent spacing rhythm.
19. Strong visual hierarchy.
20. Overall visual density comparable to the approved mockup.

A visually simplified interpretation that preserves only the text content but
changes the composition MUST NOT be considered an acceptable implementation.

The result MUST NOT visually resemble:

- A generic resume.
- A blog article.
- A dashboard.
- A collection of unrelated cards.
- A plain documentation page.
- A generic portfolio template.

---

# 5. Page Composition

The About page MUST be implemented as one continuous vertically scrolling
experience.

The desktop composition MUST follow the visual structure represented in the
approved mockup.

The page MUST contain the following sections in this exact order:

1. `01 / ABOUT ME`
2. `02 / ENGINEERING JOURNEY`
3. `03 / WHAT I BUILD`
4. `04 / A PROJECT THAT GREW`
5. `05 / THE AI CHAPTER`
6. `06 / MY PHILOSOPHY`

The sections MUST visually form one coherent narrative.

The page MUST NOT use mandatory scroll snapping.

---

# 6. Hero — 01 / ABOUT ME

The Hero is the primary visual introduction to the page.

The desktop Hero MUST use a two-column composition.

### Left side

The left side MUST contain:

- Section identifier: `01 / ABOUT ME`.
- Main headline.
- Supporting professional description.
- Three professional descriptors:
  - Software Engineer.
  - Systems Builder.
  - AI Explorer.

### Main headline

The Hero MUST use:

> From building software to exploring intelligence.

The headline MUST be one of the largest typographic elements on the page.

It MUST visually dominate the supporting paragraph and descriptors.

The headline MUST preserve the visual hierarchy represented by the approved
mockup.

### Right side

The right side MUST contain the neural network face visualization described
in Section 7.

The neural visualization MUST be large enough to function as a primary Hero
visual element.

It MUST NOT be reduced to a small decorative icon or generic abstract
particle graphic.

### Hero composition requirements

The desktop Hero MUST NOT become a generic single-column content block.

The Hero MUST preserve:

- Large headline on the left.
- Neural visualization on the right.
- Significant negative space.
- Architectural visual accents.
- Controlled blue/purple illumination.

The neural visualization MUST remain visually complementary to the headline
and MUST NOT overpower the textual narrative.

---

# 7. Neural Face Visualization

The Hero MUST contain a neural-network visualization representing a human
right-facing side profile.

The visual treatment MUST resemble the human profile shown in:

`mockups/about-me-approved.png`

The visualization is a primary Hero visual element.

It MUST NOT be implemented as a generic particle sphere, abstract mesh,
geometric globe, or small decorative icon.

---

## 7.1 Visual Structure

The neural face MUST contain:

- Recognizable human side-profile geometry.
- Nodes forming the facial structure.
- Thin connections between nodes.
- Small bright focal nodes.
- Lower-density peripheral nodes.
- Blue luminous treatment.
- Controlled blue-to-purple accents.
- Transparent background.
- Subtle atmospheric glow.
- Significant negative space.

The visualization MUST NOT use a solid filled human silhouette.

---

## 7.2 Neural Network Density

Node and connection density MUST be concentrated around the facial profile.

The face area MUST contain more visual information than the surrounding
space.

Peripheral nodes and connections MUST progressively reduce in:

- Density.
- Opacity.
- Visual intensity.

The visualization MUST NOT use a uniformly distributed particle network.

The resulting visual MUST remain recognizable as a human profile at normal
desktop viewing size.

---

## 7.3 Implementation Direction

SVG SHOULD be used as the primary representation technology for the neural
visualization.

SVG is preferred for:

- Facial geometry.
- Neural nodes.
- Connections.
- Geometric lines.
- Luminous points.
- Controlled gradients.

CSS MAY be used for:

- Glow.
- Opacity transitions.
- Node pulsing.
- Subtle animation.
- Responsive sizing.
- Reduced-motion behavior.

The implementation MUST NOT use:

- Canvas.
- A third-party visualization library.
- A particle library.
- A new animation library.
- A raster image as the neural visualization.

---

## 7.4 Neural Visualization Animation

The visualization SHOULD include subtle motion.

Animation MUST remain slow, restrained, and atmospheric.

It MUST NOT resemble a high-energy particle effect.

Possible motion includes:

- Slow node pulsing.
- Very subtle opacity variation.
- Occasional light propagation through selected connections.
- Very subtle peripheral particle movement.

The entire network MUST NOT continuously move as a single object.

Animation MUST respect:

`prefers-reduced-motion: reduce`

When reduced motion is active, non-essential animation MUST be disabled or
substantially reduced.

---

# 8. Engineering Journey — 02

The Engineering Journey MUST communicate the developer's technical evolution
as a visual narrative rather than as a conventional chronological CV.

The section MUST contain these five stages:

1. Building Applications.
2. Connecting Systems.
3. Distributed Systems.
4. Modernizing Systems.
5. Exploring Intelligence.

---

## 8.1 Visual Composition

On desktop, the Engineering Journey MUST be represented as a horizontal
timeline.

The five stages MUST visually belong to the same system.

The stages MUST NOT be rendered as a generic grid of independent cards.

The timeline MUST contain:

- Stage number.
- Stage title.
- Icon.
- Supporting technologies/concepts.
- Timeline node.
- Continuous architectural connection between stages.

The visual structure should communicate:

```text
01          02          03          04          05
●───────────●───────────●───────────●───────────●
Building    Connecting  Distributed Modernizing Exploring
Applications Systems    Systems     Systems     Intelligence
```
The exact implementation may vary according to responsive requirements, but
the desktop composition MUST preserve this visual relationship

# 8.2 Interaction

The Engineering Journey MUST remain fully readable without animation.

Subtle enhancement MAY include:

Intersection Observer.
CSS @keyframes.
Progressive stage activation.
Hover highlighting.

The section MUST NOT require:

Click interaction.
Accordions.
Tabs.
Expand/collapse behavior.

# 9. What I Build — 03

This section MUST communicate the developer's engineering focus and problem
solving approach.

The content MUST emphasize practical impact rather than presenting a generic
technology list.

The section MUST include the following concepts:

Enterprise Systems.
Integration & APIs.
Automation.
Modernization.

Each item MUST include:

Icon.
Title.
Concise supporting description.

The visual composition SHOULD resemble the editorial vertical capability
structure shown in the approved mockup.

The items MUST NOT become unrelated dashboard cards.

The section may use a restrained surface/card treatment consistent with the
approved mockup and global design system.

# 10. A Project That Grew — 04

This section MUST communicate the healthcare project narrative.

The story MUST describe the evolution of:

A single-user medical contracting application.
An integration layer connecting multiple areas.
A nationally used communication platform.

The section MUST contain a visual representation of this progression.

## 10.1 Project Growth Diagram

The section MUST visually communicate the relationship between:
```
Medical Contracting
        |
        v
Integration Layer
    /      |       \
   v       v        v
Medical   Contact   Administrative
Author.   Center    Area
```
The diagram MUST use visual connections, nodes, or architectural lines.

The visual diagram MUST be a meaningful part of the section composition.

It MUST NOT be replaced entirely by a textual list.

The diagram MUST remain understandable without animation.

## 10.2 Narrative

The narrative MUST contain the following three conceptual stages:

**Started as**

A single-user application for medical contracting.

**Grew to include**

Integration with:

- Medical authorizations.
- Contact center operations.
- Administrative areas.

**Became important at scale**

The system evolved into an important communication platform used nationally.

The implementation MUST NOT invent:

- Numerical metrics.
- Dates.
- Performance statistics.
- Unsupported technical details.

# 11. The AI Chapter — 05

The AI Chapter MUST communicate the developer's transition toward Artificial
Intelligence.

It MUST frame AI as an extension of software engineering rather than as a
replacement for software engineering.

The section MUST communicate:

- Human intelligence and artificial intelligence.
- Practical experimentation.
- Chatbots.
- LLMs.
- RAG.
- AI applications.

The visual treatment MUST follow the approved mockup's blue-to-purple
technical visual language.

A subtle abstract technological field or wave MAY be implemented using SVG
or CSS.

The AI Chapter MUST NOT contain the previously rejected large neural-network
head illustration.

The Hero neural face and the AI Chapter visual are separate requirements.

The AI Chapter visual MUST remain subordinate to the typography and content.

# 12. My Philosophy — 06

The final section MUST strongly emphasize:

> I don't just want to build AI. I want to build useful systems with AI.

The section MAY include:

> Always learning. Always building.

The statement MUST function as a visual conclusion to the narrative.

Typography and negative space MUST be used to give the statement significant
visual importance.

# 13. Visual Design Tokens

The About feature MUST consume the existing global design-token system.

It MUST NOT create a parallel design-token architecture.

Feature-specific values MUST be exposed through CSS custom properties when
they represent reusable visual characteristics.

The implementation SHOULD reconcile feature-level values with the existing
global tokens defined in instructions.frontend.md.

The following token categories MUST be considered during planning:

**Color**
- Background.
- Surface.
- Surface elevated.
- Primary text.
- Secondary text.
- Muted text.
- Blue accent.
- Purple accent.
- Border.
- Neural line.
- Neural node.
- Neural glow.
  
**Typography**

- Hero display size.
- Section title size.
- Card/feature title size.
- Body size.
- Label size.
- Letter spacing.
  
**Spacing**

- Page horizontal padding.
- Section vertical spacing.
- Hero spacing.
- Card padding.
- Timeline spacing.
- Diagram spacing.
- Shape
- Border radius.
- Border width.
- Icon container radius.
  
**Effects**
- Neural glow.
- Accent glow.
- Controlled gradient.
- Surface transparency.

Exact implementation values belong to the execution plan and implementation
and MUST remain consistent with the project's global design system.

# 14.  Responsive Behavior

The approved mockup represents the primary desktop composition.

The mobile and tablet layouts MUST preserve:

- Visual hierarchy.
- Content order.
- Typography hierarchy.
- Dark visual environment.
- Accent system.
- Neural visual identity.
- Architectural language.

The implementation MUST NOT attempt pixel-for-pixel reproduction of the
desktop mockup on small screens.

**On smaller screens:**

- The Hero MAY become single-column.
- The neural visualization MAY move below or beside the Hero text.
- The Engineering Journey MAY become a vertical timeline.
- The Project Growth diagram MAY become a vertical flow.
- Card/surface widths MUST adapt.
- Typography MUST scale responsively.
- Horizontal scrolling MUST NOT occur.

The page MUST remain usable on mobile, tablet, and desktop.

# 15. Functional Requirements
- FR-001: The About page MUST be available at /about.
- FR-002: The page MUST be reachable through the existing global navigation.
- FR-003: The page MUST use the existing application shell.
- FR-004: The page MUST be one continuous vertically scrolling document.
- FR-005: The six required sections MUST appear in the specified order.
- FR-006: The page MUST establish professional identity immediately.
- FR-007: The page MUST communicate more than 10 years of software development experience.
- FR-008: The page MUST communicate .NET and Angular experience.
- FR-009: The page MUST communicate API, integration, distributed systems, and modernization experience.
- FR-010: The page MUST communicate practical experimentation with Chatbots, LLMs, and RAG.
- FR-011: The page MUST communicate the goal of building useful systems with AI.
- FR-012: The page MUST complement rather than reproduce the CV.
- FR-013: The page MUST use the approved visual direction.
- FR-014: The page MUST consume the existing global design tokens.
- FR-015: The page MUST preserve the approved typography hierarchy.
- FR-016: The page MUST support subtle progressive enhancement.
- FR-017: The page MUST respect reduced-motion preferences.
- FR-018: The page MUST use semantic HTML.
- FR-019: The page MUST maintain a meaningful heading hierarchy.
- FR-020: The page MUST remain responsive.
- FR-021: The page MUST avoid horizontal scrolling.
- FR-022: The page MUST work under the GitHub Pages /portfolio/ base path.
- FR-023: The feature MUST use the existing Angular standalone architecture.
- FR-024: The feature MUST NOT introduce new frontend dependencies.
- FR-025: The implementation MUST remain type-safe.
- FR-026: The feature MUST live under portfolio_app/src/app/features/about/.
- FR-027: The feature MUST use the existing router.
- FR-028: The feature MUST NOT create a parallel design system.
- FR-029: The feature MUST not use unjustified any.
- FR-030: The feature MUST NOT require backend APIs or external data.
- FR-031: The Hero MUST use a desktop two-column composition.
- FR-032: The Hero MUST contain the neural face visualization.
- FR-033: The Engineering Journey MUST use a horizontal visual timeline on desktop.
- FR-034: The Project Growth section MUST include a visual growth diagram.
- FR-035: The AI Chapter MUST NOT use the rejected large neural-head illustration.
- FR-036: The About page MUST preserve the visual composition represented by the approved mockup.
  
# 16.  Accessibility and Motion
- FR-037: All interactive elements MUST be keyboard accessible.
- FR-038: Interactive elements MUST have visible focus states.
- FR-039: Decorative SVG graphics MUST be hidden from assistive technology where appropriate.
- FR-040: The page MUST NOT rely on color alone to communicate meaning.
- FR-041: Content MUST remain understandable with animations disabled.
- FR-042: prefers-reduced-motion: reduce MUST disable or substantially reduce non-essential animation.
- FR-043: SVG visualizations MUST NOT interfere with screen-reader navigation.
- FR-044: Text contrast MUST satisfy the project's accessibility baseline.
  
# 17.  Technical Constraints
- FR-045: The feature MUST live under portfolio_app/src/app/features/about/.
- FR-046: Angular standalone architecture MUST be used.
- FR-047: No new frontend dependency may be added.
- FR-048: No third-party animation library may be added.
- FR-049: No third-party graphics or visualization library may be added.
- FR-050: SVG and CSS are the preferred technologies for custom visual elements.
- FR-051: The neural face MUST NOT be a raster image.
- FR-052: The implementation MUST remain compatible with GitHub Pages.
- FR-053: The implementation MUST use the existing project styling architecture.
- FR-054: The feature MUST avoid unnecessary abstractions.
  
# 18. Component Structure Constraint

The feature SHOULD remain simple and maintainable.

The implementation SHOULD use one primary about-page.component containing
the six sections.

Feature-internal sub-components SHOULD NOT be introduced unless the
implementation identifies a concrete reason such as:

- Independent behavior.
- Significant complexity.
- Reusability.
- Maintainability.

The neural SVG MAY remain inside the About page implementation if extracting
it would add unnecessary architectural complexity.

The implementation MUST NOT create components merely to mirror every visual
section.

# 19. Content Strategy

The page MUST use a concise hybrid content strategy.

Overall visible content SHOULD remain approximately within 300–400 words.

The content volume includes:

- Headings.
- Section labels.
- Body paragraphs.
- Descriptors.
- Supporting descriptions.

Decorative or hidden text is excluded.

The healthcare project narrative may receive more textual space than other
sections.

The About page MUST complement the CV rather than replace it.

# 20. User Scenarios
**User Story 1 — Understand the professional profile**

As a recruiter, employer, collaborator, or academic contact, I want to
quickly understand the developer's professional background, technical
evolution, and current AI direction.

Independent Test:

A visitor can open /about and understand the developer's background,
progression, and AI direction without opening the CV.

**User Story 2 — Understand the transition toward AI**

As a technical recruiter or employer, I want to understand why the developer
is moving from software engineering toward AI.

Independent Test:

A visitor can identify the connection between software engineering,
systems experience, modernization, and AI experimentation.

**User Story 3 — See evidence of real-world impact**

As a recruiter or employer, I want to see a concrete example of a system that
grew beyond its original purpose.

**Independent Test:**

A visitor can understand how the healthcare application evolved from a
single-user application into a nationally used communication platform.

# 21. Visual Acceptance Criteria

The implementation MUST NOT be considered visually complete if any of the
following occur:

- The desktop Hero becomes a generic single-column layout.
- The Hero headline becomes visually small.
- The neural face becomes a small decorative icon.
- The neural visualization becomes a generic particle sphere or abstract mesh.
- The Engineering Journey becomes a generic card grid.
- The horizontal timeline relationship is lost on desktop.
- The Project Growth diagram is replaced entirely by plain text.
- The AI Chapter loses its blue-to-purple technical visual language.
- Architectural lines are removed from major visual structures.
- Cards/surfaces become visually dominant over the narrative.
- The page resembles a generic dashboard.
- The page resembles a generic resume.
- The page resembles a documentation page.
- The visual hierarchy of the approved mockup is lost.
- The blue/purple accent system is substantially reduced.
- The large negative-space composition is lost.
- The Hero neural visualization is removed.
- The implementation reproduces only the content but not the composition.

The implementation MUST visually communicate the same design concept as the
approved mockup before the feature can be considered complete.

# 22. Success Criteria
- SC-001: /about is accessible through the existing navigation.
- SC-002: All six sections appear in the correct order.
- SC-003: The visitor can understand the developer's engineering
- background and AI direction without reading the CV.
- SC-004: The Engineering Journey clearly communicates the five-stage
- progression.
- SC-005: The healthcare project communicates its evolution from a
- single-user application to a nationally used multi-area system.
- SC-006: The AI Chapter communicates AI as an extension of software
- engineering.
- SC-007: The final philosophy statement is visually emphasized.
- SC-008: The page visually follows the approved mockup's composition.
- SC-009: The Hero contains the neural face visualization.
- SC-010: The Engineering Journey uses a visual timeline on desktop.
- SC-011: The Project Growth section contains a visual architecture
- diagram.
- SC-012: The page remains responsive.
- SC-013: The page remains accessible without animation.
- SC-014: No new frontend dependencies are introduced.
- SC-015: The page remains compatible with GitHub Pages.

# 23. Clarifications

The following decisions are approved and MUST be preserved unless changed
through the project's clarification workflow.

  # | Topic | Decision |
 ---|---|---|
 1 | Canonical route | /about
 2 |Page structure	One | continuous scrolling page
 3 | Engineering Journey interaction	|Static content + subtle scroll entrance + progressive timeline activation + optional hover highlight
4	|Content strategy	|Concise overall content with a more detailed healthcare project narrative
5	|Engineering Journey animation	|Intersection Observer + CSS @keyframes
6	|Component structure	|Single primary About page component unless complexity justifies extraction
7	|Content word count	|Approximately 300–400 visible words
8	|Section visual treatment	|Preserve approved mockup composition; use surfaces/cards only where represented by the mockup
9	|Project Growth structure	|Started as → Grew to include → Became important at scale
10	|Neural Hero	|SVG-based human profile neural network
11	|Neural animation	|Subtle and restrained; reduced motion required
12	|AI Chapter visual	|Subtle technical field/wave; no large neural-head illustration
13	|Visual reference	|mockups/about-me-approved.png is the approved visual target

# 24. Out of Scope

- Full CV implementation.
- Projects feature.
- AI Lab feature.
- Functional AI integrations.
- LLM API calls.
- RAG implementation.
- SignalR implementation.
- .NET API integration.
- Contact form.
- Database integration.
- Analytics.
- New frontend dependencies.
- Third-party animation libraries.
- Third-party visualization libraries.
- Large neural-head artwork in the AI Chapter.

# 25. Expected Result

A polished, accessible, responsive About Me page presenting the developer as:

Software Engineer → Systems Builder → Modernization & Integration → AI Explorer

The result MUST feel like a natural extension of the existing portfolio.

The approved mockup MUST be recognizable in the final implementation through
its:

- Composition.
- Typography hierarchy.
- Visual density.
- Neural Hero visualization.
- Engineering timeline.
- Architectural project diagram.
- AI visual treatment.
- Blue/purple accents.
- Negative space.
- Subtle luminous details.
- Restrained microanimations.

The implementation MUST remain simple, maintainable, dependency-light, and
compatible with Angular and GitHub Pages.
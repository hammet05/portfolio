# Feature Specification: About Me

**Feature ID:** 003-about-me  
**Feature Name:** About Me  
**Feature Branch**: `feature/003-about`  
**Created**: 2026-08-16  
**Status**: Draft  
**Language**: English  
**Input**: User description: "Create the portfolio's dedicated About Me page as a concise professional narrative that explains the developer's evolution from software engineering toward Artificial Intelligence."

## 1. Purpose

Create a dedicated About Me page for the portfolio that communicates a concise professional narrative about the developer's evolution from software engineering toward Artificial Intelligence.

The page must establish the developer's experience and direction without duplicating a CV and must complement the rest of the portfolio with a focused, polished narrative experience.

A developer MUST NOT replace the approved visual language with a generic
dashboard, Material Design, Bootstrap, Tailwind UI, or template-based
interpretation.

The implementation should feel like the same design system shown in the
approved mockup.

## 2. Approved Visual Reference

The approved visual reference for this feature is:

`mockups/about-me-approved.png`

This image is the primary visual reference for the implementation of the
About Me feature.

The implementation MUST reproduce the visual language, hierarchy,
composition, spacing relationships, proportions, color relationships,
typography hierarchy, borders, cards, icon treatment, architectural
elements, gradients, and overall visual density represented in the approved
mockup.

The mockup MUST be treated as a design reference, not as an image to be
embedded or reproduced as a single bitmap.

The implementation MUST recreate the visual design using Angular templates,
HTML, SCSS/CSS, CSS custom properties, SVG and existing project capabilities.

The implementation MUST NOT introduce a new frontend library solely to
reproduce the mockup.

### Visual fidelity priorities

When implementing the mockup, the following priorities MUST be preserved:

1. Overall composition and section hierarchy.
2. Dark visual environment and contrast relationships.
3. Typography scale and hierarchy.
4. Spacing and negative space.
5. Card dimensions, borders and surface treatment.
6. Blue-to-purple accent system.
7. Architectural lines and connection elements.
8. Icon size, stroke treatment and positioning.
9. Controlled gradients and luminous accents.
10. Microanimations and subtle visual feedback.

### Source of truth hierarchy

When requirements appear to conflict, use the following priority:

1. `constitution.md`
2. `instructions.frontend.md`
3. This feature specification
4. `mockups/about-me-approved.png`

The mockup MUST NOT override accessibility, maintainability, responsive
behavior, technical constraints, or architectural rules defined by the
project documentation.

### Responsive interpretation

The approved mockup represents the primary desktop visual composition.

The implementation MUST preserve its visual language on smaller screens
while adapting layout, spacing, typography and component arrangement to
avoid horizontal scrolling and maintain usability.

The mobile layout MUST NOT be treated as a pixel-for-pixel reproduction
of the desktop mockup.
## Visual Design Tokens

The About Me feature MUST use the project's global design token system.

The following feature-level visual values represent the approved mockup and
MUST be implemented through CSS custom properties rather than hardcoded
values throughout individual components.

The final implementation MUST reconcile these values with the global design
tokens defined by the frontend instructions.

### Neural Face Visualization
Recreate the visual treatment shown in the approved mockup

The About Me hero MUST reproduce the neural-network face visualization
shown in the approved visual mockup:

`mockups/about-me-approved.png`

The visualization consists of a human side-profile silhouette constructed
from interconnected points and thin geometric lines.

The visual MUST preserve the appearance and proportions represented in the
approved mockup.

Create specific tokens to visualize this graph

### Neural network density

Node and connection density MUST be concentrated around the facial profile.

The surrounding area MUST progressively reduce in density and opacity.

The visualization MUST avoid uniform distribution of nodes, as this would
change the visual character of the approved mockup.

### Implementation

The visualization SHOULD be implemented using SVG rather than CSS-only
drawing.

SVG MUST be used for:

- The human profile geometry.
- Neural nodes.
- Connections between nodes.
- Small luminous points.
- Geometric network structure.
- Gradient strokes where required.

CSS MAY be used to provide:

- Glow effects.
- Opacity transitions.
- Subtle node pulsing.
- Very subtle line animation.
- Hover or visibility transitions.
- Responsive sizing.

The visualization MUST NOT be implemented as a raster image.

The implementation MUST NOT introduce a new JavaScript visualization,
canvas, animation, graphics, or UI library.

### Visual characteristics

The neural face MUST preserve the following characteristics from the
approved mockup:

- Right-facing human profile.
- Dark background.
- Thin blue geometric connections.
- Small blue and white luminous nodes.
- Higher node density around the face.
- Lower density toward the surrounding area.
- Subtle fading of peripheral connections.
- Predominantly blue illumination.
- Very controlled blue-to-purple accents.
- Fine line weight.
- Large amount of transparent/negative space.
- Subtle atmospheric glow.
- No solid filled human silhouette.

The visualization MUST remain secondary to the hero typography.

### Animation

The visualization SHOULD include subtle motion.

Animation MUST remain slow and restrained and MUST NOT behave like a
high-energy particle animation.

Possible animations include:

- Individual nodes slowly pulsing.
- Very subtle opacity variations.
- Occasional light propagation along selected connections.
- Extremely subtle movement of peripheral particles.

Animations MUST respect:

`prefers-reduced-motion: reduce`

When reduced motion is enabled, all non-essential animation MUST be
disabled or reduced to a static representation.

### Responsive behavior

The SVG MUST scale proportionally with its container.

The face MUST remain visually recognizable at desktop and tablet sizes.

On small screens, the visualization MAY be reduced in size or repositioned
to preserve the readability of the hero content.

The visualization MUST NOT cause horizontal scrolling.



### AI Chapter visual treatment

The AI Chapter MAY use a subtle abstract technological field or wave
implemented with CSS/SVG.

It MUST NOT use the previously rejected large neural-network/head
illustration.

The visual MUST remain subordinate to the typography and content.

It MUST use the approved blue-to-purple accent palette and MUST NOT
introduce additional colors.

## 3. User Scenarios & Testing

### User Story 1 - Understand the professional profile (Priority: P1)

As a recruiter, employer, collaborator, or academic contact, I want to quickly understand the developer's professional background, technical evolution, and current AI direction so that I can evaluate the profile beyond a conventional CV.

**Why this priority**: This is the core purpose of the page and the main reason the route exists.

**Independent Test**: A user can open `/about` and understand the developer's background, progression, and AI direction in a short review without needing additional materials.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the About page, **When** they review the primary narrative, **Then** they can understand the developer's software engineering foundation and current AI direction.
2. **Given** the page is read in sequence, **When** the engineering journey is reviewed, **Then** it clearly communicates the transition from building applications to exploring intelligence.
3. **Given** the page content is concise, **When** a visitor scans it, **Then** it reads as a professional narrative rather than a full résumé.

---

### User Story 2 - Understand the transition toward AI (Priority: P1)

As a technical recruiter or employer, I want to understand why the developer is moving from software engineering toward AI so that I can see how previous engineering experience supports this new direction.

**Why this priority**: The transition itself is central to the feature's message and must be visible clearly.

**Independent Test**: A visitor can read the Engineering Journey and AI Chapter and identify the connection between systems experience and AI experimentation.

**Acceptance Scenarios**:

1. **Given** the Engineering Journey section, **When** a user reads it, **Then** they can see the progression from application development to distributed systems and modernization.
2. **Given** the AI Chapter, **When** a user reads it, **Then** they understand AI is being approached as an extension of software engineering rather than a replacement.
3. **Given** the page includes the AI focus, **When** a user reviews it, **Then** they can see practical experimentation with chatbots, LLMs, and RAG.

---

### User Story 3 - See evidence of real-world impact (Priority: P1)

As a recruiter or employer, I want to see a concrete example of a system that evolved beyond its original purpose so that I can understand the developer's ability to solve problems and create organizational impact.

**Why this priority**: This proves the professional narrative is grounded in actual problem solving, not just technology interest.

**Independent Test**: A visitor can read the healthcare project narrative and clearly identify the system's growth from a single-user tool into a multi-area national platform.

**Acceptance Scenarios**:

1. **Given** the Project That Grew section, **When** a user reads it, **Then** they understand it started as a single-user application for medical contracting.
2. **Given** the same section, **When** the reader continues, **Then** they see that it grew through integration with authorizations, contact center operations, and administrative areas.
3. **Given** the final project narrative, **When** the user reaches the end, **Then** they understand the system became important at a national level.

---

### Edge Cases

- What happens when the page is viewed without animation support or when `prefers-reduced-motion` is active?
- How does the layout behave on mobile and tablet while preserving reading order and avoiding horizontal overflow?
- What happens if a user navigates to `/about` under a GitHub Pages base path such as `/portfolio/about`?
- How should the page behave when the section labels and visual hierarchy are reviewed by keyboard and screen-reader users?
- What happens when the content is intentionally kept concise so it does not become a replacement for the CV?

## 4. Requirements

### Functional Requirements

- **FR-001**: The About page MUST be available at the canonical route `/about`.
- **FR-002**: The page MUST be reachable through the existing global navigation and application shell.
- **FR-003**: The page MUST use the existing application shell and MUST NOT implement a separate application-level header, footer, or navigation.
- **FR-004**: The page MUST be implemented as one continuous vertically scrolling document without mandatory scroll snapping.
- **FR-005**: The About page MUST contain the following sections in this exact order: `01 / ABOUT ME`, `02 / ENGINEERING JOURNEY`, `03 / WHAT I BUILD`, `04 / A PROJECT THAT GREW`, `05 / THE AI CHAPTER`, and `06 / MY PHILOSOPHY`.
- **FR-006**: The page MUST establish professional identity immediately and introduce the narrative of moving from software engineering toward AI.
- **FR-007**: The About page MUST communicate more than 10 years of software development experience, .NET expertise, full-stack experience including Angular, API and integration experience, distributed systems experience, and modernization work.
- **FR-008**: The page MUST include a concrete example of a real organizational software problem that grew beyond its original purpose.
- **FR-009**: The page MUST describe the current transition toward Artificial Intelligence, including practical experimentation with chatbots, LLMs, and RAG.
- **FR-010**: The page MUST communicate a professional goal of building useful systems that combine software engineering and AI.
- **FR-011**: The page MUST complement the CV rather than reproduce it.
- **FR-012**: The section identifier treatment MUST visually align with the approved portfolio design system.
- **FR-013**: The page must use the approved dark, minimal, technical visual direction, including large typography, generous negative space, subtle borders, restrained surfaces, controlled gradients, and architectural lines.
- **FR-014**: The page MUST preserve the approved design system by consuming the existing global design tokens and must not create a parallel design-token system.
- **FR-015**: The page MUST respect the project's existing typography hierarchy and primarily reserve large display typography for section-defining statements.
- **FR-016**: The page MUST support subtle motion and progressive enhancement without requiring interaction to understand the content.
- **FR-017**: The page MUST respect `prefers-reduced-motion: reduce` by disabling or substantially reducing non-essential motion.
- **FR-018**: The page MUST use semantic HTML and maintain a meaningful heading hierarchy.
- **FR-019**: The page MUST remain responsive on mobile, tablet, and desktop without creating separate implementations.
- **FR-020**: The page MUST avoid horizontal scrolling and maintain readable content flow on narrower screens.
- **FR-021**: The page MUST work correctly under the repository base path used by GitHub Pages, including `/portfolio/` context.
- **FR-022**: The feature MUST use existing Angular standalone architecture and must not add new frontend dependencies.
- **FR-023**: The implementation MUST avoid unjustified `any` usage and remain type-safe.
- **FR-024**: Sections MUST be implemented as full-width semantic `<section>` blocks with `max-width` container constraint and generous padding/spacing. No card or surface pattern is required. Visual treatment remains clean, minimal, and architecturally focused.

### Section-Specific Requirements

#### Section 01 — About Me

- **FR-025**: The first section MUST present the heading: “From building software to exploring intelligence.”
- **FR-026**: The section MUST include the professional descriptors: “Software Engineer,” “Systems Builder,” and “AI Explorer.”
- **FR-027**: The section MUST prioritize large typography, negative space, dark background, subtle architectural line elements, and restrained luminous accents.
- **FR-028**: The section MUST not require a large stock photograph.

#### Section 02 — Engineering Journey

- **FR-029**: The section MUST present the developer's technical evolution as a visual narrative rather than a chronological CV.
- **FR-030**: The section MUST include the five approved stages: Building Applications, Connecting Systems, Distributed Systems, Modernizing Systems, and Exploring Intelligence.
- **FR-031**: The Engineering Journey MUST support static readability and use Intersection Observer with CSS animations (`@keyframes`) to detect viewport entry and progressively activate stage visibility. Hover highlighting is optional. Content remains fully readable without animation or JavaScript.
- **FR-032**: The section MUST not use click-to-expand or accordion behavior.

#### Section 03 — What I Build

- **FR-033**: The section MUST explain the developer's focus on software engineering, integration and automation, and intelligent systems.
- **FR-034**: The section MUST emphasize problem solving and practical impact instead of presenting a generic technology list.

#### Section 04 — A Project That Grew

- **FR-035**: The section MUST communicate that the healthcare project began as a single-user application for medical contracting. Present in a clearly marked opening part: "Started as..."
- **FR-036**: The section MUST explain that the system was subsequently integrated with medical authorizations, contact center operations, and administrative areas. Present in a clearly marked middle part: "Grew to include..."
- **FR-037**: The section MUST clearly communicate that the system evolved into an important communication platform used at a national level. Present in a clearly marked final part: "Became important at scale..." The progression must be visually and textually clear to satisfy AC-007.
- **FR-038**: The three-part narrative structure is sufficient; optional architectural lines or connection visuals may support but are not required for clarity. Narrative text is primary.
- **FR-039**: The section MUST not invent numerical metrics, dates, performance figures, or technical details that are not supported by the approved content.

#### Section 05 — The AI Chapter

- **FR-040**: The section MUST explain the current professional direction toward AI and must frame AI as a way to extend software engineering rather than replace it.
- **FR-041**: The section MUST communicate the relationship between human intelligence and artificial intelligence.
- **FR-042**: The section MUST describe practical AI applications, including chatbots, LLM-based applications, and RAG.
- **FR-043**: The section MUST not contain a large vector or neural-network graphic.
- **FR-044**: The section MUST remain primarily typographic and structural in composition.

#### Section 06 — My Philosophy

- **FR-045**: The final section MUST place strong emphasis on the statement: “I don't just want to build AI. I want to build useful systems with AI.”
- **FR-046**: The section MAY include the supporting line: “Always learning. Always building.”

### Content Strategy Requirements

- **FR-047**: The page MUST use a concise hybrid content strategy: short overall copy with deeper narrative treatment for the healthcare project story.
- **FR-048**: The page MUST remain within an approximate content volume of 300–400 words total (all visible text: headings, section labels, body paragraphs, descriptors). Decorative or hidden text excluded. The target ensures the page complements rather than replaces the CV.
- **FR-049**: The page MUST use concise introduction, engineering journey, and AI chapter copy, while giving more space to the project story.

### Accessibility and Motion Requirements

- **FR-050**: The page MUST support keyboard navigation and visible focus states for all interactive elements.
- **FR-051**: The page MUST treat decorative visuals as non-semantic or hidden from assistive technology where appropriate.
- **FR-052**: The page MUST not rely on color alone to communicate meaning.
- **FR-053**: The page MUST remain readable if motion and animations are disabled.
- **FR-054**: Reduced motion MUST be respected for all non-essential animation and interaction.

### Technical Constraints

- **FR-055**: The feature MUST live under `portfolio_app/src/app/features/about/`.
- **FR-056**: The feature MUST use Angular standalone architecture and the existing app router.
- **FR-057**: The feature MUST not introduce new dependencies or libraries for animation, charting, or graphics.
- **FR-058**: The feature MUST use the existing styling and token architecture without introducing a parallel system.
- **FR-059**: The implementation MUST use a single monolithic `about-page.component` containing all six sections. No sub-components or feature-internal extraction is required unless a specific section demonstrates independent behavior, reusability, or complexity that justifies separation.
- **FR-060**: The feature MUST maintain compatibility with the deployed GitHub Pages base path and not assume that `/about` is hosted at domain root.

## 5. Key Entities

- **AboutPageNarrative**: Represents the page-level story arc from software engineering to AI exploration, including the primary professional identity and thesis.
- **EngineeringJourneyStage**: Represents one stage in the progression from building applications to exploring intelligence, including title and descriptive focus.
- **ProjectGrowthStory**: Represents the healthcare-sector project narrative and its organizational expansion over time.
- **SectionDefinition**: Represents each page section label and order for the About page narrative.

## 6. Success Criteria

### Measurable Outcomes

- **SC-001**: The About page route is accessible at `/about` and uses the existing global layout and navigation.
- **SC-002**: The page includes all six required sections in the correct order.
- **SC-003**: A visitor can understand the developer’s engineering background and current AI direction without reading the CV.
- **SC-004**: The Engineering Journey clearly communicates the progression from building applications to AI exploration within the approved interaction model.
- **SC-005**: The healthcare project story communicates a clear evolution from a single-user tool into a nationally used multi-area communication platform.
- **SC-006**: The AI Chapter communicates AI as an extension of software engineering and includes practical experimentation with chatbots, LLMs, and RAG.
- **SC-007**: The final philosophy statement is visually emphasized and appears in the required wording.
- **SC-008**: The design remains visually consistent with the portfolio design system and does not introduce independent styling.
- **SC-009**: The page is usable without horizontal scrolling on mobile, tablet, and desktop.
- **SC-010**: The page is keyboard accessible, type-safe, and compliant with reduced-motion preferences.
- **SC-011**: The implementation does not introduce new frontend dependencies.

## 7. Assumptions

- The project’s existing application shell and global design system remain the source of truth for route-level layout and styling.
- The approved mockup is treated as a visual reference only and is not a requirement for a separate specification asset in runtime code.
- The page is a static digital narrative and does not require backend APIs, data services, or AI integrations.
- The feature will remain simple and maintainable and will not create additional abstractions beyond what is required by the specification.

## 8. Out of Scope

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
- Large vector or neural-network artwork in the AI Chapter.

## 9. Acceptance Criteria

- **AC-001**: The About page is available at `/about` and is reachable through the existing global navigation.
- **AC-002**: The page is implemented as one continuous vertical scrolling experience without mandatory scroll snapping.
- **AC-003**: All six approved sections appear in the correct order.
- **AC-004**: A visitor can understand the developer's software engineering background and current AI direction without opening the CV.
- **AC-005**: The Engineering Journey shows all five approved stages and communicates the evolution from application development to AI exploration.
- **AC-006**: The Engineering Journey supports subtle entrance, scroll, and hover enhancement without requiring interaction to understand content.
- **AC-007**: The healthcare project clearly communicates progression from a single-user application into a nationally used system connecting multiple organizational areas.
- **AC-008**: The AI Chapter communicates the transition toward AI, LLMs, and RAG without using the large vector/neural-network graphic.
- **AC-009**: The page ends with the required philosophy statement.
- **AC-010**: The feature uses the existing portfolio design system and does not introduce an independent visual language.
- **AC-011**: The complete page is usable on mobile, tablet, and desktop without horizontal scrolling.
- **AC-012**: The page satisfies the project's accessibility baseline requirements, including semantic HTML, keyboard accessibility, visible focus states, contrast, and reduced-motion support.
- **AC-013**: All non-essential animation is disabled or substantially reduced when `prefers-reduced-motion: reduce` is active.
- **AC-014**: No new frontend dependency is added for this feature.
- **AC-015**: The feature contains no unjustified `any` usage.
- **AC-016**: Implementation passes the project's configured ESLint and production build validation.
- **AC-017**: The `/about` route works correctly under the GitHub Pages repository base path.

## 10. Clarifications

The following decisions are part of the approved feature direction and must be preserved unless changed through the project's clarification workflow.

| # | Topic | Decision |
|---|---|---|
| 1 | Canonical route | `/about` |
| 2 | Page structure | One continuous scrolling page |
| 3 | Engineering Journey interaction | Hybrid: static content + subtle scroll entrance + progressive timeline activation + hover highlight; no click or accordion |
| 4 | Content strategy | Hybrid: concise overall content with a more detailed healthcare project narrative |

### Session 2026-08-18

- Q: Engineering Journey — Animation strategy mechanism → A: Intersection Observer + CSS (`@keyframes` with dynamic class activation)
- Q: Component structure strategy → A: Single monolithic component (all sections in `about-page.component.ts/html/scss`)
- Q: Content word count interpretation → A: All visible text (headings, labels, body, descriptors; excludes decorative/hidden text only)
- Q: Section visual treatment and layout pattern → A: Full-width semantic sections (no card/surface pattern; clean, minimal, full-width `<section>` blocks with generous padding)
- Q: Project That Grew narrative structure → A: Three-part explicit structure: (1) Started as, (2) Grew to include, (3) Became important at scale

## 10. Expected Result

A polished, accessible, responsive About Me page that presents the developer as:

Software Engineer → Systems Builder → Modernization & Integration → AI Explorer.

The result should feel like a natural extension of the existing portfolio rather than a standalone microsite. The implementation must remain simple, maintainable, dependency-light, and compatible with the project's existing Angular and GitHub Pages foundation.

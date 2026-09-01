---
name: 003-about-me
description: Creation of about me page
---
/speckit.specify

**Feature ID:** 003-about-me
**Feature Name:** About Me
**Route:** `/about`
**Branch:** `feature/003-about`
**Sprint:** 02
**Status:** Draft for clarification
**Language:** English

---

## 1. Purpose

Create the portfolio's dedicated About Me page as a concise professional
narrative that explains the developer's evolution from software engineering
toward Artificial Intelligence.

The page must communicate:

- More than 10 years of software development experience.
- Strong experience with the .NET ecosystem.
- Full-stack web development experience, including Angular and modern web
  technologies.
- Experience with APIs, integrations, distributed systems, and software
  modernization.
- A demonstrated example of solving a real organizational problem through
  software.
- The current transition toward Artificial Intelligence.
- Practical experimentation with chatbots, LLMs, and RAG.
- A professional goal of building useful systems that combine software
  engineering and AI.

The feature must complement the CV rather than reproduce it.

---

## 2. Design Intent

The approved visual direction is a dark, minimal, technical portfolio
experience characterized by:

- Dark background.
- Generous negative space.
- Large expressive typography.
- Very subtle borders.
- Discreet surfaces/cards.
- Small luminous accents.
- Controlled gradients.
- Architectural lines.
- Subtle microanimations.
- Strong visual hierarchy.
- Minimal decorative noise.

The page must communicate an evolution:

Building Applications
        ↓
Connecting Systems
        ↓
Distributed Systems
        ↓
Modernizing Systems
        ↓
Exploring Intelligence

The design must remain consistent with the project's centralized design
tokens and frontend instructions. Feature-specific styles must not introduce
an independent visual system.

---

## 3. User Stories

### US-001 — Understand the professional profile

As a recruiter, employer, collaborator, or academic contact,

I want to quickly understand the developer's professional background,
technical evolution, and current AI direction,

so that I can evaluate the profile beyond a conventional CV.

### US-002 — Understand the transition toward AI

As a technical recruiter or employer,

I want to understand why the developer is moving from software engineering
toward AI,

so that I can see how previous engineering experience supports this new
direction.

### US-003 — See evidence of real-world impact

As a recruiter or employer,

I want to see a concrete example of a system that evolved beyond its
original purpose,

so that I can understand the developer's ability to solve problems and
create organizational impact.

---

## 4. Route and Navigation

### FR-001 — Dedicated route

The feature MUST be available at the canonical Angular route:

`/about`

When deployed to GitHub Pages, the route MUST remain compatible with the
application's repository base path.

### FR-002 — Global navigation

The About page MUST use the existing application shell and global navigation.

The feature MUST NOT implement its own application-level header, footer, or
navigation.

### FR-003 — Continuous scrolling

The page MUST be implemented as one continuous vertically scrolling document.

It MUST NOT use mandatory full-screen section snapping.

---

## 5. Information Architecture

The About page MUST contain the following sections in this order:

1. `01 / ABOUT ME`
2. `02 / ENGINEERING JOURNEY`
3. `03 / WHAT I BUILD`
4. `04 / A PROJECT THAT GREW`
5. `05 / THE AI CHAPTER`
6. `06 / MY PHILOSOPHY`

The page should feel like one continuous narrative rather than six unrelated
blocks.

---

## 6. Section 01 — About Me

### Purpose

Immediately establish professional identity and introduce the narrative of
moving from software engineering toward AI.

### Required content

Primary heading:

> From building software to exploring intelligence.

Professional descriptors:

> Software Engineer
> Systems Builder
> AI Explorer

The section identifier MUST visually follow the same section-label treatment
used throughout the approved portfolio design.

### Visual requirements

The section MUST prioritize:

- Large typography.
- Strong negative space.
- Dark background.
- Subtle architectural line elements.
- Restrained luminous accents.

No large stock photograph is required.

---

## 7. Section 02 — Engineering Journey

### Purpose

Present the developer's technical evolution as a visual narrative rather
than a chronological CV.

### Required stages

#### 01 — Building Applications

Focus:

- .NET / C#
- Desktop applications
- Administrative software

#### 02 — Connecting Systems

Focus:

- Web applications / Angular
- REST APIs / ASP.NET CORE
- System integrations

#### 03 — Distributed Systems

Focus:

- Microservices
- RabbitMQ
- Distributed communication
- Real-time systems

#### 04 — Modernizing Systems

Focus:

- .NET Framework modernization
- Modern .NET
- Clean Architecture
- Maintainability

#### 05 — Exploring Intelligence

Focus:

- AI applications / ChatBots
- LLMs
- RAG
- Applied AI experimentation

### Interaction

The Engineering Journey MUST use the approved hybrid interaction model:

- All five stages remain understandable without interaction.
- The stages MAY animate into view as the section enters the viewport.
- The timeline MAY progressively activate during scroll.
- Hovering a stage MAY provide a subtle visual highlight.
- No click-to-expand interaction is required.
- No accordion behavior is required.
- Animation MUST NOT be required to understand the content.
- `prefers-reduced-motion` MUST disable or substantially reduce non-essential
  motion.

---

## 8. Section 03 — What I Build

### Purpose

Explain the type of problems and software solutions the developer focuses on.

The section SHOULD communicate three core themes:

### Software Engineering

Enterprise applications, backend systems, APIs, and Angular applications.

### Integration and Automation

Connecting systems, automating processes, and evolving existing software.

### Intelligent Systems

Exploring how AI capabilities can become part of useful software systems.

The content MUST emphasize problem solving and practical impact rather than
presenting a generic technology list.

---

## 9. Section 04 — A Project That Grew

### Purpose

Provide a concrete example of professional impact.

### Narrative

The section MUST communicate that a project for the healthcare sector
initially began as a single-user application for medical contracting.

The application was subsequently integrated with:

- Medical authorizations.
- Contact center operations.
- Administrative areas.

The resulting system evolved into an important communication platform used at
a national level.

### Required message

The section SHOULD communicate the following idea:

> What started as a single-user application for medical contracting evolved
> into a system connecting multiple areas of the organization and eventually
> became used at a national level.

The final implementation MUST NOT invent numerical metrics, dates,
performance figures, or technical details that are not supported by the
approved content.

### Visual treatment

The project story SHOULD use architectural lines and connections to
communicate system growth.

The visual must remain restrained and consistent with the portfolio design
system.

---

## 10. Section 05 — The AI Chapter

### Purpose

Explain the current professional direction toward Artificial Intelligence.

### Required narrative

The section MUST communicate:

- AI is viewed as a means of extending software engineering rather than
  replacing it.
- The developer is interested in the relationship between human
  intelligence and artificial intelligence.
- The objective is to solve real problems through practical AI applications.
- Current experimentation includes chatbots, LLM-based applications, and RAG.

### Core message

The section SHOULD communicate:

> AI is not the end of software engineering. It is another way to extend
> what we can build.

### Visual constraint

The approved design explicitly excludes the previously proposed large
vector/neural-network graphic from this section.

The section MUST remain primarily typographic and structural.

---

## 11. Section 06 — My Philosophy

### Purpose

End the page with a concise statement that summarizes the developer's
professional direction.

### Primary statement

> I don't just want to build AI.
> I want to build useful systems with AI.

The statement MUST receive strong visual emphasis through typography and
spacing rather than excessive decoration.

An optional supporting line may communicate:

> Always learning. Always building.

---

## 12. Content Strategy

The page MUST use a hybrid content strategy.

The overall page should remain concise and visually focused, while the
healthcare project story receives additional narrative depth.

Target content volume:

- Approximately 300–400 words total.
- Short introductory copy.
- Concise Engineering Journey descriptions.
- Concise What I Build content.
- More detailed Project That Grew narrative.
- Concise AI Chapter content.
- Minimal Philosophy content.

The About page MUST NOT become a complete replacement for the CV.

---

## 13. Visual and Interaction Requirements

### FR-004 — Design tokens

The feature MUST consume the existing global design tokens for:

- Colors.
- Typography.
- Spacing.
- Border radius.
- Shadows.
- Layout/container values.

The feature MUST NOT introduce a parallel design-token system.

### FR-005 — Typography

The feature MUST use the project's existing typography hierarchy.

Large display typography SHOULD be reserved for primary statements and
section-defining moments.

### FR-006 — Borders and surfaces

Borders MUST remain subtle.

Surfaces/cards MUST be restrained and used only where they improve grouping
or hierarchy.

### FR-007 — Gradients

Gradients MUST be controlled and must not dominate the visual hierarchy.

### FR-008 — Architectural lines

Architectural lines MAY be used to connect ideas, stages, or system
relationships.

They MUST remain decorative and must not prevent access to or understanding
of the content.

### FR-009 — Motion

Motion MUST be implemented with existing platform capabilities such as
CSS/SVG where practical.

The feature MUST NOT introduce a dedicated animation framework.

### FR-010 — Reduced motion

The feature MUST respect:

`prefers-reduced-motion: reduce`

Non-essential animations MUST be removed or significantly reduced.

---

## 14. Technical Constraints

### FR-011 — Angular

The feature MUST use the project's existing Angular standalone architecture.

### FR-012 — Feature organization

Feature-specific functionality MUST live under:

`portfolio_app/src/app/features/about/`

The feature MUST NOT introduce application-level logic into the global
layout.

### FR-013 — Progressive architecture

The implementation MUST begin with the simplest component structure
capable of satisfying this specification.

Additional components SHOULD only be extracted when there is a demonstrated
need for:

- Independent behavior.
- Significant complexity.
- Reuse.
- Maintainability.

### FR-014 — Dependencies

No new frontend dependency is required or permitted for the visual design.

The feature MUST use the existing project stack.

It MUST NOT introduce:

- Animation libraries.
- Charting libraries.
- UI frameworks.
- State-management libraries.
- Additional HTTP clients.
- AI SDKs.
- Graphics frameworks.

### FR-015 — Type safety

All TypeScript MUST remain type-safe.

The implementation MUST avoid `any`.

### FR-016 — Naming

The feature MUST follow project naming conventions:

- Files: `kebab-case`
- Classes: `PascalCase`
- Variables/functions: `camelCase`
- CSS custom properties: `kebab-case`

---

## 15. Accessibility Requirements

The page MUST:

- Use semantic HTML.
- Maintain a meaningful heading hierarchy.
- Be fully readable using keyboard navigation.
- Preserve visible focus states for interactive elements.
- Not communicate essential information through color alone.
- Provide accessible names for interactive controls.
- Treat decorative SVG/visual elements as non-semantic where appropriate.
- Respect reduced-motion preferences.
- Remain usable on mobile, tablet, and desktop.
- Avoid horizontal scrolling.

The page content MUST remain understandable if animations are disabled.

---

## 16. Responsive Requirements

The page MUST support:

- Mobile.
- Tablet.
- Desktop.

The layout MUST adapt without creating separate duplicated feature
implementations.

On smaller screens:

- Large headings MUST scale appropriately.
- Timeline content MUST remain readable.
- Architectural visuals MUST not cause horizontal overflow.
- Content MUST retain a clear reading order.
- Decorative elements MAY be reduced when necessary to preserve clarity.

---

## 17. GitHub Pages Compatibility

The feature MUST work correctly when the Angular application is deployed
beneath the repository base path:

`/portfolio/`

The implementation MUST NOT assume that `/about` is hosted at the domain
root.

---

## 18. Out of Scope

The following are explicitly excluded from this feature:

- Full CV implementation.
- Detailed professional experience/Career Timeline page.
- Projects feature.
- AI Lab feature.
- Functional AI integrations.
- LLM API calls.
- RAG implementation.
- SignalR implementation.
- .NET API integration.
- Database integration.
- Contact form.
- CMS.
- Authentication.
- Analytics.
- New frontend dependencies.
- Large vector/neural-network artwork in the AI Chapter.

---

## 19. Acceptance Criteria

### AC-001 — Route

The About page is available at:

`/about`

and is reachable through the existing global navigation.

### AC-002 — Continuous page

The page is implemented as one continuous vertical scrolling experience
without mandatory scroll snapping.

### AC-003 — Section structure

All six approved sections appear in the required order:

```text
01 / ABOUT ME
02 / ENGINEERING JOURNEY
03 / WHAT I BUILD
04 / A PROJECT THAT GREW
05 / THE AI CHAPTER
06 / MY PHILOSOPHY
```
### AC-004 — Professional narrative

A visitor can understand the developer's software engineering background
and current AI direction without opening the CV.

### AC-005 — Engineering Journey

The five approved stages are visible and communicate the evolution from
application development to AI exploration.

### AC-006 — Journey interaction

The Engineering Journey supports subtle entrance, scroll, and hover
enhancement without requiring interaction to understand its content.

### AC-007 — Project story

The healthcare project clearly communicates its evolution from a single-user
application into a nationally used system connecting multiple organizational
areas.

### AC-008 — AI Chapter

The AI Chapter communicates the transition toward AI, LLMs, and RAG.

The large vector/neural-network graphic is not present.

### AC-009 — Philosophy

The page ends with the approved core statement:

I don't just want to build AI.
I want to build useful systems with AI.

### AC-010 — Visual consistency

The feature uses the existing portfolio design system and does not
introduce an independent visual language.

### AC-011 — Responsive behavior

The complete page is usable on mobile, tablet, and desktop without
horizontal scrolling.

### AC-012 — Accessibility

The page satisfies the project's baseline accessibility requirements,
including semantic HTML, keyboard accessibility, visible focus states,
sufficient contrast, and reduced-motion support.

### AC-013 — Motion

All non-essential animation is disabled or substantially reduced when
prefers-reduced-motion: reduce is active.

### AC-014 — Dependencies

No new frontend dependency is added for this feature.

### AC-015 — Type safety

The feature contains no unjustified any usage.

### AC-016 — Quality

The implementation passes the project's configured ESLint and production
build validation.

### AC-017 — GitHub Pages

The /about route works correctly under the repository GitHub Pages base
path.

## 20. Dependencies
- Required existing project capabilities
- Angular 19 standalone architecture.
- Angular Router.
- Existing global layout/application shell.
- Existing design tokens.
- Existing SCSS configuration.
- Existing ESLint and Prettier configuration.
- Existing GitHub Pages deployment configuration.
- External dependencies

### External Dependencies
- None.

## 21. Clarifications

The following decisions were resolved during the interactive specification
process:

| # |	Topic |	Decision |
|---|---|---|
|1 |Canonical route|`/about`|
|2 |	Page structure|	One continuous scrolling page |
|3 |	Engineering Journey interaction|	Hybrid: static content + subtle scroll entrance + progressive timeline activation + hover highlight; no click/accordion |
|4 |	Content strategy|	Hybrid: concise overall content with a more detailed healthcare project narrative|

These decisions are considered part of the approved feature direction and
MUST be preserved during planning and implementation unless explicitly
changed through the project's clarification workflow.

## 22. Expected Result

A polished, accessible, responsive About Me page that presents the developer
as:

Software Engineer
↓
Systems Builder
↓
Modernization & Integration
↓
AI Explorer

The result should feel like a natural extension of the existing portfolio
rather than a standalone microsite.

The implementation must remain simple, maintainable, dependency-light, and
compatible with the project's existing Angular and GitHub Pages foundation.

## 23 FEATURE DIRECTORY

Create the feature directory:

    specs/003-about-me/

The feature directory MUST contain:

    specs/003-about-me/
    ├── spec.md
    └── mockups/
        └── about-me-approved.png

## APPROVED VISUAL MOCKUP

The approved visual reference for this feature is:

    specs/003-about-me/mockups/about-me-approved.png

The mockup represents the approved visual direction for the About Me
page and MUST be considered a visual reference during specification
and subsequent implementation.

Do NOT redesign, reinterpret, or replace the approved visual direction
unless explicitly requested through the clarification process.

The mockup MUST NOT be treated as an application asset. It is a
specification/design artifact and must remain under the feature's
specification directory.

## IMPORTANT

The source mockup currently exists locally at:

    <YOUR-LOCAL-PATH>\about-me-approved.png

If the file is not already present at:

    specs/003-about-me/mockups/about-me-approved.png

DO NOT invent or generate a replacement.

The file must be copied into the repository before implementation.

## DESIGN REFERENCE

The specification MUST preserve the approved design characteristics:

- Dark background.
- Generous negative space.
- Large typography.
- Very subtle borders.
- Discreet cards/surfaces.
- Small luminous accents.
- Controlled gradients.
- Architectural lines.
- Subtle microanimations.
- Strong visual hierarchy.

The AI Chapter MUST NOT contain the previously proposed large
vector/neural-network graphic.

## SPECIFICATION RULES

Follow:

- constitution.md
- instructions.frontend.md
- copilot-instructions.md

The specification MUST define WHAT the feature must accomplish,
not HOW it will be implemented.

Do not create:

- plan.md
- tasks.md
- implementation code

Those artifacts belong to subsequent Spec-Driven Development stages.

## 23. Visual Reference

The approved visual mockup for this feature is:

`mockups/about-me-approved.png`

This mockup is the visual reference for the implementation of the
About Me page.

The implementation MUST preserve the approved visual hierarchy,
composition, spacing relationships, typography scale, section ordering,
and overall visual direction represented in the mockup.

The mockup is a visual reference and does not override functional,
accessibility, responsive, or technical requirements defined by the
project Constitution, frontend instructions, or this specification.

When the mockup and written requirements appear to conflict, the written
requirements MUST be reviewed before implementation rather than silently
interpreted.
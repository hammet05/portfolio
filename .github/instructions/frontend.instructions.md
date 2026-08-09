# Frontend Instructions

- **Project:** Portfolio
- **Scope:** Angular Frontend
- **Version:** 1.0.0
- **Status:** Active

---

# 1. Purpose

This document defines the technical, visual, UX and accessibility standards
for the Portfolio frontend.

These instructions complement the project Constitution.

The Constitution defines fundamental project principles.

This document defines how those principles are implemented in the frontend.

All human developers and AI-assisted development tools MUST follow these
instructions when creating or modifying frontend code.

---

# 2. Frontend Technology Stack

The frontend MUST use:

- Angular.
- TypeScript.
- Angular standalone components.
- Angular Router.
- SCSS.
- Tailwind CSS.
- ESLint.
- Prettier.
- Chatbase as primarily chatbot ([html](https://www.chatbase.co/))

The frontend MUST NOT introduce additional UI frameworks without explicit
technical justification.

Using this page as  visual reference: ** https://glowing-transportation-008714.framer.app/
---

# 3. Design Philosophy

The portfolio MUST communicate:

- Professionalism.
- Technical competence.
- Simplicity.
- Modern software engineering.
- AI expertise.
- Attention to detail.

The visual design SHOULD feel closer to a modern technology product than
to a traditional static CV.

The interface MUST prioritize:

1. Content.
2. Readability.
3. Navigation.
4. Demonstrable technical work.
5. Performance.

Visual effects MUST support the content and MUST NOT dominate it.

Avoid:

- Excessive animations.
- Excessive gradients.
- Decorative elements without purpose.
- Excessive glassmorphism.
- Large amounts of text without hierarchy.
- Unnecessary UI components.

---

# 4. Global Layout

The application MUST use a responsive centered layout.

Recommended structure:

```text
┌───────────────────────────────────────────────┐
│                    HEADER                     │
├───────────────────────────────────────────────┤
│                                               │
│                    CONTENT                    │
│                                               │
│       max-width: 1200px - 1280px             │
│                                               │
├───────────────────────────────────────────────┤
│                    FOOTER                     │
└───────────────────────────────────────────────┘
```
Recommended maximum content width:

- container-max-width: 1200px;

The main content SHOULD use horizontal padding:
- mobile: 1rem
- tablet: 1.5rem
- desktop: 2rem

# 5. Application Layout

The application MUST use a global layout component.

Recommended structure:

``` text
app/
├── core/
├── shared/
├── layout/
│   ├── app-shell/
│   ├── site-header/
│   ├── site-footer/
│   └── mobile-navigation/
└── features/
```
The application shell SHOULD conceptually render:
``` html
<app-shell>
  <site-header />

  <main>
    <router-outlet />
  </main>

  <site-footer />
</app-shell>
```
The global layout MUST NOT contain feature-specific business logic.

# 6. Main Navigation

The main navigation SHOULD contain:

- Home
- About
- Experience
- Projects
- AI Lab
- Contact

The navigation MUST be responsive.

Desktop:
> Logo | Home | About | Experience | Projects | AI Lab | Contact

Mobile:
> Logo                         Menu

The mobile navigation MUST provide:

- Open state.
- Closed state.
- Keyboard accessibility.
- Focus management.
- Visible active route.

# 7. Visual Design System

The application MUST use design tokens.

Hard-coded values SHOULD NOT be repeatedly duplicated across components.

Design tokens SHOULD be centralized.

Recommended structure:

``` text
styles/
├── _tokens.scss
├── _typography.scss
├── _layout.scss
├── _utilities.scss
└── styles.scss
```
# 8. Color System

The initial visual identity SHOULD use a neutral technical palette with a
single primary accent.

Recommended initial tokens:
```scss
:root {
  --color-bg: #0b0f14;
  --color-surface: #111820;
  --color-surface-elevated: #18212b;

  --color-text: #f5f7fa;
  --color-text-muted: #a7b0bb;
  --color-text-subtle: #737e89;

  --color-border: #27313c;

  --color-primary: #5b8cff;
  --color-primary-hover: #78a2ff;
  --color-primary-active: #3f73e8;

  --color-success: #35c98b;
  --color-warning: #f0b429;
  --color-error: #ef6461;
  --color-info: #55b7e8;
}
```

These values define the initial visual language and MAY evolve after visual
validation.

Colors MUST NOT be introduced arbitrarily at component level.

Components SHOULD consume semantic tokens:
``` scss
color: var(--color-text);
background: var(--color-surface);
border-color: var(--color-border);
```
instead of repeatedly using raw hexadecimal values.

# 9. Light and Dark Theme

The initial release SHOULD prioritize dark mode because the portfolio is
technology-oriented.

The design system SHOULD nevertheless be structured so a light theme can
be introduced later without rewriting components.

Components MUST NOT depend directly on a specific dark background color.

Use semantic tokens instead.

# 10. Spacing System

Use a consistent spacing scale based on multiples of 4px.

Recommended tokens:
```scss
:root {
  --space-1: 0.25rem;   // 4px
  --space-2: 0.5rem;    // 8px
  --space-3: 0.75rem;   // 12px
  --space-4: 1rem;       // 16px
  --space-5: 1.25rem;    // 20px
  --space-6: 1.5rem;     // 24px
  --space-8: 2rem;       // 32px
  --space-10: 2.5rem;    // 40px
  --space-12: 3rem;       // 48px
  --space-16: 4rem;       // 64px
  --space-20: 5rem;       // 80px
  --space-24: 6rem;       // 96px
}
```
Spacing SHOULD follow the token system.

Arbitrary values SHOULD be avoided unless necessary for a specific visual
requirement.

11. Border Radius

The visual language SHOULD use moderate rounded corners.

Recommended tokens:
```scss
:root {
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
}
```
Recommended usage:
```text
Buttons       → radius-md
Inputs        → radius-md
Cards         → radius-lg
Dialogs       → radius-xl
Tags / pills  → radius-full
```
Avoid excessive use of fully rounded containers.

# 12 Avoid excessive use of fully rounded containers.
Shadows MUST be subtle.

Recommended tokens:
```scss
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.20);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.25);
}
```
Cards SHOULD primarily use borders and surface contrast.

Shadows SHOULD be reserved for elevated UI.

# 13. Typography

The typography MUST provide a clear hierarchy.

Recommended font stack:
``` scss
:root {
  --font-family-sans:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  --font-family-mono:
    "JetBrains Mono",
    "Fira Code",
    Consolas,
    monospace;
}
```
Recommended hierarchy:
``` text
H1 → 3rem - 4rem desktop
H2 → 2rem - 2.5rem
H3 → 1.25rem - 1.5rem
Body → 1rem
Small → 0.875rem
Code → monospace
```
Mobile typography MUST scale down appropriately.

Headings MUST maintain semantic HTML hierarchy.

Do not use heading elements solely for visual styling.

# 14. Iconography

Icons MUST use a single primary icon library.

Recommended library:

``` text 
Lucide
```
Icons SHOULD be used for:

- Navigation.
- Actions.
- Technology indicators.
- Social links.
- Status indicators.

Icons MUST NOT replace text when the meaning would become ambiguous.

Decorative icons MUST be hidden from screen readers when appropriate.

Interactive icons MUST have an accessible name.
FORBBIDDEN use icons like webfont,emojis or unicode characters as functional icons.

Example:
``` html
<button aria-label="Open navigation menu">
  <lucide-icon />
</button>
```
Do not mix multiple icon libraries unless explicitly justified.

# 15. UI Component Library

The project SHOULD NOT adopt a complete component framework merely to
provide basic components.

Initial UI components SHOULD be implemented using Angular, Tailwind and
the project's own design tokens.

Additional libraries MAY be introduced when a real requirement exists.

Potential libraries MAY include:

- Lucide for icons.
- Angular CDK for advanced interaction primitives.
- Charting libraries for future AI/project visualizations.

Every new library MUST be justified before introduction.

# 16. Mandatory Reusable Components

The following reusable components SHOULD exist as the project grows.

## AppShell

****Purpose:****

- Provides the global application structure.

**Responsibilities:**

- Header.
- Main content.
- Footer.
- Global layout.

****States:****

- Normal.
- Mobile navigation open.

## SiteHeader

****Purpose:****

Global navigation.

**Responsibilities:**

- Logo / name.
- Navigation.
- Active route.
- Mobile menu trigger.

****States:****

- Default.
- Scrolled.
- Mobile.
- Menu open.
- Menu closed.

## SiteFooter

****Purpose:****

Global footer.

**Should contain:**

- Name.
- Copyright.
- Social links.
- Relevant navigation.
- Contact information.

## Button

**Purpose:**

Standardize primary user actions.

**Variants:**

-primary
-secondary
-ghost
-danger

**States:**

- default
- hover
- focus
- active
- disabled
- loading

Buttons MUST provide visible focus states.

## IconButton

**Purpose:**

Compact actions represented primarily by an icon.

MUST provide:

- Accessible label.
- Focus state.
- Disabled state when applicable.

## Card

**Purpose:**

Reusable content container.

Variants MAY include:

- default
- interactive
- featured
- project

**States:**

- default
- hover
- focus
- selected
- disabled

## Badge

**Purpose:**

Display technologies, categories or statuses.
```text
Examples:

.NET
Angular
AI
SignalR
Azure
```
Badges SHOULD remain visually secondary to the main content.

## SectionHeader

**Purpose:**

Standardize section titles.

- Should support:
- 
- Eyebrow.
- Title.
- Description.
- Optional action.

## ProjectCard

**Purpose:**

Present portfolio projects.

Should display:

- Project name.
- Short description.
- Technologies.
- Project type.
- Status.
- Links.
- Optional image or preview.

**States:**

- default
- hover
- featured
- loading

## TechnologyBadge

**Purpose:**

Display technical skills consistently.

Examples:

- .NET
- C#
- Angular
- SignalR
- Azure
- OpenAI
- SQL Server

## LoadingState

**Purpose:**

Communicate that content is being loaded.

Should support:

- Skeleton.
- Spinner when appropriate.

Skeleton loading SHOULD be preferred for content-heavy areas.

## EmptyState

**Purpose:**

Communicate that content exists but currently has no items.

Must provide:

- Explanation.
- Optional action.

## ErrorState

**Purpose:**

Communicate recoverable failures.

Must provide:

- Clear explanation.
- Optional retry action.

Technical error details MUST NOT be exposed to normal users.

## Toast

**Purpose:**

Provide short-lived feedback.

Use only for non-blocking notifications.
``` text
Examples:

Project copied.
Message sent.
Link copied.
```
Toasts MUST NOT be the only mechanism for communicating critical errors.

## Modal / Dialog

**Purpose:**

Display content requiring temporary user attention.

Must support:

- Keyboard navigation.
- Escape to close when appropriate.
- Focus management.
- Accessible title.

# 17. Component State Rules

Interactive components MUST explicitly consider their states.

At minimum:
``` text
default
hover
focus
active
disabled
loading
error
empty
```
Not every component requires every state.

State MUST be communicated through more than color alone when necessary.

## 18. Feedback

Every user action that produces a meaningful asynchronous operation SHOULD
provide feedback.
``` text
Examples:

Submit
  ↓
Loading
  ↓
Success / Error
``` 
Never leave the user uncertain whether an action was received.

Buttons performing asynchronous operations SHOULD expose a loading state.

## 19. Page Templates

The application SHOULD use reusable page-level templates.

Recommended structure:
``` text
features/
├── home/
│   ├── pages/
│   │   └── home-page/
│   └── components/
│
├── about/
│   ├── pages/
│   │   └── about-page/
│   └── components/
│
├── experience/
│   ├── pages/
│   │   └── experience-page/
│   └── components/
│
├── projects/
│   ├── pages/
│   │   ├── projects-page/
│   │   └── project-detail-page/
│   └── components/
│
├── ai-lab/
│   ├── pages/
│   │   └── ai-lab-page/
│   └── components/
│
└── contact/
    ├── pages/
    │   └── contact-page/
    └── components/
``` 
Page components SHOULD compose reusable components rather than implement
large amounts of reusable UI themselves.

## 20. Home Page Template

The initial home page SHOULD follow this structure:
``` text
Hero
  ↓
Professional Summary
  ↓
Key Skills
  ↓
Featured Projects
  ↓
AI / Technology Highlight
  ↓
Professional Experience
  ↓
Call To Action
```
The Hero SHOULD immediately communicate:

- Who I am.
- What I do.
- Main technical focus.
- Current professional direction.
- Primary action.

Example:
```text
Software Engineer
.NET · Angular · AI

Building scalable applications and exploring
the intersection between software engineering
and artificial intelligence.

[View Projects] [Contact Me]
```
## 21. Projects Template

Projects SHOULD be presented as visual technical case studies rather than
simple links.

Each project SHOULD contain:
``` text
Project
├── Problem
├── Solution
├── Architecture
├── Technologies
├── Key technical decisions
├── Challenges
├── Results
└── Demo / Repository
```
The project portfolio SHOULD prioritize demonstrable technical capability.

## 22. AI Lab Template

The AI Lab will contain experimental projects and proofs of concept.

Potential examples:
``` text
AI Chatbot
RAG application
Document analysis
AI coding assistant
Semantic search
Recommendation system
AI agents
SignalR + AI real-time application
```
Each experiment SHOULD clearly identify:

- Problem.
- AI technique.
- Architecture.
- Model / provider.
- Data flow.
- Technology stack.
- Demo.
- Lessons learned.

# 23. CSS / SCSS Organization

Global styles MUST be separated from component styles.

Recommended structure:
``` text
src/styles/
├── _tokens.scss
├── _typography.scss
├── _layout.scss
├── _utilities.scss
└── styles.scss
```
Component styles SHOULD remain with the component.

Example:
``` text
project-card/
├── project-card.component.ts
├── project-card.component.html
└── project-card.component.scss
```

Do not create a global stylesheet containing styles for every component.

## 24. Tailwind Usage

Tailwind SHOULD be used for:

- Layout.
- Spacing.
- Responsive behavior.
- Simple utility styling.

SCSS SHOULD be used when:

- Component styling becomes complex.
- Custom CSS logic is required.
- Design tokens need to be consumed.
- A component requires complex states.

Do not create large collections of arbitrary Tailwind classes when a reusable
component or design token is more appropriate.

## 25. Naming Conventions

Files and directories MUST use:

> kebab-case

Examples:
```text
project-card.component.ts
project-detail-page.component.ts
site-header.component.ts
ai-playground.component.ts
```
Angular classes MUST use:

> PascalCase

Examples:
``` text
ProjectCardComponent
ProjectDetailPageComponent
SiteHeaderComponent
```
Variables and functions MUST use:

>camelCase

Examples:
``` text
projectList
loadProjects()
isLoading
```
Constants SHOULD use:

>UPPER_SNAKE_CASE

when appropriate.

CSS custom properties MUST use:

> --kebab-case

Examples:
``` css
--color-primary
--space-4
--radius-md
```
## 26. Component Naming

Component selectors MUST use the project prefix.

Recommended prefix:

> app-

Examples:
``` html
<app-site-header />
<app-project-card />
<app-section-header />
```
Feature components MUST use descriptive names.

Avoid generic names such as:
```text
Component1
Box
Container
Thing
Content
```
unless the semantic purpose is genuinely generic.

## 27. Responsive Design

The application MUST follow a mobile-first approach.

Minimum supported breakpoints:
```text
Mobile:  < 640px
Tablet:  640px - 1023px
Desktop: >= 1024px
```
The layout MUST remain usable without horizontal scrolling.

Touch targets SHOULD be at least approximately 44x44px.

## 28. Accessibility

The frontend MUST meet a minimum target of WCAG 2.2 AA principles.

At minimum:

- Semantic HTML MUST be used.
- Interactive elements MUST be keyboard accessible.
- Focus states MUST be visible.
- Images MUST have meaningful alternative text.
- Decorative images MUST use empty alt attributes where appropriate.
- Form controls MUST have accessible labels.
- Color MUST NOT be the only method of communicating meaning.
- Text contrast MUST be sufficient.
- Navigation MUST be usable with keyboard only.
- Dialogs MUST manage focus correctly.
- Motion MUST respect prefers-reduced-motion.

ARIA MUST NOT be used when semantic HTML already provides the required
accessibility behavior.

## 29. Animation and Motion

Animations MUST be subtle and purposeful.

Use animation for:

- Navigation transitions.
- Hover feedback.
- State changes.
- Content appearance when useful.

Avoid:

- Constant movement.
- Excessive parallax.
- Long transitions.
- Animations that delay interaction.

Recommended transition duration:

>150ms - 250ms

Respect:
```scss
@media (prefers-reduced-motion: reduce) {
  /* Reduce or disable non-essential animations */
}
```
## 30. Performance

The frontend SHOULD prioritize performance.

Images SHOULD:

- Use appropriate dimensions.
- Use modern formats when possible.
- Be lazy-loaded when appropriate.

Components SHOULD avoid unnecessary rendering.

Large features SHOULD be lazy-loaded when appropriate.

Avoid importing large libraries for functionality that can be implemented
with existing platform or Angular capabilities.

## 31. SEO

Public pages SHOULD provide:

- Meaningful page titles.
- Meta descriptions.
- Semantic headings.
- Descriptive URLs.
- Open Graph metadata when appropriate.

The portfolio SHOULD expose a meaningful professional identity through
search engines.

## 32. Error Handling

User-facing errors MUST be understandable.

Avoid exposing:

- stack traces
- internal exceptions
- API implementation details

Prefer:

- Something went wrong.
- Please try again.

with an optional retry mechanism.

## 33. Forms

Forms MUST:

- Have visible labels.
- Validate user input.
- Show validation feedback.
- Preserve user input when possible.
- Disable duplicate submissions when appropriate.
- Provide success and error feedback.

Validation messages SHOULD explain how to correct the problem.

## 34. Responsive Navigation and Layout

Navigation MUST remain usable at all supported viewport sizes.

The mobile navigation SHOULD use a menu button.

The menu button MUST expose:
``` text
aria-expanded
aria-controls
```
when applicable.

## 35. Pull Request Frontend Checklist

Before merging a frontend feature, verify:

 - [ ] Specification exists.
 - [ ] Constitution is respected.
 - [ ] Naming conventions are respected.
 - [ ] Component responsibilities are clear.
 - [ ] Reusable components are reused.
 - [ ] No unnecessary dependencies were introduced.
 - [ ] Responsive behavior was verified.
 - [ ] Keyboard navigation was verified.
 - [ ] Focus states are visible.
 - [ ] Accessibility was considered.
 - [ ] Loading / empty / error states exist where applicable.
 - [ ] Lint passes.
 - [ ] Production build passes.

## 36. AI Coding Instructions

When GitHub Copilot generates frontend code, it MUST:

- Read and respect the project Constitution.
- Read these frontend instructions.
- Prefer existing components over creating duplicates.
- Prefer existing design tokens over new values.
- Follow project naming conventions.
- Avoid unnecessary dependencies.
- Use semantic HTML.
- Consider accessibility.
- Consider responsive behavior.
- Keep implementations simple.
- Avoid speculative abstractions.
- Avoid modifying unrelated files.

AI-generated code MUST NOT introduce a new architectural pattern without
explicit justification.

## 37. Definition of Done — Frontend

A frontend feature is considered complete when:

- Its specification is satisfied.
- The implementation follows the Constitution.
- The implementation follows these frontend instructions.
- The UI is responsive.
- Accessibility requirements are satisfied.
- Required states are implemented.
- No unnecessary dependencies were introduced.
- Lint passes.
- Production build passes.
- The implementation is ready for Pull Request review.

## 38. Final Principle

The frontend should remain:
```
Simple
     +
Consistent
     +
Accessible
     +
Responsive
     +
Maintainable
     +
Technically Demonstrable
```
The portfolio is not merely a website.

It is itself a demonstration of software engineering quality.


### Mi recomendación para el siguiente paso

No intentaría implementar **todo esto de golpe**. El archivo puede definir el sistema completo desde ahora, pero el código debe crecer progresivamente.

Para el **Sprint 0**, solo necesitamos materializar:

```text
tokens
layout
app-shell
header
footer
responsive foundation
global typography
global styles

Y dejar para los siguientes sprints:

Sprint 1 → Home
Sprint 2 → About / Experience
Sprint 3 → Projects
Sprint 4 → AI Lab
Sprint 5 → Contact
Sprint 6 → .NET API
Sprint 7 → AI integrations
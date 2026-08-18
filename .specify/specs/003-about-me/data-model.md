# Data Model: About Me Page

**Date**: 2026-08-18  
**Scope**: Content structure, data entities, field definitions

---

## Overview

The About Me page is entirely static content—no database, no API calls, no state mutations. Content is structured as component properties or inline template data.

---

## Content Entities

### 1. AboutPageNarrative
Represents the page-level identity and thesis.

**Fields**:
- `pageTitle`: string = "From building software to exploring intelligence."
- `descriptors`: string[] = ["Software Engineer", "Systems Builder", "AI Explorer"]
- `tagline`: string = "10+ years of engineering. Exploring AI."

**Usage**: Section 01 — About Me heading and professional summary

---

### 2. EngineeringJourneyStage
Represents one stage in the progression from applications to AI.

**Fields**:
- `id`: string (unique identifier, e.g., "stage-1")
- `orderNumber`: number (1–5)
- `title`: string (e.g., "Building Applications")
- `description`: string (brief focus, e.g., ".NET / C# / Desktop applications")
- `technologies`: string[] (e.g., [".NET", "C#", "WinForms"])

**Collection**: Array of 5 stages

| Order | Title | Description | Tech Summary |
|-------|-------|-------------|-------------|
| 1 | Building Applications | .NET / C# / Desktop applications | .NET, C#, Desktop |
| 2 | Connecting Systems | Web applications, APIs, Angular | Angular, ASP.NET Core, REST APIs |
| 3 | Distributed Systems | Event-driven, microservices, RabbitMQ | Microservices, RabbitMQ, Real-time |
| 4 | Modernizing Systems | .NET Framework → Modern .NET, architecture | Clean Architecture, .NET 6+, Modernization |
| 5 | Exploring Intelligence | AI applications, LLMs, RAG, chatbots | LLMs, RAG, ChatBots, Applied AI |

**Usage**: Section 02 — Engineering Journey timeline. Each stage animates into view via Intersection Observer.

---

### 3. FocusArea
Represents one practice area in "What I Build".

**Fields**:
- `id`: string (e.g., "focus-1")
- `title`: string (e.g., "Software Engineering")
- `description`: string (concise explanation)
- `areas`: string[] (key topics)

**Collection**: Array of 3 areas

| Title | Description | Areas |
|-------|-------------|-------|
| Software Engineering | Enterprise applications, APIs, backends, Angular frontends | Enterprise apps, APIs, Backend systems, Angular applications |
| Integration & Automation | System connectivity, process automation, modernization | Connecting systems, Automating workflows, Evolving software |
| Intelligent Systems | AI capabilities integrated into software | LLM applications, RAG systems, Intelligent workflows |

**Usage**: Section 03 — What I Build. Three-card or three-section layout emphasizing problem-solving.

---

### 4. ProjectGrowthStory
Represents the healthcare project narrative in three phases.

**Fields**:
- `id`: string = "project-healthcare"
- `sector`: string = "Healthcare"
- `startedAs`: string (description of original single-user app)
- `grewToInclude`: string[] (list of integrations/expansions)
- `becameImportantAt`: string (scale/impact)

**Content**:

```javascript
const projectStory = {
  id: "project-healthcare",
  sector: "Healthcare",
  startedAs: "A single-user application for medical contracting—helping one role automate and organize contract workflows.",
  grewToInclude: [
    "Medical authorizations and compliance workflows",
    "Contact center operations and communications",
    "Administrative areas and cross-organizational coordination"
  ],
  becameImportantAt: "Evolved into a critical communication platform used across organizational departments at a national scale."
};
```

**Usage**: Section 04 — A Project That Grew. Three-part narrative structure clearly communicates progression.

---

### 5. AIDirection
Represents the AI Chapter narrative.

**Fields**:
- `transition`: string (why moving toward AI)
- `philosophy`: string (relationship between AI and software engineering)
- `areas`: string[] (current experimentation focus)
- `goal`: string (professional objective)

**Content**:

```javascript
const aiDirection = {
  transition: "AI is not the end of software engineering. It is another way to extend what we can build.",
  philosophy: "Exploring the relationship between human intelligence and artificial intelligence.",
  areas: [
    "Chatbots and conversational AI",
    "Large Language Models (LLMs) and prompt engineering",
    "Retrieval-Augmented Generation (RAG) for knowledge systems"
  ],
  goal: "Build useful systems that combine software engineering expertise with practical AI capabilities."
};
```

**Usage**: Section 05 — The AI Chapter. Communicates current direction and experimentation.

---

### 6. CorePhilosophy
Represents the closing statement.

**Fields**:
- `primary`: string (main statement)
- `supporting`: string | null (optional additional line)

**Content**:

```javascript
const philosophy = {
  primary: "I don't just want to build AI. I want to build useful systems with AI.",
  supporting: "Always learning. Always building."
};
```

**Usage**: Section 06 — My Philosophy. Closing statement with visual emphasis.

---

## Page Structure Outline

```
AboutPageComponent
├── Section 01 — About Me
│   ├── Heading: pageTitle
│   ├── Descriptors: descriptors array
│
├── Section 02 — Engineering Journey
│   ├── Timeline visualization
│   └── EngineeringJourneyStage[] (5 items)
│       ├── stage.title
│       ├── stage.description
│       └── stage.technologies (tag display)
│
├── Section 03 — What I Build
│   ├── Section heading
│   └── FocusArea[] (3 items)
│       ├── area.title
│       ├── area.description
│       └── area.areas (bulleted list)
│
├── Section 04 — A Project That Grew
│   ├── "Started as:" projectStory.startedAs
│   ├── "Grew to include:" projectStory.grewToInclude[] (list)
│   └── "Became important at:" projectStory.becameImportantAt
│
├── Section 05 — The AI Chapter
│   ├── philosophy.transition (heading quote)
│   ├── philosophy.areas[] (bulleted list)
│   └── philosophy.goal
│
└── Section 06 — My Philosophy
    ├── philosophy.primary (emphasized)
    └── philosophy.supporting (if present)
```

---

## Data Access Pattern

**Storage**: Component class properties (no services, no HTTP).

```typescript
// about-page.component.ts
export class AboutPageComponent {
  protected readonly pageTitle = 'From building software to exploring intelligence.';

  protected readonly descriptors = [
    'Software Engineer',
    'Systems Builder',
    'AI Explorer'
  ];

  protected readonly engineeringStages: EngineeringJourneyStage[] = [
    // Five stages...
  ];

  protected readonly focusAreas: FocusArea[] = [
    // Three areas...
  ];

  protected readonly projectStory: ProjectGrowthStory = { /* ... */ };

  protected readonly aiDirection: AIDirection = { /* ... */ };

  protected readonly philosophy: CorePhilosophy = {
    primary: "I don't just want to build AI. I want to build useful systems with AI.",
    supporting: "Always learning. Always building."
  };
}
```

---

## Validation Rules

- **No `any` types**: All properties must have explicit TypeScript types.
- **Immutability**: All data properties are `protected readonly` (no mutations).
- **Word count**: Total visible text (titles, descriptions, labels) must be 300–400 words.
- **No API calls**: All data is static; no HTTP requests.
- **No state**: Component has no `@State()`, no services, no external dependencies beyond Angular core.

---

## Responsive Considerations

- **Titles and headings** scale with CSS `clamp()` for responsive typography.
- **Sections** use CSS Grid/Flexbox for layout adaptation at breakpoints.
- **No data restructuring**: Same data served to desktop, tablet, and mobile layouts.
- **Text content** remains concise to fit narrow viewports without horizontal scroll.

---

## Accessibility Notes

- **Semantic structure**: Headings (`h1`, `h2`, `h3`) follow hierarchy.
- **No color-only meaning**: All information communicated through text; color is decorative support only.
- **Labels and captions**: `aria-label` provided for visual decorations (SVG, dividers).
- **Focus management**: Interactive elements (if any) have visible focus states.
- **Reduced motion**: CSS media query disables animations when `prefers-reduced-motion: reduce`.

---

## Summary

**Data Model Type**: Flat, hierarchical content objects  
**Storage**: Component class properties  
**Mutation**: None (readonly)  
**Type Safety**: Full TypeScript types for all entities  
**Validation**: ESLint + build-time checks + manual word count verification  

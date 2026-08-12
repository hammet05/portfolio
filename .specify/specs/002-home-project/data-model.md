# Data Model - 002-home-project

## Entity: HomePageDefinition

- Purpose: Define the complete Home composition and section ordering.
- Fields:
  - routePath: string (`/`)
  - sectionOrder: string[] (`hero`, `engineering-focus`, `selected-work`, `engineering-journey`, `technology-stack`, `final-cta`)
  - staticContentOnly: boolean
  - githubPagesCompatible: boolean
- Validation rules:
  - Section order must match specification order exactly.
  - Static-content-only constraint must remain true for this spec.

## Entity: HeroSection

- Purpose: Top-of-page professional identity, message, and primary actions.
- Fields:
  - eyebrow: string
  - headingLines: string[]
  - supportingText: string
  - primaryAction: CtaAction
  - secondaryAction: CtaAction
  - visualMode: enum (`svg`, `css`, `hybrid`)
- Validation rules:
  - Includes architecture visual and both CTAs.
  - Preserves keyboard accessibility and visible focus.

## Entity: EngineeringFocusCard

- Purpose: Structured representation of one focus area.
- Fields:
  - title: string
  - highlights: string[]
  - technologySummary: string
  - order: number
- Validation rules:
  - Exactly 3 cards in defined order.

## Entity: SelectedWorkPreview

- Purpose: Presentation-only preview card for selected work evidence.
- Fields:
  - name: string
  - category: string
  - summary: string
  - technologySummary: string
  - anchorId: string
- Validation rules:
  - Exactly 3 previews.
  - No runtime backend/AI integration.

## Entity: JourneyNarrative

- Purpose: Communicate progression to applied AI.
- Fields:
  - steps: string[]
  - supportingText: string
- Validation rules:
  - Steps preserve continuity from software engineering to applied AI.

## Entity: TechnologyStackGroup

- Purpose: Group stack items by capability domain.
- Fields:
  - groupName: enum (`Backend`, `Frontend`, `Real-time`, `AI`, `DevOps`, `Database`)
  - items: string[]
  - displayOrder: number
- Validation rules:
  - All 6 groups are present.
  - Concise, non-exhaustive lists only.

## Entity: FinalCtaSection

- Purpose: Closing message and conversion actions.
- Fields:
  - heading: string
  - supportingLines: string[]
  - actions: CtaAction[]
  - professionalLinks: ExternalLink[]
- Validation rules:
  - Includes View Projects and Download CV actions.
  - Includes GitHub and LinkedIn profile links.

## Entity: CtaAction

- Purpose: Route/anchor/download action metadata.
- Fields:
  - label: string
  - actionType: enum (`anchor`, `asset-download`, `external-link`)
  - target: string
- Validation rules:
  - Future-feature actions use meaningful anchors until real routes exist.
  - Download target must resolve under `/portfolio/` deployment path.

## Entity: ExternalLink

- Purpose: Professional outbound profile links.
- Fields:
  - platform: enum (`GitHub`, `LinkedIn`)
  - url: string
- Validation rules:
  - Must use real profile URLs.

## Entity: AccessibilityMotionPolicy

- Purpose: Cross-page non-functional quality requirements.
- Fields:
  - keyboardNavigable: boolean
  - visibleFocus: boolean
  - reducedMotionSupport: boolean
  - semanticHeadingHierarchy: boolean
  - mobileNoHorizontalScroll: boolean
- Validation rules:
  - All flags must be true to satisfy AC-009 and AC-008.

## Relationships

- `HomePageDefinition` contains `HeroSection`, `JourneyNarrative`, `FinalCtaSection`, many `EngineeringFocusCard`, many `SelectedWorkPreview`, and many `TechnologyStackGroup`.
- `FinalCtaSection.actions` references `CtaAction`.
- `FinalCtaSection.professionalLinks` references `ExternalLink`.
- `AccessibilityMotionPolicy` applies globally to all interactive sections.

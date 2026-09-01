# Data Model - 001-bootstrap-project

## Entity: ApplicationShellDefinition

- Purpose: Define global layout responsibilities and interaction rules.
- Fields:
  - id: string (`app-shell-v1`)
  - headerComponent: string (`site-header`)
  - mainOutletType: string (`router-outlet`)
  - footerComponent: string (`site-footer`)
  - mobileNavigationComponent: string (`mobile-navigation`)
  - mobileBreakpointPx: number (`1024`)
  - keyboardAccessible: boolean
  - focusVisibleRequired: boolean
- Validation rules:
  - `mobileBreakpointPx` must equal 1024 for this spec.
  - Header and footer must be rendered on `/`.
  - Navigation controls must include accessible names.
- State transitions:
  - Mobile navigation state: `closed -> open -> closed`.

## Entity: BootstrapRouteDefinition

- Purpose: Constrain bootstrap routing to initial scope.
- Fields:
  - routePath: string (`/`)
  - routeComponent: string (`home-bootstrap`)
  - finalFeatureRoutesEnabled: boolean (must be false)
  - activeRouteAwareness: boolean
- Validation rules:
  - Only `/` route is active in bootstrap.
  - About/Experience/Projects/AI Lab/Contact routes are excluded.

## Entity: StyleTokenSet

- Purpose: Centralize foundational design tokens consumed by shell and shared UI.
- Fields:
  - tokenFiles: string[] (`_tokens.scss`, `_typography.scss`, `_layout.scss`, `_utilities.scss`)
  - semanticColorTokens: map<string, string>
  - typographyScaleTokens: map<string, string>
  - spacingScaleTokens: map<string, string>
  - radiusTokens: map<string, string>
  - shadowTokens: map<string, string>
  - reducedMotionSupport: boolean
- Validation rules:
  - Repeated UI values must map to semantic tokens.
  - Components must avoid arbitrary repeated raw hex/px values.

## Entity: SharedUiComponentDefinition

- Purpose: Define in-scope shared components for bootstrap.
- Fields:
  - componentName: enum (`button`, `icon-button`, `section-header`)
  - usesTokens: boolean
  - accessibilityContract: string
  - supportsKeyboardInteraction: boolean
- Validation rules:
  - Only listed shared components are in scope.
  - `icon-button` must expose accessible label for interactive icon use.

## Entity: DeliveryWorkflowDefinition

- Purpose: Define local and CI delivery behavior for bootstrap.
- Fields:
  - workflowFile: string (`.github/workflows/deploy.yml`)
  - installCommand: string (`npm ci`)
  - buildCommand: string (`npm run build` plus repository base href)
  - lintCommand: string (`npm run lint` when configured)
  - formatCheckCommand: string (`npm run format:check` when configured)
  - pagesArtifactPath: string (`portfolio_app/dist/portfolio_app/browser`)
  - baseHrefStrategy: enum (`dynamic-from-repository-context`)
- Validation rules:
  - CI must run in `portfolio_app`.
  - Build artifact must be published to GitHub Pages actions.
  - `package.json` and `package-lock.json` must remain synchronized.

## Relationships

- `ApplicationShellDefinition` consumes `StyleTokenSet` and `SharedUiComponentDefinition`.
- `BootstrapRouteDefinition` is rendered inside `ApplicationShellDefinition.mainOutletType`.
- `DeliveryWorkflowDefinition` validates deployability of `BootstrapRouteDefinition` and shell assets.

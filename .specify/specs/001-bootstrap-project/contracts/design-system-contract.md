# Contract: Design System Foundation

## Purpose

Define how style tokens and initial shared UI components must be structured and consumed.

## Token File Contract

Required files under `portfolio_app/src/styles/`:
- `_tokens.scss`
- `_typography.scss`
- `_layout.scss`
- `_utilities.scss`
- `styles.scss` imports and composes the token layers

## Token Usage Contract

- Repeated visual values must use semantic tokens.
- Colors, spacing, radii, shadows, and typography scale are centrally defined.
- Components avoid repeating arbitrary raw values.

## Shared UI Component Contract

Allowed shared components in this bootstrap:
- `button`
- `icon-button`
- `section-header`

Rules:
- Components consume semantic tokens.
- `icon-button` requires accessible naming for interactive icon use.
- No additional shared UI abstractions unless a real reuse need appears.

## Tailwind and Lucide Contract

- Tailwind is configured as foundational styling utility.
- Lucide is the primary icon system.
- Decorative icons remain hidden from assistive technologies.

# Contract: Home Route and Section Composition

## Purpose

Define mandatory route behavior and Home section composition.

## Route Contract

- Home is rendered at `/` within the existing app shell.
- Feature route wiring must transition root rendering from bootstrap placeholder to Home feature.

## Section Order Contract

Home sections must appear in this exact order:
1. Hero
2. Engineering Focus
3. Selected Work
4. Engineering Journey
5. Technology Stack
6. Final CTA

## Placeholder Navigation Contract

- `Explore my work` -> `#selected-work`
- `View projects` -> `#selected-work`
- No fake future-feature routes, no dead links, no coming-soon pages

## Scope Contract

- Selected Work remains presentation-only.
- No backend/API/AI runtime integrations.

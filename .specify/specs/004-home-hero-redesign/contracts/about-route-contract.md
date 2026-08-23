# Home Hero Integration Contract

## Boundary

- Feature: `004-home-hero-redesign`
- Branch: `feature/002-home-hero-redesign`
- Integration boundary: existing `portfolio_app/src/app/features/home/home-page.component.html` element `.hero__visual`

## Contract

1. The Home route and application shell remain unchanged.
2. The Hero copy, heading, summary, actions, and navigation remain unchanged.
3. Only the contents and directly related styling of `.hero__visual` may change.
4. The visual is decorative and does not add a new semantic heading, link, or interaction.
5. The implementation uses no external asset URL, so the repository base path remains supported.

## Acceptance

A Home page consumer can continue to render the existing Hero structure while receiving the new neural SVG visual in the same visual slot.

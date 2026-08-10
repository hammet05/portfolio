# Contract: App Shell and Routing

## Purpose

Define the behavioral contract for the bootstrap global shell and initial route.

## Required Components

- `app-shell`
- `site-header`
- `main` region containing `router-outlet`
- `site-footer`
- `mobile-navigation`

## Route Contract

- Active route scope is limited to `/`.
- Final feature routes are excluded in bootstrap.
- Header route awareness is present for active state styling/semantics.

## Accessibility Contract

- Interactive controls have accessible names.
- Keyboard navigation reaches header nav and mobile menu toggle.
- Focus indicators are visible.
- Mobile toggle exposes `aria-expanded` and `aria-controls` where applicable.
- Decorative icons are hidden from assistive technology.

## Responsive Contract

- Mobile/desktop navigation switch occurs at 1024px.
- Viewport changes while menu is open must keep state behavior predictable.
- No unnecessary duplication of shell components between breakpoints.

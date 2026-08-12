# Contract: Home Accessibility, Motion, and Responsiveness

## Purpose

Define required non-functional UX behavior for accessibility and responsive design.

## Accessibility Contract

- Semantic landmarks and heading hierarchy are required.
- All interactive controls are keyboard reachable.
- Visible focus indicators are required.
- Interactive labels must be meaningful.
- Decorative visuals must not be announced unnecessarily.
- Practical WCAG 2.2 AA contrast targets must be maintained.

## Motion Contract

- Motion must be subtle and purposeful.
- `prefers-reduced-motion: reduce` must be respected.
- No third-party animation framework is allowed.

## Responsive Contract

- Desktop supports two-column hero and multi-column cards when appropriate.
- Tablet reduces/stacks columns.
- Mobile uses single-column layout with comfortable tap targets.
- No horizontal scrolling at mobile sizes.

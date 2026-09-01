# Research: Home Hero Neural Face Redesign

## Decision 1: Inline SVG at the existing visual boundary

- **Decision**: Replace only the contents of `.hero__visual` with a maintainable inline SVG using a responsive `viewBox`, `width: 100%`, `height: 100%`, and `preserveAspectRatio="xMidYMid meet"`.
- **Rationale**: The current Home Hero already owns the visual column, and inline SVG preserves proportions, scales without asset-path assumptions, and satisfies the requirement to avoid raster images and new libraries.
- **Alternatives considered**: An external SVG asset would add a path/loading boundary; a bitmap would lose scalability and violate the specification; CSS-only drawing would be harder to maintain for profile geometry and connections.

## Decision 2: Simplified Home-specific neural composition

- **Decision**: Build a smaller Home-specific SVG that reuses the approved About visual language: right-facing profile geometry, concentrated facial nodes, sparse peripheral nodes, fine connections, luminous points, and restrained blue-to-purple accents.
- **Rationale**: Copying a large unrelated illustration would add unnecessary payload and complexity. A focused composition fits the existing Hero column and preserves the visual relationship without redesigning the About page.
- **Alternatives considered**: Reusing the entire About implementation would make the Home Hero unnecessarily heavy; a generic particle network would not communicate a human profile; a new library is prohibited and unnecessary.

## Decision 3: CSS-only restrained motion

- **Decision**: Animate selected SVG classes with short, slow CSS keyframes for node opacity/radius, connection opacity, and glow. Disable these animations in `@media (prefers-reduced-motion: reduce)`.
- **Rationale**: CSS is already available, adds no runtime dependency, works with a static fallback, and provides a granular accessibility override.
- **Alternatives considered**: JavaScript animation and visualization libraries add complexity and dependencies; SVG SMIL animation is less consistent with the existing SCSS motion strategy and harder to disable centrally.

## Decision 4: Decorative accessibility treatment

- **Decision**: Mark the SVG itself `aria-hidden="true"` and use a neutral visual-container label or no label, ensuring the Hero heading, summary, and links remain the accessible source of meaning.
- **Rationale**: The visualization is decorative, so it must not add misleading content to the screen-reader reading order.
- **Alternatives considered**: A descriptive image role would incorrectly present decorative artwork as meaningful content; a visible caption is outside this feature's scope.

## Decision 5: Existing tokens and responsive layout

- **Decision**: Use existing global color and layout tokens, with only narrowly scoped custom properties for neural opacity, line width, and glow where needed. Keep the existing `1.25fr .75fr` desktop grid and adapt the SVG to the current stacked layout below the desktop breakpoint.
- **Rationale**: This preserves the current Home composition, design system, and responsive behavior while allowing the visualization to occupy its available column.
- **Alternatives considered**: A second token system would violate the constitution; changing the Hero grid would expand scope and risk moving or covering existing copy and CTAs.

## Validation Research

- **Available commands**: `npm run lint`, `npm run build`, `npm run build:prod`, and `npm run test` are defined in `portfolio_app/package.json`.
- **Visual checks**: Review the Home Hero at desktop, tablet, and mobile sizes; compare the face proportions, density, occupancy, glow, and negative space against `.specify/specs/003-about-me/mockups/about-me-approved.png`; verify reduced motion and no horizontal overflow.
- **Base path**: The SVG will be inline and use no root-hosted asset URLs, so it does not introduce a GitHub Pages base-path dependency.

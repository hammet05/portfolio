# Home Hero Motion Contract

## Default Motion

- Motion is CSS-only and decorative.
- Node pulsing, connection opacity changes, and glow changes are slow and restrained.
- Motion does not control content visibility or comprehension.
- No JavaScript animation loop, canvas, or third-party animation library is introduced.

## Reduced Motion

Under `prefers-reduced-motion: reduce`:

- Continuous neural SVG animations are disabled or substantially reduced.
- The static profile, nodes, connections, and luminous accents remain visible.
- Hero text and actions are unaffected.

## Fallback

If CSS animation or SVG filters are unavailable, the static SVG composition remains valid and recognizable.

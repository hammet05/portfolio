# Data Model: Home Hero Neural Face Redesign

This feature has no persisted or API-backed data. The model describes the static visual composition and its constraints.

## HomeHeroVisual

Represents the existing `.hero__visual` region in the Home Hero.

| Field | Type | Constraints |
|---|---|---|
| container | DOM element | Existing Home Hero visual boundary; no new page-level container |
| accessibility | decorative | SVG excluded from assistive technology; Hero copy remains semantic |
| layout | responsive | Follows existing desktop two-column and mobile stacked behavior |
| content | NeuralFaceVisualization | Exactly one inline SVG composition |

## NeuralFaceVisualization

Represents the decorative neural human profile.

| Field | Type | Constraints |
|---|---|---|
| orientation | fixed visual property | Right-facing human side profile |
| geometry | SVG paths/lines | Fine, transparent profile and architectural connections; no solid silhouette |
| nodes | SVG circles | Dense around facial structure; medium transition cluster; sparse periphery |
| connections | SVG lines/paths | Thin geometric links with lower peripheral opacity |
| accents | SVG circles/gradients | Small luminous points with blue-dominant and controlled blue-to-purple treatment |
| sizing | SVG viewBox | Proportional scaling with `preserveAspectRatio`; no distortion or overflow |
| motion | CSS enhancement | Slow, restrained animation only; static composition always available |
| identifiers | SVG IDs | Namespaced within Home to avoid collisions with other inline SVGs |

## NeuralVisualTokenSet

Feature-specific visual properties only where the global token set does not express the SVG treatment.

| Token | Purpose | Constraint |
|---|---|---|
| `--neural-opacity` | Base visual opacity | Must preserve text dominance and contrast |
| `--neural-line-width` | Fine connection/profile stroke | Must remain lightweight at desktop and mobile sizes |
| `--neural-glow` | Subtle atmospheric glow | Must not become a dominant gradient or blur field |
| `--neural-node-size` | Base node radius | Must preserve recognizable node density without visual noise |

## State Behavior

- **Static/default**: SVG geometry, nodes, connections, and accents render without JavaScript.
- **Motion enabled**: Selected visual groups receive slow CSS keyframes.
- **Reduced motion**: Continuous non-essential animations are disabled or substantially reduced; static visual remains visible.
- **Small viewport**: SVG follows the existing stacked layout, scales proportionally, and does not cover Hero copy or actions.

# Contract: About Page Responsive Design

**Date**: 2026-08-18  
**Scope**: Breakpoint behavior, layout adaptation, typography scaling

---

## Responsive Design Strategy

### Mobile-First Approach

The About page CSS is written for mobile (375px) first, then enhanced for larger screens:

```scss
// Mobile (375px) — default styles
.about-page {
  padding: var(--space-4);
  // ...
}

// Tablet (768px) — enhanced layout
@media (min-width: 768px) {
  .about-page {
    padding: var(--space-8);
  }
}

// Desktop (1024px-1280px) — full layout
@media (min-width: 1024px) {
  .about-page {
    // more enhancements
  }
}
```

### Design Token Scaling

Typography and spacing use CSS `clamp()` for fluid scaling between breakpoints:

```scss
h1 {
  font-size: clamp(2.8rem, 5vw, 5.25rem);
  // 2.8rem on mobile, scales with viewport, capped at 5.25rem on large screens
}

h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  // Similar scaling for section headings
}
```

---

## Breakpoint Specifications

### Mobile (375px – 767px)

**Characteristics**:
- Single column layout
- Full viewport width with padding
- Smaller typography
- Compact spacing
- Touch-friendly tap targets (min 44x44px)

**Layout Examples**:
```scss
// Single column
.journey-timeline {
  display: grid;
  grid-template-columns: 1fr; // Single column
  gap: var(--space-4);
}

// Full-width sections
.about-section {
  padding: var(--space-4) 0;
}

// Responsive heading size
h1 {
  font-size: clamp(2.8rem, 5vw, 5.25rem);
  // At 375px: ~2.8rem
  // Scales up with viewport
}
```

**Navigation**:
- Mobile navigation drawer or collapsed menu (if implemented)
- Touch-optimized button sizes

**Content Constraints**:
- No horizontal scrolling
- Text wraps naturally
- Images scale to container width
- Lists stack vertically

### Tablet (768px – 1023px)

**Characteristics**:
- Two-column grid for multi-item sections
- Medium typography sizes
- Balanced padding
- Readable line lengths

**Layout Examples**:
```scss
// Two-column grid
.focus-areas {
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns
  gap: var(--space-6);
}

// Responsive heading
h1 {
  // At 768px: ~3.5rem
  // Continues scaling with viewport
}

// Medium padding
.about-section {
  padding: var(--space-6) 0;
}
```

**Navigation**:
- Full horizontal navigation visible (if not on mobile)
- Links easily clickable/tappable

**Typography**:
- Body text: 16px – 18px
- Headings scale proportionally
- Line height: 1.6 – 1.7 for readability

### Desktop (1024px – 1280px+)

**Characteristics**:
- Three-column grid for multi-item sections
- Large typography with `clamp()` cap
- Generous padding and whitespace
- Maximum content width

**Layout Examples**:
```scss
// Three-column grid
.focus-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Auto 3+ columns
  gap: var(--space-6);
}

// Max-width container
.about-page {
  max-width: var(--container-max-width); // e.g., 1200px
  margin-inline: auto;
}

// Typography at cap
h1 {
  // At 1280px: capped at 5.25rem
}
```

**Navigation**:
- All links visible and accessible
- Plenty of whitespace around interactive elements

**Typography**:
- Body text: 18px
- Headings: Large, using `clamp()` cap
- Line height: 1.7 for generous spacing

---

## CSS Grid and Flexbox Patterns

### Section Layout (Hero/Intro)
```scss
.about-intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  
  h1 {
    font-size: clamp(2.8rem, 5vw, 5.25rem);
  }
}
```

**Responsive Behavior**:
- Mobile: Single column, text stacks vertically
- Desktop: Same layout (single column is intentional for intro)

### Timeline Layout (Engineering Journey)
```scss
.journey-timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
```

**Responsive Behavior**:
- Mobile (375px): 1 column, 5 stages stack vertically
- Tablet (768px): 2 columns, alternating rows
- Desktop (1024px+): 3–5 columns depending on available width

### Card Layout (Focus Areas)
```scss
.focus-areas {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Responsive Behavior**:
- Mobile (375px): 1 card per row, 3 total rows
- Tablet (768px): 2 cards per row
- Desktop (1024px+): 3 cards per row

---

## Typography Scaling

### Headings

| Level | Mobile (375px) | Tablet (768px) | Desktop (1024px) | Formula |
|-------|---|---|---|---|
| H1 | 2.8rem | ~3.8rem | 5.25rem | `clamp(2.8rem, 5vw, 5.25rem)` |
| H2 | 2rem | ~2.4rem | 2.8rem | `clamp(2rem, 3vw, 2.8rem)` |
| H3 | 1.25rem | 1.35rem | 1.5rem | (no clamp, fixed) |
| Body | 1rem (16px) | 1.1rem | 1.125rem | (font-size set per design tokens) |

### Line Height
- Headings: 1.1 – 1.2 (tight, designed for size)
- Body: 1.6 – 1.7 (readable, generous)
- Lists: 1.7 (generous spacing for scannability)

---

## Container Constraints

### Max-Width Pattern

```scss
.about-section {
  max-width: var(--container-max-width); // e.g., 1200px
  margin-inline: auto; // Center container
  width: 100%; // Full width up to max
  padding: var(--space-8) 0; // Top/bottom padding
}
```

**Responsive Behavior**:
- Mobile (375px): Full width minus padding (375px - 2×padding)
- Tablet (768px): Full width up to max-width
- Desktop (1024px+): Centered, max-width enforced

### Padding Scaling

```scss
// Mobile padding
.about-page {
  padding: var(--space-4); // e.g., 16px on all sides
}

// Tablet padding
@media (min-width: 768px) {
  .about-page {
    padding: var(--space-6); // e.g., 24px
  }
}

// Desktop padding
@media (min-width: 1024px) {
  .about-page {
    padding: var(--space-8); // e.g., 32px
  }
}
```

---

## Responsive Components

### Focus Area Cards
```scss
.focus-card {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  
  // Same card at all breakpoints
  // Responsive layout handled by parent grid
}
```

**At 375px**: 1 card takes full width
**At 768px**: 2 cards, each 50% width
**At 1024px**: 3 cards, each 33% width

### Project Narrative Sections
```scss
.project-narrative {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--space-10);
  }
}

.narrative-part {
  flex: 1;
}
```

**At 375px**: 3 parts stack vertically
**At 768px+**: 3 parts in single row, equal width

---

## Testing Breakpoints

### Viewport Sizes to Test

| Device | Viewport | Breakpoint | Focus |
|--------|----------|-----------|-------|
| Mobile | 375px | Mobile | Single column, touch targets |
| Tablet (portrait) | 600px | Tablet | 2-column grids working |
| Tablet (landscape) | 768px | Tablet | Full tablet layout |
| Desktop | 1024px | Desktop | 3-column grids |
| Large desktop | 1280px | Desktop max | Typography cap reached |

### Browser DevTools Testing

```bash
npm start
# Open http://localhost:4200/about
# Press F12 (DevTools)
# Press Ctrl+Shift+M (Device Toolbar)
# Test sizes: 375, 600, 768, 1024, 1280
# Check: No horizontal scroll, content readable, layout correct
```

### No Horizontal Scrolling Requirement

At ALL breakpoints, the page must NOT have horizontal scrolling:
- Content must fit within viewport width
- Padding and margins must be included in width calculation
- Images and cards must scale or wrap appropriately

**Validation**:
```javascript
// In browser console at each breakpoint
document.body.scrollWidth === window.innerWidth // Should be true
```

---

## Typography Responsive Example

### Before: Fixed Size
```scss
h1 {
  font-size: 3rem;  // Same everywhere, too big on mobile, too small on desktop
}
```

### After: Responsive with Clamp
```scss
h1 {
  font-size: clamp(2.8rem, 5vw, 5.25rem);
  // Mobile (375px): 2.8rem (min)
  // Medium (750px): ~3.75rem (5% of 750px)
  // Desktop (1050px): 5.25rem (max)
  // Ultra-wide (2000px+): 5.25rem (max, no overflow)
}
```

---

## Flexible Spacing with CSS Variables

### Token-Based Spacing

All spacing uses `var(--space-*)` tokens (e.g., `var(--space-4)`, `var(--space-6)`, `var(--space-8)`):

```scss
.about-section {
  margin-bottom: var(--space-12);
  padding: var(--space-8) 0;
  gap: var(--space-6);
}
```

**Benefit**: Change spacing globally by updating token values in `_tokens.scss`; all components scale proportionally.

---

## Accessibility at All Breakpoints

### Touch Targets (Mobile)
- Minimum 44×44px tap area for interactive elements
- Links and buttons have adequate spacing (not cramped)
- Finger-friendly, not too small on mobile

### Text Readability
- Line length on desktop: 60–80 characters (optimal reading width)
- Line height: 1.6–1.7 (generous at all sizes)
- Contrast: WCAG AA (4.5:1) for all text on background

### Focus Visibility
- Visible focus state at all breakpoints
- Focus indicator is not lost on smaller screens
- Keyboard navigation remains accessible

### Reduced Motion
- `@media (prefers-reduced-motion: reduce)` applies at all breakpoints
- Animations disabled regardless of device size

---

## Edge Cases

### Very Narrow (< 375px)
- Not officially supported (older phones, unusual configurations)
- Content may not render perfectly, but should remain readable
- No internal requirement to support below 375px

### Very Wide (> 1280px)
- Typography and max-width caps prevent oversized content
- Extra whitespace on ultra-wide displays is acceptable
- No responsive adjustment needed beyond 1280px

### Orientation Change (Mobile)
- Landscape mobile (667px width) handled by tablet breakpoint (768px minimum)
- On landscape mobile, layout may behave like tablet (acceptable)

### Zoom
- User can zoom in/out in browser
- Content should remain readable when zoomed to 200%
- No JavaScript zoom detection needed

---

## Testing Checklist

### Mobile (375px)
- [ ] No horizontal scrolling
- [ ] Single-column layouts correct
- [ ] Typography readable (min 16px)
- [ ] Touch targets adequate
- [ ] Images scale without distortion
- [ ] Lists stack vertically
- [ ] Cards stack vertically

### Tablet (768px)
- [ ] No horizontal scrolling
- [ ] Two-column grids working
- [ ] Spacing feels balanced
- [ ] Typography clear
- [ ] Multiple cards visible side-by-side

### Desktop (1024px–1280px)
- [ ] No horizontal scrolling
- [ ] Three-column grids visible
- [ ] Max-width container centered
- [ ] Typography at intended size
- [ ] Generous whitespace around content

### Cross-Cutting
- [ ] All breakpoints pass responsive design test
- [ ] Scroll-to-top works (no scroll issues)
- [ ] Animations smooth at all sizes
- [ ] Focus states visible at all sizes
- [ ] Reduced motion respected at all sizes

---

## Summary

| Aspect | Mobile (375px) | Tablet (768px) | Desktop (1024px+) |
|--------|---|---|---|
| **Columns** | 1 | 2 | 3 |
| **H1 size** | 2.8rem | ~3.8rem | 5.25rem |
| **Padding** | var(--space-4) | var(--space-6) | var(--space-8) |
| **Gap** | var(--space-4) | var(--space-6) | var(--space-6) |
| **Max-width** | 100% | var(--container-max-width) | var(--container-max-width) |
| **Typography** | Readable, compact | Balanced | Generous, grand |


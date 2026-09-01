# Contract: About Page Animation & Motion

**Date**: 2026-08-18  
**Scope**: Intersection Observer behavior, CSS animation mechanics, reduced motion handling

---

## Animation Strategy

### Mechanism: Intersection Observer + CSS Transitions

The About page uses a two-layer animation approach:

1. **Layer 1: Viewport Detection** (TypeScript)
   - Intersection Observer watches elements for entering viewport
   - When element enters: Add `.in-view` CSS class
   - When element leaves: Optionally remove class (for re-trigger on scroll back)

2. **Layer 2: Visual Transition** (CSS)
   - CSS defines entrance animation via `transition` property
   - `.in-view` state applies `opacity: 1` and `transform: translateY(0)`
   - Initial state: `opacity: 0` and `transform: translateY(10px)` (slide up + fade)

---

## Intersection Observer Implementation

### JavaScript Setup

**In component `ngAfterViewInit()`**:
```typescript
private observer?: IntersectionObserver;

ngAfterViewInit(): void {
  this.setupAnimationObserver();
}

ngOnDestroy(): void {
  this.observer?.disconnect();
}

private setupAnimationObserver(): void {
  this.observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
      }
    });
  });

  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach((el) => this.observer?.observe(el));
}
```

### Observer Configuration
- **Root**: Viewport (default)
- **Rootmargin**: `"0px"` (trigger when element enters viewport)
- **Threshold**: `[0]` (trigger as soon as any pixel is visible)

### HTML Markup
Elements that should animate must have `data-animate` attribute:
```html
<section data-animate>
  <h1>Animated heading</h1>
</section>
```

**Elements with Animation**:
1. `.about-intro` — Page title and descriptors
2. `.engineering-journey` — Engineering timeline section
3. `.journey-stage` — Each engineering stage (5 total)
4. `.what-i-build` — Focus areas section
5. `.focus-card` — Each focus area card (3 total)
6. `.project-story` — Project narrative section
7. `.ai-chapter` — AI direction section
8. `.philosophy` — Closing philosophy section

---

## CSS Animation Specification

### Base Animation State

All `[data-animate]` elements start with:
```scss
[data-animate] {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

**Initial Appearance**:
- Fully transparent (`opacity: 0`)
- Positioned 10px lower than final position (`translateY(10px)`)
- Ready for transition when `.in-view` class is added

### Active Animation State

When element enters viewport, `.in-view` class is added:
```scss
[data-animate].in-view {
  opacity: 1;
  transform: translateY(0);
}
```

**Final Appearance**:
- Fully opaque (`opacity: 1`)
- In final position (`translateY(0)`)
- Transition duration: 0.6 seconds
- Easing: `ease` (slow start/end, faster middle)

### Transition Timing
- **Duration**: 600ms (0.6s) per element
- **Easing function**: `ease` (CSS default, ~25% slow-in + 25% slow-out)
- **Stagger**: Natural stagger from Intersection Observer observing elements in order

---

## Reduced Motion Support

### User Preference Detection

CSS media query `prefers-reduced-motion: reduce` detects when user has enabled "Reduce Motion" in accessibility settings.

**System Settings** (where users enable this):
- **Windows 11**: Settings > Accessibility > Display > Show animations
- **macOS**: System Preferences > Accessibility > Display > Reduce motion
- **iOS**: Settings > Accessibility > Motion > Reduce Motion
- **Android**: Settings > Accessibility > Visibility > Remove animations

### Animation Disable Implementation

```scss
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    transition: none;
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Behavior When Reduced Motion is Enabled**:
- All `transition` properties are removed (instant, no animation)
- Elements appear immediately at full opacity and final position
- No motion, no delay, no visual animation
- Content is fully readable and accessible instantly

### No JavaScript Override
- Reduced motion is handled entirely in CSS
- No JavaScript code checks or disables Intersection Observer
- This allows graceful degradation: content is always visible, animations are just removed

---

## Stagger Effect

### Automatic Stagger

Elements are observed and animated in DOM order. Natural stagger occurs because:

1. **First element** enters viewport first
2. **Intersection Observer** adds `.in-view` class
3. **CSS transition** runs 0.6s
4. **User scrolls** page downward
5. **Next element** enters viewport
6. Process repeats

**Visual Effect**:
- Heading appears first (0.0s)
- Description appears 100-200ms after (as user continues scrolling)
- Each section appears as it becomes visible in viewport
- No hardcoded stagger delay needed

### Example Sequence
```
t=0.0s   → About heading enters, starts animation
t=0.2s   → Descriptors enter, start animation (heading still animating)
t=0.4s   → Engineering section enters (heading ~200ms into animation)
t=0.6s   → First stage appears (heading finished)
t=0.8s   → Next stage enters
...
```

---

## Performance Characteristics

### CPU & Memory
- **Intersection Observer**: Highly optimized, low CPU cost
- **CSS Transitions**: GPU-accelerated (uses `opacity` and `transform` only)
- **No JavaScript animations**: No requestAnimationFrame loops
- **Memory**: Observer is disconnected on component destroy

### Rendering Pipeline
- **Layout**: Only initial element layout (no animation reflows)
- **Paint**: Single paint for initial state
- **Composite**: GPU handles opacity and transform changes
- **No repaints**: Animations trigger composite updates only (efficient)

### Browser Compatibility
- **Intersection Observer**: All modern browsers (IE 11 with polyfill, not needed for this project)
- **CSS Transforms**: All modern browsers
- **CSS Media Queries**: All browsers
- **No fallback needed**: Content is visible with or without animation

---

## Edge Cases

### Scrolling Rapidly
- If user scrolls very fast, elements may already be in viewport when Observer checks
- Result: `.in-view` class added immediately, animation runs anyway
- Content is never invisible; animations may be very quick or skip

### Scrolling Upward
- Current implementation does not remove `.in-view` class when element leaves viewport
- Result: Once animated in, element stays visible (does not re-animate on re-entering)
- This is intentional for performance (see below)

### Reordering Animation Behavior
- If elements are observed in order (top to bottom), animation order is natural
- No random or out-of-order animation occurs
- Aligns with reading order (accessibility benefit)

### Very Slow Scroll
- User scrolls pixel-by-pixel very slowly
- Intersection Observer still triggers as element enters viewport
- Animation runs at normal speed (0.6s), independent of scroll speed
- Content becomes visible and animated in ~0.6s regardless of scroll speed

### Accessibility Tools
- **Screen readers**: Do not interact with animations (focus management is separate)
- **Keyboard navigation**: Animations do not affect keyboard accessibility
- **Reduced motion enabled**: All animations disabled; content visible instantly

---

## Testing Checklist

### Animation Trigger
- [ ] Scroll page down; sections animate in from bottom as they enter viewport
- [ ] No elements are animated before entering viewport
- [ ] Animation duration is consistent (~0.6s per element)

### Easing Behavior
- [ ] Elements start slowly (ease-in effect)
- [ ] Middle of animation is faster
- [ ] Elements finish slowly (ease-out effect)
- [ ] Total duration is approximately 0.6 seconds

### Reduced Motion
- [ ] Enable "Reduce Motion" in system accessibility settings
- [ ] Reload About page
- [ ] All sections appear instantly (no animation)
- [ ] All content is visible and readable without animation

### Browser Tools
- [ ] DevTools Performance tab shows no excessive repaints
- [ ] DevTools Rendering tab shows composite operations (efficient)
- [ ] No console warnings related to animation

### Different Devices
- **Desktop (1280px)**: Animations smooth at 60fps
- **Tablet (768px)**: Animations smooth at 60fps
- **Mobile (375px)**: Animations smooth at 60fps (may vary based on device capability)

---

## Interaction with Other Features

### Router Navigation
- When user navigates from `/about` to another route, component is destroyed
- Intersection Observer is disconnected (`ngOnDestroy()`)
- No memory leaks; state is cleaned up

### Returning to About Page
- User navigates away, then returns to About page
- Component is reinstantiated
- Intersection Observer is set up again
- All elements start with initial animation state (not `.in-view`)
- Animations re-run from the beginning

### Scroll Position
- Angular Router does not preserve scroll position
- Returning to About page starts at top of page
- All elements animate in again as user scrolls

---

## Future Enhancements (Out of Scope)

These are not implemented in current version but noted for reference:

1. **Re-trigger on scroll up**: Remove `.in-view` when element leaves viewport (performance trade-off)
2. **Stagger control**: Add CSS custom properties to control animation delay per element
3. **Parallax scrolling**: More complex animations tied to scroll position (requires `scroll` event listener)
4. **Page load animation**: Animate elements on initial page load without scroll (requires manual trigger)

---

## Summary

| Aspect | Specification |
|--------|---------------|
| Detection | Intersection Observer API |
| Trigger | Element enters viewport |
| Animation | CSS transition on `.in-view` class |
| Duration | 0.6 seconds per element |
| Easing | `ease` (natural acceleration/deceleration) |
| Stagger | Automatic (based on scroll and DOM order) |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables animations |
| Performance | GPU-accelerated, low CPU cost |
| Browser support | Modern browsers (no polyfills needed) |
| Cleanup | Observer disconnected on component destroy |


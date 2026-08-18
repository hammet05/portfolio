# Contract: About Page Route and Navigation

**Date**: 2026-08-18  
**Scope**: Routing behavior, navigation integration, link handling

---

## Route Definition

### Canonical Route
```
/about
```

### Full URLs
- **Local development**: `http://localhost:4200/about`
- **GitHub Pages**: `https://[username].github.io/portfolio/about`

---

## Route Registration

The About page route is registered in `portfolio_app/src/app/app.routes.ts`:

```typescript
{
  path: 'about',
  component: AboutPageComponent
}
```

### Route Features
- **Lazy loading**: Not applicable (About page is part of main bundle)
- **Guards**: None required (public page)
- **Redirects**: None (direct route)
- **Parameters**: None (static content)

---

## Navigation Integration

### Global Navigation Link

The site header (`app-shell.component`) includes an "About" link:

```typescript
protected readonly links: NavLink[] = [
  { label: 'Home', path: '/', implemented: true },
  { label: 'About', path: '/about', implemented: true },  // ← About page
  // ... other links
];
```

**Link Requirements**:
- `path` must be `/about` (matches route definition)
- `implemented` must be `true` when About component is created
- `label` must be "About" for consistency

### Navigation Behavior
- Clicking "About" in header navigates to `/about`
- Current route is highlighted in navigation when user is on `/about` page
- No page reload; Angular Router handles navigation smoothly

---

## Reachability

### How Users Access About Page

| Method | Path | Result |
|--------|------|--------|
| Navigation menu | Click "About" in header | Navigates to `/about` |
| Direct URL | Visit `/about` in browser | Loads About page component |
| Back button | From About page → back | Navigates to previous page |
| Forward button | To About page from history | Loads About page component |

### Entry Points
1. **Primary**: Header navigation link
2. **Secondary**: Direct URL (user bookmarks, links from external sites)
3. **Tertiary**: Browser back/forward after visiting other pages

---

## URL Behavior

### Base Path Handling

GitHub Pages serves the portfolio under `/portfolio/` subdirectory:
```
https://[username].github.io/portfolio/
```

**Angular Router Configuration**:
- The `index.html` includes `<base href="/portfolio/">` set by build process
- Routes are relative to base path
- `/about` becomes `https://[username].github.io/portfolio/about` automatically

**No Changes Required**: Developers do not need to add base path manually; Angular Router and build pipeline handle this.

---

## Route Transition

### From Home Page → About Page
1. User clicks "About" in header navigation
2. Angular Router activates `AboutPageComponent`
3. App shell stays visible (header, footer unchanged)
4. About page content replaces home page content in `<router-outlet>`

### From About Page → Other Route
1. User clicks another navigation link (e.g., "Home")
2. Angular Router deactivates `AboutPageComponent`
3. New component loads in `<router-outlet>`
4. Scroll position is handled by Angular Router (default: top)

---

## Edge Cases

### Returning to About Page
- If user visits About, navigates away, then returns: Component is reinstantiated (no caching)
- Intersection Observer restarts; animations re-run
- All content is static; no state persists between visits

### Direct URL Access
- User can bookmark `/about` and return directly
- Browser history is preserved for back/forward
- No authentication or redirects required

### Broken Links
- Links to `/about/something` (non-existent sub-routes) are not defined
- Result: Angular Router displays nothing (empty component); optional wildcard redirect not configured
- **Future consideration**: May add wildcard redirect to home or 404 page

---

## Navigation Style Classes

The site header component can apply active/highlighted styles based on current route.

**Implementation** (in site-header component):
```typescript
isActive(path: string): boolean {
  return this.router.url === path;
}
```

**HTML**:
```html
<a [routerLink]="link.path" 
   [class.active]="isActive(link.path)">
  {{ link.label }}
</a>
```

**Expected Behavior**:
- When user is on `/about`, "About" link has `.active` class (highlighted)
- When user navigates away from `/about`, `.active` class is removed

---

## Performance Considerations

### Route Change
- About page component is created and destroyed on each navigation
- No component state is retained between visits
- Intersection Observer is set up on init and torn down on destroy
- Memory is cleaned up automatically

### First Load Performance
- About page loads with main application bundle (not lazy-loaded)
- No additional network requests
- Initial render includes all static content

---

## Accessibility

### Route Announcement
- Screen readers announce page title/heading when About page loads
- First heading (`<h1>`) is read as page context

### Focus Management
- Angular Router does not automatically reset focus
- On navigation, focus remains on clicked element (OK for this use case)
- First interactive element is visible and reachable via keyboard

### Navigation Keyboard Shortcut
- No special keyboard shortcuts for navigation
- Standard Tab key navigates through header links
- Enter/Space activates links

---

## Testing

### Route Existence
```bash
npm start
# Navigate to http://localhost:4200/about
# Verify About page component loads
```

### Navigation Link
```bash
# Verify header "About" link exists
# Verify clicking it navigates to /about
# Verify URL in address bar shows /about
```

### Browser History
```bash
# Navigate: Home → About → Home
# Use back button to return to About
# Verify correct page loads
```

### Direct URL
```bash
# Open new tab
# Enter http://localhost:4200/about directly
# Verify About page loads without navigation
```

---

## Summary

| Aspect | Specification |
|--------|---------------|
| Route path | `/about` |
| Component | `AboutPageComponent` (standalone) |
| Navigation link | Header "About" link |
| Lazy loading | No |
| Guards | None |
| Parameters | None |
| Base path | Handled by Angular + build process |
| Active indicator | `.active` class on link when route is active |
| Re-entrancy | Component reinstantiated on each visit |
| Performance | No performance issues expected |
| Accessibility | Semantic navigation, keyboard accessible |


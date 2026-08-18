# Quickstart: About Me Page Development

**Date**: 2026-08-18  
**Audience**: Developers implementing the About Me feature

---

## Prerequisites

1. **Node.js 18+** and **npm 9+**
2. **Angular CLI** (installed via `npm install -g @angular/cli@latest`)
3. **VS Code** with Angular extensions
4. Repository cloned and branch `feature/003-about` checked out

---

## Setup

### 1. Install Dependencies (if not already done)

```bash
cd portfolio_app
npm ci
```

### 2. Start Development Server

```bash
npm start
# or
ng serve --open
```

The app opens at `http://localhost:4200/`. The About page will be accessible at `/about` once the component is created.

### 3. Run Quality Checks

Before submitting:

```bash
# Lint
npm run lint

# Build production
npm run build
```

All checks must pass.

---

## Component Creation Checklist

### Step 1: Create Feature Directory

```bash
mkdir -p portfolio_app/src/app/features/about
```

### Step 2: Create Component Files

**about-page.component.ts**
```typescript
import { Component } from '@angular/core';

interface EngineeringJourneyStage {
  id: string;
  orderNumber: number;
  title: string;
  description: string;
  technologies: string[];
}

interface FocusArea {
  id: string;
  title: string;
  description: string;
  areas: string[];
}

interface ProjectGrowthStory {
  id: string;
  sector: string;
  startedAs: string;
  grewToInclude: string[];
  becameImportantAt: string;
}

interface AIDirection {
  transition: string;
  philosophy: string;
  areas: string[];
  goal: string;
}

interface CorePhilosophy {
  primary: string;
  supporting: string | null;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  protected readonly pageTitle = 'From building software to exploring intelligence.';

  protected readonly descriptors = [
    'Software Engineer',
    'Systems Builder',
    'AI Explorer'
  ];

  protected readonly engineeringStages: EngineeringJourneyStage[] = [
    {
      id: 'stage-1',
      orderNumber: 1,
      title: 'Building Applications',
      description: '.NET / C# / Desktop applications',
      technologies: ['.NET', 'C#', 'Desktop']
    },
    {
      id: 'stage-2',
      orderNumber: 2,
      title: 'Connecting Systems',
      description: 'Web applications, APIs, Angular',
      technologies: ['Angular', 'ASP.NET Core', 'REST APIs']
    },
    {
      id: 'stage-3',
      orderNumber: 3,
      title: 'Distributed Systems',
      description: 'Event-driven, microservices, RabbitMQ',
      technologies: ['Microservices', 'RabbitMQ', 'Real-time']
    },
    {
      id: 'stage-4',
      orderNumber: 4,
      title: 'Modernizing Systems',
      description: '.NET Framework → Modern .NET, architecture',
      technologies: ['Clean Architecture', '.NET 6+']
    },
    {
      id: 'stage-5',
      orderNumber: 5,
      title: 'Exploring Intelligence',
      description: 'AI applications, LLMs, RAG, chatbots',
      technologies: ['LLMs', 'RAG', 'ChatBots', 'AI']
    }
  ];

  protected readonly focusAreas: FocusArea[] = [
    {
      id: 'focus-1',
      title: 'Software Engineering',
      description: 'Enterprise applications, APIs, backends, Angular frontends',
      areas: ['Enterprise apps', 'APIs and backends', 'Angular applications']
    },
    {
      id: 'focus-2',
      title: 'Integration & Automation',
      description: 'System connectivity, process automation, modernization',
      areas: ['Connecting systems', 'Automating processes', 'Evolving software']
    },
    {
      id: 'focus-3',
      title: 'Intelligent Systems',
      description: 'AI capabilities integrated into software',
      areas: ['LLM applications', 'RAG systems', 'Intelligent workflows']
    }
  ];

  protected readonly projectStory: ProjectGrowthStory = {
    id: 'project-healthcare',
    sector: 'Healthcare',
    startedAs: 'A single-user application for medical contracting.',
    grewToInclude: [
      'Medical authorizations and compliance workflows',
      'Contact center operations and communications',
      'Administrative areas and cross-organizational coordination'
    ],
    becameImportantAt: 'Evolved into a communication platform used across organizational departments at a national scale.'
  };

  protected readonly aiDirection: AIDirection = {
    transition: 'AI is not the end of software engineering. It is another way to extend what we can build.',
    philosophy: 'Exploring the relationship between human intelligence and artificial intelligence.',
    areas: [
      'Chatbots and conversational AI',
      'Large Language Models (LLMs) and prompt engineering',
      'Retrieval-Augmented Generation (RAG) for knowledge systems'
    ],
    goal: 'Build useful systems that combine software engineering expertise with practical AI capabilities.'
  };

  protected readonly philosophy: CorePhilosophy = {
    primary: 'I don\'t just want to build AI. I want to build useful systems with AI.',
    supporting: 'Always learning. Always building.'
  };

  // Intersection Observer setup for animation
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
}
```

**about-page.component.html**
```html
<section class="about-page">
  <!-- Section 01 — About Me -->
  <section class="about-section about-intro" data-animate>
    <h1>{{ pageTitle }}</h1>
    <div class="descriptors">
      @for (descriptor of descriptors; track descriptor) {
        <span class="descriptor">{{ descriptor }}</span>
      }
    </div>
  </section>

  <!-- Section 02 — Engineering Journey -->
  <section class="about-section engineering-journey" data-animate>
    <h2>02 / Engineering Journey</h2>
    <div class="journey-timeline">
      @for (stage of engineeringStages; track stage.id) {
        <div class="journey-stage" data-animate>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.description }}</p>
          @for (tech of stage.technologies; track tech) {
            <span class="tech-tag">{{ tech }}</span>
          }
        </div>
      }
    </div>
  </section>

  <!-- Section 03 — What I Build -->
  <section class="about-section what-i-build" data-animate>
    <h2>03 / What I Build</h2>
    <div class="focus-areas">
      @for (area of focusAreas; track area.id) {
        <article class="focus-card" data-animate>
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
          <ul>
            @for (item of area.areas; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </article>
      }
    </div>
  </section>

  <!-- Section 04 — A Project That Grew -->
  <section class="about-section project-story" data-animate>
    <h2>04 / A Project That Grew</h2>
    <div class="project-narrative">
      <div class="narrative-part">
        <h3>Started as</h3>
        <p>{{ projectStory.startedAs }}</p>
      </div>
      <div class="narrative-part">
        <h3>Grew to include</h3>
        <ul>
          @for (integration of projectStory.grewToInclude; track integration) {
            <li>{{ integration }}</li>
          }
        </ul>
      </div>
      <div class="narrative-part">
        <h3>Became important at</h3>
        <p>{{ projectStory.becameImportantAt }}</p>
      </div>
    </div>
  </section>

  <!-- Section 05 — The AI Chapter -->
  <section class="about-section ai-chapter" data-animate>
    <h2>05 / The AI Chapter</h2>
    <blockquote class="ai-transition">{{ aiDirection.transition }}</blockquote>
    <p>{{ aiDirection.philosophy }}</p>
    <h3>Current focus</h3>
    <ul>
      @for (area of aiDirection.areas; track area) {
        <li>{{ area }}</li>
      }
    </ul>
    <p class="ai-goal">{{ aiDirection.goal }}</p>
  </section>

  <!-- Section 06 — My Philosophy -->
  <section class="about-section philosophy" data-animate>
    <h2>06 / My Philosophy</h2>
    <p class="philosophy-primary">{{ philosophy.primary }}</p>
    @if (philosophy.supporting) {
      <p class="philosophy-supporting">{{ philosophy.supporting }}</p>
    }
  </section>
</section>
```

**about-page.component.scss**
```scss
@use '../../../styles/tokens';

.about-page {
  background: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-8);

  .about-section {
    max-width: var(--container-max-width);
    margin-inline: auto;
    margin-bottom: var(--space-12);
    padding: var(--space-8) 0;

    // Animation setup
    &[data-animate] {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.6s ease, transform 0.6s ease;

      &.in-view {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: clamp(2.8rem, 5vw, 5.25rem);
    line-height: 1.1;
    color: var(--color-text);
    margin-bottom: var(--space-6);
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.8rem);
    line-height: 1.2;
    color: var(--color-text);
    margin-bottom: var(--space-6);
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-text);
    margin-bottom: var(--space-3);
  }

  p {
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: var(--space-4);
  }

  .descriptors {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    margin-bottom: var(--space-8);

    .descriptor {
      font-weight: 600;
      color: var(--color-text);
      padding: var(--space-2) var(--space-4);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
    }
  }

  .tech-tag {
    display: inline-block;
    padding: 0.45rem 0.75rem;
    border: 1px solid rgba(91, 140, 255, 0.35);
    border-radius: var(--radius-full);
    background: rgba(91, 140, 255, 0.08);
    color: var(--color-text);
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: var(--space-2);
  }

  .journey-timeline {
    display: grid;
    gap: var(--space-6);

    .journey-stage {
      padding: var(--space-6);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      background: rgba(17, 24, 32, 0.5);
    }
  }

  .focus-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);

    .focus-card {
      padding: var(--space-6);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      background: rgba(17, 24, 32, 0.5);

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding-left: var(--space-4);
          position: relative;

          &::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--color-primary);
          }
        }
      }
    }
  }

  .project-narrative {
    .narrative-part {
      margin-bottom: var(--space-8);

      h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding-left: var(--space-4);
          position: relative;
          margin-bottom: var(--space-3);

          &::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--color-primary);
          }
        }
      }
    }
  }

  .ai-transition {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--color-primary);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--space-4);
    margin: var(--space-6) 0;
  }

  .philosophy {
    text-align: center;

    .philosophy-primary {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: var(--space-4);
    }

    .philosophy-supporting {
      font-size: 1.1rem;
      color: var(--color-text-muted);
    }
  }

  @media (max-width: 768px) {
    padding: var(--space-4);

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .journey-timeline,
    .focus-areas {
      gap: var(--space-4);
    }
  }
}
```

### Step 3: Register Route

**portfolio_app/src/app/app.routes.ts**
```typescript
import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';
import { AboutPageComponent } from './features/about/about-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];
```

### Step 4: Update Navigation

The site header already has an "About" link pointing to `/about` with `implemented: false`. Change it to `implemented: true` in `site-header.component.ts`:

```typescript
protected readonly links: NavLink[] = [
  { label: 'Home', path: '/', implemented: true },
  { label: 'About', path: '/about', implemented: true },  // ← Set to true
  { label: 'Experience', path: '/experience', implemented: false },
  // ...
];
```

### Step 5: Validate

```bash
# Run linter
npm run lint

# Build production
npm run build

# Serve locally and test
npm start
# Visit http://localhost:4200/about
```

---

## Development Guidelines

### Content Editing

All content is in the `about-page.component.ts` file. Edit the `protected readonly` properties to update text.

**Word count target**: 300–400 words (all visible text). After editing, manually count and verify.

### Styling

- Use `var(--color-*)`, `var(--space-*)`, `var(--radius-*)` custom properties.
- Reference tokens from `portfolio_app/src/styles/_tokens.scss`.
- Component SCSS file: `about-page.component.scss`.

### Animation

- Use `data-animate` attribute on elements that should animate in.
- Intersection Observer code in `setupAnimationObserver()` handles viewport detection.
- Respect `prefers-reduced-motion` CSS media query (already included in template).

### Responsive Design

- Mobile first: design for 375px, then enhance for 768px, 1024px, 1280px.
- Use CSS `clamp()` for responsive typography.
- Test with browser DevTools at each breakpoint.

---

## Common Tasks

### Add a new section
1. Create interface in component class (if complex data structure).
2. Add `protected readonly` property with data.
3. Add `<section>` HTML block in template.
4. Add styling in `.scss` file.
5. Run lint and build to validate.

### Update Engineering Stages
Edit the `engineeringStages` array in `about-page.component.ts`:

```typescript
protected readonly engineeringStages: EngineeringJourneyStage[] = [
  {
    id: 'stage-1',
    orderNumber: 1,
    title: 'Building Applications',
    description: '.NET / C# / Desktop applications',
    technologies: ['.NET', 'C#', 'Desktop']
  },
  // ... edit or add stages
];
```

### Test Responsive Behavior
```bash
npm start
# Open browser DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M on Windows)
# Test at 375px, 768px, 1024px, 1280px
# Check no horizontal scrolling at any breakpoint
```

### Verify Accessibility
```bash
# Keyboard navigation
# Tab through entire page—all interactive elements reachable
# Verify focus states are visible

# Reduced motion
# In DevTools Settings > Accessibility > Enable "Prefers reduced motion"
# Reload page—animations should be disabled
# Content should remain readable

# Screen reader
# Use browser screen reader (built-in) and verify headings, lists, and labels are announced correctly
```

---

## Testing Checklist Before Commit

- [ ] `npm run lint` passes
- [ ] `npm run build` passes (production)
- [ ] Component is visible at `/about` locally
- [ ] Navigation to `/about` works from header
- [ ] All six sections appear in correct order
- [ ] Word count is 300–400 words
- [ ] Responsive layout works at 375px, 768px, 1024px, 1280px
- [ ] No horizontal scrolling at any breakpoint
- [ ] Keyboard navigation works (Tab through page)
- [ ] Focus states are visible
- [ ] Animations work (if enabled)
- [ ] Animations disabled with `prefers-reduced-motion`
- [ ] All content matches approved spec
- [ ] No console errors or warnings

---

## Troubleshooting

**Issue**: `/about` route not found  
**Fix**: Ensure component is imported in `app.routes.ts` and route is registered.

**Issue**: Animations not working  
**Fix**: Ensure `data-animate` attributes are on elements, and `setupAnimationObserver()` is called in `ngAfterViewInit()`.

**Issue**: Styles not applying  
**Fix**: Check `_tokens.scss` is imported at top of `about-page.component.scss`. Verify CSS custom properties use `var(--*)` syntax.

**Issue**: GitHub Pages returns 404 at `/about`  
**Fix**: Ensure build uses correct base-href. GitHub Actions workflow should handle this automatically.

---

## Support

- Reference [spec.md](.specify/specs/003-about-me/spec.md) for feature requirements.
- Reference [data-model.md](.specify/specs/003-about-me/data-model.md) for content structure.
- Reference [research.md](.specify/specs/003-about-me/research.md) for technical decisions.

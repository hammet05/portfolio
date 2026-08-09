---
name: 001-bootstrap-project
description: Bootstrap the initial technical and visual foundation of the Angular portfolio
---

/speckit.specify


Create spec 001-bootstrap-project.

# OBJECTIVE

Establish the technical and visual foundation of the Portfolio frontend,ready to receive the first real product features in subsequent specs.

This is the foundational frontend specification.

It must establish only the minimum infrastructure required to:

- Run the Angular application locally.
- Maintain a clean and scalable project structure.
- Establish the initial design system.
- Implement the global application layout.
- Prepare routing and navigation.
- Run quality checks.
- Build the application for production.
- Deploy initially through GitHub Actions to GitHub Pages.

This spec MUST NOT implement the final portfolio content.

# SOURCES OF TRUTH

The implementation MUST follow these documents, in the following order:

1. `.specify/constitution.md`
2. `.github/copilot-instructions.md`
3. `.specify/instructions.frontend.md`
4. This specification.

If there is a conflict between these documents, `constitution.md` takes precedence.

Do not invent architecture, dependencies, or functionality that is not justified by these documents or by the scope of this specification.

# INCLUDED SCOPE

## Project Structure

Prepare an Angular feature-oriented structure:

```text
portfolio/
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/
│       └── deploy.yml
│
├── .specify/
│   ├── constitution.md
│   ├── instructions.frontend.md
│   └── execution-plan.md
│
├── specs/
│
├── portfolio_app/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   ├── shared/
│   │   │   ├── layout/
│   │   │   └── features/
│   │   └── styles/
│   │
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig*.json
│
└── README.md
```
The structure may evolve when real features require it.

Do NOT create folders, layers, or abstractions solely for future possibilities.

## ANGULAR ARCHITECTURE

The application MUST use:

- Angular 19.
- TypeScript.
- Standalone components.
- Angular Router.
- SCSS.
- Tailwind CSS according to instructions.frontend.md.
- ESLint.
- Prettier.

The architecture MUST preserve the following boundaries:
```text
core/
    Application-wide services and configuration.

shared/
    Actually reusable components and utilities.

layout/
    Global application layout.

features/
    Feature-specific portfolio functionality.
```
Do NOT implement complete features during this specification.

The objective is to prepare the structure for subsequent specifications.

## INITIAL ROUTING

Configure Angular Router with an initial route to verify that the application works correctly.

At minimum:
>/

The initial route may display a temporary bootstrap screen.

Do NOT implement yet:

- Final Home page.
- About.
- Experience.
- Projects.
- AI Lab.
- Contact.

These belong to future specifications.

## APPLICATION SHELL

Implement the minimum global application layout:
```text
AppShell
├── SiteHeader
├── Main
│   └── RouterOutlet
└── SiteFooter
```
Initial components:

``` text
layout/
├── app-shell/
├── site-header/
├── site-footer/
└── mobile-navigation/
```
## AppShell

Responsibilities:

- Global application structure.
- Header.
- Main content.
- Footer.

It MUST NOT contain feature-specific logic.

## SiteHeader

Responsibilities:

- Portfolio identity/name.
- Navigation.
- Active route state.
- Responsive navigation preparation.

It MUST support:

- Desktop.
- Mobile.
- Visible focus.
- Keyboard navigation.
- MobileNavigation

Must provide:

- Open state.
- Closed state.
- Accessible menu button.
- aria-expanded.
- aria-controls when applicable.
- Appropriate close interaction.

## SiteFooter

Provide only the minimum global footer structure.

Do NOT implement the final CV or portfolio content yet.

## VISUAL DESIGN SYSTEM

Implement only the design system foundation defined in:

.specify/instructions.frontend.md

Create:
```text
src/styles/
├── _tokens.scss
├── _typography.scss
├── _layout.scss
├── _utilities.scss
└── styles.scss
```
Design Tokens

Define the tokens specified by instructions.frontend.md for:

- Colors.
- Surfaces.
- Typography.
- Spacing.
- Border radius.
- Shadows.

Components MUST consume design tokens instead of repeatedly using arbitrary values.

Example:
```scss
color: var(--color-text);
background: var(--color-surface);
border-color: var(--color-border);
```
Do NOT introduce a different visual identity during this specification.

## TYPOGRAPHY

Configure global typography according to instructions.frontend.md.

Provide a base hierarchy for:

- h1
- h2
- h3
- body text
- small text
- code

Typography MUST respect semantic HTML.

## GLOBAL LAYOUT

Implement:

- Main content container.
- Maximum content width defined by the design system.
- Responsive horizontal spacing.
- Mobile-first layout.
- Breakpoints defined in instructions.frontend.md.

The layout MUST NOT create horizontal scrolling at supported breakpoints.

## INITIAL UI COMPONENTS

Create only the components required by the bootstrap.

Initial candidates:

```text
shared/
└── ui/
    ├── button/
    ├── icon-button/
    └── section-header/
```
These components MUST remain small and reusable.

Do NOT implement yet:

- ProjectCard.
- TechnologyBadge.
- Toast.
- Modal.
- LoadingState.
- EmptyState.
- ErrorState.
- Contact forms.

These components MUST be introduced only when required by a future specification.

## ICONOGRAPHY

Use the icon library defined by instructions.frontend.md.

The application MUST maintain a single primary icon library.

Interactive icons MUST have accessible names.

Decorative icons MUST be hidden from assistive technologies when appropriate.

## RESPONSIVE DESIGN

Use a mobile-first approach.

At minimum support:
  - Mobile
  - Tablet
  - Desktop

The layout MUST adapt without unnecessarily duplicating components.

Mobile navigation MUST be functional.

Interactive elements SHOULD maintain appropriate touch target sizes.

## ACCESSIBILITY

The bootstrap MUST comply with the minimum accessibility requirements defined in instructions.frontend.md.

At minimum:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Accessible labels.
- Sufficient contrast.
- No reliance on color alone.
- Appropriate image alt attributes.
- Respect for prefers-reduced-motion.
- Accessible mobile navigation states.

Do not use ARIA when semantic HTML already provides the required behavior.

## CODE QUALITY

Configure:

- ESLint.
- Prettier.
- TypeScript strictness according to the project configuration.
- Required npm validation scripts.

Code MUST follow:
```
Files          → kebab-case
Classes        → PascalCase
Variables      → camelCase
CSS variables  → --kebab-case
```
Angular components MUST use semantic names.

Examples:
```
site-header
app-shell
mobile-navigation
```
Avoid generic names such as:
```
component
container
box
thing
wrapper
```
## DEPENDENCIES

Keep dependencies to a minimum.

Before introducing a dependency, determine whether the functionality can be provided by:

- Angular.
- TypeScript.
- CSS/SCSS.
- Tailwind CSS.
- Native browser APIs.

Just introduce this dependency: 
AI Chatbot: CHATBASE from 
```
https://www.chatbase.co/
```
Do NOT introduce during this specification:

- Global state-management libraries.
- Additional UI frameworks.
- Form libraries.
- Charting libraries.
- OpenAI SDKs.
- Additional HTTP clients.
- Unnecessary animation libraries.

## GIT

The project must remain compatible with:

main
feature/*

Future feature work should be integrated through Pull Requests.

Do not modify unrelated files.

GITHUB ACTIONS

Create:

.github/workflows/deploy.yml

The workflow MUST:

Checkout the repository.
Configure Node.js.
Use the Node.js version defined by the project.
Install dependencies using npm ci.
Build the Angular application in production mode.
Upload the GitHub Pages artifact.
Deploy through GitHub Pages.

The workflow MUST respect the actual repository structure.

If portfolio_app contains package.json, npm commands MUST execute from
that directory.

DEPENDENCIES AND PACKAGE-LOCK

package.json and package-lock.json MUST remain synchronized.

CI/CD MUST use:

npm ci

The lockfile MUST remain committed to Git.

Do not manually edit package-lock.json unless there is a specific technical
reason.

When dependencies change:

npm install

must update the lockfile, and both files MUST be included in the change.

GITHUB PAGES

Configure the application for the initial GitHub Pages deployment.

The Angular build MUST use the appropriate base-href for the repository
name.

The application must work from:

https://<user>.github.io/<repository>/

The actual repository/user values MUST come from the real repository
configuration and MUST NOT be invented.

LOCAL VALIDATION

The specification MUST allow validation using:

cd portfolio_app

npm ci
npm run build

And, when configured:

npm run lint
npm run format:check

All configured validation commands MUST complete successfully.

ACCEPTANCE CRITERIA
The Angular application starts locally without errors.
npm ci installs dependencies successfully.
package.json and package-lock.json remain synchronized.
The production build completes successfully.
ESLint passes without errors.
Prettier validation passes when configured.
The Angular application contains the following architectural structure:
core/
shared/
layout/
features/
A functional AppShell exists.
A functional SiteHeader exists.
A functional SiteFooter exists.
Functional mobile navigation exists.
A functional / route exists.
The design system uses centralized design tokens.
The application uses the responsive layout defined in
instructions.frontend.md.
Navigation is accessible using a keyboard.
Focus states are visible.
Interactive controls have accessible names.
GitHub Actions can install dependencies using npm ci.
GitHub Actions can generate the production build.
GitHub Actions can publish the GitHub Pages artifact.
The deployed application works correctly using the repository
base-href.
No functionality belonging to future specifications is implemented.
OUT OF SCOPE

This specification MUST NOT implement:

Final Home content.
Complete curriculum vitae.
Professional experience.
Projects.
AI Lab.
AI chatbot.
RAG.
SignalR.
.NET integration.
API.
Database.
Authentication.
Functional contact form.
External service integrations.
Analytics.
CMS.
Administration.
Generative AI functionality.

These capabilities will be addressed through future specifications.

CONSTRAINTS

DO NOT:

Create speculative abstractions.
Create components without a current use case.
Introduce unnecessary dependencies.
Create architecture more complex than required.
Implement future features.
Modify the Constitution.
Modify copilot-instructions.md to solve a local implementation problem.
Modify instructions.frontend.md to justify an implementation.
Introduce secrets into the frontend.
Disable lint rules without technical justification.
EXPECTED RESULT

At the end of this specification, there must be a small, clean and functional
Angular frontend that can run locally and deploy automatically to GitHub Pages.

The result should represent:

Angular
   +
Design System
   +
Application Shell
   +
Responsive Layout
   +
Accessibility
   +
Quality Checks
   +
GitHub Actions
   +
GitHub Pages

but it must NOT yet implement the portfolio as a finished product.

The next specification must be able to build on this foundation without
requiring architectural rework.

LANGUAGE

The specification, plan, tasks, documentation generated by this process,
and code comments MUST use English.

Code MUST follow the technical conventions of the relevant language and
framework.

FINAL RULE

Priority order:

Constitution
    ↓
Copilot Instructions
    ↓
Frontend Instructions
    ↓
Specification
    ↓
Implementation

When uncertain, choose the simplest solution that satisfies the
specification and preserves the existing architecture.

Do not implement anything that is not necessary to satisfy this
specification.
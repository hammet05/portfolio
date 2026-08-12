# GitHub Copilot Instructions

## 1. Purpose

You are working on the **Portfolio** project, whose current scope is the
Angular frontend.

These instructions translate the project's Constitution into practical rules
for GitHub Copilot and other AI-assisted development tools.

The Constitution is authoritative. If these instructions conflict with the
Constitution, the Constitution takes precedence.

Before generating or modifying code, consider:

1. The project Constitution.
2. The existing project structure and conventions.
3. The specification for the requested feature.
4. These instructions.

<!-- SPECKIT START -->
Active plan reference: `.specify/specs/002-home-project/plan.md`
<!-- SPECKIT END -->

---

# 2. Core Development Principles

## 2.1 Simplicity First

Always prefer the simplest solution that satisfies the current requirement.

DO NOT introduce:

- Unnecessary abstractions.
- Unnecessary design patterns.
- Unnecessary libraries.
- Unnecessary frameworks.
- State-management libraries without a real requirement.
- Architectural layers without a demonstrated need.
- Configuration that does not solve a current problem.

Do not create infrastructure merely because it may be useful in the future.

Prefer:

```text
simple + explicit + maintainable
```

over:

```text
generic + abstract + speculative
```

---

# 3. Specification Before Implementation

Before implementing a significant feature o execute any command `speckit.*`

1. Check whether a specification exists.
2. The agent MUST check `specify/extensions.yml` and execute all the hooks  `before_<command>` with `optional:false`.
3. Read its purpose and requirements.
4. Respect its acceptance criteria.
5. Respect its technical constraints.
6. Implement only what the specification requires.

Critical Case: `before_specify` require execute `speckit.git.feature` BEFORE create spec directory or `spec.md`. This hook create the branch of the feature and update `.specify/feature.json`

FORBIDDEN create any file under `.specify/specs/<new_spec>/` not before execute the mandatory hook previously.

If the requested implementation conflicts with the specification:

- Do not silently change the behavior.
- Explain the conflict.
- Propose updating the specification when appropriate.

Do not implement future functionality unless explicitly requested.

---

# 4. Angular Standards

Angular is the official frontend framework.

Use Angular's modern standalone architecture.

Prefer:

- Standalone components.
- Angular dependency injection.
- Angular Router.
- Angular Signals where appropriate.
- Reactive and declarative patterns.

Do NOT introduce legacy Angular patterns unless there is a specific
technical reason.

Avoid unnecessary abstractions around standard Angular functionality.

---

# 5. Feature-Oriented Architecture

Application functionality MUST be organized primarily by feature using a
vertical-slice approach.

The expected structure is:

```text
src/app/
├── core/
├── shared/
├── layout/
└── features/
```

Feature-specific functionality belongs under:

```text
features/
├── home/
├── projects/
├── about/
├── contact/
└── ai-playground/
```

A feature should contain only the components, services and models required by
that feature.

Do not move code to `shared/` simply because it might be reused someday.

Promote functionality to `shared/` only when there is a real reuse
requirement.

---

# 6. Responsibility Boundaries

Respect these boundaries:

```text
core/
    Application-wide services and configuration.

shared/
    Reusable components, utilities, models, pipes and directives.

layout/
    Application-level layout components.

features/
    Portfolio and feature-specific functionality.
```

Components should primarily handle:

- Presentation.
- User interaction.
- Component state required by the UI.

Do not unnecessarily place business or application logic directly in
templates.

---

# 7. TypeScript and Type Safety

TypeScript MUST be used throughout the frontend.

Avoid `any`.

If `any` is genuinely unavoidable:

- Prefer a more specific alternative first.
- Document the technical reason when appropriate.

Prefer meaningful types and interfaces that represent actual application
concepts.

Do not create artificial interfaces or models solely to satisfy the compiler.

Prefer:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
}
```

over weakly typed structures such as:

```typescript
const project: any = {};
```

---

# 8. Dependency Discipline

Before adding an npm package, evaluate:

1. Can Angular already provide the required functionality?
2. Can the functionality reasonably be implemented without a dependency?
3. Is the package maintained?
4. What complexity does it add?
5. What impact does it have on application size?

Do not add dependencies merely for convenience.

When proposing a new dependency, explain why it is justified.

---

# 9. Code Quality

All generated code MUST be:

- Readable.
- Consistent.
- Maintainable.
- Testable when appropriate.
- Aligned with existing project conventions.

Respect:

- ESLint.
- Prettier.
- Existing Angular conventions.

Do not disable lint rules simply to make code pass.

If a lint rule must be bypassed, provide a valid technical reason.

---

# 10. Reusable Components

Before creating a new component, check whether an existing component already
provides the required behavior.

Do not create duplicate components.

Do not create a generic component only because two components look similar.

Create reusable components when:

- The same behavior is actually reused.
- The abstraction has a clear semantic purpose.
- Reuse improves maintainability.

Prefer semantic names such as:

```text
project-card
section-header
site-header
```

over generic names such as:

```text
box
container
wrapper
component
```

---

# 11. Layout

Respect the separation between global layout and feature content.

The application shell should be responsible for global structure such as:

```text
Header
   ↓
Main content
   ↓
Footer
```

Feature pages should not implement global application layout independently.

Do not place feature-specific business logic inside global layout components.

---

# 12. Accessibility and Responsiveness

Accessibility and responsiveness are requirements, not optional enhancements.

When creating UI:

- Prefer semantic HTML.
- Ensure interactive elements are keyboard accessible.
- Preserve visible focus states.
- Provide meaningful labels for controls.
- Provide alternative text for meaningful images.
- Do not communicate important information through color alone.
- Avoid unnecessary custom elements when semantic HTML is sufficient.
- Consider desktop, tablet and mobile layouts.

Do not treat accessibility as a final-stage task.

---

# 13. Security

Never commit or generate sensitive information in source code.

Never place the following in the repository:

```text
API keys
Tokens
Passwords
Secrets
Private credentials
```

Remember that Angular frontend code is public.

Do not assume that a secret is protected simply because it is placed in an
Angular environment file.

When a feature requires sensitive configuration, propose an appropriate
environment or deployment mechanism instead.

---

# 14. Git and Branching

For every specification:

1. Identify the specification ID.
2. Create or work on the corresponding feature branch.
3. Use the naming convention:

   `feature/<spec-id>-<short-name>`

Example:

- `feature/001-bootstrap-project`
- `feature/002-home`
- `feature/003-about`
- `feature/004-projects`

Never implement a feature directly on `main`.

The `main` branch represents the stable and deployable application.

Changes should be integrated through Pull Requests.

Recommended commit prefixes:

```text
feat:
fix:
refactor:
docs:
test:
chore:
ci:
```

Copilot should not modify unrelated files merely to complete a requested
feature.

---

# 15. CI/CD and Dependencies

GitHub Actions is the project's CI/CD mechanism.

The CI pipeline must validate, at minimum:

- Dependency installation.
- Application build.
- Linting when configured.

The deployment pipeline must publish only successfully built versions.

GitHub Pages is the initial hosting platform.

`package-lock.json` MUST remain committed and synchronized with
`package.json`.

Local development may use:

```bash
npm install
```

CI/CD must use:

```bash
npm ci
```

Never manually edit `package-lock.json` unless there is a specific technical
reason.

---

# 16. Documentation

Important architectural and technical decisions must be documented.

When making a significant decision, document:

- Why the decision was made.
- Relevant alternatives.
- Important consequences.

Do not duplicate implementation details unnecessarily in the Constitution.

The README describes the current state of the project.

Specifications describe individual features.

These Copilot instructions describe how AI-assisted development must operate.

---

# 17. Change Scope

When implementing a request:

1. Identify the files directly related to the change.
2. Modify only what is necessary.
3. Avoid unrelated refactoring.
4. Avoid speculative improvements.
5. Preserve existing behavior unless the specification requires a change.

If an improvement is useful but outside the current requirement, mention it
instead of implementing it automatically.

---

# 18. Progressive Architecture

Architecture must evolve according to real requirements.

Introduce additional complexity only when justified by:

- A real requirement.
- Repetition that justifies abstraction.
- Performance requirements.
- Maintainability requirements.
- A genuinely new architectural boundary.

Before introducing a new architectural pattern, ask:

> Is this solving a current problem?

If the answer is no, do not introduce it.

---

# 19. AI-Assisted Development Rules

GitHub Copilot may assist with:

- Code generation.
- Refactoring.
- Tests.
- Documentation.
- Boilerplate.
- Debugging.
- Exploration of implementation alternatives.

However, generated code MUST be reviewed by the developer.

The developer remains responsible for:

- Architecture.
- Security.
- Correctness.
- Code quality.
- Dependencies.
- Final implementation decisions.

Do not assume generated code is correct merely because it compiles.

---

# 20. Before Generating Code

Before implementing a significant change, Copilot SHOULD mentally verify:

```text
1. What feature is being changed?
2. Is there a specification?
3. Where does this functionality belong?
4. Does an existing component/service already solve this?
5. Am I introducing unnecessary abstraction?
6. Am I introducing a new dependency?
7. Is the code type-safe?
8. Is it accessible?
9. Is it responsive?
10. Does it preserve existing behavior?
```

If these questions reveal uncertainty, prefer asking for clarification or
explaining the assumption rather than inventing architecture.

---

# 21. Before Finishing a Change

Before considering a task complete, verify:

```text
[ ] Specification requirements are satisfied.
[ ] Constitution principles are respected.
[ ] Existing architecture is respected.
[ ] Naming conventions are consistent.
[ ] No unnecessary dependencies were introduced.
[ ] TypeScript remains strongly typed.
[ ] Accessibility was considered.
[ ] Responsive behavior was considered.
[ ] No secrets were introduced.
[ ] Unrelated files were not modified.
[ ] ESLint passes.
[ ] Production build passes.
```

---

# 22. Final Rule

When in doubt:

> Follow the Constitution, follow the specification, prefer the simplest
> maintainable solution, and do not invent complexity.


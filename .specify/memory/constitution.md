<!--
Sync Impact Report
- Version change: 1.0.0 -> 1.1.0
- Principios modificados:
	- Ninguno
- Secciones agregadas:
	- Working Method: block "Interactive Question Mode"
- Secciones eliminadas:
	- Ninguna
- TODOs de seguimiento:
	- Ninguno
-->

# Constitución del proyecto
> Este archivo define las reglas inmutables del proyecto.

- **Project:** Portfolio
- **Scope:** Frontend
- **Status:** Active
- **Version:** 1.1.0
- **LastUpdate:** 2026-08-09


---
## 1. Descripción del proyecto

This constitution defines the fundamental and non-negotiable principles
that govern the development of the Portfolio frontend.

These principles apply to:

- Human developers.
- GitHub Copilot.
- AI-assisted development.
- Future contributors.
- All current and future features.

The constitution takes precedence over individual implementation preferences
when designing or modifying the application.

# Principle I — Simplicity First

The project MUST use the simplest architecture capable of satisfying
the current requirements.

The project MUST NOT introduce architectural complexity without a
demonstrable technical need.

Avoid unnecessary:

- Abstractions.
- Design patterns.
- Libraries.
- Frameworks.
- State-management solutions.
- Architectural layers.
- Configuration.

A solution MUST NOT be considered better merely because it is more complex.

### Rule

> Prefer simple, explicit and maintainable code over premature abstraction.

# Principle II — Feature-Oriented Organization

Application functionality MUST be organized primarily by feature.(Vertical Slice)

The `features/` directory is the primary location for application-specific
functionality.

Example:

```text
features/

    home/

    projects/

    about/

    contact/

    ai-playground/

```
A feature SHOULD contain only the components, services and models required
by that feature.

Reusable functionality MAY be promoted to shared/ when there is a
real need for reuse.

## Rule

> Do not place something in shared/ merely because it might be reused in the future.


# Principle III — Clear Separation of Responsibilities

The frontend MUST maintain a clear separation between:

Core application services.
Shared reusable functionality.
Layout components.
Feature-specific functionality.

The following structure defines the responsibility of each area:

```text
core/
    Application-wide services and configuration.

shared/
    Reusable components, utilities, models, pipes and directives.

layout/
    Application-level layout components.

features/
    Business and portfolio functionality.

```

Components SHOULD remain focused on presentation and user interaction.

Business or application logic SHOULD NOT be unnecessarily embedded
directly inside templates.

# Principle IV — Angular Standards


Angular MUST be the official frontend framework.

The application MUST use Angular's modern standalone architecture.

New functionality SHOULD use:

- Standalone components.
- Angular Signals where appropriate.
- Angular dependency injection.
- Angular Router.
- Reactive and declarative patterns.

Legacy Angular patterns MUST NOT be introduced unless there is a
specific technical reason.

# Principle V — Dependency Discipline

Every external dependency MUST have a clear justification.

Before introducing a new package, the developer MUST consider:

- Whether Angular or the existing project already provides the required
functionality.
- Whether the functionality can reasonably be implemented without a
dependency.
- The maintenance status of the dependency.
- Its impact on application size and complexity.

Dependencies MUST NOT be introduced merely for convenience.

# Principle VI — Code Quality

Code MUST be:

- Readable.
- Consistent.
- Maintainable.
- Testable when appropriate.
- Aligned with the existing project conventions.

Linting and formatting rules MUST be respected.

The project MUST use:

- ESLint.
- Prettier.

Code that intentionally bypasses linting rules MUST include a valid
technical justification.

# Principle VII — Type Safety

TypeScript MUST be used throughout the application.

The use of any MUST be avoided.

When any is unavoidable, the reason SHOULD be documented.

Interfaces, types and models MUST represent meaningful application
concepts rather than being created solely to satisfy the compiler.

# Principle VIII — Git and Branching

The main branch MUST represent a stable and deployable version of
the application.

New functionality MUST be developed in feature branches.

Example:

``` text
main
 ├── feature/home
 ├── feature/projects
 ├── feature/ai-playground
 └── feature/contact
```

Changes SHOULD be integrated into main through Pull Requests.

Commit messages MUST clearly describe the purpose of the change.

Recommended format:
```
feat:
fix:
refactor:
docs:
test:
chore:
ci:
```
# Principle IX — Continuous Integration and Deployment

GitHub Actions MUST be used as the project's CI/CD mechanism.

The application MUST be validated before deployment.

The CI pipeline MUST verify, at minimum:

- Dependency installation.
- Application build.
- Linting when configured.

The deployment pipeline MUST publish only successfully built versions.

GitHub Pages is the initial hosting platform.

The hosting platform MAY change in the future without changing the
fundamental development principles defined in this constitution.

# Principle X — Reproducible Dependencies

package-lock.json MUST be committed to the repository.

Local development MAY use:

``` bash
npm install
```
CI/CD MUST use:
``` bash
npm ci
```
package.json and package-lock.json MUST remain synchronized.

Manual modification of package-lock.json SHOULD be avoided.

# Principle XI — Specification Before Implementation

New functionality MUST be described before implementation.

Every significant feature SHOULD have a specification containing:

- Purpose.
- Functional requirements.
- Expected behavior.
- Acceptance criteria.
- Relevant technical constraints.

Implementation MUST satisfy the approved specification.

When the implementation reveals a problem in the specification, the
specification MUST be updated rather than silently violating it.

# Principle XII — AI-Assisted Development

GitHub Copilot and other AI-assisted development tools MAY be used
throughout the project.

- AI-generated code MUST follow this constitution.

- AI-generated code MUST be reviewed by the developer before being
committed.

- The developer remains responsible for:

  - Architecture.
  - Security.
  - Code quality.
  - Dependencies.
  - Correctness.
  - Final implementation decisions.

AI assistance MUST NOT be considered a substitute for technical review.

# Working method

Every initiate MUST contain exactly three files:

- `spec.md` — objective, scope, acceptance criteria, and dependencies.
- `plan.md` — technical decisions, affected modules and implementation order
- `tasks.md` — secuence of steps that are actionable, verifiable and markable as completed.
  
The minimum mandatory workflow is: `speckit.specify` → `speckit.plan` → `speckit.tasks` → `speckit.implement`. 

For foundational or high-impact specs, it is recommended to add `speckit.clarify` (between specify and plan) and `speckit.analyze` (between plan and tasks). 
No mandatory phase may be skipped.

Each completed task MUST be marked as `[X]` in `tasks.md`.

### Interactive Question Mode

The `speckit.specify` and `speckit.clarify` commands operate in **mandatory interactive mode**: they present questions one by one and wait for a response before proceeding.
The `speckit.plan` command operates in **conditional interactive mode**: it only asks questions if there are unresolved structural decisions affecting all future specs that are not already settled in the constitution or the current spec.

When a command operates in interactive mode, it MUST follow this protocol without exception:

**Question format with options:**

```
Question [N of TOTAL] — [short topic]
─────────────────────────────────────
[Clear statement of the question]

Why it matters: [1 line on the impact of a poor decision]

A) [concrete option with specific value]
B) [concrete option with specific value]  ← Recommended
C) [concrete option with specific value]
D) Other — write your answer

> Respond with the letter (A, B, C, or D) or write your own answer.
```
**Yes/No question format:**

```
Question [N of TOTAL] — [short topic]
─────────────────────────────────────
[Question statement]

Why it matters: [1 line]

Y) Yes ← Recommended
N) No

> Answer Y or N.
```

**Option rules:**

- Each option (A, B, C) MUST be concrete and actionable, never generic.
  Correct example: `1024px (tablet landscape)`.
  Prohibited example: `A standard breakpoint`.
- Options MUST be mutually exclusive: each leads to a
  different code outcome.
- The option marked with `← Recommended` MUST be the one most adopted by
  teams using this stack (FastAPI + SQLAlchemy async + Supabase +
  Python 3.13) or the one that best adheres to the principles of this constitution.
- The option `D) Other` MUST always be present as an escape hatch for
  custom answers.

**Response rules:**

- If the user answers with a letter (A, B, C, Y, or N): confirm the
  choice in a single line stating the specific value selected and proceed
  immediately to the next question.
- If the user answers with free text or chooses D): accept the answer,
  confirm it in a single line, and proceed to the next question.
- Upon completing all questions: display a summary of the decisions
  made and generate the corresponding artifact (`spec.md`, the
  "Clarifications" section in `spec.md`, or `plan.md`).


# Principle XIII — Progressive Architecture

Architecture MUST evolve according to real project requirements.

The project MUST NOT create infrastructure, abstractions or patterns
solely because they may be useful in the future.

Complexity MAY be introduced when:

- A real requirement demands it.
- Repetition justifies abstraction.
- Performance requires it.
- Maintainability requires it.
- A new architectural boundary becomes necessary.

> Rule Do not solve tomorrow's problem today unless doing so is cheaper,clearer and demonstrably beneficial.

# Principle XIV — Documentation

Important architectural and technical decisions MUST be documented.

Documentation SHOULD explain:

- Why a decision was made.
- What alternatives were considered.
- What consequences the decision has.

The README MUST describe the current state of the project.

The constitution MUST contain only stable and fundamental principles.

Implementation details MUST NOT be duplicated unnecessarily in the
constitution.

# Principle XV — Accessibility and Responsiveness

The application MUST be designed to work across:

- Desktop.
- Tablet.
- Mobile.

Interactive elements MUST provide an accessible user experience.

Semantic HTML SHOULD be preferred over unnecessary custom elements.

Accessibility MUST be considered during feature development rather than
treated as a final-stage task.

# Principle XVI — Security

Sensitive information MUST NOT be committed to the repository.

This includes:
``` text
API keys.
Tokens.
Passwords.
Secrets.
Private credentials.
```
Environment-specific configuration MUST use appropriate environment
mechanisms.

Public frontend code MUST be considered visible to users.

No secret may be considered secure merely because it is stored in an
Angular environment file.

# Governance

This constitution is a living but authoritative document.

Any change to a constitutional principle MUST:

- Be explicitly proposed.
- Include a clear reason.
- Evaluate its impact on the existing project.
- Update the constitution version.
- Update affected specifications when necessary.

Changes to the constitution MUST NOT be made merely to justify an
implementation that violates an existing principle.

# Compliance

Before merging a significant change, the developer SHOULD verify:

- Does the implementation follow the constitution?
- Is the architecture still simple?
- Is the functionality located in the correct feature?
- Are new dependencies justified?
- Is the code type-safe?
- Does the application build successfully?
- Does the specification match the implementation?
- Does the change preserve accessibility and responsiveness?
- Has sensitive information been kept out of the repository?

If a requirement conflicts with the constitution, the constitution MUST
be reviewed before implementation proceeds.

# Version

> Constitution Version: 1.0.0
> 
> Status: Active
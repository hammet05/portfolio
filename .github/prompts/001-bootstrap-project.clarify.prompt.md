---
name: 0001-bootstrap-project-clarify
description: Resolve ambiguities and open decisions in the 001-bootstrap-project specification using the project's mandatory interactive question mode.
---

/speckit.clarify


# PURPOSE

Clarify the `001-bootstrap-project` specification before creating its
implementation plan.

This clarification process MUST use the mandatory Interactive Question Mode
defined in the project Constitution.

The goal is to resolve only genuine ambiguities, contradictions, or
implementation decisions that could materially affect the bootstrap
implementation.

Do NOT redesign the project.
Do NOT introduce new functionality.
Do NOT silently modify the Constitution.
Do NOT ask questions whose answers are already explicitly determined by the
Constitution or the current specification.

# SOURCES OF TRUTH

Use the following sources:

1. `.specify/constitution.md`
2. `.github/copilot-instructions.md`
3. `.specify/instructions.frontend.md`
4. `specs/001-bootstrap-project/spec.md`

Priority:

```text
Constitution
    ↓
Copilot Instructions
    ↓
Frontend Instructions
    ↓
Current Specification
```

If a contradiction is found in a lower-priority document, do not silently
resolve it. Ask a clarification question when the contradiction affects the
implementation.

# INTERACTIVE MODE

Ask questions ONE AT A TIME.

Do not present all questions at once.

Before asking each question:

- Review the Constitution.
- Review the current specification.
- Review previous clarification decisions.
- Skip questions that have already been resolved.
- Ask only the next unresolved question.

Use exactly this format:

```text
Question [N of TOTAL] — [short topic]
─────────────────────────────────────
[Clear statement of the question]

Why it matters: [1 line explaining the implementation impact]

A) [Concrete actionable option]
B) [Concrete actionable option]  ← Recommended
C) [Concrete actionable option]
D) Other — write your answer

> Respond with the letter (A, B, C, or D) or write your own answer.
```

For Yes/No decisions use:

```text
Question [N of TOTAL] — [short topic]
─────────────────────────────────────
[Question statement]

Why it matters: [1 line]

Y) Yes ← Recommended
N) No

> Answer Y or N.
```

## RESPONSE BEHAVIOR

When the user answers with A, B, C, Y, or N:

Confirm the selected value in ONE sentence and immediately continue to the
next unresolved question.

Example:

```text
Confirmed: the bootstrap will use 1024px as the mobile-navigation breakpoint.
```

When the user provides free text or selects D:

Confirm the decision in ONE sentence and immediately continue.

Do not debate the user's decision unless it directly violates the
Constitution. If it conflicts with the Constitution, explain the conflict
briefly and request a compliant alternative.

# CLARIFICATION SCOPE

The current specification is already detailed.

Therefore, clarification should focus on decisions that can materially affect
implementation and that are not already settled.

The following areas should be evaluated for clarification.

## 1. Constitutional Version Consistency

The supplied Constitution contains:

```text
Version: 1.1.0
```

near the document metadata, while the final Version section still states:

```text
Constitution Version: 1.0.0
```

Do not silently choose one.

Ask for clarification only if this inconsistency affects the generated
artifact or governance metadata.

The recommended interpretation is that `1.1.0` is the active version because
the Sync Impact Report explicitly records a change from `1.0.0` to `1.1.0`.

## 2. Specification Branch Name

The specification identifies the feature branch as:

```text
001-bootstrap-project
```

The Constitution requires:

```text
feature/<spec-id>-<short-name>
```

and explicitly gives:

```text
feature/001-bootstrap-project
```

as the example.

The Constitution takes precedence.

Do not ask the user to choose between these two unless the implementation
workflow requires an explicit confirmation.

The clarification result should preserve:

```text
feature/001-bootstrap-project
```

as the implementation branch.

## 3. Existing Angular Project State

Determine whether the bootstrap is:

A) A reconstruction of the existing `portfolio_app` Angular project while
preserving compatible existing files.

B) A clean bootstrap of the Angular foundation, modifying only what is needed
to bring the existing project into compliance.

C) Other.

Recommended: B.

Do not overwrite working project configuration without inspecting it first.

## 4. Angular and Tooling Versions

The specification requires Angular 19.

Clarify the exact versions only if the existing project contains versions that
conflict with Angular 19 or if the current package configuration is unclear.

Do not upgrade unrelated dependencies merely for modernization.

## 5. Tailwind CSS and SCSS Responsibility

The specification requires both Tailwind CSS and SCSS.

Clarify their responsibility if `instructions.frontend.md` does not already
define it.

Recommended approach:

- Tailwind CSS for utility-based layout and responsive utilities.
- SCSS for design tokens, global styles, component-specific structural
  styles, and reusable visual foundations.
- Avoid duplicating the same styling responsibility in both systems.

## 6. Chatbase

The specification states:

```text
only Chatbase is allowed as the external integration candidate during this
bootstrap
```

but Chatbase is otherwise outside the functional bootstrap scope.

Clarify whether Chatbase should:

A) Be installed/configured now but not exposed in the UI.

B) Be documented as an allowed future integration, without adding the
dependency during bootstrap.  ← Recommended

C) Be implemented as part of the bootstrap.

D) Other.

The recommended option follows the project's simplicity-first and progressive
architecture principles.

## 7. GitHub Pages Base-Href

The repository-specific GitHub Pages URL cannot be invented.

Clarify whether the workflow should derive the repository name dynamically
from GitHub Actions context or use a repository configuration value.

Recommended:

Use GitHub Actions repository context so the workflow does not hardcode
the repository name.

The resulting Angular build should use the repository path as its base-href.

## 8. Mobile Navigation Breakpoint

If `instructions.frontend.md` does not already define a breakpoint, clarify
the breakpoint at which the desktop navigation changes to mobile navigation.

Recommended:

```text
1024px
```

The decision must be represented as a concrete CSS breakpoint.

## 9. Bootstrap Screen Content

The specification allows a temporary bootstrap screen but does not define
its exact content.

Clarify whether the `/` route should show:

A) A minimal technical bootstrap screen containing project name, status, and
a short "foundation ready" message.  ← Recommended

B) A completely blank shell with only header/footer.

C) A temporary visual approximation of the future portfolio Home.

D) Other.

The recommended option provides a visible validation target without
implementing future portfolio content.

## 10. Root-Level Validation Commands

The specification identifies an edge case where contributors may execute
commands from the repository root instead of `portfolio_app`.

Clarify whether root-level npm scripts should be added.

Recommended:

Do NOT introduce a workspace or root package solely to support convenience
commands. Keep frontend dependency ownership in `portfolio_app` and document
the required working directory.

This follows the simplicity-first principle.

# QUESTION RULES

Questions MUST be mutually exclusive.

Options MUST describe concrete implementation outcomes.

Do not ask:

- "What do you prefer?"
- "Should we use a standard approach?"
- "What breakpoint should we use?" without concrete values.
- Questions already answered by the Constitution.
- Questions whose answer has no implementation impact.

Always include:

```text
D) Other — write your answer
```

for A/B/C questions.

Mark the Constitution-aligned or simplest maintainable option as
`← Recommended`.

# CHANGE CONTROL

Clarification decisions MUST NOT directly modify source code.

At the end of the interactive session:

1. Summarize all decisions.
2. Identify any specification requirements affected.
3. Update the `Clarifications` section of
   `specs/001-bootstrap-project/spec.md`.
4. Do not rewrite unrelated requirements.
5. Do not create `plan.md` during clarification.
6. Do not create `tasks.md` during clarification.
7. Do not implement code during clarification.

The output of clarification becomes an input to:

```text
speckit.plan
```

# COMPLETION SUMMARY

After all questions are answered, display:

```text
## Clarification Summary

| # | Topic | Decision | Impact |
|---|---|---|---|
| 1 | ... | ... | ... |

## Specification Updates

- [list affected requirements or sections]

## Ready for Plan

The specification is sufficiently clarified for `speckit.plan`.
```

Then update the specification with the resulting Clarifications section.

# FINAL RULE

The purpose of this prompt is not to make the specification more complex.

Its purpose is to eliminate ambiguity before implementation while preserving
the project's constitutional principles:

```text
Simplicity First
        ↓
Specification Before Implementation
        ↓
Interactive Clarification
        ↓
Technical Plan
        ↓
Tasks
        ↓
Implementation
```

Never use clarification as an excuse to introduce speculative architecture,
future features, unnecessary dependencies, or implementation details that
belong in `plan.md`.

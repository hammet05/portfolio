---
name: 004-home-visual-refinement.analyze
description: Analyze and audit the consistency of spec 004-home-visual-refinement before execute implementation
---

/speckit.analyze

## OBJECTIVE

Analyze the consistency, completeness, and implementation readiness of the
current specification and technical plan before proceeding to
`/speckit.tasks`.

## FILES TO ANALYZE

Review the following files:

- `.specify/specs/004-home-visual-refinement/spec.md`
- `.specify/specs/004-home-visual-refinement/plan.md`

Also consider the project's governing documents when validating consistency:

- `.specify/constitution.md`
- `.github/copilot-instructions.md`
- `.specify/instructions.frontend.md`

## ANALYSIS CRITERIA

Check for:

- Conflicts between the specification and the technical plan.
- Violations or contradictions with the Constitution.
- Conflicts with the Copilot instructions or frontend instructions.
- Missing requirements that could prevent implementation.
- Ambiguous or contradictory requirements.
- Missing technical decisions that should have been resolved during clarification.
- Tasks or implementation details that cannot be derived clearly from the
  specification and plan.
- Unnecessary complexity or speculative architecture.
- Scope creep beyond the objectives of Spec 004.
- Missing acceptance criteria or requirements that cannot be objectively
  validated.
- Inconsistencies in technologies, dependencies, project structure, naming,
  or configuration.
- Potential issues with Angular, GitHub Actions, GitHub Pages, or the
  repository structure.
- Requirements that could cause unnecessary rework in later specifications.

## SEVERITY LEVELS

Classify every finding using exactly one of these levels:

### CRITICAL

**MUST be resolved before `/speckit.tasks`.**

Use this severity when the issue:

- Blocks implementation.
- Creates a direct contradiction between governing documents.
- Violates a constitutional rule.
- Makes the specification or plan internally inconsistent.
- Makes an acceptance criterion impossible or undefined.
- Could result in significant architectural rework.

### WARNING

**SHOULD be resolved before `/speckit.tasks`, or explicitly documented if
the decision is intentional.**

Use this severity when the issue:

- Introduces meaningful ambiguity.
- Represents a potential implementation risk.
- Leaves an important technical decision unclear.
- Could cause avoidable rework but does not block implementation.

### SUGGESTION

**COULD be addressed in a future iteration.**

Use this severity for:

- Improvements that are not required for Spec 004.
- Optional refinements.
- Future architectural considerations for Spec 004.
- Non-blocking maintainability or developer-experience improvements.

Suggestions MUST NOT be treated as requirements for the current spec.

## OUTPUT FORMAT

Return a structured analysis report using the following format:

```text
# Specification Analysis Report
```
## Summary

- Critical: X
- Warning: X
- Suggestion: X

## Critical

### C-001 — [Short title]
```
**Issue:** [What is wrong or missing]

**Evidence:** [File and relevant section]

**Impact:** [Why it matters]

**Required action:** [What must be resolved]
```
## Warnings

### W-001 — [Short title]
```
**Issue:** [What could be improved or clarified]

**Evidence:** [File and relevant section]

**Impact:** [Potential consequence]

**Recommended action:** [What should be done]
```
## Suggestions

### S-001 — [Short title]
```
**Observation:** [Potential improvement]

**Recommendation:** [Suggested future action]
```
## Cross-Document Consistency

- Constitution: PASS / ISSUE
- Copilot Instructions: PASS / ISSUE
- Frontend Instructions: PASS / ISSUE
- Specification ↔ Plan: PASS / ISSUE

## Readiness
```
**Status:** READY / NOT READY

[Brief explanation of whether `/speckit.tasks` should proceed.]
```
## RULES
- DO NOT modify any file.
- DO NOT create or delete any file.
- DO NOT automatically resolve or reinterpret requirements.
- DO NOT invent missing requirements.
- DO NOT convert Suggestions into current-scope requirements.
- DO NOT report purely stylistic preferences as Critical issues.
- Every Critical or Warning MUST include evidence from the analyzed files.
- If no issues are found for a severity level, explicitly state None.
- Prefer the simplest interpretation consistent with the project's governing
documents.
- If the source documents do not provide enough information to determine
whether something is an issue, report it as a Warning rather than guessing.

## FINAL DECISION

The analysis MUST conclude with one of:
```
READY
```
if no Critical issues remain,

or:
```
NOT READY
```
if at least one Critical issue remains.

LANGUAGE

The entire analysis report MUST be written in English.
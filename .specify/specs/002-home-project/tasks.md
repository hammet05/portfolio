# Tasks: 002-home-project

## Task Numbering

Tasks are grouped by the phases implied by the Home implementation plan.
For numbering consistency with the requested format, tasks follow:
- Phase 1 (`T1.x`) = Home feature foundation and route setup
- Phase 2 (`T2.x`) = Home page content and section implementation
- Phase 3 (`T3.x`) = Integration, validation, and deployment readiness

## Phase 1 - Home Feature Foundation

- [ ] T1.1 Create the Home feature folder structure.
  - Action: Set up the feature-local structure under `portfolio_app/src/app/features/home/` and keep the existing shell and layout boundaries intact.
  - Verification: The Home implementation lives under the feature folder without introducing unnecessary shared abstractions.

- [ ] T1.2 Update the app route to render the Home page at the root URL.
  - Action: Modify the Angular router so `/` resolves to the Home feature while preserving the existing app shell layout.
  - Verification: The page loads at `/` and still renders the shared header, main content area, and footer.

- [ ] T1.3 Add the static CV asset and configure the GitHub Pages-compatible download path.
  - Action: Create `portfolio_app/src/assets/documents/alejandro-sierra-cv.pdf` and wire the download link using a base-href-compatible path for `/portfolio/`.
  - Verification: The final production asset resolves to `/portfolio/assets/documents/alejandro-sierra-cv.pdf` with no backend dependency.

## Phase 2 - Home Page Implementation

- [ ] T2.1 Create the Home page component and section layout.
  - Action: Build the main Home component and render the six required sections in order: Hero, Engineering Focus, Selected Work, Engineering Journey, Technology Stack, Final CTA.
  - Verification: The page structure matches the specification and preserves the expected section sequence at all target breakpoints.

- [ ] T2.2 Implement the Hero section with branding, copy, and CTAs.
  - Action: Add the eyebrow, heading, supporting text, primary and secondary actions, and the abstract system/architecture visual.
  - Verification: The hero communicates the professional identity, uses the required wording, and the visual remains a custom abstract composition without a third-party graphics library.

- [ ] T2.3 Implement the Engineering Focus section.
  - Action: Add the three cards for Software Engineering, Real-time Systems, and Applied AI with the required summaries and technology labels.
  - Verification: The cards are visually cohesive, token-based, and consistent with the design system and scope boundaries.

- [ ] T2.4 Implement the Selected Work preview cards.
  - Action: Add the AI Chatbot, Real-time Broker, and RAG Knowledge Assistant previews as static presentation-only entries.
  - Verification: The content is static, contains no backend or service wiring, and clearly remains a preview layer rather than a full feature implementation.

- [ ] T2.5 Implement the Engineering Journey narrative.
  - Action: Build the progression from software engineering to applied AI using the specified copy and flow.
  - Verification: The section clearly communicates continuity between enterprise engineering experience and AI exploration.

- [ ] T2.6 Implement the Technology Stack section.
  - Action: Render the groups for Backend, Frontend, Real-time, AI, DevOps, and Database in a structured format.
  - Verification: The section stays concise, representative, and avoids becoming an exhaustive technology inventory.

- [ ] T2.7 Implement the Final CTA section.
  - Action: Add the required concluding message and supporting lines for “LET’S BUILD SOMETHING USEFUL.”
  - Verification: The closing section matches the exact spec wording and visually completes the page flow.

- [ ] T2.8 Apply the design system tokens and responsive styling across the full Home page.
  - Action: Use the existing SCSS tokens and layout conventions for spacing, surfaces, borders, typography, and content rhythm while preserving the modern dark technical aesthetic.
  - Verification: The Home page remains visually consistent across desktop, tablet, and mobile and does not rely on arbitrary repeated color values or unsupported styling patterns.

## Phase 3 - Validation and Deployment Readiness

- [ ] T3.1 Verify accessibility and motion support.
  - Action: Ensure the page has visible keyboard focus states, semantic structure, touch-safe CTA sizing, and reduced-motion handling.
  - Verification: The page is keyboard navigable, focus is visible, and `prefers-reduced-motion` is respected without removing essential interaction feedback.

- [ ] T3.2 Review responsive behavior and page usability.
  - Action: Inspect the UI across mobile, tablet, and desktop breakpoints to confirm readability, spacing, and usability.
  - Verification: No text clipping, overflow, or layout breaks occur at the target sizes.

- [ ] T3.3 Run the Angular validation checks for the portfolio app.
  - Action: Execute the project’s configured validation commands from `portfolio_app`, including dependency install and build/lint validation.
  - Verification: The app passes the required checks without bypassing project rules or introducing unsupported dependencies.

- [ ] T3.4 Perform the final acceptance review against Spec 002.
  - Action: Confirm the implementation covers all required sections, static content, and GitHub Pages constraints from the spec and plan.
  - Verification: No required sections are missing, no out-of-scope implementation slips in, and the final result is ready for the next implementation stage.

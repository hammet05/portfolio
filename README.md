# Portfolio — Frontend

Personal portfolio and professional showcase built with Angular.

This project is the frontend foundation for a personal portfolio focused on software engineering, .NET development and future AI projects. It is being developed incrementally using a simple, maintainable architecture and a CI/CD workflow with GitHub Actions.

## 🚀 Sprint 0 — Frontend Foundation

Sprint 0 establishes the technical foundation of the Angular application. No business pages or portfolio features are implemented yet.

### Objectives

- Initialize the Angular 19 application.
- Establish a simple and maintainable project structure.
- Configure TypeScript and Angular standalone architecture.
- Configure SCSS for global styles.
- Configure Tailwind CSS.
- Configure ESLint and Prettier.
- Prepare the project for Git-based development.
- Configure GitHub Actions for continuous integration and deployment.
- Publish the application initially using GitHub Pages.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Angular 19 | Frontend framework |
| TypeScript | Programming language |
| SCSS | Global and custom styling |
| Tailwind CSS | Utility-first styling |
| ESLint | Code quality and linting |
| Prettier | Code formatting |
| npm | Package management |
| Git / GitHub | Version control |
| GitHub Actions | CI/CD |
| GitHub Pages | Initial hosting |

## 📁 Project Structure

```text
portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── portfolio_app/
    ├── src/
    │   ├── app/
    │   │   ├── core/
    │   │   ├── shared/
    │   │   ├── layout/
    │   │   ├── features/
    │   │   ├── app.config.ts
    │   │   └── app.routes.ts
    │   │
    │   ├── assets/
    │   ├── environments/
    │   └── styles/
    │
    ├── angular.json
    ├── package.json
    └── package-lock.json
```

### Architecture principles

The project intentionally starts simple.

- `core/` — global application services and configuration.
- `shared/` — reusable components, models, utilities, pipes and directives.
- `layout/` — application-level layout components.
- `features/` — functional areas of the application.
- `assets/` — images, icons and other static resources.
- `environments/` — environment-specific configuration.
- `styles/` — global styles and SCSS resources.

The architecture can evolve when the application actually requires it. New abstractions should be introduced because of a real need, not just for the sake of complexity.

## 📦 Dependency Management

The Angular application is located in `portfolio_app`.

Development dependencies are managed with:

```bash
cd portfolio_app
npm install
```

The `package-lock.json` file must be committed to the repository.

For clean and reproducible installations, CI/CD uses:

```bash
npm ci
```

`npm ci` requires `package.json` and `package-lock.json` to be synchronized.

## 💻 Local Development

Clone the repository:

```bash
git clone <repository-url>
```

Move into the Angular application:

```bash
cd portfolio/portfolio_app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:4200/
```

## 🔍 Quality Checks

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Verify that the CI installation works:

```bash
npm ci
```

## 🌐 GitHub Pages Deployment

The project is configured to deploy automatically to GitHub Pages through GitHub Actions.

The workflow is located at:

```text
.github/workflows/deploy.yml
```

The deployment flow is:

```text
Push to main
     │
     ▼
GitHub Actions
     │
     ├── Checkout
     ├── Setup Node.js
     ├── npm ci
     ├── Angular production build
     ├── Upload Pages artifact
     └── Deploy to GitHub Pages
     │
     ▼
GitHub Pages
```

The Angular application is currently built with the GitHub Pages base path:

```text
/portfolio/
```

Therefore, the initial site URL follows this pattern:

```text
https://<github-user>.github.io/portfolio/
```

## 🌿 Git Workflow

The project uses a simple branch strategy:

```text
main
 │
 ├── feature/sprint-0
 ├── feature/home
 ├── feature/projects
 ├── feature/ai-playground
 └── ...
```

Feature branches are merged into `main` through Pull Requests.

Example:

```bash
git checkout -b feature/sprint-0
```

After completing the work:

```bash
git add .
git commit -m "feat: initialize frontend foundation"
git push -u origin feature/sprint-0
```

Then create a Pull Request targeting `main`.

## 🗺️ Roadmap

### Sprint 0 — Frontend Foundation
- [x] Angular project initialized
- [x] Basic frontend architecture
- [x] Tailwind CSS
- [x] SCSS
- [x] ESLint / Prettier
- [x] GitHub Actions
- [x] GitHub Pages deployment

### Future Sprints

- [ ] Home / Landing page
- [ ] About / Professional profile
- [ ] Projects portfolio
- [ ] Project detail pages
- [ ] Technical articles
- [ ] AI Lab
- [ ] AI Playground
- [ ] Contact
- [ ] .NET API
- [ ] AI integrations
- [ ] Custom domain

## 🎯 Project Vision

The portfolio will evolve beyond a traditional CV website.

It will showcase:

- Professional experience.
- Software architecture and engineering practices.
- .NET and Angular projects.
- Proofs of concept.
- AI experiments.
- AI-powered applications.
- Technical articles.
- Real working demonstrations.

The goal is to demonstrate not only what has been built, but also how it was designed, developed and deployed.

---

**Status:** Sprint 0 — Frontend Foundation

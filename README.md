# Kirtan Portfolio

A modern personal portfolio built with Next.js, React, TypeScript, and smooth animation libraries.

## Tech Stack

- Next.js 15
- React 19
- TypeScript 5
- GSAP
- Lenis

## Sections

The portfolio includes:

- Hero
- About
- Skills
- Experience
- Projects
- Contact

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    Contact.tsx
    CustomCursor.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Preloader.tsx
    Projects.tsx
    Skills.tsx
    SmoothScroll.tsx
```

## Notes

- Local environment files and generated artifacts are excluded using `.gitignore`.
- Update component content in `src/components` to personalize your portfolio.

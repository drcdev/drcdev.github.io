# CLAUDE.md

This document provides guidance for AI assistants working with the drc.dev portfolio codebase.

## Project Overview

A Next.js 15 static portfolio site with an ASCII/terminal aesthetic for showcasing software projects. Deploys to GitHub Pages at drc.dev.

## Tech Stack

- **Framework**: Next.js 15 with App Router (static export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **Font**: JetBrains Mono (monospace throughout)
- **Rendering**: react-markdown for project descriptions
- **Deployment**: GitHub Pages via GitHub Actions

## Directory Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind imports & theme colors
│   ├── layout.tsx        # Root layout with JetBrains Mono font
│   ├── page.tsx          # Home page with Hero + ProjectGrid
│   └── projects/
│       └── [slug]/
│           └── page.tsx  # Dynamic project detail pages
├── components/
│   ├── index.ts          # Barrel exports for components
│   ├── Header.tsx        # Sticky nav with ASCII-style links
│   ├── Footer.tsx        # Footer with copyright and links
│   ├── Hero.tsx          # Landing section with AsciiBox
│   ├── ProjectCard.tsx   # Card component for project grid
│   ├── ProjectGrid.tsx   # Responsive grid layout
│   └── ui/
│       ├── index.ts      # Barrel exports for UI primitives
│       ├── AsciiBox.tsx  # Container with + corner decorations
│       ├── AsciiButton.tsx # Button/Link with [ ] bracket styling
│       ├── Badge.tsx     # Tech stack and category badges
│       └── Markdown.tsx  # react-markdown with custom styling
├── data/
│   └── projects.ts       # Project definitions and helper functions
└── types/
    └── project.ts        # TypeScript interfaces for Project
```

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build static export to ./site directory
npm run start    # Serve production build locally
npm run lint     # Run Next.js ESLint
```

## Key Architecture Patterns

### Static Generation
- Uses `output: "export"` in next.config.ts for static HTML
- Build output goes to `./site` directory (not default `.next`)
- `generateStaticParams()` pre-renders all project detail pages
- Images require `unoptimized: true` for static export

### Component Organization
- **Page components** in `src/app/` follow Next.js App Router conventions
- **Reusable components** exported via barrel files (`index.ts`)
- **UI primitives** (`AsciiBox`, `AsciiButton`, `Badge`) in `src/components/ui/`
- Components use TypeScript interfaces with explicit prop types

### Data Layer
- Projects defined in `src/data/projects.ts` as a typed array
- Helper functions: `getProjectBySlug()`, `getFeaturedProjects()`, `getAllProjectSlugs()`
- Project descriptions support Markdown formatting

## Styling Conventions

### Tailwind v4 Theme (CSS-first)
Colors defined in `globals.css` using `@theme`:
- **Accent**: Orange palette (`--color-accent-50` through `--color-accent-950`)
- **Gray**: Custom dark palette (base: `--color-gray-950: #151127`)
- Use `accent-500` for primary interactive elements
- Use `gray-` scale for text hierarchy (100=bright, 600=dim)

### ASCII Aesthetic Guidelines
- Use `+` for box corners (AsciiBox)
- Use `[ ]` brackets for buttons (AsciiButton)
- Prefix headings: `#` for titles, `//` for comments, `$` for prompts
- Navigation links wrapped in brackets: `[projects]`, `[github]`

### Component Variants
Components support variants via prop patterns:
```typescript
// AsciiBox variants: "default" | "accent" | "subtle"
// AsciiButton variants: "primary" | "secondary" | "ghost"
// Badge variants: "default" | "accent" | "outline"
```

## Adding a New Project

1. Add project object to `src/data/projects.ts`:
```typescript
{
  slug: "project-slug",        // URL-safe identifier
  title: "Project Name",
  tagline: "Short description",
  description: `Markdown content...`,
  screenshots: [],             // Array of image paths
  technologies: ["Tech1", "Tech2"],
  category: "app",             // "app" | "tool" | "library" | "experiment"
  links: {
    github: "https://...",
    live: "https://...",       // optional
  },
  featured: true,              // optional, shows in featured section
}
```
2. Screenshots go in `public/` and reference as `/filename.png`
3. No additional routing needed - `generateStaticParams()` handles it

## Deployment

Automated via `.github/workflows/deploy.yml`:
1. Push to `main` triggers workflow
2. Builds with Node.js 20 and `npm ci && npm run build`
3. Uploads `./site` directory as artifact
4. Deploys to GitHub Pages environment

Manual deployment: Run `npm run build` and deploy the `site/` directory.

## Important Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Static export config, output directory |
| `src/app/globals.css` | Theme colors, base styles |
| `src/data/projects.ts` | Project content database |
| `src/types/project.ts` | TypeScript interfaces |
| `.github/workflows/deploy.yml` | CI/CD pipeline |

## Code Conventions

- Use named exports for components
- Props interfaces defined inline or in same file
- Variant patterns with `Record<VariantType, string>` for class mappings
- Path alias `@/*` maps to `./src/*`
- Client components marked with `"use client"` only when required (e.g., Markdown.tsx)
- Keep components minimal - no unnecessary abstractions

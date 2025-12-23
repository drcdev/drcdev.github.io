# drc.dev

A portfolio site built with Next.js 15 and an ASCII/terminal-inspired design system. Static export for GitHub Pages deployment.

**Live Site:** [drc.dev](https://drc.dev)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Static Export) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Typography | JetBrains Mono |
| Rendering | react-markdown for project descriptions |
| Deployment | GitHub Pages via Actions |

## Architecture

### Static Generation

The site uses Next.js static export (`output: "export"`) to generate plain HTML/CSS/JS that deploys anywhere. Project detail pages are pre-rendered at build time using `generateStaticParams()`.

### Component Design

UI primitives follow a consistent pattern with variant support:

```typescript
// Variant pattern used across components
const variants: Record<Variant, string> = {
  primary: "border-accent-500 text-accent-400",
  secondary: "border-gray-600 text-gray-300",
  ghost: "border-transparent text-gray-400",
};
```

### ASCII Design System

Custom components create the terminal aesthetic:

- **AsciiBox** — Containers with `+` corner decorations
- **AsciiButton** — Links/buttons wrapped in `[ ]` brackets
- **Badge** — Tech stack and category labels

### Theme Architecture

Tailwind v4's CSS-first configuration defines the color system in `globals.css`:

```css
@theme {
  --color-rust-BASE: #d68844;
  --color-rust-500: hsl(from var(--color-rust-BASE) h s 50%);
  /* Full palette generated from base color */
}
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home (Hero + ProjectGrid)
│   └── projects/[slug]/   # Dynamic project pages
├── components/
│   ├── ui/                # Design system primitives
│   └── *.tsx              # Page-level components
├── data/
│   └── projects.ts        # Project content + helpers
└── types/
    └── project.ts         # TypeScript interfaces
```

## Development

```bash
npm install
npm run dev     # localhost:3000
npm run build   # Static export to ./site
npm run lint    # ESLint
```

## Adding Projects

Projects are defined in `src/data/projects.ts` with full TypeScript support:

```typescript
{
  slug: "project-name",
  title: "Project Name",
  tagline: "Short description",
  description: `Markdown content...`,
  technologies: ["Tech1", "Tech2"],
  category: "app" | "tool" | "library" | "experiment",
  links: { github: "...", live: "..." },
  featured: true,
}
```

Helper functions provide typed access:

- `getProjectBySlug(slug)` — Single project lookup
- `getFeaturedProjects()` — Homepage featured list
- `getAllProjectSlugs()` — For static path generation

## Deployment

Automated via GitHub Actions on push to `main`. The workflow builds and deploys the `./site` directory to GitHub Pages.

## License

MIT

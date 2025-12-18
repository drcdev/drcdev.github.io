import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "tempo",
    title: "Tempo",
    tagline: "Your rhythmic routine timer",
    description: `
Master your timed routines with Tempo. Like a metronome guiding you through every step, transition, and recovery.

## Features

- **Flexible Routines** - Create custom routines with unlimited steps, rounds, and reps
- **Voice Guidance** - Text-to-speech announcements for transitions and countdowns
- **Bilateral Training** - Track left and right sides independently with auto transitions
- **Cloud Sync** - Optional Supabase sync across devices with magic link authentication
- **Health Integration** - Log workouts to Apple Health / Health Connect
- **Progress Tracking** - Visual progress bars and routine history with analytics
- **Offline First** - Works completely offline on iOS, Android, and Web
- **Smart Recovery** - Customizable recovery periods with countdown and skip options

## Architecture

Built with a feature-based architecture using Riverpod for state management, Drift for type-safe SQL with reactive streams, and a custom FLXIT glassmorphism design system.
    `.trim(),
    screenshots: [],
    technologies: ["Flutter", "Dart", "Riverpod", "Drift", "Supabase"],
    category: "app",
    links: {
      github: "https://github.com/drcdev/tempo",
    },
    featured: true,
  },
  {
    slug: "focus-pocus",
    title: "Focus Pocus",
    tagline: "MCP server bridging Claude Desktop and OmniFocus",
    description: `
Transform your OmniFocus workflow with AI. Focus Pocus is a Model Context Protocol server that enables Claude Desktop to interact with OmniFocus through natural conversation.

## What It Does

- Create, update, and manage tasks via conversational prompts
- Interpret natural language dates ("next Friday at 2pm", "in 3 days")
- Execute bulk operations on multiple tasks efficiently
- Optimize task scheduling across timeframes
- Access OmniFocus perspectives (Inbox, Forecast, Flagged, Projects)

## Technical Details

- **35+ MCP Tools** providing comprehensive OmniFocus workflow coverage
- **39 JXA Scripts** for macOS-native OmniFocus integration
- Natural language date parsing and interpretation
- Smart task scheduling with workload balancing
- High-performance caching layer with pagination
- Connection diagnostics and system health checks

Configure in Claude Desktop's MCP settings to start managing tasks through conversation.
    `.trim(),
    screenshots: [],
    technologies: ["TypeScript", "Node.js", "MCP", "JXA", "Jest"],
    category: "tool",
    links: {
      github: "https://github.com/drcdev/focus-pocus",
    },
    featured: true,
  },
  {
    slug: "drcdev-github-io",
    title: "drc.dev",
    tagline:
      "The portfolio site you are currently looking at, here to showcase my projects",
    description: `
This portfolio site - a Next.js static site with an ASCII/terminal aesthetic for showcasing projects.

## Features

- **App Store Layout** - Project cards with screenshots, tech badges, and detail pages
- **ASCII Aesthetic** - Custom components with box-drawing character styling
- **Dark Mode** - Single dark theme with customizable accent colors
- **Static Export** - Builds to static HTML for GitHub Pages deployment
- **Tailwind v4** - CSS-first configuration with @theme color definitions

## Components

Reusable component library including:
- \`AsciiBox\` - Container with ASCII-framed borders
- \`AsciiButton\` - Button/link with bracket styling
- \`Badge\` - Tech stack and category badges
- \`ProjectCard\` - App store style project cards
- \`ProjectGrid\` - Responsive grid layout

## Deployment

Automated via GitHub Actions - pushes to main trigger a build and deploy to GitHub Pages.
    `.trim(),
    screenshots: [],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "app",
    links: {
      github: "https://github.com/drcdev/drcdev.github.io",
      live: "https://drc.dev",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

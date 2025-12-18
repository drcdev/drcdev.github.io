import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "sample-app",
    title: "Sample App",
    tagline: "A sample application for demonstration",
    description: `
This is a sample project entry demonstrating the project card layout.

## Features
- Feature one with details
- Feature two with more info
- Feature three to showcase

## Tech Stack
Built with modern technologies for performance and maintainability.

Replace this with your actual project details.
    `.trim(),
    screenshots: [],
    technologies: ["TypeScript", "React", "Next.js", "Tailwind"],
    category: "app",
    links: {
      github: "https://github.com/drcdev/sample-app",
      live: "https://example.com",
    },
    featured: true,
  },
  {
    slug: "cli-tool",
    title: "CLI Tool",
    tagline: "Command-line utility for developers",
    description: `
A command-line tool that helps automate common development tasks.

## Installation
\`\`\`bash
npm install -g cli-tool
\`\`\`

## Usage
\`\`\`bash
cli-tool --help
\`\`\`

Replace this with your actual project details.
    `.trim(),
    screenshots: [],
    technologies: ["Node.js", "TypeScript", "Commander"],
    category: "tool",
    links: {
      github: "https://github.com/drcdev/cli-tool",
    },
  },
  {
    slug: "component-library",
    title: "Component Library",
    tagline: "Reusable UI components for React",
    description: `
A library of accessible, customizable React components.

## Installation
\`\`\`bash
npm install @drcdev/components
\`\`\`

## Components
- Button
- Card
- Modal
- Toast

Replace this with your actual project details.
    `.trim(),
    screenshots: [],
    technologies: ["React", "TypeScript", "Storybook", "CSS"],
    category: "library",
    links: {
      github: "https://github.com/drcdev/component-library",
    },
  },
  {
    slug: "experiment-project",
    title: "Experiment",
    tagline: "Exploring new technologies",
    description: `
An experimental project exploring cutting-edge technologies and patterns.

## What I Learned
- New patterns and approaches
- Performance optimizations
- Interesting trade-offs

This is a sandbox for trying new things.
    `.trim(),
    screenshots: [],
    technologies: ["Rust", "WebAssembly", "WebGL"],
    category: "experiment",
    links: {
      github: "https://github.com/drcdev/experiment",
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

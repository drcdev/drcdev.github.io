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
    privacyPolicy: `
# Privacy Policy for Tempo

**Last updated:** January 5, 2026

## Overview

Tempo is an offline-first routine timer app. Your privacy is important to us. This policy explains what data we collect, how it's stored, and your rights.

## Offline-First Design

Tempo works completely offline. All your data is stored locally on your device first:

- Routines and step configurations
- Workout history and completion records
- App preferences and settings

**No account is required** to use Tempo on iOS or Android. Your data stays on your device unless you choose to enable cloud sync.

## Optional Cloud Sync

If you enable cloud sync, your data is stored on [Supabase](https://supabase.com) servers in **Canada (Montreal, Quebec)** using AWS infrastructure.

### What Gets Synced

When sync is enabled:
- Routines and steps you create
- Routine history
- Theme and accessibility preferences

### What Stays Local

These are never uploaded:
- Text-to-speech voice settings (device-specific)
- Health tracking preferences
- Onboarding status

### Data Security

- All data is encrypted at rest (AES-256) and in transit (TLS)
- Row-level security ensures you can only access your own data
- Magic link email authentication (no passwords stored)

For details, see [Supabase Privacy Policy](https://supabase.com/privacy) and [Supabase Security](https://supabase.com/security).

## Health Integration

Tempo can optionally write workout data to Apple Health (iOS) or Health Connect (Android).

- **Write-only** - We do not read your health data
- **You control it** - Must be explicitly enabled per device
- **Local only** - Health preferences are not synced

Data written includes: workout type, routine name, start/end time, and duration.

## Authentication

We use Supabase magic link authentication:
- Enter your email to receive a sign-in link
- No passwords are stored
- Sessions are managed securely by Supabase

## Analytics & Tracking

**We do not collect any analytics or tracking data.** There is no:
- Usage tracking
- Behavior analytics
- Advertising or marketing tracking
- Third-party analytics services

## Data Sharing

We do not sell, share, or transfer your personal data to third parties. Your data is only processed as necessary to provide the sync service through Supabase.

## Data Retention

- **Local data** remains on your device until you delete it
- **Synced data** is retained until you delete your account
- **Deleted records** are kept for 90 days for sync consistency, then permanently removed

## Your Rights

You can at any time:
- **Disable sync** and continue using Tempo offline
- **Delete your account** which removes all cloud data
- **Export your data** by contacting us
- **Keep or delete local data** when signing out

## Children's Privacy

Tempo does not knowingly collect information from children under 13.

## Changes to This Policy

We may update this policy from time to time. Changes will be reflected in the "Last updated" date above.

## Contact

For privacy questions, contact: privacy@drc.dev
    `.trim(),
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
      blog: "https://www.doncoleman.ca/drift/2025/building-focus-pocus-what-i-learned-about-ai-coding-and-integration/",
    },
    featured: true,
  },
  {
    slug: "flux",
    title: "Flux",
    tagline: "A modern Ghost theme with AI-powered reader engagement",
    description: `
A production-ready Ghost theme built for publishers who need intelligent content engagement and multi-segment newsletters.

## Key Features

- **Newsletter Segmentation** - Multiple newsletter streams (Convergence & Drift) with independent branding, subscription buttons, and timeline presentations
- **AI Reader Engagement** - Critical questions and related topics generated by AI to deepen understanding; supports multiple models (GPT-5, Claude) with member-only regeneration
- **Dark Mode** - Three-state toggle (light/dark/auto) with system preference detection and FOUC prevention
- **Tailwind v4** - CSS-first configuration with dynamic accent color theming derived from Ghost settings

## Security

Built with security defaults including Content Security Policy headers, Subresource Integrity hashing, and DOMPurify sanitization for AI-generated content.

## AI Gateway

Optional Express.js API gateway for secure AI integration with rate limiting, cost tracking, and an analytics dashboard. Deploys to Fly.io with persistent SQLite storage.
    `.trim(),
    screenshots: [],
    technologies: [
      "Ghost",
      "Handlebars",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
    ],
    category: "tool",
    links: {
      github: "https://github.com/drcdev/flux",
      live: "https://www.doncoleman.ca",
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
  {
    slug: "plunge-buddy",
    title: "Plunge Buddy",
    tagline: "Real-time conditions for cold plunge enthusiasts",
    description: `
An iOS app that helps cold plunge enthusiasts find the perfect conditions by displaying real-time weather, water temperature, wave height, and tide information based on your location.

## Features

- **Real-time Weather** - Air temperature and "feels like" temperature
- **Marine Data** - Sea surface water temperature and wave height
- **Tide Information** - Last and next high/low tides
- **Location-based** - Automatic local data with fallback to Vancouver, BC
- **Clean Interface** - Modern SwiftUI design with glassmorphic cards

## Architecture

Built with Swift and SwiftUI using MVVM architecture. Uses actor-based network services for thread-safe API calls with async/await throughout.

## Credits

Created by Kieran McConnell. Maintained and deployed by Don Coleman.
    `.trim(),
    screenshots: ["/projects/plunge-buddy.png"],
    technologies: ["Swift", "SwiftUI", "CoreLocation"],
    category: "app",
    links: {
      github: "https://github.com/drcdev/Plunge-Buddy",
    },
    privacyPolicy: `
# PlungeBuddy Privacy Policy

**Last updated:** January 2, 2025

## Overview

PlungeBuddy is a simple app that shows local weather, marine, and tide conditions to help you plan your cold plunge. Your privacy is important to us, and we've designed the app to collect as little data as possible.

## Data We Collect

### Location Data

PlungeBuddy requests access to your device's location to display weather and marine conditions near you. Your location:

- Is used only while the app is open
- Is not stored or saved by us
- Is not used for tracking or analytics

If you deny location access, the app will use a default location (Vancouver, BC).

## Third-Party Services

To provide weather and tide information, your approximate location is shared with the following services:

- **OpenWeatherMap** ([Privacy Policy](https://openweathermap.org/privacy-policy)) - Weather data
- **Open-Meteo** ([Privacy Policy](https://open-meteo.com/en/terms)) - Marine data
- **WorldTides** ([Privacy Policy](https://www.worldtides.info/privacy)) - Tide data

We encourage you to review their privacy policies. We have no control over how these services handle data.

## Data Storage

PlungeBuddy does not:

- Create user accounts
- Store personal information
- Use analytics or tracking
- Save data between sessions
- Share data with advertisers

## Children's Privacy

PlungeBuddy does not knowingly collect information from children under 13.

## Changes to This Policy

We may update this privacy policy from time to time. Changes will be reflected in the "Last updated" date above.

## Contact

If you have questions about this privacy policy, contact us at: contact@doncoleman.ca
    `.trim(),
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

export function getProjectsWithPrivacyPolicy(): Project[] {
  return projects.filter((p) => p.privacyPolicy);
}

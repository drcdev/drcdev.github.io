export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  screenshots: string[];
  technologies: string[];
  category: ProjectCategory;
  links: ProjectLinks;
  featured?: boolean;
  privacyPolicy?: string;
}

export type ProjectCategory = "app" | "tool" | "library" | "experiment";

export interface ProjectLinks {
  github?: string;
  live?: string;
  blog?: string;
  appStore?: string;
  playStore?: string;
}

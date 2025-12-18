import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export function ProjectGrid({ projects, title }: ProjectGridProps) {
  return (
    <section id="projects" className="pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {title && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-mist-200">
              <span className="text-rust-500">{"#"}</span> {title}
            </h2>
            <div className="mt-2 h-px bg-linear-to-r from-sand-800 to-transparent" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

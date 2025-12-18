import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export function ProjectGrid({ projects, title }: ProjectGridProps) {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-200">
              <span className="text-accent-500">{"#"}</span> {title}
            </h2>
            <div className="mt-2 h-px bg-gradient-to-r from-gray-800 to-transparent" />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

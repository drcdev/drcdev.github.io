import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { AsciiBox, Badge } from "./ui";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
  app: "APP",
  tool: "TOOL",
  library: "LIB",
  experiment: "EXP",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <AsciiBox
        variant="default"
        padding="none"
        className="h-full transition-colors hover:border-accent-600"
      >
        {/* Screenshot */}
        <div className="relative aspect-video bg-gray-800 overflow-hidden">
          {project.screenshots[0] ? (
            <Image
              src={project.screenshots[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-600 text-4xl">{"</>"}</span>
            </div>
          )}
          {/* Category badge */}
          <div className="absolute top-2 right-2">
            <Badge variant="accent">{categoryLabels[project.category]}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-lg font-bold text-gray-100 group-hover:text-accent-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{project.tagline}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline">+{project.technologies.length - 4}</Badge>
            )}
          </div>
        </div>
      </AsciiBox>
    </Link>
  );
}

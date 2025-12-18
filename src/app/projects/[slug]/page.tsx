import { notFound } from "next/navigation";
import Image from "next/image";
import { Header, Footer, AsciiBox, AsciiButton, Badge } from "@/components";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | drc.dev`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back link */}
            <div className="mb-8">
              <AsciiButton href="/" variant="ghost" size="sm">
                {"<-"} back
              </AsciiButton>
            </div>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Badge variant="accent">{project.category.toUpperCase()}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400">{project.tagline}</p>
            </header>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
              <div className="mb-8">
                <AsciiBox variant="default" padding="none">
                  <div className="relative aspect-video">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </AsciiBox>
                {project.screenshots.length > 1 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {project.screenshots.slice(1).map((src, i) => (
                      <AsciiBox key={i} variant="subtle" padding="none">
                        <div className="relative aspect-video">
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </AsciiBox>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.links.github && (
                <AsciiButton
                  href={project.links.github}
                  external
                  variant="secondary"
                >
                  github
                </AsciiButton>
              )}
              {project.links.live && (
                <AsciiButton href={project.links.live} external variant="primary">
                  live demo
                </AsciiButton>
              )}
              {project.links.appStore && (
                <AsciiButton
                  href={project.links.appStore}
                  external
                  variant="secondary"
                >
                  app store
                </AsciiButton>
              )}
              {project.links.playStore && (
                <AsciiButton
                  href={project.links.playStore}
                  external
                  variant="secondary"
                >
                  play store
                </AsciiButton>
              )}
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <h2 className="text-sm text-gray-500 mb-3">
                {"// technologies"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <AsciiBox variant="subtle" padding="lg">
              <div className="prose prose-invert prose-gray max-w-none">
                <div className="text-gray-300 whitespace-pre-line">
                  {project.description}
                </div>
              </div>
            </AsciiBox>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

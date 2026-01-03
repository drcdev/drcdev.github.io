import { notFound } from "next/navigation";
import {
  Header,
  Footer,
  AsciiBox,
  AsciiButton,
  Markdown,
} from "@/components";
import { getProjectBySlug, getProjectsWithPrivacyPolicy } from "@/data/projects";

interface PrivacyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectsWithPrivacyPolicy().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.privacyPolicy) return { title: "Privacy Policy Not Found" };
  return {
    title: `Privacy Policy | ${project.title} | drc.dev`,
    description: `Privacy policy for ${project.title}`,
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.privacyPolicy) {
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
              <AsciiButton href={`/projects/${slug}`} variant="ghost" size="sm">
                {"<-"} back to {project.title}
              </AsciiButton>
            </div>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-mist-100 mb-2">
                Privacy Policy
              </h1>
              <p className="text-xl text-mauve-400">{project.title}</p>
            </header>

            {/* Privacy Policy Content */}
            <AsciiBox variant="subtle" padding="lg">
              <Markdown>{project.privacyPolicy}</Markdown>
            </AsciiBox>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

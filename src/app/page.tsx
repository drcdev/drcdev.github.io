import { Header, Footer, Hero, ProjectGrid, GhostSignup } from "@/components";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGrid projects={projects} title="Projects" />
        <GhostSignup />
      </main>
      <Footer />
    </div>
  );
}

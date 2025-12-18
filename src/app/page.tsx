import { Header, Footer, Hero, ProjectGrid, GhostSignup } from "@/components";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGrid projects={projects} title="Projects" />
        <GhostSignup
          site="https://www.doncoleman.ca/"
          label="drc.dev"
          backgroundColor="#151127"
          textColor="#FFFFFF"
          buttonColor="#d68844"
          buttonTextColor="#FFFFFF"
          title="Drift & Convergence"
          description="Exploring the flow of ideas, leadership, and making sense of complexity."
          icon="https://www.doncoleman.ca/content/images/size/w192h192/size/w256h256/2025/03/e908e33a-328f-4a54-97b3-c1ba76d3fff8.png"
        />
      </main>
      <Footer />
    </div>
  );
}

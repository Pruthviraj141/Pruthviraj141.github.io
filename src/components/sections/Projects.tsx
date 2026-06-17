import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/lib/data";
import FadeIn from "../ui/FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border bg-surface" aria-labelledby="projects-heading">
      <FadeIn>
        <SectionHeader title="Deployments" eyebrow="sys.active_projects" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      </FadeIn>
    </section>
  );
}

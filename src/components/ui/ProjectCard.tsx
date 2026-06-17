import { Project } from "@/lib/types";
import { Code2, ExternalLink } from "lucide-react";
import Badge from "./Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group bg-black border-2 border-border p-6 md:p-8 flex flex-col transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--base-accent)] ${project.featured ? "md:col-span-2" : ""}`}>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-6">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-text-1 group-hover:text-accent transition-colors leading-none">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-border text-text-2 hover:text-black hover:bg-accent hover:border-accent transition-all" aria-label="Source code">
                <Code2 size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-border text-text-2 hover:text-black hover:bg-accent hover:border-accent transition-all" aria-label="Live demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="font-mono text-sm text-text-2 leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        {project.featured && project.impact && (
          <div className="mb-8 p-4 border-l-4 border-accent bg-surface">
            <p className="font-mono text-xs text-accent uppercase font-bold tracking-widest mb-1">Target Impact</p>
            <p className="text-sm font-mono text-text-1">{project.impact}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-border/50">
          {project.stack.map(tech => <Badge key={tech}>{tech}</Badge>)}
        </div>
      </div>
    </div>
  );
}

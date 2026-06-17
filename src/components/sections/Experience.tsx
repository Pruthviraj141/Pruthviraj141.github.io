import SectionHeader from "../ui/SectionHeader";
import { experiences } from "@/lib/data";
import FadeIn from "../ui/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border bg-black" aria-labelledby="experience-heading">
      <FadeIn>
        <SectionHeader title="Log" eyebrow="sys.timeline" />

        <div className="space-y-8 md:space-y-12 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-border max-w-4xl">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <span className="absolute left-0 top-2 w-6 h-6 border-2 border-border bg-black group-hover:border-accent group-hover:bg-accent transition-colors flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 bg-border group-hover:bg-black transition-colors" />
              </span>

              <div className="border-2 border-border p-6 md:p-8 bg-surface group-hover:border-accent transition-colors relative break-words">
                <div className="absolute top-0 right-0 p-2 bg-border group-hover:bg-accent text-text-3 group-hover:text-black font-mono text-xs font-bold transition-colors">
                  {exp.dateRange}
                </div>

                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-1 mb-2">
                  {exp.title}
                </h4>

                <p className="font-mono text-sm text-accent font-bold uppercase tracking-widest mb-6">
                  {"// "}{exp.organization}
                </p>

                <ul className="space-y-3 font-mono text-sm text-text-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-accent mt-1 leading-none">{`>`}</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import SectionHeader from "../ui/SectionHeader";
import { achievements } from "@/lib/data";
import * as Icons from "lucide-react";
import FadeIn from "../ui/FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border bg-surface" aria-labelledby="achievements-heading">
      <FadeIn>
        <SectionHeader title="Milestones" eyebrow="sys.records" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((ach) => {
            const Icon = Icons[ach.iconName as keyof typeof Icons] as React.ElementType;
            return (
              <div key={ach.id} className="group border-2 border-border p-6 md:p-8 bg-black flex flex-col items-start gap-6 transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-[8px_8px_0_var(--base-accent)]">

                <div className="w-16 h-16 border-2 border-border flex items-center justify-center text-text-3 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  {Icon && <Icon size={32} strokeWidth={1.5} />}
                </div>

                <div className="flex-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent mb-3 block">
                    [{ach.category}]
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-tight text-text-1 mb-4 group-hover:text-accent transition-colors">
                    {ach.title}
                  </h4>
                  <p className="font-mono text-sm text-text-2 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}

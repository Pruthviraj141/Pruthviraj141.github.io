import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "@/lib/data";
import Badge from "../ui/Badge";
import FadeIn from "../ui/FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border bg-black overflow-hidden relative" aria-labelledby="skills-heading">
      <FadeIn>
        {/* Background Marquee */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-5 pointer-events-none -z-10 overflow-hidden">
          <div className="text-[15vw] font-black leading-none whitespace-nowrap animate-marquee text-accent">
            FRONTEND BACKEND BLOCKCHAIN AI/ML DATABASES DEVOPS
          </div>
        </div>

        <SectionHeader title="Arsenal" eyebrow="sys.tech_stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {skillGroups.map((group, index) => (
            <div key={group.category} className="border-2 border-border bg-surface p-8 hover:border-accent transition-colors group">
              <div className="font-mono text-xs text-text-3 mb-6 flex justify-between items-center pb-4 border-b-2 border-border">
                <span>0{index + 1}</span>
                <span className="text-accent">{"// "}{group.category.toUpperCase()}</span>
              </div>
              <h4 className="text-2xl font-black uppercase text-text-1 mb-8">{group.category}</h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

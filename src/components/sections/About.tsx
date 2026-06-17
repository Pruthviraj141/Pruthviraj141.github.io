import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b-2 border-border relative bg-surface" aria-labelledby="about-heading">
      <FadeIn>
        <SectionHeader title="About" eyebrow="sys.about_me" />
        
        <div className="max-w-4xl font-mono text-base md:text-lg text-text-2 leading-relaxed space-y-6">
          <p>
            &gt; I&apos;m Pruthviraj Gavhane, an AI & Data Science student who loves turning ideas into real-world products.
          </p>
          <p>
            &gt; From AI applications and computer vision systems to full-stack web platforms, I enjoy building technology that is practical, useful, and easy to use. What drives me is the process of taking an idea, solving the challenges behind it, and creating something that can make a real impact.
          </p>
          <p>
            &gt; I&apos;m always learning, building, and exploring new technologies—one project at a time.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

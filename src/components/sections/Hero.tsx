"use client";

import { useEffect, useRef } from "react";
import { candidate } from "@/lib/data";
import * as Icons from "lucide-react";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import TypeIt from "typeit";

export default function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typeitInstance = useRef<any>(null);

  useEffect(() => {
    const el = document.querySelector("#hero-typeit");
    if (!el) return;

    // @ts-expect-error TypeIt types are incomplete
    const effect = new TypeIt(el, {
      speed: 75,
      deleteSpeed: 35,
      lifeLike: true,
      cursor: true,
      cursorChar: "\|",
      waitUntilVisible: true,
      loop: false
    })





      // Identity
      .type("Full Time Engineer 🧑‍💻")
      .pause(1000)
      .move(-12)
      .type("Part Time As Well ")
      .pause(800)
      .delete()


      .type("Problem Solver 🔹")
      .move(17)
      .pause(1000)
      .delete()

      .empty()

      // Professional-ish

      // Coffee joke
      .type("Turning coffee ☕ into bugs 💀")
      .pause(1000)

      .delete(6) // bugs 💀
      .type(" code ✅")
      .pause(1000)

      .empty()

      // Stack
      .type("Fluent in Python 🐍, Java ☕")
      .pause(1000)

      .move(-7) // before ", Java ☕"
      .type(" and Sarcasm 😏")
      .move(7)

      .pause(1000)
      .delete()

      .empty()

      // Vibe coding
      .type("I Love Vibe 🥀 Coding.✔️")
      .pause(800)

      .move(-10) // before Coding...
      .delete(6) // Coding
      .type("")

      .move(10)

      .pause(1000)

      .delete(11) // Building :)
      .type("  Building Products 🚀")

      .pause(1000)

      .delete(20) // Learning 📚
      .type(" Creating Impact 🌐")

      .pause(1000)

      .delete()

      .empty()

      // New


      .type("Solving Problems 🧩")
      .pause(1000)

      .delete()
      .type("Creating Value ✨")
      .pause(1000)

      .empty()

      // AI
      .type("Designing Scalable AI Solutions 🤖")
      .pause(1000)

      .delete(11) // Solutions 🤖
      .type("Products 🚀")
      .pause(1000)

      .empty()

      // Final
      .type("Building smart, fast, and friendly web experiences 💠")




      .go();

    typeitInstance.current = effect;

    return () => {
      effect.destroy();
    };
  }, []);

  const handleReset = () => {
    if (typeitInstance.current) {
      typeitInstance.current.reset();
      typeitInstance.current.go();
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-black py-24">

      <div className="absolute top-1/4 right-0 text-[20vw] font-black text-surface leading-none select-none pointer-events-none -z-10 translate-x-1/4">
        SYS.
      </div>

      <FadeIn delay={100} className="px-6 md:px-12 relative z-10 w-full max-w-5xl">

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tight text-accent leading-[1.3] mb-8 md:mb-12 min-h-[80px] md:min-h-[160px] flex items-start">
          <span id="hero-typeit"></span>
        </h1>

        <p className="font-mono text-sm md:text-lg text-text-2 max-w-2xl mb-8 md:mb-12 leading-relaxed border-l-2 border-border pl-4 md:pl-6 py-2">
          {candidate.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
          <Button variant="primary" href="#projects">
            Deployments //
          </Button>
          <Button variant="ghost" href="#contact">
            Init_Comms
          </Button>
          <Button variant="ghost" href="https://drive.google.com/file/d/1FkarmWLLrLuuHm1lISs4chcZYXEK-D8w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume //
          </Button>

          <div className="mt-4 sm:mt-0 sm:ml-auto flex justify-end">
            <button
              onClick={handleReset}
              className="p-3 sm:p-4 border-2 border-border text-text-2 hover:border-accent hover:bg-accent hover:text-black transition-all flex items-center justify-center shrink-0"
              title="Restart Animation"
              aria-label="Restart Animation"
            >
              <Icons.RotateCcw size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </section>
  );
}

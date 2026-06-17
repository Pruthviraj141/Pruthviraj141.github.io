"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "../ui/SectionHeader";
import ContactLink from "../ui/ContactLink";
import Button from "../ui/Button";
import { socialLinks } from "@/lib/data";
import FadeIn from "../ui/FadeIn";
import TypeIt from "typeit";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const setupTypeIt = (id: string, text: string) => {
      const el = document.querySelector(id) as HTMLInputElement | HTMLTextAreaElement;
      if (!el) return null;

      const effect = new TypeIt(el, {
        strings: text,
        speed: 60,
        waitUntilVisible: true,
        lifeLike: true,
      });

      const handleFocus = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (effect as any).reset();
        el.value = ""; // Ensure it's clear for react-hook-form
      };

      const handleBlur = (e: Event) => {
        if (!(e.target as HTMLInputElement).value.length) {
          effect.go();
        }
      };

      el.addEventListener('focus', handleFocus);
      el.addEventListener('blur', handleBlur);

      // Delay start slightly to prevent layout shifts
      setTimeout(() => effect.go(), 500);

      return () => {
        el.removeEventListener('focus', handleFocus);
        el.removeEventListener('blur', handleBlur);
        effect.destroy();
      };
    };

    const cleanupName = setupTypeIt("#name", "Hacker alias? (e.g. Neo)");
    const cleanupEmail = setupTypeIt("#email", "where.to.send@the.money.com");
    const cleanupMessage = setupTypeIt("#message", "Injecting SQL payload... Just kidding, say hi!");

    return () => {
      if (cleanupName) cleanupName();
      if (cleanupEmail) cleanupEmail();
      if (cleanupMessage) cleanupMessage();
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulated network request
      console.log("Form data:", data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-black" aria-labelledby="contact-heading">
      <FadeIn>
        <SectionHeader title="Init_Comms" eyebrow="sys.contact" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="font-mono text-base text-text-2 mb-8 md:mb-12 leading-relaxed border-l-4 border-accent pl-6 py-2">
              SYSTEM READY FOR NEW CONNECTIONS. TRANSMIT A MESSAGE OR CONNECT VIA SECURE CHANNELS BELOW.
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(link => (
                <ContactLink key={link.platform} link={link} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface border-2 border-border p-8">
            <div className="font-mono text-xs text-accent uppercase font-bold tracking-widest mb-8 pb-4 border-b-2 border-border">
              {"// "}SECURE_TRANSMISSION_FORM
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest font-bold text-text-1">Identifier</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-4 bg-black border-2 border-border text-sm font-mono text-text-1 focus:outline-none focus:border-accent transition-colors rounded-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest font-bold text-text-1">Return Address</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-4 bg-black border-2 border-border text-sm font-mono text-text-1 focus:outline-none focus:border-accent transition-colors rounded-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest font-bold text-text-1">Payload</label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: true })}
                className="w-full px-4 py-4 bg-black border-2 border-border text-sm font-mono text-text-1 focus:outline-none focus:border-accent transition-colors resize-y rounded-none"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full pt-4">
              {isSubmitting ? "TRANSMITTING..." : "EXECUTE TRANSMISSION"}
            </Button>

            {success && (
              <div className="p-4 border-2 border-accent bg-accent/10 mt-6">
                <p className="font-mono text-sm font-bold text-accent uppercase text-center tracking-widest">
                  TRANSMISSION SUCCESSFUL
                </p>
              </div>
            )}
          </form>
        </div>
      </FadeIn>
    </section>
  );
}

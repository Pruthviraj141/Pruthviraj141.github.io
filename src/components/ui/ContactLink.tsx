import * as Icons from "lucide-react";
import { SocialLink } from "@/lib/types";

export default function ContactLink({ link }: { link: SocialLink }) {
  const Icon = Icons[link.iconName as keyof typeof Icons] as React.ElementType;
  
  return (
    <a 
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : undefined}
      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between p-4 border-2 border-border hover:border-accent hover:bg-accent hover:text-black transition-all"
    >
      <div className="flex items-center gap-4">
        {Icon && <Icon size={24} />}
        <span className="font-mono text-lg font-bold uppercase tracking-widest">{link.platform}</span>
      </div>
      <Icons.ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </a>
  );
}

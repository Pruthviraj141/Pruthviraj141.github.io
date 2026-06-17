import { candidate, socialLinks } from "@/lib/data";
import * as Icons from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-black py-12 px-6 overflow-hidden relative">
      <div className="absolute -bottom-10 -right-10 text-[15vw] font-black text-surface opacity-50 pointer-events-none leading-none select-none">
        {new Date().getFullYear()}
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = Icons[link.iconName as keyof typeof Icons] as React.ElementType;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="p-3 border-2 border-border text-text-2 hover:text-black hover:bg-accent hover:border-accent transition-all"
              >
                {Icon && <Icon size={20} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";
import { candidate, navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b-2 border-border">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-black text-xl tracking-tighter uppercase text-text-1 hover:text-accent transition-colors">
          {candidate.name}.SYS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-2 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-1 hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t-2 border-border bg-surface flex flex-col font-mono text-sm uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="p-4 border-b border-border text-text-2 hover:text-accent hover:bg-border/20 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

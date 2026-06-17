import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({ variant = "primary", className = "", href, target, rel, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group w-full sm:w-auto";

  const variants = {
    primary: "bg-accent text-black border-2 border-accent hover:bg-black hover:text-accent",
    ghost: "bg-transparent text-text-1 border-2 border-text-1 hover:bg-text-1 hover:text-black",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}

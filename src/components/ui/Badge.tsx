export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-transparent text-text-1 border border-border text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap hover:border-accent hover:text-accent transition-colors">
      {children}
    </span>
  );
}

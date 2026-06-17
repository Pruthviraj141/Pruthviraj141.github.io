export default function SectionHeader({ title, eyebrow }: { title: string, eyebrow?: string }) {
  return (
    <div className="mb-8 md:mb-16 pb-4 md:pb-8 border-b-2 border-border flex flex-col md:flex-row md:items-end justify-between gap-4">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-text-1">
        {title}
      </h2>
      {eyebrow && (
        <p className="font-mono text-xs sm:text-sm text-accent font-bold tracking-widest uppercase">
          {"// "}{eyebrow}
        </p>
      )}
    </div>
  );
}

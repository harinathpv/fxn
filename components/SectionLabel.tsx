export function SectionLabel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] uppercase text-gold mb-4 ${className ?? ''}`}>
      <span className="inline-block w-5 h-px bg-gold shrink-0" />
      {children}
    </div>
  )
}

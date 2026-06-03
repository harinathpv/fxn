export function Ticker() {
  const items = [
    'Fractional CXO Leadership',
    '14-Day Deployment',
    'Outcome Accountability',
    'Top 1% Talent',
    'GTM',
    'Finance',
    'Tech Pods',
    '150+ Engagements',
    '40+ Industries'
  ]

  return (
    <div className="bg-gold py-2.5 overflow-hidden border-b border-rule">
      <div className="inline-flex gap-12 whitespace-nowrap animate-ticker">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.16em] uppercase text-ink flex-shrink-0">
            <span className="w-1 h-1 rounded-full bg-ink shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

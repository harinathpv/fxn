'use client'

import { useState } from 'react'
import { DIRECTORY } from '@/lib/directory'
import { IconBrandLinkedin } from '@tabler/icons-react'

export function DirectoryGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { label: 'All', value: 'all', count: DIRECTORY.length },
    { label: 'FinTech', value: 'fintech' },
    { label: 'SaaS', value: 'saas' },
    { label: 'AI & Deep Tech', value: 'ai' },
    { label: 'HealthTech', value: 'healthtech' },
    { label: 'EdTech', value: 'edtech' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Ecommerce', value: 'ecommerce' },
    { label: 'Fractional CXO', value: 'fractional' },
    { label: 'Advisor', value: 'advisor' },
  ]

  const filtered = activeFilter === 'all' ? DIRECTORY : DIRECTORY.filter(m => m.tags.includes(activeFilter))

  return (
    <>
      <div className="py-5 px-12 border-b border-rule bg-white flex gap-2.5 flex-wrap items-center sticky top-16 z-10">
        <label className="text-[11px] font-medium text-muted tracking-[0.08em] uppercase mr-1.5">Filter:</label>
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`text-[12px] font-medium px-3.5 py-1.5 rounded-sm transition-all ${
              activeFilter === f.value
                ? 'bg-ink text-cream border-ink'
                : 'bg-cream border border-rule text-muted hover:bg-ink hover:text-cream hover:border-ink'
            }`}
          >
            {f.label} {f.value === 'all' && `(${f.count})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 border-b border-rule">
        {filtered.map((m, idx) => (
          <div
            key={idx}
            className={`p-6 border-r border-rule border-b border-rule flex flex-col gap-2 hover:bg-white transition-colors cursor-default ${
              (idx + 1) % 4 === 0 ? 'border-r-0' : ''
            } ${idx >= filtered.length - (filtered.length % 4 || 4) ? 'border-b-0' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center font-playfair text-[13px] font-bold text-gold">
                {m.initials}
              </div>
              <div>
                <div className="font-playfair text-[15px] font-bold text-ink leading-[1.2]">{m.name}</div>
                <div className="text-[11px] text-muted font-light">{m.exp}</div>
              </div>
            </div>
            <div className="text-[11px] font-medium text-gold tracking-[0.04em] leading-[1.5]">{m.spec}</div>
            <div className="flex flex-wrap gap-1">
              {m.pills.map(p => (
                <span key={p} className="bg-white border border-rule text-[10px] font-medium text-muted px-2 py-0.5 rounded-[1px]">
                  {p}
                </span>
              ))}
            </div>
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-medium text-black/40 hover:text-gold no-underline transition-colors mt-1">
              <IconBrandLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

'use client'

import { PARTNERS } from '@/lib/partners'
import { IconBrandLinkedin } from '@tabler/icons-react'

export function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 border-b border-rule">
      {PARTNERS.map((p, idx) => (
        <div
          key={idx}
          className={`p-8 border-r border-rule border-b border-rule flex flex-col gap-3 hover:bg-white transition-colors cursor-default ${
            idx % 2 === 1 ? 'border-r-0' : ''
          } ${idx >= PARTNERS.length - (PARTNERS.length % 2 || 2) ? 'border-b-0' : ''}`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center font-playfair text-[16px] font-bold text-gold flex-shrink-0">
              {p.initials}
            </div>
            <div className="flex-1">
              <div className="font-playfair text-[17px] font-bold text-ink leading-[1.2] mb-0.5">{p.name}</div>
              <div className="text-[11px] font-medium text-gold tracking-[0.05em] uppercase">{p.spec}</div>
            </div>
          </div>
          <p className="text-[13px] font-light text-muted leading-[1.65]">{p.bio}</p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex flex-wrap gap-1">
              {p.tags.slice(0, 2).map(t => (
                <span key={t} className="bg-cream border border-rule text-[10px] font-medium text-muted px-2 py-0.5 rounded-[1px]">
                  {t}
                </span>
              ))}
            </div>
            <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-medium text-black/40 hover:text-gold no-underline transition-colors ml-auto">
              <IconBrandLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

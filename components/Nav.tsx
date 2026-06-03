'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/vision', label: 'Vision' },
    { href: '/gtm', label: 'GTM Pod' },
    { href: '/directory', label: 'Directory' },
    { href: '/partners', label: 'Partners' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 h-16 bg-cream border-b border-rule flex items-center justify-between">
      <Link href="/" className="font-playfair text-[22px] font-bold px-4 py-2 h-16 flex items-center border-r border-rule">
        <span className="text-ink">Fx</span>
        <span className="text-gold">N</span>
      </Link>

      <div className="flex items-center h-full flex-1">
        {links.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            className={`h-16 flex items-center px-4 text-[12px] font-medium uppercase tracking-[0.05em] border-r border-rule transition-colors ${
              idx === 0 ? 'border-l border-rule' : ''
            } ${
              isActive(link.href)
                ? 'text-gold bg-white'
                : 'text-muted hover:text-ink hover:bg-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/join"
        className="h-16 flex items-center px-5 bg-ink text-cream text-[13px] font-medium tracking-[0.07em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors"
      >
        Join FxN
      </Link>
    </nav>
  )
}

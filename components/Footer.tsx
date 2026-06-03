'use client'

import Link from 'next/link'
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react'

export function Footer() {
  return (
    <footer className="bg-ink px-12 pt-[72px] pb-9">
      <div className="grid grid-cols-4 gap-14 mb-10">
        {/* Col 1 */}
        <div>
          <div className="font-playfair text-2xl font-bold mb-3">
            <span className="text-cream">Fx</span>
            <span className="text-gold">N</span>
          </div>
          <p className="text-[13px] font-light text-white/35 max-w-[280px] mb-6">
            India&apos;s premier fractional executive leadership platform. World-class CXO talent, deployed in days.
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/company/fractionalexecutivenetwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[38px] h-[38px] border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all"
            >
              <IconBrandLinkedin size={18} />
            </a>
            <a
              href="mailto:hello@fxn.network"
              className="w-[38px] h-[38px] border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all"
            >
              <IconMail size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25 mb-4">Company</div>
          <ul className="text-[13px] font-light text-white/50 hover:text-gold transition-colors flex flex-col gap-2.5 list-none">
            <li><Link href="/vision" className="hover:text-gold transition-colors">Vision</Link></li>
            <li><Link href="/partners" className="hover:text-gold transition-colors">Partners</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25 mb-4">Services</div>
          <ul className="text-[13px] font-light text-white/50 flex flex-col gap-2.5 list-none">
            <li><Link href="/gtm" className="hover:text-gold transition-colors">GTM Pods</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Finance Pods</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Tech Pods</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Custom Pods</a></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25 mb-4">Resources</div>
          <ul className="text-[13px] font-light text-white/50 flex flex-col gap-2.5 list-none">
            <li><Link href="/directory" className="hover:text-gold transition-colors">Member Directory</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            <li><Link href="/join" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-9 border-t border-white/8 flex justify-between">
        <p className="text-[12px] text-white/18 font-light">© 2026 FxN. All rights reserved.</p>
        <div className="text-[12px] text-white/18 font-light flex gap-3">
          <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

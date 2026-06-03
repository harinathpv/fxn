import { SectionLabel } from '@/components/SectionLabel'
import { DirectoryGrid } from '@/components/DirectoryGrid'
import Link from 'next/link'

export default function DirectoryPage() {
  return (
    <main>
      <section className="p-[72px_48px] border-b border-rule grid grid-cols-[2fr_1fr] gap-[72px] items-center">
        <div>
          <SectionLabel>Member Directory</SectionLabel>
          <h1 className="font-playfair text-[52px] font-black leading-none tracking-[-2px] text-ink mb-5">
            32 fractional executives across <span className="italic text-gold">every discipline.</span>
          </h1>
          <p className="text-[15px] font-light text-[#4B5563]">Browse our network of battle-tested CXOs who've scaled India's top companies. Click any profile to connect on LinkedIn.</p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-rule border border-rule">
          {[
            { num: '32', label: 'Members' },
            { num: '9', label: 'Industries' },
            { num: '15+', label: 'Skill Areas' },
            { num: '20+', label: 'Avg Yrs Exp.' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-cream p-7 hover:bg-white transition-colors">
              <div className="font-playfair text-[36px] font-black text-ink tracking-[-1px] leading-none">{stat.num}</div>
              <div className="text-[11px] font-light text-muted uppercase tracking-[0.07em] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <DirectoryGrid />

      <section className="bg-ink p-[72px_48px] grid grid-cols-[1fr_auto] items-center gap-12">
        <div>
          <SectionLabel className="text-gold">Are You a Seasoned Executive?</SectionLabel>
          <h2 className="font-playfair text-[34px] text-cream mb-3">Apply to join the FxN network</h2>
          <p className="text-[14px] font-light text-white/40 max-w-[520px] leading-[1.7]">Partner with ambitious founders across India. Take on fractional roles that leverage your expertise, command premium fees, and make real impact — all on your terms.</p>
        </div>
        <Link href="/join" className="bg-gold text-ink px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors inline-block whitespace-nowrap">
          Apply Now →
        </Link>
      </section>
    </main>
  )
}

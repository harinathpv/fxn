import { SectionLabel } from '@/components/SectionLabel'
import { PartnersGrid } from '@/components/PartnersGrid'
import Link from 'next/link'

export default function PartnersPage() {
  return (
    <main>
      <section className="p-[72px_48px] border-b border-rule grid grid-cols-[2fr_1fr] gap-[72px] items-center">
        <div>
          <SectionLabel>Strategic Partners</SectionLabel>
          <h1 className="font-playfair text-[52px] font-black leading-none tracking-[-2px] text-ink mb-5">
            14 founder-operators <span className="italic text-gold">transforming India&apos;s startups.</span>
          </h1>
          <p className="text-[15px] font-light text-[#4B5563]">Meet the architects of the FxN network. Each partner brings deep operating experience from scaling India's most ambitious companies across GTM, finance, technology, and people.</p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-rule border border-rule">
          {[
            { num: '14', label: 'Partner Executives' },
            { num: '13', label: 'Specialisations' },
            { num: '20+', label: 'Avg Yrs Experience' },
            { num: 'Top 1%', label: 'Talent Standard' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-cream p-7 hover:bg-white transition-colors">
              <div className="font-playfair text-[36px] font-black text-ink tracking-[-1px] leading-none">{stat.num}</div>
              <div className="text-[11px] font-light text-muted uppercase tracking-[0.07em] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <PartnersGrid />

      <section className="bg-gold p-[72px_48px] grid grid-cols-[1fr_auto] items-center gap-12">
        <div>
          <SectionLabel className="text-black/40">Join a Thriving Network</SectionLabel>
          <h2 className="font-playfair text-[40px] font-bold text-ink tracking-[-1px] leading-[1.1] mb-3.5">Ready to scale with your team?</h2>
          <p className="text-[15px] font-light text-black/55 leading-[1.7]">Book a discovery call with one of our partners. We&apos;ll understand your challenges and show you exactly how FxN can help you build the leadership team you need.</p>
        </div>
        <Link href="/join" className="bg-ink text-cream px-9 py-4 text-[14px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white hover:text-ink transition-colors inline-block whitespace-nowrap">
          Schedule a Call
        </Link>
      </section>
    </main>
  )
}

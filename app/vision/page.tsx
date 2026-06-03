import { SectionLabel } from '@/components/SectionLabel'
import { DarkGridOverlay } from '@/components/DarkGridOverlay'
import Link from 'next/link'
import { IconClock, IconCurrencyRupee, IconPuzzleOff, IconMedal, IconUsers, IconHeart, IconRocket } from '@tabler/icons-react'

export default function VisionPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[80vh] grid grid-cols-2 border-b border-rule">
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <SectionLabel>Our Vision</SectionLabel>
          <h1 className="font-playfair text-[60px] font-black leading-none tracking-[-2px] text-ink mb-7">
            Leadership should not be <span className="italic text-gold">a luxury.</span>
          </h1>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563] max-w-[440px]">We believe every ambitious company deserves access to world-class executive talent — not just those who can afford a full-time CXO suite. FxN exists to make that possible.</p>
        </div>

        <div className="bg-ink relative overflow-hidden p-20 flex flex-col justify-center">
          <DarkGridOverlay />
          <div className="relative z-10">
            <div className="text-[11px] tracking-[0.18em] uppercase text-white/20 mb-8">The Founding Belief</div>
            <blockquote className="font-playfair text-[26px] font-normal italic text-cream leading-[1.5] border-l-2 border-gold pl-7 mb-8">
              India&apos;s growth story is being built by ambitious founders who deserve better than choosing between no leadership and unaffordable leadership.
            </blockquote>
            <div className="text-[13px] font-light text-white/40">— The FxN founding team</div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="p-20 border-b border-rule grid grid-cols-2 gap-20 items-start">
        <div>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-playfair text-[36px] font-bold text-ink tracking-[-1px] mb-5">The leadership gap holding India&apos;s startups back</h2>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563] mb-5">Most founders face an impossible choice: hire an expensive full-time executive, or go without the specialized talent they need. This gap keeps companies stuck — unable to scale their GTM, optimize finance, or build the technology that could change their trajectory.</p>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563]">FxN closes this gap by deploying fractional CXOs in weeks, not months — giving founders access to proven leaders when and where they need them most.</p>
        </div>

        <div className="flex flex-col border border-rule">
          {[
            { icon: IconClock, title: 'Months wasted on the wrong hires', desc: 'Traditional executive search takes 4–6 months. By then, the market window has often closed.' },
            { icon: IconCurrencyRupee, title: 'CXO salaries that don\'t fit the stage', desc: 'A full-time CMO or CFO at ₹1Cr+ per year is out of reach for most growth-stage companies.' },
            { icon: IconPuzzleOff, title: 'Mismatched expertise for the challenge', desc: 'Even when leaders are hired, they rarely have exactly the right expertise for the specific challenge at hand.' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className={`p-7 px-8 border-b last:border-b-0 flex gap-5 items-start hover:bg-white transition-colors`}>
                <Icon size={22} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-[15px] font-medium text-ink mb-1.5">{item.title}</div>
                  <p className="text-[13px] font-light text-muted leading-[1.65]">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FXN MODEL */}
      <section className="bg-ink p-20 border-b border-white/5">
        <div className="flex justify-between items-end mb-14">
          <div>
            <SectionLabel className="text-gold">The FxN Model</SectionLabel>
            <h2 className="font-playfair text-[42px] font-bold text-cream tracking-[-1px]">A new model for executive leadership</h2>
          </div>
          <p className="text-[14px] font-light text-white/35 max-w-[240px] text-right leading-[1.65]">Not a staffing agency. Not a consulting firm. Something entirely new.</p>
        </div>

        <div className="grid grid-cols-3 border border-[rgba(201,168,76,0.2)]">
          {[
            { title: 'Curated, not crowdsourced', desc: 'Every FxN partner is hand-selected from India\'s top 1% of executive talent — rigorously vetted for outcomes, not just credentials.' },
            { title: 'Pods, not individuals', desc: 'Complex challenges need cross-functional thinking. FxN assembles purpose-built leadership pods — complementary CXOs who work in sync.' },
            { title: 'Outcomes, not hours', desc: 'Every engagement is structured around measurable business outcomes with defined KPIs — not time-and-materials billing.' },
          ].map((item, idx) => (
            <div key={idx} className={`p-11 border-r border-[rgba(201,168,76,0.2)] last:border-r-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors cursor-default`}>
              <div className="font-playfair text-[48px] font-black text-[rgba(201,168,76,0.15)] leading-none mb-5 tracking-[-2px]">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-playfair text-[21px] font-bold text-cream mb-3">{item.title}</h3>
              <p className="text-[13px] font-light text-white/40 leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="p-20 border-b border-rule">
        <div className="mb-12">
          <SectionLabel>Principles</SectionLabel>
          <h2 className="font-playfair text-[42px] font-bold text-ink tracking-[-1px]">The principles that guide everything we do</h2>
        </div>

        <div className="grid grid-cols-4 border border-rule">
          {[
            { icon: IconMedal, title: 'Excellence first', desc: 'We hold the bar extraordinarily high — not just for results, but for the calibre of people we welcome into the network.' },
            { icon: IconUsers, title: 'Radical transparency', desc: 'We define what success looks like before we begin. No ambiguity, no hidden expectations — just clear commitments.' },
            { icon: IconHeart, title: 'Founder empathy', desc: 'Building a company is one of the hardest things a person can do. Our partners have been there — and they lead with that understanding.' },
            { icon: IconRocket, title: 'Speed with rigour', desc: 'We move at the speed of startups without sacrificing quality. 14 days to deployment is a standard, not an aspiration.' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className={`p-10 px-8 border-r border-rule last:border-r-0 hover:bg-white transition-colors cursor-default`}>
                <Icon size={24} className="text-gold mb-4 block" />
                <h3 className="font-playfair text-[19px] font-bold text-ink mb-2.5">{item.title}</h3>
                <p className="text-[13px] font-light text-muted leading-[1.7]">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="grid grid-cols-2 border-b border-rule">
        <div className="p-20 border-r border-rule flex flex-col justify-center">
          <SectionLabel>The Opportunity</SectionLabel>
          <h2 className="font-playfair text-[36px] font-bold text-ink tracking-[-1px] mb-5">India&apos;s decade is here. Leadership is the unlock.</h2>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563] mb-5">Over the next 5 years, India will create over 100K new startups. But talent is the constraint. Most founders will build their companies without access to proven, experienced leadership — handicapping their growth at the exact moment they need it most.</p>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563] mb-8">FxN exists to change that story.</p>
          <Link href="/join" className="w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block">
            Join the Network
          </Link>
        </div>

        <div className="bg-gold grid grid-cols-2">
          {[
            { num: '100K+', label: 'Indian startups by 2030' },
            { num: '₹0', label: 'Cost to discover the right leader' },
            { num: '14', label: 'Days to transform your leadership' },
            { num: 'Top 1%', label: 'Talent once out of reach' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-12 px-9 border-r border-black/10 border-b border-black/10 ${(idx + 1) % 2 === 0 ? 'border-r-0' : ''} ${idx >= 2 ? 'border-b-0' : ''}`}>
              <div className="font-playfair text-[44px] font-black text-ink leading-none tracking-[-2px]">{stat.num}</div>
              <div className="text-[12px] font-light text-black/50 uppercase tracking-[0.07em] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Ticker } from '@/components/Ticker'
import { SectionLabel } from '@/components/SectionLabel'
import { DarkGridOverlay } from '@/components/DarkGridOverlay'
import { Wizard } from '@/components/Wizard'
import { IconTrophy, IconUsers, IconTarget, IconRocket, IconCalendar, IconChartLine, IconShieldCheck, IconLayoutGrid, IconArrowsExchange, IconArrowsDown } from '@tabler/icons-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[88vh] grid grid-cols-2 border-b border-rule">
        {/* Left */}
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <motion.div {...fadeInUp} transition={{ delay: 0 }} className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] uppercase text-gold mb-6">
            <span className="inline-block w-6 h-px bg-gold" />
            India&apos;s #1 Fractional Leadership Platform
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="font-playfair text-[64px] font-black leading-none tracking-[-2.5px] text-ink mb-7"
          >
            Leadership<br />that <span className="italic text-gold">moves</span> markets.
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-[16px] font-light leading-[1.75] text-[#4B5563] max-w-[420px] mb-11"
          >
            Battle-tested CXOs who have scaled India&apos;s top companies — deployed in 14 days, not 14 months. Fractional commitment, full-time impact.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex gap-3.5"
          >
            <button
              onClick={() => scrollTo('get-team')}
              className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors"
            >
              Get Your Leadership Team
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="transparent text-ink border border-ink px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-ink hover:text-cream transition-colors"
            >
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* Right */}
        <div className="bg-ink relative overflow-hidden flex flex-col justify-end p-[60px]">
          <DarkGridOverlay />
          <div className="absolute top-11 left-12 z-10 text-[11px] tracking-[0.2em] uppercase text-white/20">Performance Metrics</div>

          <div className="relative z-10 grid grid-cols-2 gap-px bg-[rgba(201,168,76,0.2)] border border-[rgba(201,168,76,0.2)]">
            {[
              { num: '14', label: 'Days to deployment' },
              { num: '3.2×', label: 'Avg. revenue growth' },
              { num: '96%', label: 'Client satisfaction' },
              { num: 'Top 1%', label: 'Curated talent pool' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-ink p-9 hover:bg-[#111] transition-colors cursor-default border border-[rgba(201,168,76,0.2)]">
                <div className="font-playfair text-[50px] font-bold text-gold leading-none mb-2">{stat.num}</div>
                <div className="text-[11px] uppercase tracking-[0.06em] text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* WHY FXN */}
      <section className="grid grid-cols-[360px_1fr] border-b border-rule">
        <div className="p-[72px_48px] border-r border-rule flex flex-col justify-between">
          <div>
            <SectionLabel>The FxN Difference</SectionLabel>
            <h2 className="font-playfair text-[36px] font-bold text-ink tracking-[-1px] leading-[1.05] mb-5">Why ambitious founders choose FxN</h2>
            <p className="text-[15px] font-light leading-[1.75] text-[#4B5563]">We don&apos;t just provide executives. We build leadership systems that compound — matching on culture, chemistry, and capability to deliver measurable outcomes within 90 days.</p>
          </div>
          <Link href="/join" className="mt-10 w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block">
            Get Started
          </Link>
        </div>

        <div className="grid grid-cols-2">
          {[
            { icon: IconTrophy, title: 'Quality Over Quantity', desc: 'Rigorously curated top 1% executives — vetted for expertise, leadership, and proven track record at India&apos;s best companies.' },
            { icon: IconUsers, title: 'Chemistry Matching', desc: 'Skills are table stakes. We match on culture, communication style, and values — because fit determines whether a leader truly thrives.' },
            { icon: IconTarget, title: 'Outcome Accountability', desc: 'Clear KPIs, regular check-ins, transparent reporting. We define success upfront and hold ourselves fully accountable to your results.' },
            { icon: IconRocket, title: 'Speed to Impact', desc: '14 days from engagement to deployment. 90 days to tangible business impact. We move fast because your growth cannot wait.' },
          ].map((card, idx) => {
            const Icon = card.icon
            const isRight = idx % 2 === 1
            const isBottom = idx >= 2
            return (
              <div
                key={idx}
                className={`p-11 border-b border-r border-rule hover:bg-white transition-colors cursor-default ${
                  isRight ? 'border-r-0' : ''
                } ${isBottom ? 'border-b-0' : ''}`}
              >
                <Icon className="text-gold mb-4" size={24} />
                <h3 className="font-playfair text-[19px] font-bold text-ink mb-2.5">{card.title}</h3>
                <p className="text-[13px] font-light text-muted leading-[1.7]">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-ink p-20 border-b border-white/5">
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionLabel className="text-gold">Process</SectionLabel>
            <h2 className="font-playfair text-[42px] font-bold text-cream tracking-[-1px]">From discovery to deployment in 14 days</h2>
          </div>
          <p className="text-[14px] font-light text-white/35 max-w-[240px] text-right leading-[1.65]">A rigorous, repeatable system that gets the right leader into your team — fast.</p>
        </div>

        <div className="flex flex-col border border-[rgba(201,168,76,0.2)]">
          {[
            { num: '01', title: 'Discovery', desc: 'We learn your business goals, pain points, and culture to build a clear picture of exactly what leadership you need.' },
            { num: '02', title: 'Diagnosis', desc: 'Our experts analyze your organizational gaps and define the CXO profiles that will drive the most impact for your specific challenges.' },
            { num: '03', title: 'Design', desc: 'We architect a custom leadership pod — selecting the right mix of fractional executives for your unique challenges and company culture.' },
            { num: '04', title: 'Match & Meet', desc: 'You interview hand-picked CXOs vetted for expertise and chemistry. You choose who joins your team — no pressure, no obligation.' },
            { num: '05', title: 'Deployment', desc: 'Your leadership pod is deployed within 14 days, with clear milestones and measurable outcomes from day one.' },
          ].map((step, idx) => (
            <div key={idx} className={`grid grid-cols-[80px_1fr] border-b border-[rgba(201,168,76,0.2)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors ${idx > 0 ? '' : ''}`}>
              <div className="p-8 px-5 border-r border-[rgba(201,168,76,0.2)] flex justify-center pt-8 font-playfair text-[13px] font-bold text-gold tracking-[0.08em]">
                {step.num}
              </div>
              <div className="p-7 pl-10 grid grid-cols-[180px_1fr] gap-8 items-start">
                <div>
                  <h3 className="font-playfair text-[22px] font-bold text-cream mb-2">{step.title}</h3>
                  <span className="inline-block bg-gold text-ink text-[10px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-[1px]">Step {idx + 1}</span>
                </div>
                <p className="text-[14px] font-light text-white/50 leading-[1.75] pt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 border border-[rgba(201,168,76,0.2)] border-t-0 mt-0">
          {[
            { icon: IconCalendar, num: '14 days', label: 'To deployment' },
            { icon: IconChartLine, num: '90 days', label: 'To tangible impact' },
            { icon: IconShieldCheck, num: '100% outcome-tied', label: 'Accountability from day one' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`p-6 px-8 border-r border-[rgba(201,168,76,0.2)] last:border-r-0 flex items-center gap-3.5 ${
                  idx > 0 ? '' : ''
                }`}
              >
                <Icon size={20} className="text-gold shrink-0" />
                <div>
                  <div className="text-[13px] font-medium text-cream block">{item.num}</div>
                  <div className="text-[10px] uppercase tracking-[0.06em] text-white/35 block mt-1">{item.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* GTM POD FEATURE */}
      <section className="grid grid-cols-2 border-b border-rule min-h-[460px]">
        <div className="p-[72px_48px] bg-white border-r border-rule flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-ink text-gold text-[11px] font-medium tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-sm mb-5 w-fit">
            <IconLayoutGrid size={13} />
            Signature Pod
          </div>
          <h2 className="font-playfair text-[34px] font-bold text-ink tracking-[-1px] leading-[1.1] mb-4">Go-to-Market That Actually Works</h2>
          <p className="text-[14px] font-light leading-[1.75] text-[#4B5563] mb-7">A 12-week executive-led programme for funded startups and $1M+ revenue companies launching into new markets. Get a complete, executable GTM Playbook — backed by a senior leadership trio.</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Revenue Acceleration', 'Market Expansion', '12 Weeks'].map(pill => (
              <div key={pill} className="bg-cream border border-rule text-ink text-[12px] font-medium px-3.5 py-1.5 rounded-sm">
                {pill}
              </div>
            ))}
          </div>
          <Link href="/gtm" className="w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block">
            Learn More
          </Link>
        </div>

        <div className="p-[72px_48px] flex flex-col gap-4 justify-center">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <div className="bg-ink p-7 rounded-sm text-center hover:-translate-y-1 transition-transform cursor-default">
              <div className="font-playfair text-[28px] font-bold text-gold block mb-1.5">CMO</div>
              <div className="text-[10px] font-light text-white/45 tracking-[0.08em] uppercase leading-[1.4] block">Chief Marketing Officer</div>
            </div>
            <IconArrowsExchange className="text-gold" size={32} />
            <div className="bg-ink p-7 rounded-sm text-center hover:-translate-y-1 transition-transform cursor-default">
              <div className="font-playfair text-[28px] font-bold text-gold block mb-1.5">CSO</div>
              <div className="text-[10px] font-light text-white/45 tracking-[0.08em] uppercase leading-[1.4] block">Chief Sales Officer</div>
            </div>
          </div>
          <div className="flex justify-center text-gold text-2xl">
            <IconArrowsDown size={32} />
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 bg-ink p-7 rounded-sm text-center hover:-translate-y-1 transition-transform cursor-default">
              <div className="font-playfair text-[28px] font-bold text-gold block mb-1.5">CRO</div>
              <div className="text-[10px] font-light text-white/45 tracking-[0.08em] uppercase leading-[1.4] block">Chief Revenue Officer</div>
            </div>
          </div>
        </div>
      </section>

      {/* WIZARD */}
      <Wizard />

      {/* METRICS */}
      <section className="bg-ink grid grid-cols-4 border-b border-white/5">
        {[
          { num: '150+', label: 'Engagements completed' },
          { num: '3.2×', label: 'Avg. revenue growth' },
          { num: '96%', label: 'Client satisfaction' },
          { num: '40+', label: 'Industries served' },
        ].map((metric, idx) => (
          <div key={idx} className="p-[52px_44px] border-r border-white/8 last:border-r-0 hover:bg-white/[0.02] transition-colors cursor-default">
            <div className="font-playfair text-[50px] font-black text-gold leading-none tracking-[-2px] mb-2.5">{metric.num}</div>
            <div className="text-[12px] font-light text-white/35 tracking-[0.07em] uppercase">{metric.label}</div>
          </div>
        ))}
      </section>

      {/* CTA SPLIT */}
      <section className="grid grid-cols-2 border-b border-rule">
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <h2 className="font-playfair text-[34px] font-bold text-ink tracking-[-0.8px] leading-[1.1] mb-4">Join the FxN executive network</h2>
          <p className="text-[14px] font-light leading-[1.75] text-[#4B5563] mb-8">Are you a seasoned CXO looking to do your most impactful work? Apply to join India&apos;s most exclusive fractional executive community.</p>
          <Link href="/join" className="w-fit bg-cream text-ink border border-rule px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors inline-block">
            Apply as an Executive
          </Link>
        </div>

        <div className="p-20 bg-gold flex flex-col justify-center">
          <h2 className="font-playfair text-[34px] font-bold text-ink tracking-[-0.8px] leading-[1.1] mb-4">Ready to transform your leadership team?</h2>
          <p className="text-[14px] font-light leading-[1.75] text-black/55 mb-8">Schedule a free discovery call. We&apos;ll understand your challenges and show you exactly how FxN can help you scale faster.</p>
          <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-cream hover:text-ink transition-colors inline-block">
            Schedule Discovery Call
          </a>
          <p className="text-[12px] font-light text-black/40 mt-3.5">No commitment. Free 30-minute consultation.</p>
        </div>
      </section>
    </main>
  )
}

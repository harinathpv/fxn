'use client'

import { useState } from 'react'
import { SectionLabel } from '@/components/SectionLabel'
import { DarkGridOverlay } from '@/components/DarkGridOverlay'
import Link from 'next/link'
import { PARTNERS } from '@/lib/partners'
import { IconPlus, IconCheck } from '@tabler/icons-react'

export default function GTMPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How is the Pod structured?',
      a: 'The GTM Pod runs for 12 weeks with one live session per week. Each session is practitioner-led and interactive, built around your real company data. Async pod group discussions between sessions keep momentum going.'
    },
    {
      q: 'Is my company data kept private?',
      a: 'Yes. Strictly confidential within vetted non-competing founders. All practitioners sign NDAs to protect your competitive advantage.'
    },
    {
      q: 'How is this different from generic GTM courses?',
      a: 'Working playbooks built on your own pipeline data, reviewed by practicing operators actively scaling companies. No pre-recorded videos, no generic templates — everything is built for your specific challenges.'
    },
    {
      q: 'What if I\'m pre-revenue or very early stage?',
      a: 'Designed for funded B2B startups or $1M+ revenue. We recommend speaking with our team to find the right engagement level for your stage.'
    },
    {
      q: 'Who leads the sessions?',
      a: 'Practicing operators — not educators. 7 core practitioners, all active fractional CXOs with 20–30+ years experience building revenue engines.'
    },
    {
      q: 'What happens after the 12 weeks?',
      a: 'You walk away with a complete, executable GTM Playbook ready from day one. Ongoing fractional support available through the FxN partner network.'
    },
  ]

  const gtmPractitioners = PARTNERS.filter(p => p.cat.includes('gtm') || p.cat.includes('product') || p.cat.includes('finance') || p.cat.includes('people') || p.cat.includes('data') || p.cat.includes('tech') || p.cat.includes('growth')).slice(0, 8)

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[80vh] grid grid-cols-2 border-b border-rule">
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <SectionLabel>Live Cohort · Funded B2B Founders</SectionLabel>
          <h1 className="font-playfair text-[54px] font-black leading-none tracking-[-2px] text-ink mb-6">
            Fix Your GTM Motion <span className="italic text-gold">Before You Scale It.</span>
          </h1>
          <p className="text-[15px] font-light leading-[1.75] text-[#4B5563] max-w-[480px] mb-8">A 12-week practitioner-led cohort for B2B founders. Build a complete, executable GTM Playbook backed by your real pipeline data — with review and accountability from operators who&apos;ve been exactly where you are.</p>
          <div className="flex flex-wrap gap-2 mb-9">
            {['12 Weeks', 'Founder Pods', '7 Deliverables', 'Funded B2B'].map(tag => (
              <div key={tag} className="bg-cream border border-rule text-ink text-[12px] font-medium px-3.5 py-1.5 rounded-sm">
                {tag}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="#pricing" className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block">
              Join the Next Cohort
            </Link>
            <Link href="#curriculum" className="bg-cream text-ink border border-rule px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors inline-block">
              View Curriculum
            </Link>
          </div>
        </div>

        <div className="bg-ink relative overflow-hidden p-14 flex flex-col justify-between">
          <DarkGridOverlay />
          <div className="relative z-10">
            <div className="text-[11px] tracking-[0.16em] uppercase text-white/22 mb-6">Apply for the Next Cohort</div>
            <div className="border border-[rgba(201,168,76,0.2)] p-8 bg-white/[0.03] rounded-sm">
              <div className="text-[11px] uppercase tracking-[0.14em] text-white/30 mb-3">Limited seats · Founder-led pods only</div>
              <div className="font-playfair text-[28px] font-bold text-cream mb-1">27 June 2026</div>
              <div className="text-[13px] font-light text-white/40 mb-6">9:30 AM IST</div>
              <ul className="flex flex-col gap-2.5 mb-7">
                {[
                  '12-week practitioner-led cohort',
                  '7 working deliverables',
                  'Private pod group support',
                  'Practitioner review on all work',
                  'Day 1 ready GTM Playbook'
                ].map(item => (
                  <li key={item} className="flex gap-3 items-start text-[13px] font-light text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full text-center py-3.5 bg-gold text-ink font-medium text-[13px] rounded-sm hover:bg-white transition-colors">
                Apply Now →
              </button>
              <p className="text-[11px] text-white/20 text-center mt-3 font-light">No commitment required to apply.</p>
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-px bg-[rgba(201,168,76,0.2)] border border-[rgba(201,168,76,0.2)] mt-4">
              {['12 Weeks', '7 Deliverables', '7+ Practitioners', 'Day 1 Ready'].map(stat => (
                <div key={stat} className="bg-ink p-4 text-center">
                  <div className="font-playfair text-[22px] font-bold text-gold">{stat.split(' ')[0]}</div>
                  <div className="text-[10px] uppercase tracking-[0.06em] text-white/30 mt-1">{stat.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-b border-rule">
        <div className="p-15 pb-10 border-b border-rule">
          <SectionLabel>What You Walk Away With</SectionLabel>
          <h2 className="font-playfair text-[42px] font-bold text-ink tracking-[-1px]">Outcomes, not just lessons</h2>
        </div>

        <div className="grid grid-cols-4 border-b border-rule">
          {[
            { title: 'GTM Clarity', desc: 'A clear, shared view of your ICP, motion, and exactly where pipeline actually comes from.' },
            { title: 'Executable Playbooks', desc: 'Working playbooks for positioning, demand gen, and sales — built with your actual data.' },
            { title: 'Pipeline Predictability', desc: 'Improved conversion rates, healthier unit economics, and a revenue forecast your board can trust.' },
            { title: 'Aligned Revenue Teams', desc: 'Sales, marketing, partnerships, and CS rowing in the same direction — unified around a single revenue engine.' },
          ].map((outcome, idx) => (
            <div key={idx} className={`p-11 border-r border-rule last:border-r-0 hover:bg-cream transition-colors cursor-default`}>
              <div className="font-playfair text-[36px] font-black text-gold-lt leading-none mb-3.5 tracking-[-1px]">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-playfair text-[20px] font-bold text-ink mb-2.5">{outcome.title}</h3>
              <p className="text-[13px] font-light text-muted leading-[1.7]">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="bg-ink p-20 border-b border-white/5">
        <div className="mb-13">
          <SectionLabel className="text-gold">What You'll Build</SectionLabel>
          <h2 className="font-playfair text-[42px] text-cream tracking-[-1px]">
            7 working deliverables, <em className="italic">not just slides</em>
          </h2>
        </div>

        <div className="grid grid-cols-7 border border-[rgba(201,168,76,0.2)]">
          {[
            { num: '01', title: 'GTM Baseline Report', desc: 'ICP, channels, pipeline health audit' },
            { num: '02', title: 'Messaging & Positioning Playbook', desc: 'Differentiated narrative your team can sell' },
            { num: '03', title: 'Demand Gen Playbook', desc: 'Inbound, ABM, and outbound sequences' },
            { num: '04', title: 'Org + Revenue Model Assessment', desc: 'Org and revenue model fit confirmation' },
            { num: '05', title: 'Sales Enablement Kit', desc: 'Decks, objections, repeatable sales process' },
            { num: '06', title: 'AI GTM Toolkit + Partnership Strategy', desc: 'Modern AI tooling + ecosystem plan' },
            { num: '07', title: 'Full GTM Playbook', desc: 'Your complete executable GTM system' },
          ].map((item, idx) => (
            <div key={idx} className={`p-7 px-5 border-r border-[rgba(201,168,76,0.2)] last:border-r-0 hover:bg-[rgba(201,168,76,0.05)] transition-colors cursor-default`}>
              <div className="font-playfair text-[32px] font-black text-[rgba(201,168,76,0.18)] leading-none mb-3">{item.num}</div>
              <h4 className="text-[13px] font-medium text-cream leading-[1.4] mb-1.5">{item.title}</h4>
              <p className="text-[11px] font-light text-white/35 leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTITIONERS */}
      <section className="p-20 border-b border-rule">
        <div className="mb-12">
          <SectionLabel>Led by operators</SectionLabel>
          <h2 className="font-playfair text-[42px] font-bold text-ink tracking-[-1px]">Led by operators who&apos;ve scaled B2B companies</h2>
        </div>

        <div className="grid grid-cols-4 gap-px bg-rule border border-rule">
          {gtmPractitioners.map((p, idx) => (
            <div key={idx} className="bg-cream p-8 flex flex-col gap-3 hover:bg-white transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center font-playfair text-[16px] font-bold text-gold">
                {p.initials}
              </div>
              <div className="font-playfair text-[16px] font-bold text-ink">{p.name}</div>
              <div className="text-[11px] font-medium tracking-[0.08em] uppercase text-gold">{p.spec.split(' · ')[0]}</div>
              <p className="text-[12px] font-light text-muted leading-[1.6]">{p.tags.slice(0, 3).join(' · ')}</p>
            </div>
          ))}
          <div className="bg-white border-2 border-dashed border-rule flex items-center justify-center flex-col gap-2.5">
            <IconPlus size={24} className="text-gold-lt" />
            <div className="text-[14px] font-medium text-ink">Guest Practitioners</div>
            <p className="text-[12px] font-light text-muted max-w-[160px] text-center">Specialist operators join select sessions.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="grid grid-cols-2 border-b border-rule">
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <SectionLabel>Investment</SectionLabel>
          <h2 className="font-playfair text-[32px] font-bold text-ink mb-4">Simple, transparent pricing</h2>
          <p className="text-[14px] font-light text-muted mb-6">No hidden fees. One-time investment. Lifetime access to playbooks.</p>
          <div className="font-playfair text-[60px] font-black text-ink tracking-[-2px] leading-none mb-1.5">₹1,00,000</div>
          <p className="text-[13px] text-muted font-light mb-7">per participant · Standard Price</p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              '12-week practitioner-led cohort',
              '7 working deliverables',
              'Private pod group support',
              'Practitioner review on all work',
              'Day 1 ready GTM Playbook'
            ].map(item => (
              <li key={item} className="flex gap-2.5 items-start text-[14px] font-light text-[#4B5563]">
                <IconCheck size={16} className="text-gold shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors">
              Apply Now
            </button>
            <button className="bg-cream text-ink border border-rule px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors">
              Speak to an Advisor
            </button>
          </div>
          <p className="text-[12px] font-light text-muted mt-3.5">Money-back guarantee if not satisfied by week 4.</p>
        </div>

        <div className="bg-ink relative overflow-hidden p-20 flex flex-col justify-center">
          <DarkGridOverlay />
          <div className="relative z-10">
            <div className="text-[11px] tracking-[0.16em] uppercase text-white/25 mb-5">Next Cohort Starting</div>
            <div className="font-playfair text-[32px] font-bold text-cream mb-1.5">27 June 2026</div>
            <p className="text-[14px] font-light text-white/40 mb-7">9:30 AM IST · Capped at a small group of 12 founders</p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Weekly live session with practitioners', 'Async group support between sessions', 'Direct feedback on your actual data'].map(item => (
                <li key={item} className="flex gap-3 items-start text-[13px] font-light text-white/55">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full text-center py-4 bg-gold text-ink font-medium text-[14px] rounded-sm hover:bg-white transition-colors">
              Apply Now →
            </button>
            <p className="text-[11px] text-white/20 mt-3 font-light">Limited seats available.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="p-20 border-b border-rule">
        <div className="mb-11">
          <SectionLabel>Help</SectionLabel>
          <h2 className="font-playfair text-[42px] font-bold text-ink tracking-[-1px]">FAQs</h2>
        </div>

        <div className="grid grid-cols-2 border border-rule">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`p-7 px-8 border-r border-rule border-b border-rule hover:bg-cream cursor-pointer transition-colors ${
                idx % 2 === 1 ? 'border-r-0' : ''
              } ${idx >= faqs.length - (faqs.length % 2 || 2) ? 'border-b-0' : ''}`}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-playfair text-[16px] font-bold text-ink leading-[1.35]">{faq.q}</h3>
                <IconPlus size={18} className={`text-gold shrink-0 mt-0.5 transition-transform ${openFAQ === idx ? 'rotate-45' : ''}`} />
              </div>
              {openFAQ === idx && <p className="mt-2.5 text-[13px] font-light text-muted leading-[1.7]">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gold p-20 grid grid-cols-[1fr_auto] items-center gap-16">
        <div>
          <SectionLabel className="text-black/40">Ready to build your playbook?</SectionLabel>
          <h2 className="font-playfair text-[40px] font-bold text-ink tracking-[-1px] leading-[1.1] mb-3.5">Join the next GTM Pod cohort.</h2>
          <p className="text-[15px] font-light text-black/50 leading-[1.7]">Limited seats. Practitioner-led. Your data. Your playbook. Your competitive advantage.</p>
        </div>
        <div className="flex flex-col gap-3 items-end whitespace-nowrap">
          <button className="bg-ink text-cream py-4 px-9 text-[14px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white hover:text-ink transition-colors">
            Build Your Revenue Engine
          </button>
          <button className="bg-cream text-ink border border-gold py-4 px-9 text-[14px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors">
            View Curriculum
          </button>
        </div>
      </section>
    </main>
  )
}

import { SectionLabel } from '@/components/SectionLabel'
import Link from 'next/link'

export default function JoinPage() {
  return (
    <main>
      <section className="min-h-[88vh] flex flex-col items-center justify-center p-20 border-b border-rule text-center">
        <SectionLabel className="justify-center">Let&apos;s Talk</SectionLabel>
        <h1 className="font-playfair text-[64px] font-black leading-none tracking-[-2px] text-ink mb-7 max-w-[900px]">
          Ready to transform your leadership team?
        </h1>
        <p className="text-[16px] font-light leading-[1.75] text-[#4B5563] max-w-[520px] mb-11">
          Schedule a free discovery call. We&apos;ll understand your challenges and show you exactly how FxN can help you build the leadership team you need to scale faster.
        </p>
        <a
          href="https://cal.com/harinathpv"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-cream px-9 py-4 text-[14px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block mb-4"
        >
          Schedule a Call
        </a>
        <p className="text-[12px] font-light text-muted">No commitment. Free 30-minute consultation.</p>
      </section>

      <section className="grid grid-cols-2 border-b border-rule">
        <div className="p-20 flex flex-col justify-center border-r border-rule">
          <SectionLabel>Join as a Founder</SectionLabel>
          <h2 className="font-playfair text-[34px] font-bold text-ink tracking-[-0.8px] leading-[1.1] mb-4">Build your fractional leadership team</h2>
          <p className="text-[14px] font-light leading-[1.75] text-[#4B5563] mb-8">Match with battle-tested CXOs across GTM, finance, technology, and operations. Get your team deployed in 14 days.</p>
          <Link href="/" className="w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors inline-block">
            Find Your Team
          </Link>
        </div>

        <div className="p-20 bg-gold flex flex-col justify-center">
          <SectionLabel className="text-black/40">Join as an Executive</SectionLabel>
          <h2 className="font-playfair text-[34px] font-bold text-ink tracking-[-0.8px] leading-[1.1] mb-4">Become a fractional CXO partner</h2>
          <p className="text-[14px] font-light leading-[1.75] text-black/55 mb-8">Work with ambitious founders. Take on roles that leverage your expertise. Premium fees. Maximum impact. All on your terms.</p>
          <a
            href="https://cal.com/harinathpv"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white hover:text-ink transition-colors inline-block"
          >
            Apply as an Executive
          </a>
        </div>
      </section>

      <section className="p-20 border-b border-rule bg-cream">
        <div className="max-w-[720px] mx-auto">
          <SectionLabel className="justify-center">Questions?</SectionLabel>
          <h2 className="font-playfair text-[42px] font-bold text-ink tracking-[-1px] text-center mb-8">Get in touch</h2>
          <div className="space-y-4 text-center">
            <p className="text-[15px] font-light text-[#4B5563] leading-[1.75]">
              <strong>Email:</strong> <a href="mailto:hello@fxn.network" className="text-ink hover:text-gold transition-colors">hello@fxn.network</a>
            </p>
            <p className="text-[15px] font-light text-[#4B5563] leading-[1.75]">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/fractionalexecutivenetwork/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-gold transition-colors">@fractionalexecutivenetwork</a>
            </p>
            <p className="text-[15px] font-light text-[#4B5563] leading-[1.75]">
              <strong>Office:</strong> India
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState, useMemo } from 'react'
import { MEMBERS } from '@/lib/members'
import { SectionLabel } from './SectionLabel'
import { IconCircleCheck, IconBrandLinkedin } from '@tabler/icons-react'

export function Wizard() {
  const [step, setStep] = useState(1)
  const [seg, setSeg] = useState('')
  const [domain, setDomain] = useState('')
  const [age, setAge] = useState('')
  const [emp, setEmp] = useState('')
  const [specs, setSpecs] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [fxnPick, setFxnPick] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [challenge, setChallenge] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const segments = ['B2B', 'B2C', 'B2B2C', 'D2C', 'SaaS', 'Marketplace', 'Enterprise', 'GCC/Global']
  const ages = ['Pre-launch', '0–1 yr', '1–3 yrs', '3–5 yrs', '5–10 yrs', '10+ yrs']
  const employees = ['1 (Solo)', '2–10', '11–50', '51–200', '201–500', '500+']
  const specsList = [
    'GTM Strategy', 'Sales & Revenue', 'RevOps', 'Business Development', 'Demand Generation', 'ABM',
    'Brand Strategy', 'Digital Marketing', 'Product Marketing', 'Comms & PR', 'Product Strategy',
    'Technology/CTO', 'Software Architecture', 'UX & Design', 'AI & Data Science', 'GenAI/LLMs',
    'Data Strategy', 'Cybersecurity', 'IT Infrastructure', 'CFO/Finance', 'Fundraising',
    'Financial Modelling', 'People & HR', 'Org Design', 'Leadership Coaching', 'Talent & Hiring',
    'Business Strategy', 'Operations/COO', 'Enterprise Architecture', 'Digital Transformation',
    'GCC/India Setup', 'Customer Success', 'Growth Systems', 'L&D'
  ]

  const matched = useMemo(() => {
    if (specs.length === 0) return MEMBERS.slice(0, 9)
    return MEMBERS
      .map(m => ({
        ...m,
        score: specs.filter(s => m.specs.includes(s)).length * 3
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 9)
  }, [specs])

  const handleSubmit = () => {
    if (!name || !email || !company) {
      setError('Please fill in your name, email, and company name.')
      return
    }
    setError('')
    const selectedNames = selected.map(id => MEMBERS.find(m => m.id === id)?.name).filter(Boolean).join(', ')
    const body = `FxN Leadership Team Request\n\nCONTACT\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone || 'Not provided'}\n\nCOMPANY PROFILE\nSegment: ${seg || '—'}\nDomain: ${domain || '—'}\nAge: ${age || '—'}\nEmployees: ${emp || '—'}\n\nNEEDS\nAreas: ${specs.join(', ') || '—'}\n\nEXECUTIVE PREFERENCES\nSelected: ${selectedNames || '—'}\nLet FxN Choose: ${fxnPick ? 'Yes' : 'No'}\n\nCHALLENGE\n${challenge || 'Not provided'}`
    window.location.href = `mailto:hello@fxn.network?subject=${encodeURIComponent('FxN Leadership Request — ' + company)}&body=${encodeURIComponent(body)}`
    setTimeout(() => setDone(true), 600)
  }

  if (done) {
    return (
      <section className="bg-white p-20 border-b border-rule text-center">
        <h2 className="font-playfair text-4xl font-bold text-ink mb-3">Thank you!</h2>
        <p className="text-[15px] font-light text-[#4B5563]">We received your request and will be in touch within 24 hours.</p>
      </section>
    )
  }

  return (
    <section id="get-team" className="bg-white border-b border-rule">
      <div className="p-16 pb-12 border-b border-rule grid grid-cols-2 gap-20 items-end">
        <div>
          <SectionLabel>Find Your Leadership Team</SectionLabel>
          <h2 className="font-playfair text-[38px] font-bold text-ink tracking-[-1px] leading-[1.1] mb-3.5">Tell us about your company. We&apos;ll find the right leaders.</h2>
          <p className="text-[15px] font-light text-[#4B5563]">Built on our proprietary matching system — culture fit, chemistry, and capability.</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3 text-[13px] font-light text-muted">
            <IconCircleCheck size={16} className="text-gold shrink-0" />
            Takes 2 minutes
          </div>
          <div className="flex items-center gap-3 text-[13px] font-light text-muted">
            <IconCircleCheck size={16} className="text-gold shrink-0" />
            See matched executives instantly
          </div>
          <div className="flex items-center gap-3 text-[13px] font-light text-muted">
            <IconCircleCheck size={16} className="text-gold shrink-0" />
            No commitment required
          </div>
        </div>
      </div>

      <div className="px-16 py-8">
        <div className="flex border border-rule mb-11">
          {[1, 2, 3, 4].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`flex-1 p-3.5 px-5 border-r border-rule last:border-r-0 cursor-pointer transition-all ${
                step === s ? 'bg-[rgba(201,168,76,0.06)] border-b-2 border-gold' : 'opacity-40'
              }`}
            >
              <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-muted mb-0.5">
                Step {s}
              </div>
              <div className="text-[13px] font-medium text-ink">
                {s === 1 && 'Company Profile'}
                {s === 2 && 'Your Needs'}
                {s === 3 && 'Matched Executives'}
                {s === 4 && 'Submit Request'}
              </div>
            </button>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">Company Segment</label>
                <div className="flex flex-wrap gap-2">
                  {segments.map(s => (
                    <button
                      key={s}
                      onClick={() => setSeg(seg === s ? '' : s)}
                      className={`px-4 py-2 text-[12px] font-medium rounded-sm transition-all ${
                        seg === s
                          ? 'bg-ink text-cream border border-ink'
                          : 'bg-cream border border-rule text-muted hover:border-ink hover:text-ink'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">Domain</label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full p-3 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none cursor-pointer appearance-none"
                >
                  <option value="">Select domain</option>
                  <optgroup label="Technology">
                    <option>SaaS/Software</option>
                    <option>AI & Deep Tech</option>
                    <option>Data & Analytics</option>
                    <option>Cybersecurity</option>
                  </optgroup>
                  <optgroup label="Financial Services">
                    <option>FinTech</option>
                    <option>Payments & Banking</option>
                    <option>InsurTech</option>
                  </optgroup>
                  <optgroup label="Commerce">
                    <option>Ecommerce</option>
                    <option>D2C/Consumer Brands</option>
                    <option>Marketplace</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option>Other</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">Company Age</label>
                <div className="flex flex-wrap gap-2">
                  {ages.map(a => (
                    <button
                      key={a}
                      onClick={() => setAge(age === a ? '' : a)}
                      className={`px-4 py-2 text-[12px] font-medium rounded-sm transition-all ${
                        age === a
                          ? 'bg-ink text-cream border border-ink'
                          : 'bg-cream border border-rule text-muted hover:border-ink hover:text-ink'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-muted mb-3">Team Size</label>
                <div className="flex flex-wrap gap-2">
                  {employees.map(e => (
                    <button
                      key={e}
                      onClick={() => setEmp(emp === e ? '' : e)}
                      className={`px-4 py-2 text-[12px] font-medium rounded-sm transition-all ${
                        emp === e
                          ? 'bg-ink text-cream border border-ink'
                          : 'bg-cream border border-rule text-muted hover:border-ink hover:text-ink'
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button onClick={() => setStep(2)} className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors">
                Next: Your Needs →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="mb-8">
            <div className="grid grid-cols-4 gap-3">
              {specsList.map(s => (
                <button
                  key={s}
                  onClick={() => setSpecs(specs.includes(s) ? specs.filter(x => x !== s) : [...specs, s])}
                  className={`px-4 py-2 text-[12px] font-medium rounded-sm transition-all ${
                    specs.includes(s)
                      ? 'bg-ink text-cream border border-ink'
                      : 'bg-cream border border-rule text-muted hover:border-ink hover:text-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(1)} className="bg-cream text-ink border border-rule px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors">
                ← Back
              </button>
              <button onClick={() => setStep(3)} className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors">
                Find My Matches →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="mb-8">
            <SectionLabel className="mb-4">Matched Executives</SectionLabel>
            <h3 className="font-playfair text-[28px] font-bold text-ink mb-1.5">{matched.length} executives matched to your profile</h3>
            <p className="text-[13px] font-light text-muted mb-6">Click to select your preferred leaders</p>

            <div className="grid grid-cols-3 border border-rule mb-6">
              {matched.map((m, idx) => (
                <div
                  key={m.id}
                  className={`p-6 border-r border-rule border-b border-rule flex flex-col gap-2 transition-all cursor-pointer ${
                    idx % 3 === 2 ? 'border-r-0' : ''
                  } ${
                    (idx + 1) > (matched.length - (matched.length % 3 || 3)) ? 'border-b-0' : ''
                  } ${
                    selected.includes(m.id) ? 'ring-[1.5px] ring-gold bg-white' : 'hover:bg-cream'
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center font-playfair text-[14px] font-bold text-gold">
                    {m.initials}
                  </div>
                  <div className="font-playfair text-[15px] font-bold text-ink leading-[1.2]">{m.name}</div>
                  <div className="text-[11px] font-medium text-gold uppercase tracking-[0.05em]">{m.role}</div>
                  <div className="text-[11px] font-light text-muted">{m.exp}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {m.specs.slice(0, 2).map(s => (
                      <span key={s} className="bg-white border border-rule text-[10px] font-medium text-muted px-2 py-0.5 rounded-[1px]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 mt-3">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-medium text-black/40 hover:text-gold no-underline">
                      <IconBrandLinkedin size={14} />
                      LinkedIn
                    </a>
                    <button
                      onClick={() => setSelected(selected.includes(m.id) ? selected.filter(x => x !== m.id) : [...selected, m.id])}
                      className={`ml-auto text-[12px] font-medium px-3 py-1 rounded-sm transition-all ${
                        selected.includes(m.id)
                          ? 'bg-ink text-cream'
                          : 'bg-cream border border-rule text-muted hover:text-ink'
                      }`}
                    >
                      {selected.includes(m.id) ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-gold p-5 px-7 flex items-center justify-between gap-6 mb-6 bg-[rgba(201,168,76,0.04)] rounded-sm">
              <div>
                <div className="font-playfair text-[17px] font-bold text-ink mb-1">Not sure? Let FxN choose for you.</div>
                <p className="text-[13px] font-light text-muted">We&apos;ll hand-pick executives based on your profile.</p>
              </div>
              <button
                onClick={() => setFxnPick(!fxnPick)}
                className={`px-4 py-2 text-[12px] font-medium rounded-sm whitespace-nowrap transition-all ${
                  fxnPick
                    ? 'bg-ink text-cream border border-ink'
                    : 'bg-cream border border-rule text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {fxnPick ? 'Enabled' : 'Enable'}
              </button>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(2)} className="bg-cream text-ink border border-rule px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors">
                ← Back
              </button>
              <button onClick={() => setStep(4)} className="bg-ink text-cream px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors">
                Next: Your Details →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 px-4 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 px-4 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-3 px-4 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone/WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 px-4 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none transition-colors"
              />
            </div>

            <textarea
              placeholder="What&apos;s the most pressing challenge you&apos;re trying to solve?"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              rows={4}
              className="w-full p-3 px-4 text-[14px] font-light text-ink bg-cream border border-rule rounded-sm focus:border-gold focus:bg-white outline-none transition-colors mb-6"
            />

            <div className="bg-cream border border-rule p-5 px-6 mb-6 rounded-sm">
              <div className="text-[11px] uppercase tracking-[0.12em] font-medium text-muted mb-3">Your Request Summary</div>
              <div className="space-y-0">
                {seg && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Segment</span><span className="text-[13px] font-light text-ink">{seg}</span></div>}
                {domain && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Domain</span><span className="text-[13px] font-light text-ink">{domain}</span></div>}
                {age && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Age</span><span className="text-[13px] font-light text-ink">{age}</span></div>}
                {emp && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Employees</span><span className="text-[13px] font-light text-ink">{emp}</span></div>}
                {specs.length > 0 && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Areas</span><span className="text-[13px] font-light text-ink">{specs.join(', ')}</span></div>}
                {selected.length > 0 && <div className="grid grid-cols-[160px_1fr] border-b border-rule py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">Selected</span><span className="text-[13px] font-light text-ink">{selected.map(id => MEMBERS.find(m => m.id === id)?.name).join(', ')}</span></div>}
                {fxnPick && <div className="grid grid-cols-[160px_1fr] py-2"><span className="text-[11px] uppercase font-medium text-muted tracking-[0.05em]">FxN Choose</span><span className="text-[13px] font-light text-ink">Enabled</span></div>}
              </div>
            </div>

            {error && <div className="bg-red-50 border border-red-300 text-red-700 p-3 px-4 text-[13px] mb-4 rounded-sm">{error}</div>}

            <div className="flex justify-between items-center">
              <button onClick={() => setStep(3)} className="bg-cream text-ink border border-rule px-6 py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-white transition-colors">
                ← Back
              </button>
              <div className="flex flex-col items-end gap-2">
                <button onClick={handleSubmit} className="bg-ink text-cream px-12 py-4 text-[14px] font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-gold hover:text-ink transition-colors">
                  Submit Request →
                </button>
                <p className="text-[11px] font-light text-muted">No commitment required. We&apos;ll be in touch within 24 hours.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

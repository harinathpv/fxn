'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function MemberDirectory() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    industry: [],
    expertise: [],
    company: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const industries = ['Finance', 'GTM', 'Technology', 'People', 'Product', 'Operations'];
  const expertise = ['Strategy', 'Leadership', 'Growth', 'Tech', 'Finance', 'Operations'];
  const company_stages = ['Seed', 'Series A', 'Series B', 'Growth', 'Pre-IPO'];

  return (
    <>
      <Header />

      <section className="dir-hero">
        <div className="wrap">
          <span className="label">Browse &amp; Connect</span>
          <h1>Member Directory</h1>
          <p>FxN's directory of fractional executives, verified partners, and specialist contributors across India.</p>
          <div className="legend">
            <div className="item">
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                }}
              ></div>
              Verified FxN Partner — appears at top
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-inner">
          <div className="filter-row">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by name, expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="result-count">
              Found <strong>32</strong> members
            </div>
          </div>

          <div className="filter-groups">
            {/* Industry Filter */}
            <div className="filter-group">
              <div className="fg-label">Functional Expertise</div>
              <div className="chip-row">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    className={`chip ${selectedFilters.industry.includes(ind) ? 'active' : ''}`}
                    onClick={() => toggleFilter('industry', ind)}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Expertise Filter */}
            <div className="filter-group">
              <div className="fg-label">Key Skills</div>
              <div className="chip-row">
                {expertise.map((exp) => (
                  <button
                    key={exp}
                    className={`chip ${selectedFilters.expertise.includes(exp) ? 'active' : ''}`}
                    onClick={() => toggleFilter('expertise', exp)}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Stage Filter */}
            <div className="filter-group">
              <div className="fg-label">Company Stage</div>
              <div className="chip-row">
                {company_stages.map((stage) => (
                  <button
                    key={stage}
                    className={`chip ${selectedFilters.company.includes(stage) ? 'active' : ''}`}
                    onClick={() => toggleFilter('company', stage)}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <section className="dir-section">
        <div className="wrap">
          {/* Verified Partners Section */}
          <div>
            <div className="tier-heading">
              <h2>Verified FxN Partners</h2>
              <div className="line"></div>
            </div>

            <div className="member-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={`partner-${i}`} className="member-card verified">
                  <div className="mc-top">
                    <div className="mc-avatar">
                      <span className="initials">AB</span>
                    </div>
                    <div className="mc-id">
                      <h3>Arun Bhattacharya</h3>
                      <div className="years">5 years with FxN</div>
                    </div>
                  </div>
                  <div className="mc-body">
                    <div className="mc-block">
                      <div className="bl">Functional Expertise</div>
                      <div className="tag-row">
                        <span className="tag">Finance</span>
                        <span className="tag">GTM</span>
                      </div>
                    </div>
                    <div className="mc-block">
                      <div className="bl">Industries</div>
                      <div className="tag-row">
                        <span className="tag">SaaS</span>
                        <span className="tag">FinTech</span>
                      </div>
                    </div>
                    <div className="mc-links">
                      <a href="#">Profile →</a>
                      <a href="#">LinkedIn →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Members Section */}
          <div style={{ marginTop: '80px' }}>
            <div className="tier-heading">
              <h2>All Members ({32 - 4} remaining)</h2>
              <div className="line"></div>
            </div>

            <div className="member-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={`member-${i}`} className="member-card">
                  <div className="mc-top">
                    <div className="mc-avatar">
                      <span className="initials">CD</span>
                    </div>
                    <div className="mc-id">
                      <h3>Member Name {i}</h3>
                      <div className="years">2 years with FxN</div>
                    </div>
                  </div>
                  <div className="mc-body">
                    <div className="mc-block">
                      <div className="bl">Functional Expertise</div>
                      <div className="tag-row">
                        <span className="tag">Technology</span>
                      </div>
                    </div>
                    <div className="mc-block">
                      <div className="bl">Industries</div>
                      <div className="tag-row">
                        <span className="tag">B2B</span>
                      </div>
                    </div>
                    <div className="mc-links">
                      <a href="#">Profile →</a>
                      <a href="#">LinkedIn →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

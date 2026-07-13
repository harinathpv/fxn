'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import MemberCard from '@/app/components/MemberCard'
import RevealOnScroll from '@/app/components/RevealOnScroll'
import { members, getAllTags, filterMembers } from '@/app/data/members'
import { AnimatePresence } from 'framer-motion'

type FilterMode = 'AND' | 'OR'

export default function MemberDirectory() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filterMode, setFilterMode] = useState<FilterMode>('OR')
  const allTags = getAllTags()

  const filteredMembers = useMemo(() => {
    return filterMembers(selectedTags, filterMode)
  }, [selectedTags, filterMode])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  return (
    <>
      <Navigation />

      <HeroSection
        title="Member Directory"
        subtitle="Our Community"
        description="Connect with exceptional leaders from diverse industries and backgrounds."
      />

      {/* Directory Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          {/* Filters */}
          <RevealOnScroll direction="up" className="mb-12">
            <div className="bg-background-light border border-border rounded-lg p-6">
              {/* Filter Mode Toggle */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm font-medium text-foreground mb-3">Filter Mode:</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="filterMode"
                      value="OR"
                      checked={filterMode === 'OR'}
                      onChange={(e) => setFilterMode(e.target.value as FilterMode)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-foreground">Match Any (OR)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="filterMode"
                      value="AND"
                      checked={filterMode === 'AND'}
                      onChange={(e) => setFilterMode(e.target.value as FilterMode)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-foreground">Match All (AND)</span>
                  </label>
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-accent text-background'
                          : 'bg-background border border-border text-foreground hover:border-accent'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Clear Filters */}
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </RevealOnScroll>

          {/* Results Info */}
          <RevealOnScroll direction="up" className="mb-8">
            <p className="text-sm text-foreground-secondary">
              Showing {filteredMembers.length} of {members.length} members
              {selectedTags.length > 0 && (
                <span className="text-accent font-medium ml-2">
                  • Filters: {selectedTags.join(', ')}
                </span>
              )}
            </p>
          </RevealOnScroll>

          {/* Members Grid */}
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))
              ) : (
                <RevealOnScroll className="col-span-full text-center py-12">
                  <p className="text-lg text-foreground-secondary">
                    No members match the selected filters. Try adjusting your search criteria.
                  </p>
                </RevealOnScroll>
              )}
            </div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  )
}

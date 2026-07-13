'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Member } from '@/app/data/members'

interface MemberCardProps {
  member: Member
  index?: number
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.div
      className="card overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
      whileHover={{ y: -4 }}
    >
      {/* Member Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4 bg-border">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Member Info */}
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-sm font-medium text-accent mb-0.5">{member.title}</p>
        <p className="text-xs text-foreground-secondary mb-3">{member.company}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {member.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 bg-background text-xs font-medium text-foreground border border-border rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        {member.bio && <p className="text-xs text-foreground-secondary line-clamp-2">{member.bio}</p>}
      </div>
    </motion.div>
  )
}

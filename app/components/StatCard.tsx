'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

interface StatCardProps {
  number: number | string
  label: string
  description?: string
  unit?: string
}

export default function StatCard({ number, label, description, unit = '' }: StatCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (!inView || typeof number !== 'number') return

    let start = 0
    const end = number
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplayNumber(end)
        clearInterval(timer)
      } else {
        setDisplayNumber(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="card text-center"
    >
      <div className="mb-4">
        <p className="text-4xl md:text-5xl font-serif font-bold text-accent">
          {inView && typeof number === 'number' ? displayNumber : number}
          {unit && <span className="text-2xl">{unit}</span>}
        </p>
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">{label}</h3>
      {description && <p className="text-sm text-foreground-secondary">{description}</p>}
    </motion.div>
  )
}

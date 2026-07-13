'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  cta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  cta,
  backgroundImage,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Overlay */}
      {backgroundImage && <div className="absolute inset-0 bg-foreground/20" />}

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-4">
              <p className="text-sm md:text-base font-medium text-accent uppercase tracking-wide">
                {subtitle}
              </p>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-balance"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA */}
          {cta && (
            <motion.div variants={itemVariants}>
              <a
                href={cta.href}
                className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
              >
                {cta.text}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

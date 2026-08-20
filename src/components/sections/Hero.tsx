import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@shared/Button'
import { Section } from '@shared/Section'
import { NetworkCanvas } from '@shared/NetworkCanvas'
import { TextReveal } from '@shared/TextReveal'
import { heroData } from '@data/hero.data'
import { useI18n } from '@i18n'

interface HeroProps {
  data?: typeof heroData
  onPrimaryCtaClick?: () => void
  onSecondaryCtaClick?: () => void
}

const STATUS_ITEMS = ['CCNA', 'CCNP', 'Azure AZ-104', 'Linux', 'Docker']

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ data = heroData, onPrimaryCtaClick, onSecondaryCtaClick }, ref) => {
    const { t } = useI18n()
    const reduced = useReducedMotion()
    const [typed, setTyped] = useState('')
    const roleText = data.title || 'Network & Cloud Engineer'

    // terminal-style typing effect for the role
    useEffect(() => {
      if (reduced) {
        setTyped(roleText)
        return
      }
      let i = 0
      const timer = setInterval(() => {
        i += 1
        setTyped(roleText.slice(0, i))
        if (i >= roleText.length) clearInterval(timer)
      }, 75)
      return () => clearInterval(timer)
    }, [reduced, roleText])

    return (
      <Section
        id="hero"
        ref={ref}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      >
        {/* Animated network particle background */}
        <div className="absolute inset-0" aria-hidden="true">
          <NetworkCanvas particleCount={110} maxLinkDist={150} speedFactor={0.8} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1A1918_78%)]" />
          <div className="absolute inset-0 bg-noise-grid opacity-60" />
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          {/* ---------- Left: text ---------- */}
          <div className="flex flex-col gap-5">
            {/* intro eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-accent-gold" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-accent-gold">
                {t.heroEyebrow}
              </span>
            </motion.div>

            {/* Name — word reveal */}
            <TextReveal
              text={data.name}
              as="h1"
              delay={0.25}
              animateInView={false}
              className="font-display text-5xl font-bold leading-[1.05] text-text-primary md:text-7xl"
            />

            {/* Role — terminal typing */}
            <div className="flex items-center gap-3 font-mono-tech text-lg text-accent-gold md:text-2xl">
              <span className="text-accent-gold/60">$</span>
              <span aria-label={roleText}>{typed}</span>
              <span className="animate-blink ml-1 inline-block h-5 w-[2px] bg-accent-gold align-middle" />
            </div>

            <TextReveal
              text={t.heroValueProposition}
              as="p"
              delay={0.5}
              animateInView={false}
              className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-xl text-sm text-text-muted md:text-base"
            >
              {t.heroSupportingText}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
            >
              <Button variant="primary" size="lg" onClick={onPrimaryCtaClick} className="sm:w-auto">
                {t.heroCtaProjects}
              </Button>
              <Button variant="outlined" size="lg" onClick={onSecondaryCtaClick} className="sm:w-auto">
                {t.heroCtaContact}
              </Button>
              <a
                href="https://linkedin.com/in/mohammed-abdalla-it"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my LinkedIn profile"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-text-primary/20 bg-white/5 px-6 py-4 text-base font-semibold text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/60 hover:bg-accent-gold/10 hover:text-accent-gold sm:px-7"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 1 1 1.56-1.56 1.56 1.56 0 0 1-1.56 1.56zM18.91 18.74h-3v-4.8c0-1.21-.43-2-1.52-2a1.65 1.65 0 0 0-1.54 1.11 2 2 0 0 0-.1.72v4.97h-3v-9h3v1.29a3 3 0 0 1 2.73-1.5c2 0 3.43 1.3 3.43 4.08z" />
                </svg>
                {t.heroLinkedIn}
                <span className="text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">↗</span>
              </a>
            </motion.div>

            {/* certification status line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              {STATUS_ITEMS.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/5 px-3.5 py-1.5 font-mono-tech text-xs text-text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  {s} {t.heroVerified}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ---------- Right: portrait with glow ---------- */}
          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* rotating gradient border */}
            <div
              className="absolute -inset-3 rounded-[2rem] opacity-70"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, rgba(212,165,116,0.55) 25%, transparent 50%, rgba(201,145,94,0.35) 75%, transparent 100%)',
                animation: 'spin 14s linear infinite',
              }}
              aria-hidden="true"
            />
            <div className="absolute -inset-3 rounded-[2rem] bg-accent-gold/10 blur-2xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.7rem] border border-accent-gold/30 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <img
                src={data.portrait.url}
                alt={data.portrait.alt}
                width={data.portrait.width}
                height={data.portrait.height}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              {/* corner ticks */}
              <span className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-accent-gold" aria-hidden="true" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-accent-gold" aria-hidden="true" />

              {/* floating status chip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="animate-float-slow absolute bottom-5 left-5 rounded-full border border-accent-gold/40 bg-background/75 px-4 py-2 font-mono-tech text-xs text-accent-gold backdrop-blur-md"
              >
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-success" />
                {t.heroAvailable}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-text-muted">
            {t.heroScroll}
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-9 w-6 rounded-full border border-accent-gold/50 p-1.5"
            aria-hidden="true"
          >
            <div className="h-1.5 w-1 rounded-full bg-accent-gold" />
          </motion.div>
        </motion.div>
      </Section>
    )
  }
)

Hero.displayName = 'Hero'

export { Hero }
export type { HeroProps }

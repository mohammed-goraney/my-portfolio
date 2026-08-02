import React from 'react'
import { Button } from '@shared/Button'
import { Section } from '@shared/Section'
import { heroData } from '@data/hero.data'
import { ScrollReveal } from '@components/animations'

interface HeroProps {
  data?: typeof heroData
  onPrimaryCtaClick?: () => void
  onSecondaryCtaClick?: () => void
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ data = heroData, onPrimaryCtaClick, onSecondaryCtaClick }, ref) => {
    return (
      <Section
        id="hero"
        ref={ref}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface opacity-50 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Text Content */}
          <ScrollReveal>
  <div className="flex flex-col gap-6">  
            {/* Name */}
            <h1 className="text-display md:text-5xl font-bold text-text-primary leading-tight">
              {data.name}
            </h1>

            {/* Title */}
            <p className="text-h2 md:text-3xl text-accent-gold font-semibold">
              {data.title}
            </p>

            {/* Value Proposition */}
            <p className="text-body-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              {data.valueProposition}
            </p>

            {/* Supporting Text */}
            <p className="text-body-md text-text-muted max-w-xl">
              {data.supportingText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onPrimaryCtaClick}
                className="sm:w-auto"
              >
                {data.primaryCTA.text}
              </Button>
              <Button
                variant="outlined"
                size="lg"
                onClick={onSecondaryCtaClick}
                className="sm:w-auto"
              >
                {data.secondaryCTA.text}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2 pt-8 animate-bounce">
              <svg
                className="w-5 h-5 text-accent-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-text-muted text-sm">Scroll to explore</span>
            </div>
          </div>
          </ScrollReveal>
          {/* Right Column - Portrait Image */}
          <div className="flex justify-center md:justify-end animate-fade-in-up">
            <div className="relative w-full max-w-md">
              {/* Image Container with Border */}
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-accent-gold/30 shadow-elevation-3">
                <img
                  src={data.portrait.url}
                  alt={data.portrait.alt}
                  width={data.portrait.width}
                  height={data.portrait.height}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-amber/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </Section>
    )
  }
)

Hero.displayName = 'Hero'

export { Hero }
export type { HeroProps }
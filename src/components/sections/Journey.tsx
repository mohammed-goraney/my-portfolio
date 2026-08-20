import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { FadeUp } from '@shared/TextReveal'
import { journeyData } from '@data/journey.data'
import { useI18n } from '@i18n'

interface JourneyProps {
  data?: typeof journeyData
}

const Journey = React.forwardRef<HTMLElement, JourneyProps>(
  ({ data = journeyData }, ref) => {
    const { t } = useI18n()

    const getMilestoneColor = (type: string) => {
      switch (type) {
        case 'learning':
          return 'border-info/70 bg-info/15 text-info'
        case 'achievement':
          return 'border-success/70 bg-success/15 text-success'
        case 'challenge':
          return 'border-warning/70 bg-warning/15 text-warning'
        case 'growth':
          return 'border-accent-gold/70 bg-accent-gold/15 text-accent-gold'
        default:
          return 'border-border bg-surface text-text-muted'
      }
    }

    const getMilestoneIcon = (icon: string | undefined) => {
      const iconMap: Record<string, string> = {
        BookOpen: '📚',
        Award: '🏆',
        Cloud: '☁️',
        Code: '💻',
        Zap: '⚡',
        Sparkles: '✨',
      }
      return (icon && iconMap[icon as keyof typeof iconMap]) || '→'
    }

    return (
      <Section id="journey" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <SectionTitle
          title={t.journeyTitle}
          subtitle={t.journeySubtitle}
          level="h2"
          alignment="center"
        />

        <FadeUp>
          <p className="text-center text-body-lg text-text-secondary max-w-2xl mx-auto mb-16">
            {t.journeyIntro}
          </p>
        </FadeUp>

        <div className="relative">
          {/* vertical spine with draw-on-scroll */}
          <svg
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 h-full"
            aria-hidden="true"
            viewBox="0 0 16 1000"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="8"
              y1="0"
              x2="8"
              y2="1000"
              stroke="url(#spineGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="spineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A574" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#C9915E" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C9915E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-12 md:space-y-20">
            {data.milestones.map((milestone, index) => {
              const icon = getMilestoneIcon(milestone.icon)

            const Dot = (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.15 }}
                className="h-3.5 w-3.5 rounded-full bg-background border-2 border-accent-gold shadow-[0_0_14px_rgba(212,165,116,0.6)]"
              />
            )

            const MilestoneCard = ({
              align,
              icon,
              children,
            }: {
              align: 'left' | 'right'
              icon: string
              children: React.ReactNode
            }) => (
              <div
                className={`group relative rounded-xl bg-surface/55 border border-border/70 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent-gold/60 hover:shadow-[0_0_35px_rgba(212,165,116,0.10)] ${
                  align === 'right' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`absolute top-6 h-11 w-px bg-gradient-to-b from-accent-gold/60 to-transparent ${align === 'right' ? 'right-0' : 'left-0'}`}
                  aria-hidden="true"
                />
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl backdrop-blur-sm shadow-[0_0_30px_rgba(212,165,116,0.15)] ${getMilestoneColor(milestone.type)}`}
                >
                  {icon}
                </span>
                {children}
              </div>
            )

              const content = (
                <div className="group">
                  <p className="font-mono-tech text-sm tracking-[0.2em] text-accent-gold mb-3">
                    {milestone.year}
                  </p>
                  <h3 className="text-h3 font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {t[`milestone${index}Title` as keyof typeof t]}
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">{t[`milestone${index}Desc` as keyof typeof t]}</p>
                  <p className="text-body-sm text-text-muted mb-4">{t[`milestone${index}Details` as keyof typeof t]}</p>
                  <div className="flex gap-2 flex-wrap">
                    {milestone.tags.map((tag) => (
                      <Badge key={tag} variant="soft" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={milestone.id}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true, margin: '-8%' }}
                >
                  {/* connector dot on spine (desktop) */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.15 }}
                  >
                    <div className="h-4 w-4 rounded-full bg-background border-2 border-accent-gold shadow-[0_0_14px_rgba(212,165,116,0.6)]" />
                  </motion.div>

                  {/* Desktop layout: alternating glass cards flanking the spine */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-[1fr_16px_1fr] items-stretch">
                      {index % 2 === 0 ? (
                        <>
                          <div className="pr-8">
                            <MilestoneCard align="right" icon={icon}>
                              {content}
                            </MilestoneCard>
                          </div>
                          <div className="flex justify-center pt-10">{Dot}</div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div className="flex justify-center pt-10">{Dot}</div>
                          <div className="pl-8">
                            <MilestoneCard align="left" icon={icon}>
                              {content}
                            </MilestoneCard>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-16 relative">
                    <div
                      className={`absolute left-0 top-6 -translate-x-1/2 h-11 w-px bg-gradient-to-b from-accent-gold/60 to-transparent`}
                      aria-hidden="true"
                    />
                    <div className="bg-surface/60 border border-border/70 rounded-xl p-5 backdrop-blur-sm">
                      <span
                        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg backdrop-blur-sm ${getMilestoneColor(milestone.type)}`}
                      >
                        {icon}
                      </span>
                      <p className="font-mono-tech text-xs tracking-[0.2em] text-accent-gold mb-2">
                        {milestone.year}
                      </p>
                      <h3 className="text-h4 font-bold text-text-primary mb-2">{t[`milestone${index}Title` as keyof typeof t]}</h3>
                      <p className="text-body-sm text-text-secondary mb-2">{t[`milestone${index}Desc` as keyof typeof t]}</p>
                      <p className="text-caption text-text-muted mb-3">{t[`milestone${index}Details` as keyof typeof t]}</p>
                      <div className="flex gap-2 flex-wrap">
                        {milestone.tags.map((tag) => (
                          <Badge key={tag} variant="soft" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Current focus card */}
          <motion.div
            className="mt-20 md:mt-32 relative rounded-2xl border border-accent-gold/30 p-8 md:p-12 overflow-hidden box-glow-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at top right, rgba(212,165,116,0.14), transparent 55%)',
              }}
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{getMilestoneIcon(data.currentFocus.icon)}</span>
                <h3 className="text-h2 font-bold text-accent-gold">{t.journeyNowTitle}</h3>
              </div>
              <p className="text-body-lg text-text-secondary mb-4">{t.journeyNowDesc}</p>
              <div className="flex gap-2 flex-wrap">
                {[t.journeyNowKeyword1, t.journeyNowKeyword2, t.journeyNowKeyword3, t.journeyNowKeyword4].map(
                  (keyword) => (
                    <Badge key={keyword} variant="solid" size="md">
                      {keyword}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    )
  }
)

Journey.displayName = 'Journey'

export { Journey }
export type { JourneyProps }

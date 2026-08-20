import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { FadeUp } from '@shared/TextReveal'
import { CountUp } from '@shared/CountUp'
import { skillsData } from '@data/skills.data'
import { useI18n } from '@i18n'

interface SkillsProps {
  data?: typeof skillsData
}

const Skills = React.forwardRef<HTMLElement, SkillsProps>(
  ({ data = skillsData }, ref) => {
    const { t } = useI18n()

    const getSkillColor = (level: number) => {
      if (level >= 90) return 'from-success to-success/70'
      if (level >= 75) return 'from-info to-info/70'
      if (level >= 60) return 'from-warning to-warning/70'
      return 'from-accent-gold to-accent-gold/70'
    }

    return (
      <Section id="skills" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <SectionTitle
          title={t.skillsTitle}
          subtitle={t.skillsSubtitle}
          level="h2"
          alignment="center"
        />

        {data.intro && (
          <FadeUp>
            <p className="text-center text-body-lg text-text-secondary max-w-2xl mx-auto mb-16">
              {t.skillsIntro}
            </p>
          </FadeUp>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1400px]">
          {data.categories.map((category: typeof data.categories[0], index: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: '-5%' }}
            >
              <div className="group h-full rounded-xl bg-surface/70 border border-accent-gold/40 p-8 flex flex-col backdrop-blur-sm transition-all duration-500 hover:border-accent-gold/70 hover:shadow-[0_0_40px_rgba(212,165,116,0.12)]">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-h3 font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {t[`skillCat${index}Name` as keyof typeof t]}
                    </h3>
                    <p className="text-body-sm text-text-secondary">{t[`skillCat${index}Desc` as keyof typeof t]}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-2xl font-bold text-accent-gold">
                      {category.level ?? 0}%
                    </span>
                    <p className="text-caption text-text-muted">{category.yearsOfExperience ?? 0}+ {t.skillsYrs}</p>
                  </div>
                </div>

                {/* scroll-driven category bar */}
                <div className="w-full bg-surface-light/80 rounded-full h-2 mb-6 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${getSkillColor(category.level ?? 0)} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level ?? 0}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>

                <div className="space-y-4 flex-grow">
                  {category.skills?.map((skill: typeof category.skills[0]) => (
                    <div key={skill.name} className="flex items-start justify-between">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-text-primary font-semibold text-body-sm">
                          {skill.name}
                        </span>
                        {skill.verified && (
                          <span
                            title={t.verifiedSkill}
                            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-accent-gold/60 text-[10px] text-accent-gold"
                          >
                            ✓
                          </span>
                        )}
                      </div>
                      <div className="ml-4 text-right w-28">
                        <div className="bg-surface-light/80 rounded-full h-1.5 mb-1 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level ?? 0)} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level ?? 0}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                        </div>
                        <span className="font-mono-tech text-caption text-text-muted">
                          {skill.level ?? 0}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <Badge variant="solid" size="sm" className="capitalize">
                    {category.skills?.[0]?.proficiency || 'Expert'}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* summary stats with count-up */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: t.skillsSummaryCategories, value: data.categories.length, suffix: '' },
            {
              label: t.skillsSummaryTotal,
              value:
                data.categories.reduce(
                  (sum: number, cat: typeof data.categories[0]) => sum + (cat.skills?.length ?? 0),
                  0
                ),
              suffix: '',
            },
            {
              label: t.skillsSummaryAvg,
              value: Math.round(
                data.categories.reduce(
                  (sum: number, cat: typeof data.categories[0]) => sum + (cat.level ?? 0),
                  0
                ) / data.categories.length
              ),
              suffix: '%',
            },
            {
              label: t.skillsSummaryYears,
              value: Math.max(
                ...data.categories.map((cat: typeof data.categories[0]) => cat.yearsOfExperience ?? 0)
              ),
              suffix: '+',
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl bg-surface/50 border border-border/70 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-accent-gold/50">
                <p className="text-display-sm font-bold text-accent-gold mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} duration={1400} />
                </p>
                <p className="text-body-sm text-text-secondary">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    )
  }
)

Skills.displayName = 'Skills'

export { Skills }
export type { SkillsProps }

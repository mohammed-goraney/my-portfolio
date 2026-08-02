import React from 'react'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Card } from '@shared/Card'
import { Badge } from '@shared/Badge'
import { skillsData } from '@data/skills.data'

interface SkillsProps {
  data?: typeof skillsData
}

const Skills = React.forwardRef<HTMLElement, SkillsProps>(
  ({ data = skillsData }, ref) => {
    const getSkillColor = (level: number) => {
      if (level >= 90) return 'from-success to-success/70'
      if (level >= 75) return 'from-info to-info/70'
      if (level >= 60) return 'from-warning to-warning/70'
      return 'from-accent-gold to-accent-gold/70'
    }

    return (
      <Section id="skills" ref={ref} className="py-20 md:py-32">
        {/* Section Title */}
        <SectionTitle
          title="Technical Expertise"
          subtitle="Skills developed through hands-on experience"
          level="h2"
          alignment="center"
        />

        {/* Intro Text */}
        {data.intro && (
          <p className="text-center text-body-lg text-text-secondary max-w-2xl mx-auto mb-16">
            {data.intro}
          </p>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.categories.map((category) => (
            <Card
              key={category.id}
              variant="bordered"
              padding="lg"
              className="flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-h3 font-bold text-text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {category.description}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-2xl font-bold text-accent-gold">
                    {category.level}%
                  </span>
                  <p className="text-caption text-text-muted">
                    {category.yearsOfExperience}+ yrs
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-surface-light rounded-full h-2 mb-6 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getSkillColor(category.level ?? 0)}`}
                  style={{ width: `${category.level}%` }}
                />
              </div>

              {/* Individual Skills */}
              <div className="space-y-4 flex-grow">
                {category.skills?.map((skill) => (
                  <div key={skill.name} className="flex items-start justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-text-primary font-semibold text-body-sm">
                        {skill.name}
                      </span>
                      {skill.verified && (
                        <span
                          title="Verified skill"
                          className="text-accent-gold"
                        >
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="ml-4 text-right">
                      <div className="w-24 bg-surface-light rounded-full h-1.5 mb-1 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level ?? 0)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-caption text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proficiency Badge */}
              <div className="pt-6 border-t border-border">
                <Badge
                  variant="solid"
                  size="sm"
                  className="capitalize"
                >
                  {category.skills?.[0]?.proficiency || 'Expert'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Categories', value: data.categories.length },
            {
              label: 'Total Skills',
              value: data.categories.reduce((sum, cat) => sum + (cat.skills?.length || 0), 0),
            },
            {
              label: 'Avg Level',
              value: Math.round(
                data.categories.reduce((sum, cat) => sum + (cat.level ?? 0), 0) / data.categories.length
              ) + '%',
            },
            {
              label: 'Years Exp',
              value: Math.max(...data.categories.map((cat) => cat.yearsOfExperience ?? 0)) + '+',
            },
          ].map((stat) => (
            <Card
              key={stat.label}
              variant="glass"
              padding="md"
              className="text-center"
            >
              <p className="text-display-sm font-bold text-accent-gold mb-2">
                {stat.value}
              </p>
              <p className="text-body-sm text-text-secondary">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    )
  }
)

Skills.displayName = 'Skills'

export { Skills }
export type { SkillsProps }
import React from 'react'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { journeyData } from '@data/journey.data'

interface JourneyProps {
  data?: typeof journeyData
}

const Journey = React.forwardRef<HTMLElement, JourneyProps>(
  ({ data = journeyData }, ref) => {
    const getMilestoneColor = (type: string) => {
      switch (type) {
        case 'learning':
          return 'bg-info'
        case 'achievement':
          return 'bg-success'
        case 'challenge':
          return 'bg-warning'
        case 'growth':
          return 'bg-accent-gold'
        default:
          return 'bg-border'
      }
    }

    const getMilestoneIcon = (icon?: string) => {
      const iconMap: Record<string, string> = {
        BookOpen: '📚',
        Award: '🏆',
        Cloud: '☁️',
        Code: '💻',
        Zap: '⚡',
        Sparkles: '✨',
      }
return (icon && iconMap[icon as keyof typeof iconMap]) || '→'    }

    return (
      <Section id="journey" ref={ref} className="py-20 md:py-32">
        {/* Section Title */}
        <SectionTitle
          title="My Journey"
          subtitle="From passion to expertise"
          level="h2"
          alignment="center"
        />

        {/* Intro Text */}
        <p className="text-center text-body-lg text-text-secondary max-w-2xl mx-auto mb-16">
          {data.introText}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-gold to-transparent transform -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-20">
            {data.milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                  {/* Alternating Layout */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Left Content */}
                      <div className="text-right pr-8">
                        <div className="mb-4">
                          <p className="text-accent-gold font-bold text-lg">
                            {milestone.year}
                          </p>
                        </div>
                        <h3 className="text-h3 font-bold text-text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-body-md text-text-secondary mb-4">
                          {milestone.description}
                        </p>
                        <p className="text-body-sm text-text-muted mb-4">
                          {milestone.details}
                        </p>
                        <div className="flex justify-end gap-2 flex-wrap">
                          {milestone.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="soft"
                              size="sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Center Circle */}
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-background ${getMilestoneColor(milestone.type)}`}>
                          {getMilestoneIcon(milestone.icon)}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Center Circle */}
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-background ${getMilestoneColor(milestone.type)}`}>
                          {getMilestoneIcon(milestone.icon)}
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="pl-8">
                        <div className="mb-4">
                          <p className="text-accent-gold font-bold text-lg">
                            {milestone.year}
                          </p>
                        </div>
                        <h3 className="text-h3 font-bold text-text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-body-md text-text-secondary mb-4">
                          {milestone.description}
                        </p>
                        <p className="text-body-sm text-text-muted mb-4">
                          {milestone.details}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {milestone.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="soft"
                              size="sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden pl-12 relative">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full flex items-center justify-center text-lg border-4 border-background bg-accent-gold transform -translate-x-2">
                    {getMilestoneIcon(milestone.icon)}
                  </div>

                  {/* Mobile Content */}
                  <div className="bg-surface border border-border rounded-lg p-4">
                    <p className="text-accent-gold font-bold text-sm mb-2">
                      {milestone.year}
                    </p>
                    <h3 className="text-h4 font-bold text-text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary mb-3">
                      {milestone.description}
                    </p>
                    <p className="text-caption text-text-muted mb-3">
                      {milestone.details}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {milestone.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="soft"
                          size="sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Focus / NOW Section */}
          <div className="mt-20 md:mt-32 bg-gradient-to-r from-accent-gold/10 to-accent-amber/5 border border-accent-gold/30 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{getMilestoneIcon(data.currentFocus.icon)}</span>
                <h3 className="text-h2 font-bold text-accent-gold">
                  {data.currentFocus.title}
                </h3>
              </div>
              <p className="text-body-lg text-text-secondary mb-4">
                {data.currentFocus.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {data.currentFocus.keywords.map((keyword) => (
                  <Badge
                    key={keyword}
                    variant="solid"
                    size="md"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    )
  }
)

Journey.displayName = 'Journey'

export { Journey }
export type { JourneyProps }
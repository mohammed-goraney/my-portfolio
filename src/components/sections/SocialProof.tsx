import React from 'react'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Card } from '@shared/Card'
import { Badge } from '@shared/Badge'
import { socialProofData } from '@data/social-proof.data'

interface SocialProofProps {
  data?: typeof socialProofData
}

const SocialProof = React.forwardRef<HTMLElement, SocialProofProps>(
  ({ data = socialProofData }, ref) => (
    <Section id="social-proof" ref={ref} className="py-20 md:py-32">
      <SectionTitle
        title="Recognition & Achievements"
        subtitle="Certifications and validation of expertise"
        level="h2"
        alignment="center"
      />

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
        {[
          { label: 'Years Experience', value: data.metrics.yearsOfExperience },
          { label: 'Projects Completed', value: data.metrics.projectsCompleted },
          { label: 'Learning Hours', value: data.metrics.learningHours },
          { label: 'Technologies', value: data.metrics.technologiesMastered },
          { label: 'Certifications', value: data.metrics.certifications },
        ].map((metric) => (
          <Card key={metric.label} variant="glass" padding="md" className="text-center">
            <p className="text-display font-bold text-accent-gold mb-2">{metric.value}+</p>
            <p className="text-caption text-text-secondary">{metric.label}</p>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-20">
        <h3 className="text-h2 font-bold text-text-primary mb-8">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.certifications?.map((cert) => (
            <Card key={cert.id} variant="elevated" padding="lg" hover>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📜</span>
                <div className="flex-1">
                  <h4 className="text-h4 font-bold text-text-primary">{cert.name}</h4>
                  <p className="text-body-sm text-text-secondary">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-2 text-caption text-text-muted">
                    <span>{cert.date}</span>
                    {cert.verified && <span className="text-success">✓ Verified</span>}
                  </div>
                  <Badge variant="soft" size="sm" className="mt-3 capitalize">
                    {cert.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 ? (
        <div className="mb-20">
          <h3 className="text-h2 font-bold text-text-primary mb-8">Key Achievements</h3>
          <div className="space-y-4">
            {data.achievements.map((achievement, index) => (
              <Card key={index} variant="bordered" padding="md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">
                    ✓
                  </div>
                  <p className="text-body-md text-text-secondary">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : null}

      {/* Badges */}
      {data.badges && data.badges.length > 0 ? (
        <div className="mb-20">
          <h3 className="text-h2 font-bold text-text-primary mb-8">Expertise Badges</h3>
          <div className="flex flex-wrap gap-4">
            {data.badges.map((badge, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent-gold/20 to-accent-amber/10 border border-accent-gold/30 rounded-xl p-6 text-center"
              >
                <span className="text-3xl block mb-2">🏅</span>
                <p className="font-bold text-text-primary text-sm">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Recommendations */}
      {data.recommendations ? (
        <Card variant="glass" padding="lg">
          <div className="text-center">
            <div className="mb-4 text-4xl">👥</div>
            <p className="text-h3 font-bold text-text-primary mb-2">
              {data.recommendations.count}+ Recommendations
            </p>
            <p className="text-body-md text-text-secondary">
              Endorsed by colleagues and clients on LinkedIn
            </p>
          </div>
        </Card>
      ) : null}
    </Section>
  )
)

SocialProof.displayName = 'SocialProof'

export { SocialProof }
export type { SocialProofProps }
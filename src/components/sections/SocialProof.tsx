import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { FadeUp } from '@shared/TextReveal'
import { CountUp } from '@shared/CountUp'
import { socialProofData } from '@data/social-proof.data'
import type { Certification } from '../../types/contact.types'

interface SocialProofProps {
  data?: typeof socialProofData
}

const SocialProof = React.forwardRef<HTMLElement, SocialProofProps>(
  ({ data = socialProofData }, ref) => {
    const [viewerCert, setViewerCert] = useState<Certification | null>(null)
    return (
    <Section id="social-proof" ref={ref} className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <SectionTitle
        title="Recognition & Achievements"
        subtitle="Certifications and validation of expertise"
        level="h2"
        alignment="center"
      />

      {/* Metrics with animated count-up */}
      <FadeUp className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Years Experience', value: data.metrics.yearsOfExperience, suffix: '+' },
            { label: 'Projects Completed', value: data.metrics.projectsCompleted, suffix: '+' },
            { label: 'Learning Hours', value: data.metrics.learningHours, suffix: '+' },
            { label: 'Technologies', value: data.metrics.technologiesMastered, suffix: '' },
            { label: 'Certifications', value: data.metrics.certifications, suffix: '+' },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="group relative rounded-xl bg-surface/50 border border-border/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/50 hover:shadow-[0_0_30px_rgba(212,165,116,0.10)]">
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-60"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(212,165,116,0.7), transparent)',
                  }}
                  aria-hidden="true"
                />
                <p className="text-display font-bold text-accent-gold mb-2 group-hover:text-glow">
                  <CountUp value={metric.value ?? 0} suffix={metric.suffix} duration={1500} />
                </p>
                <p className="text-caption text-text-secondary">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeUp>

      {/* Certifications — official certificates gallery */}
      <FadeUp className="mb-20">
        <h3 className="text-h2 font-bold text-text-primary mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-accent-gold" />
          Certifications
        </h3>
        <p className="text-body-md text-text-secondary max-w-2xl mb-8">
          Seven official certificates issued by{' '}
          <a
            href="https://networkat.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold underline underline-offset-4 hover:text-glow transition-colors"
          >
            Networkat
          </a>{' '}
          (Credential ID: {data.certificatesIssuer?.credentialId ?? 'Networkat1197'}) — click any certificate to view it full size.
        </p>
      </FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
        {data.certifications?.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-5%' }}
            className="group"
          >
            <button
              type="button"
              onClick={() => setViewerCert(cert)}
              className="h-full w-full text-left rounded-xl bg-surface/60 border border-border/70 p-3 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/60 hover:shadow-[0_8px_40px_rgba(212,165,116,0.12)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              aria-label={`View ${cert.name} certificate`}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3 bg-white">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">📜</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 text-caption text-white bg-black/60 rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
              <h4 className="text-h4 font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300 line-clamp-1">
                {cert.name}
              </h4>
              <div className="flex items-center justify-between gap-2 mt-1 text-caption text-text-muted">
                <span>{cert.issuer}</span>
                {cert.verified && <span className="text-success">✓</span>}
              </div>
              <Badge variant="soft" size="sm" className="mt-2 capitalize">
                {cert.category}
              </Badge>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Certificate viewer (lightbox) */}
      <AnimatePresence>
        {viewerCert?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setViewerCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${viewerCert.name} certificate viewer`}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setViewerCert(null)}
              className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-surface border border-accent-gold/50 text-accent-gold text-xl flex items-center justify-center hover:bg-accent-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              aria-label="Close certificate viewer"
            >
              ✕
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative max-w-4xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={viewerCert.image}
                alt={`${viewerCert.name} certificate`}
                className="w-full max-h-[78vh] object-contain rounded-xl border border-accent-gold/40 shadow-[0_0_60px_rgba(212,165,116,0.25)]"
              />
              <div className="mt-4 text-center">
                <p className="text-h3 font-bold text-accent-gold">{viewerCert.name}</p>
                <p className="text-body-sm text-text-secondary mt-1">
                  {viewerCert.issuer} · Credential ID: {viewerCert.credentialId ?? 'Networkat1197'} · Verified
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 ? (
        <FadeUp className="mb-20">
          <h3 className="text-h2 font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-gold" />
            Key Achievements
          </h3>
          <div className="space-y-4">
            {data.achievements.map((achievement: string, index: number) => (
              <div
                key={index}
                className="rounded-xl border border-accent-gold/40 bg-surface/50 p-5 flex items-start gap-3 backdrop-blur-sm"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">
                  ✓
                </div>
                <p className="text-body-md text-text-secondary">{achievement}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      ) : null}

      {/* Badges */}
      {data.badges && data.badges.length > 0 ? (
        <FadeUp className="mb-20">
          <h3 className="text-h2 font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-gold" />
            Expertise Badges
          </h3>
          <div className="flex flex-wrap gap-4">
            {data.badges.map((badge: typeof data.badges[0], index: number) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-accent-gold/20 to-accent-amber/10 border border-accent-gold/30 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent-gold/70 hover:shadow-[0_0_30px_rgba(212,165,116,0.15)]"
              >
                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                  🏅
                </span>
                <p className="font-bold text-text-primary text-sm">{badge.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      ) : null}

      {/* Recommendations */}
      {data.recommendations ? (
        <FadeUp>
          <div className="relative rounded-2xl border border-accent-gold/30 bg-surface/50 p-10 text-center backdrop-blur-sm">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(212,165,116,0.12), transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-4 text-4xl">👥</div>
              <p className="text-h3 font-bold text-text-primary mb-2">
                <CountUp value={data.recommendations.count} suffix="+" duration={1500} />{' '}
                Recommendations
              </p>
              <p className="text-body-md text-text-secondary">
                Endorsed by colleagues and clients on LinkedIn
              </p>
            </div>
          </div>
        </FadeUp>
      ) : null}
    </Section>
    )
  }
)

SocialProof.displayName = 'SocialProof'

export { SocialProof }
export type { SocialProofProps }
export type { Certification } from '../../types/contact.types'

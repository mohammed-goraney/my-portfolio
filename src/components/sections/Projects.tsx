import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { DockerDiagram } from '@shared/DockerDiagram'
import { projectsData } from '@data/projects.data'
import { dockerVotingApp } from '@data/projects.data'
import { useI18n } from '@i18n'

interface ProjectsProps {
  data?: typeof projectsData
}

/**
 * Case Study layout (Option A):
 * Wide case-study rows in an alternating zigzag (right/left) pattern so the
 * Projects section reads as a portfolio of engineering case studies — clearly
 * different from the Courses uniform card grid.
 */
const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ data: _data = projectsData }, ref) => {
    const { t } = useI18n()

    return (
      <Section id="projects" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <SectionTitle
          title={t.projectsTitle}
          subtitle={t.projectsSubtitle}
          level="h2"
          alignment="center"
        />

        {/* ---------- Real project: Docker Example Voting App ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-6%' }}
          className="mb-20 md:mb-28"
        >
          {/* spine node for the real project */}
          <div className="relative">
            <div
              className="absolute top-10 z-10 hidden md:flex left-1/2 -translate-x-1/2 h-12 w-12 items-center justify-center rounded-full border border-accent-gold/50 bg-background text-accent-gold font-mono-tech text-sm font-bold shadow-[0_0_20px_rgba(212,165,116,0.25)]"
              aria-hidden="true"
            >
              ✓
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {/* content */}
              <div className="space-y-4 pt-2 md:pt-8 max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-accent-gold/80">
                    {t.realProjectLabel}
                  </span>
                  <span className="h-px w-10 bg-accent-gold/50" aria-hidden="true" />
                </div>
                <Badge variant="soft" size="sm" className="mx-auto w-fit">
                  {t.dockerMicroLabel}
                </Badge>
                <h3 className="text-2xl md:text-[1.9rem] leading-snug font-bold text-text-primary">
                  {t.dockerTitle}
                </h3>
                <p className="text-body-md text-text-secondary">{t.dockerShortDesc}</p>
                <div className="pt-2 text-left">
                  <p className="text-sm font-semibold text-accent-gold mb-1.5">{t.theChallenge}</p>
                  <p className="text-body-sm text-text-secondary">{t.dockerChallenge}</p>
                </div>
                <div className="pt-2 text-left">
                  <p className="text-sm font-semibold text-accent-gold mb-1.5">{t.theApproach}</p>
                  <p className="text-body-sm text-text-secondary">{t.dockerApproach}</p>
                </div>
                <div className="pt-3">
                  <p className="text-sm font-semibold text-accent-gold mb-2">{t.measurableOutcomes}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { title: t.dockerResult1Title, desc: t.dockerResult1Desc },
                      { title: t.dockerResult2Title, desc: t.dockerResult2Desc },
                      { title: t.dockerResult3Title, desc: t.dockerResult3Desc },
                    ].map((result) => (
                      <span
                        key={result.title}
                        className="inline-flex items-baseline gap-1.5 rounded-lg border border-accent-gold/30 bg-accent-gold/5 px-3 py-1.5"
                      >
                        <span className="font-mono-tech text-xs font-bold text-accent-gold">
                          {result.title}
                        </span>
                        <span className="text-xs text-text-secondary">{result.desc}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 flex flex-wrap justify-center gap-2">
                  {dockerVotingApp.technologies.map((group) =>
                    group.technologies?.map((tech) => (
                      <Badge key={tech.name} variant="outlined" size="sm">
                        {tech.name}
                      </Badge>
                    ))
                  )}
                </div>
                {/* lessons learned */}
                <div className="pt-4 text-left rounded-lg border border-border/50 bg-surface/40 p-4">
                  <p className="text-sm font-semibold text-accent-gold mb-2">{t.whatILearned}</p>
                  <ul className="space-y-1.5">
                    {[t.dockerLesson1, t.dockerLesson2, t.dockerLesson3].map((lesson, i) => (
                      <li key={i} className="flex gap-2 text-body-sm text-text-secondary">
                        <span className="text-accent-gold shrink-0">▸</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* animated architecture diagram */}
              <div className="max-w-3xl mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  viewport={{ once: true, margin: '-8%' }}
                >
                  <DockerDiagram />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* More projects will be added here as Mohammed completes real labs & deployments */}
      </Section>
    )
  }
)

Projects.displayName = 'Projects'

export { Projects }
export type { ProjectsProps }

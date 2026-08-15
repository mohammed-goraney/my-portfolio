import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { projectsData } from '@data/projects.data'

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
  ({ data = projectsData }, ref) => {
    const projects = data.allProjects

    return (
      <Section id="projects" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <SectionTitle
          title="Case Studies"
          subtitle="Engineering problems, the approach, and measurable outcomes"
          level="h2"
          alignment="center"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* vertical timeline spine connecting the case studies */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-accent-gold/0 via-accent-gold/40 to-accent-gold/0"
            aria-hidden="true"
          />

          {projects.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <motion.div
                key={project.id}
                id={`case-study-${project.id}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: '-6%' }}
                className="relative"
              >
                {/* index node on the spine */}
                <div
                  className={`absolute top-10 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent-gold/50 bg-background text-accent-gold font-mono-tech text-sm font-bold shadow-[0_0_20px_rgba(212,165,116,0.25)] ${
                    reversed ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${reversed ? 'md:direction-rtl' : ''}`}>
                  {/* content side */}
                  <div className={`space-y-4 pt-2 md:pt-8 ${reversed ? 'md:col-start-2 md:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-accent-gold/80">
                        Case Study {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-10 bg-accent-gold/50" aria-hidden="true" />
                    </div>

                    {project.microLabel && (
                      <Badge variant="soft" size="sm" className="w-fit">
                        {project.microLabel}
                      </Badge>
                    )}

                    <h3 className="text-2xl md:text-[1.9rem] leading-snug font-bold text-text-primary">
                      {project.title}
                    </h3>

                    <p className="text-body-md text-text-secondary">{project.shortDescription}</p>

                    {project.challenge?.description && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-accent-gold mb-1.5">The Challenge</p>
                        <p className="text-body-sm text-text-secondary">{project.challenge.description}</p>
                      </div>
                    )}

                    {project.approach?.description && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-accent-gold mb-1.5">The Approach</p>
                        <p className="text-body-sm text-text-secondary">{project.approach.description}</p>
                      </div>
                    )}

                    {/* results strip */}
                    {project.results && project.results.length > 0 && (
                      <div className="pt-3">
                        <p className="text-sm font-semibold text-accent-gold mb-2">Measurable Outcomes</p>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((result) => (
                            <span
                              key={result.title}
                              className="inline-flex items-baseline gap-1.5 rounded-lg border border-accent-gold/30 bg-accent-gold/5 px-3 py-1.5"
                            >
                              <span className="font-mono-tech text-xs font-bold text-accent-gold">
                                {result.impact ?? result.title}
                              </span>
                              <span className="text-xs text-text-secondary">{result.description}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* tech stack as chips */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="pt-3 flex flex-wrap gap-2">
                        {project.technologies.map((group) =>
                          group.technologies?.map((tech) => (
                            <Badge key={tech.name} variant="outlined" size="sm">
                              {tech.name}
                            </Badge>
                          ))
                        )}
                      </div>
                    )}

                    {/* links */}
                    {project.links && (
                      <div className="flex items-center gap-4 pt-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent-gold transition-colors"
                          >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                            </svg>
                            Source
                            <span className="text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* visual side */}
                  <div className={`order-first ${reversed ? 'md:order-1 md:col-start-1' : 'md:col-start-1'}`}>
                    {project.image && (
                      <div className="group relative rounded-xl overflow-hidden border border-border/60 bg-background shadow-elevation-2 transition-all duration-500 hover:border-accent-gold/50 hover:shadow-[0_0_40px_rgba(212,165,116,0.12)]">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.image.url}
                            alt={project.image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                        {/* project file bar under the image */}
                        <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-surface/70 px-4 py-2.5 backdrop-blur-sm">
                          <span className="font-mono-tech text-[11px] uppercase tracking-widest text-text-muted truncate">
                            {project.id}
                          </span>
                          <span className="font-mono-tech text-[11px] text-accent-gold whitespace-nowrap">
                            {project.challenge?.complexity ? `complexity: ${project.challenge.complexity}` : 'engineering'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* spacer between rows */}
                <div className="h-16 md:h-24" aria-hidden="true" />
              </motion.div>
            )
          })}
        </div>
      </Section>
    )
  }
)

Projects.displayName = 'Projects'

export { Projects }
export type { ProjectsProps }

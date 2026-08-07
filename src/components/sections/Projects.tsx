import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { TiltCard } from '@shared/TiltCard'
import { FadeUp } from '@shared/TextReveal'
import { projectsData } from '@data/projects.data'

interface ProjectsProps {
  data?: typeof projectsData
}

const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ data = projectsData }, ref) => {
    const featured = data.allProjects.find((p) => p.featured) || data.allProjects[0]
    const others = data.allProjects.filter((p) => p !== featured)

    return (
      <Section id="projects" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <SectionTitle
          title="Featured Projects"
          subtitle="Infrastructure solutions that drive results"
          level="h2"
          alignment="center"
        />

        <div className="space-y-16">
          {/* ---------- Featured project: split glass panel ---------- */}
          {featured && (
            <FadeUp>
              <div className="relative bg-gradient-to-br from-accent-gold/5 to-accent-amber/5 border border-accent-gold/30 rounded-2xl overflow-hidden box-glow-gold">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                  <div className="order-2 md:order-1">
                    {featured.image && (
                      <div className="group relative aspect-video rounded-lg overflow-hidden shadow-elevation-3 border border-border/50">
                        <img
                          src={featured.image.url}
                          alt={featured.image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* scanline overlay on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              'repeating-linear-gradient(0deg, rgba(212,165,116,0.08) 0px, rgba(212,165,116,0.08) 1px, transparent 1px, transparent 4px)',
                          }}
                          aria-hidden="true"
                        />
                        <div className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-accent-gold backdrop-blur-sm">
                          Live Architecture
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="order-1 md:order-2 space-y-4">
                    <Badge variant="solid" size="md">
                      {featured.microLabel || 'Featured'}
                    </Badge>

                    <h3 className="text-h1 md:text-4xl font-bold text-text-primary">
                      {featured.title}
                    </h3>

                    <p className="text-body-lg text-text-secondary">{featured.shortDescription}</p>

                    <div className="pt-4">
                      <p className="text-sm font-semibold text-accent-gold mb-2">Challenge</p>
                      <p className="text-body-md text-text-secondary">
                        {featured.challenge?.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm font-semibold text-accent-gold mb-3">Results</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {featured.results?.map((result) => (
                          <div
                            key={result.title}
                            className="group relative bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-3 transition-colors duration-300 hover:bg-accent-gold/20"
                          >
                            <p className="text-xs text-accent-gold font-bold">{result.title}</p>
                            <p className="text-sm text-text-secondary">{result.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {featured.technologies && featured.technologies.length > 0 && (
                      <div className="pt-4">
                        <p className="text-sm font-semibold text-accent-gold mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {featured.technologies[0]?.technologies?.map((tech) => (
                            <Badge key={tech.name} variant="outlined" size="sm">
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4">
                      {featured.tags?.map((tag) => (
                        <Badge key={tag} variant="soft" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}

          {/* ---------- Other projects: 3D tilt cards ---------- */}
          <div>
            <FadeUp>
              <h3 className="text-h3 font-bold text-text-primary mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-gold" />
                Other Notable Projects
              </h3>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1400px]">
              {others.map((project, index) => (
                <TiltCard key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: '-5%' }}
                    className="group h-full rounded-xl bg-surface border border-border/70 p-6 flex flex-col transition-colors duration-300 hover:border-accent-gold/50"
                  >
                    {project.image && (
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-background border border-border/50">
                        <img
                          src={project.image.url}
                          alt={project.image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {project.microLabel && (
                      <Badge variant="soft" size="sm" className="mb-3 w-fit">
                        {project.microLabel}
                      </Badge>
                    )}

                    <h4 className="text-h4 font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {project.title}
                    </h4>

                    <p className="text-body-sm text-text-secondary mb-4 flex-grow">
                      {project.shortDescription}
                    </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies[0]?.technologies?.slice(0, 3).map((tech) => (
                            <Badge key={tech.name} variant="outlined" size="sm">
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 pt-4 border-t border-border/60">
                      {project.tags?.slice(0, 3).map((tag, ti) => (
                        <span key={tag} className="text-caption text-text-muted">
                          {tag}
                          {ti < Math.min(project.tags?.length ?? 0, 3) - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </Section>
    )
  }
)

Projects.displayName = 'Projects'

export { Projects }
export type { ProjectsProps }

import React from 'react'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Card } from '@shared/Card'
import { Badge } from '@shared/Badge'
import { projectsData } from '@data/projects.data'

interface ProjectsProps {
  data?: typeof projectsData
}

const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  ({ data = projectsData }, ref) => {
    return (
      <Section id="projects" ref={ref} className="py-20 md:py-32">
        {/* Section Title */}
        <SectionTitle
          title="Featured Projects"
          subtitle="Infrastructure solutions that drive results"
          level="h2"
          alignment="center"
        />

        {/* Projects Grid */}
        <div className="space-y-16">
          {/* Featured Project */}
          {data.allProjects.length > 0 && (
            <div className="bg-gradient-to-br from-accent-gold/5 to-accent-amber/5 border border-accent-gold/30 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                {/* Left - Image */}
                <div className="order-2 md:order-1">
                  {data.allProjects[0]?.image && (
                    <div className="aspect-video rounded-lg overflow-hidden shadow-elevation-3">
                      <img
                        src={data.allProjects[0].image.url}
                        alt={data.allProjects[0].image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Right - Content */}
                <div className="order-1 md:order-2 space-y-4">
                  <Badge variant="solid" size="md">
                    {data.allProjects[0]?.microLabel || 'Featured'}
                  </Badge>

                  <h3 className="text-h1 md:text-4xl font-bold text-text-primary">
                    {data.allProjects[0]?.title}
                  </h3>

                  <p className="text-body-lg text-text-secondary">
                    {data.allProjects[0]?.shortDescription}
                  </p>

                  {/* Challenge */}
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-accent-gold mb-2">
                      Challenge
                    </p>
                    <p className="text-body-md text-text-secondary">
                      {data.allProjects[0]?.challenge?.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-accent-gold mb-3">
                      Results
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {data.allProjects[0]?.results?.map((result) => (
                        <div
                          key={result.title}
                          className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg p-3"
                        >
                          <p className="text-xs text-accent-gold font-bold">
                            {result.title}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  {data.allProjects[0]?.technologies && data.allProjects[0].technologies.length > 0 && (
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-accent-gold mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.allProjects[0].technologies[0]?.technologies?.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="outlined"
                            size="sm"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {data.allProjects[0]?.tags?.map((tag) => (
                      <Badge key={tag} variant="soft" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div>
            <h3 className="text-h3 font-bold text-text-primary mb-8">
              Other Notable Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.allProjects.slice(1).map((project) => (
                <Card
                  key={project.id}
                  variant="elevated"
                  padding="lg"
                  hover
                  className="flex flex-col h-full group cursor-pointer"
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-surface-light">
                      <img
                        src={project.image.url}
                        alt={project.image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Micro Label */}
                  {project.microLabel && (
                    <Badge variant="soft" size="sm" className="mb-3 w-fit">
                      {project.microLabel}
                    </Badge>
                  )}

                  {/* Title */}
                  <h4 className="text-h4 font-bold text-text-primary mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-body-sm text-text-secondary mb-4 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies[0]?.technologies?.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="outlined"
                            size="sm"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-4 border-t border-border">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-caption text-text-muted"
                      >
                        {tag}
                        {project.tags && project.tags.indexOf(tag) < project.tags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </Card>
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
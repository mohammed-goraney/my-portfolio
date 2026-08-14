import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Badge } from '@shared/Badge'
import { FadeUp } from '@shared/TextReveal'
import { coursesData } from '@data/courses.data'

interface CoursesProps {
  data?: typeof coursesData
}

const CATEGORY_FILTERS = ['All', 'Networking', 'DevOps', 'Soft Skills', 'Productivity'] as const
type Filter = (typeof CATEGORY_FILTERS)[number]

const CATEGORY_META: Record<Exclude<Filter, 'All'>, { label: string; icon: string }> = {
  Networking: { label: 'Networking', icon: '⚙' },
  DevOps: { label: 'DevOps', icon: '⚡' },
  'Soft Skills': { label: 'Soft Skills', icon: '◆' },
  Productivity: { label: 'Productivity', icon: '✦' },
}

const Courses = React.forwardRef<HTMLElement, CoursesProps>(({ data = coursesData }, ref) => {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(
    () =>
      filter === 'All'
        ? data.courses
        : data.courses.filter((c) => c.category === filter),
    [filter, data.courses]
  )

  return (
    <Section id="courses" ref={ref} className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <FadeUp>
        <SectionTitle
          title="Courses & Continuous Learning"
          subtitle={`${data.totalCourses} completed courses across networking, DevOps, and professional skills — verified on Google profile`}
          level="h2"
          alignment="center"
        />
      </FadeUp>

      {/* ---------- Category filter pills ---------- */}
      <FadeUp delay={0.15}>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {CATEGORY_FILTERS.map((f) => {
            const active = f === filter
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={
                  'group relative rounded-full px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest transition-all duration-300 ' +
                  (active
                    ? 'bg-accent-gold text-background shadow-[0_0_24px_rgba(212,165,116,0.45)]'
                    : 'border border-border bg-surface/60 text-text-secondary hover:border-accent-gold/50 hover:text-accent-gold')
                }
              >
                {f === 'All' ? 'All' : CATEGORY_META[f as Exclude<Filter, 'All'>].label}
              </button>
            )
          })}
        </div>
      </FadeUp>

      {/* ---------- Course grid ---------- */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((course, index) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative rounded-xl bg-surface border border-border/70 p-6 flex flex-col overflow-hidden transition-colors duration-300 hover:border-accent-gold/50"
            >
              {/* glow sweep on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,165,116,0.10), transparent 60%)',
                }}
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center justify-between gap-3">
                <Badge variant="soft" size="sm" className="capitalize">
                  {course.category}
                </Badge>
                {course.grade && (
                  <span className="font-mono-tech text-xs text-accent-gold">
                    {course.grade}
                  </span>
                )}
              </div>

              {course.skills && course.skills.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 bg-surface-2/50 px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-wide text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <h4 className="text-h4 font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-gold transition-colors duration-300">
                {course.name}
              </h4>

              <div className="mt-auto flex items-center justify-between gap-2 pt-4 border-t border-border/60">
                <span className="text-body-sm text-text-secondary font-medium">
                  {course.provider}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-caption text-text-muted">
                    {course.date}
                  </span>
                  {course.credentialUrl && (
                    <a
                      href={course.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${course.name} certificate credential`}
                      className="font-mono-tech text-caption text-accent-gold hover:underline"
                    >
                      Credential ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ---------- empty state ---------- */}
      {visible.length === 0 && (
        <p className="mt-8 text-center text-text-muted">
          No courses in this category yet.
        </p>
      )}
    </Section>
  )
})

Courses.displayName = 'Courses'

export { Courses }
export type { CoursesProps }

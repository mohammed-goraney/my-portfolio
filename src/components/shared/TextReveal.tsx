import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  /** If true, animate immediately on mount (for above-the-fold hero content) */
  animateInView?: boolean
}

/**
 * Word-by-word clip reveal animation.
 */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  as: Tag = 'span',
  animateInView = true,
}: TextRevealProps) {
  const words = text.split(' ')
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word">
          <motion.span
            className="reveal-word-inner"
            initial={{ y: '110%' }}
            {...(animateInView
              ? { whileInView: { y: 0 }, viewport: { once: true, margin: '-15%' } }
              : { animate: { y: 0 } })}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 22,
              delay: delay + i * 0.07,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

interface StaggerChildrenProps {
  children: ReactNode
  delay?: number
  className?: string
  /** y offset in px for each child */
  y?: number
  /** extra stagger between children in ms */
  stagger?: number
}

/**
 * Generic stagger fade-up wrapper.
 */
export function StaggerFade({
  children,
  delay = 0,
  className = '',
  stagger = 90,
  animateInView = true,
}: StaggerChildrenProps & { animateInView?: boolean }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(animateInView
        ? { whileInView: 'visible', viewport: { once: true, margin: '-10%' } }
        : { animate: 'visible' })}
      variants={{
        visible: { transition: { staggerChildren: stagger / 1000, delayChildren: delay } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeUp({
  children,
  delay = 0,
  className = '',
  y = 28,
  animateInView = true,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  animateInView?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(animateInView
        ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-8%' } }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

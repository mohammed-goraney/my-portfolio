import React from 'react'
import { motion } from 'framer-motion'
import { useInViewport } from '@hooks/useInViewport'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const { ref, isInView } = useInViewport()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

ScrollReveal.displayName = 'ScrollReveal'

export { ScrollReveal }
export type { ScrollRevealProps }
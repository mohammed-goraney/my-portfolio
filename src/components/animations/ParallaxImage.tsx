import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
}

const ParallaxImage = React.forwardRef<HTMLDivElement, ParallaxImageProps>(
  ({ src, alt, speed = 0.5, className = '' }, ref) => {
    const [scrollY, setScrollY] = useState(0)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
      if (prefersReducedMotion) return

      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [prefersReducedMotion])

    return (
      <motion.div
        ref={ref}
        className={className}
        style={
          !prefersReducedMotion
            ? { y: scrollY * speed }
            : {}
        }
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    )
  }
)

ParallaxImage.displayName = 'ParallaxImage'

export { ParallaxImage }
export type { ParallaxImageProps }
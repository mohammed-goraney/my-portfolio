import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  rotateMax?: number
}

/**
 * 3D tilt card following the cursor, with a soft glare highlight.
 */
export function TiltCard({ children, className = '', rotateMax = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateMax, -rotateMax]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateMax, rotateMax]), {
    stiffness: 200,
    damping: 20,
  })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={{ rotateX, rotateY, perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,165,116,0.10), transparent 40%)',
        }}
      />
    </motion.div>
  )
}

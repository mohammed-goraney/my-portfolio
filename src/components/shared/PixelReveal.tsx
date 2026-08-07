import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface PixelRevealProps {
  children: ReactNode
  delay?: number
  cols?: number
  rows?: number
}

/**
 * Swiss-style pixel/grid reveal: a blocky overlay that dissolves cell-by-cell
 * as the section enters the viewport, revealing the content beneath.
 */
export function PixelReveal({ children, delay = 0, cols = 14, rows = 8 }: PixelRevealProps) {
  const reduced = useReducedMotion()

  const cells = Array.from({ length: cols * rows }, (_, i) => ({
    x: (i % cols) * (100 / cols),
    y: Math.floor(i / cols) * (100 / rows),
    w: 100 / cols,
    h: 100 / rows,
    key: i,
  }))

  if (reduced) return <>{children}</>

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{
          visible: { transition: { staggerChildren: 0.012, delayChildren: delay } },
          hidden: {},
        }}
        className="pointer-events-none absolute inset-0 z-10 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells.map((cell) => (
          <motion.div
            key={cell.key}
            variants={{
              hidden: { opacity: 1, scaleX: 1, scaleY: 1 },
              visible: {
                opacity: 0,
                transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
              },
            }}
            className="bg-background"
            style={{
              boxShadow: '0 0 12px rgba(212,165,116,0.08)',
            }}
          />
        ))}
      </motion.div>

      <div className="relative">{children}</div>
    </div>
  )
}

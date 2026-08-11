import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CountUpProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

/**
 * Animated number counter that starts when scrolled into view.
 */
export function CountUp({ value, duration = 1600, suffix = '', prefix = '', className = '' }: CountUpProps) {
  const [display, setDisplay] = useState(0)
  const started = useRef(false)
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-80px' })

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(value)
      return
    }
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  o: number
}

interface NetworkCanvasProps {
  /** visual accent color as rgba string */
  color?: string
  particleCount?: number
  maxLinkDist?: number
  mouseRepelRadius?: number
  speedFactor?: number
  className?: string
  ariaLabel?: string
}

/**
 * Interactive network-node particle canvas.
 * Particles drift slowly, connect with thin lines when close (network graph metaphor),
 * and gently repel from the cursor. Respects prefers-reduced-motion.
 */
export function NetworkCanvas({
  color = '212,165,116', // gold
  particleCount = 90,
  maxLinkDist = 140,
  mouseRepelRadius = 180,
  speedFactor = 1,
  className = '',
  ariaLabel = 'Interactive network visualization',
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let raf = 0
    let visible = true
    let running = true

    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initParticles = () => {
      const count = Math.min(particleCount, Math.floor((width * height) / 9000) + 40)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35 * speedFactor,
        vy: (Math.random() - 0.5) * 0.35 * speedFactor,
        r: Math.random() * 1.6 + 0.8,
        o: Math.random() * 0.5 + 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // update + draw particles
      for (const p of particles) {
        // gentle mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distMouse = Math.hypot(dx, dy)
        if (distMouse < mouseRepelRadius) {
          const force = (1 - distMouse / mouseRepelRadius) * 0.6
          p.vx += (dx / (distMouse || 1)) * force
          p.vy += (dy / (distMouse || 1)) * force
        }
        // damping
        p.vx *= 0.99
        p.vy *= 0.99
        // clamp speed
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 1.4) {
          p.vx = (p.vx / speed) * 1.4
          p.vy = (p.vy / speed) * 1.4
        }

        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${p.o})`
        ctx.fill()
      }

      // draw links (O(n²) but n ≤ ~130, fine)
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * 0.32
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${color},${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // mouse-to-nearest links
      for (const p of particles) {
        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (dist < 200) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${color},${(1 - dist / 200) * 0.55})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      if (visible && running) raf = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const onVisibility = () => {
      visible = !document.hidden
      if (visible) raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      resize()
      initParticles()
    }

    resize()
    initParticles()
    raf = requestAnimationFrame(draw)

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [color, particleCount, maxLinkDist, mouseRepelRadius, speedFactor])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 h-full w-full ${className}`}
      aria-label={ariaLabel}
      role="img"
    />
  )
}

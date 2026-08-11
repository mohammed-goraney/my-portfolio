import { useEffect, useRef } from 'react'

/**
 * Custom cursor: gold dot + trailing ring.
 * Adds 'cursor-hover' class to <body> when hovering interactive elements.
 * Hidden automatically on touch / non-desktop devices via CSS media query.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let raf = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const tick = () => {
      // smooth trailing for the ring
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      raf = requestAnimationFrame(tick)
    }

    const targetSelector =
      'a, button, [role="button"], input, textarea, .hoverable, [data-hoverable]'

    const onOver = () => document.body.classList.add('cursor-hover')
    const onOut = () => document.body.classList.remove('cursor-hover')

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.body.classList.add('has-custom-cursor')

    // handle interactive elements added later / inside iframes etc.
    const applyListeners = () => {
      document.querySelectorAll<HTMLElement>(targetSelector).forEach((el) => {
        el.addEventListener('mouseenter', onOver)
        el.addEventListener('mouseleave', onOut)
      })
    }
    applyListeners()

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMouseMove)
      document.body.classList.remove('cursor-hover', 'has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden="true" />
    </>
  )
}

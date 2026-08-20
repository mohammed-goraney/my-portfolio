import React, { useEffect, useState } from 'react'
import { useI18n } from '@i18n'
import { cn } from '@utils/cn'

export interface ScrollIndicatorProps {
  showProgress?: boolean
  animated?: boolean
}

const ScrollIndicator = React.forwardRef<HTMLDivElement, ScrollIndicatorProps>(
  ({ showProgress = false, animated = true }, ref) => {
    const { t } = useI18n()
    const [scrollProgress, setScrollProgress] = useState(0)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        setScrollProgress(scrollPercent)
        setScrolled(scrollTop > 240)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <div ref={ref} className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-4 pointer-events-none select-none">
        {/* Scroll Progress Circle */}
        {showProgress && (
          <div className="relative w-12 h-12 pointer-events-none">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-border"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
                className={cn(
                  'text-accent-gold transition-all duration-300',
                  animated && 'will-change-[stroke-dashoffset]'
                )}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-accent-gold">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        )}

        {/* Scroll to Top Button — appears once scrolled, replaces cluttered stacked controls */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            'pointer-events-auto p-3 rounded-full bg-accent-gold text-background hover:bg-accent-gold-light transition-all duration-300',
            'flex items-center justify-center w-12 h-12',
            'shadow-elevation-2 hover:shadow-elevation-3',
            'active:scale-95',
            scrolled
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          )}
          aria-label={t.scrollToTop}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    )
  }
)
ScrollIndicator.displayName = 'ScrollIndicator'

export { ScrollIndicator }
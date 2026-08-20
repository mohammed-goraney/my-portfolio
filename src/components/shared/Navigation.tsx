import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'
import { LanguageToggle } from './LanguageToggle'
import { useI18n, type Dictionary } from '@i18n'
import { cn } from '@utils/cn'

export interface NavigationLink {
  label: string
  labelKey?: keyof Dictionary
  href: string
  id?: string
}

export interface NavigationProps {
  links: NavigationLink[]
  currentSection?: string
  sticky?: boolean
  transparent?: boolean
  brand?: string
}

/**
 * Premium glass navigation:
 * - scroll progress bar on top
 * - scroll-spy active section highlight with animated underline
 * - floating pill with blur backdrop after scrolling
 */
const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ links, sticky = true, transparent = false, brand = 'M.A' }, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { t } = useI18n()
    const [activeId, setActiveId] = useState<string>('')
    const [progress, setProgress] = useState(0)
    const [scrolled, setScrolled] = useState(false)

    // Extract the target section id from each href (e.g. '#journey' -> 'journey')
    const sectionIds = React.useMemo(
      () =>
        links
          .map((link) => link.href.replace('#', ''))
          .filter((id) => id.length > 0),
      [links]
    )

    // Smooth-scroll interception: account for the sticky navbar height
    useEffect(() => {
      const onClick = (event: MouseEvent) => {
        const anchor = (event.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
        if (!anchor) return
        const id = anchor.getAttribute('href')?.replace('#', '')
        if (!id) return
        const target = document.getElementById(id)
        if (!target) return
        event.preventDefault()
        const navHeight = 88
        const y = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
      document.addEventListener('click', onClick, { capture: true })
      return () => document.removeEventListener('click', onClick, { capture: true })
    }, [])

    useEffect(() => {
      const onScroll = () => {
        const doc = document.documentElement
        const total = doc.scrollHeight - doc.clientHeight
        setProgress(total > 0 ? doc.scrollTop / total : 0)
        setScrolled(doc.scrollTop > 40)

        let current = ''
        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= window.innerHeight * 0.45) current = `nav-${id}`
          }
        }
        setActiveId(current)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => window.removeEventListener('scroll', onScroll)
    }, [sectionIds])

    return (
      <>
        {/* scroll progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent-gold via-accent-amber to-accent-gold"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />

        <nav
          ref={ref}
          className={cn(
            'w-full z-50 transition-all duration-500',
            sticky && 'sticky top-0',
            scrolled
              ? 'bg-transparent py-2'
              : transparent
                ? 'bg-transparent py-5'
                : 'bg-background/95 backdrop-blur-md border-b border-border py-4'
          )}
        >
          <div
            className={cn(
              'transition-all duration-500',
              scrolled
                ? 'mx-auto max-w-5xl rounded-full border border-accent-gold/20 bg-background/70 px-5 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-7'
                : 'mx-auto max-w-7xl px-6 md:px-12'
            )}
          >
            <div className="flex items-center justify-between">
              <a
                href="#hero"
                className="font-display text-xl font-bold tracking-wide text-accent-gold hover:text-accent-gold-light transition-colors"
              >
                {brand}
              </a>

              {/* Desktop Navigation */}
              <ul className="hidden items-center gap-1 md:flex">
                {links.map((link) => {
                  const active = activeId === link.id
                  const label = link.labelKey ? t[link.labelKey as keyof Dictionary] : link.label
                  return (
                    <li key={link.id || link.href}>
                      <a
                        href={link.href}
                        className={cn(
                          'relative px-3.5 py-2 text-sm font-semibold transition-colors duration-300',
                          active ? 'text-accent-gold' : 'text-text-secondary hover:text-text-primary'
                        )}
                      >
                        {label}
                        <span
                          className={cn(
                            'absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent-gold transition-all duration-300',
                            active ? 'w-5 opacity-100' : 'w-0 opacity-0'
                          )}
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>

              {/* Language toggle (desktop) */}
              <div className="hidden md:flex items-center gap-2 mr-3">
                <LanguageToggle />
              </div>

              {/* CTA */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="group relative overflow-hidden rounded-full border border-accent-gold/60 px-5 py-2 text-sm font-semibold text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-background"
                >
                  {t.contactMe}
                </a>
              </div>

              {/* Language toggle (mobile) */}
              <div className="flex md:hidden items-center gap-2 mr-1">
                <LanguageToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors text-text-primary"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={t.toggleMenu}
              >
                <div className="space-y-1.5">
                  <div
                    className={cn(
                      'w-6 h-0.5 bg-text-primary transition-all',
                      mobileOpen && 'rotate-45 translate-y-2'
                    )}
                  />
                  <div
                    className={cn(
                      'w-6 h-0.5 bg-text-primary transition-all',
                      mobileOpen && 'opacity-0'
                    )}
                  />
                  <div
                    className={cn(
                      'w-6 h-0.5 bg-text-primary transition-all',
                      mobileOpen && '-rotate-45 -translate-y-2'
                    )}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="md:hidden mt-3 max-w-5xl mx-auto rounded-2xl bg-background/95 border border-accent-gold/20 backdrop-blur-xl"
              >
                <ul className="flex flex-col p-6 gap-3">
                  {links.map((link) => {
                    const label = link.labelKey ? t[link.labelKey as keyof Dictionary] : link.label
                    return (
                      <li key={link.id || link.href}>
                        <a
                          href={link.href}
                          className={cn(
                            'text-body-md font-semibold transition-colors duration-300 block py-2',
                            activeId === link.id
                              ? 'text-accent-gold'
                              : 'text-text-secondary hover:text-accent-gold'
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {label}
                        </a>
                      </li>
                    )
                  })}
                  <li className="flex items-center justify-between gap-3 pt-4 border-t border-border">
                    <LanguageToggle />
                    <Button
                      variant="primary"
                      className="flex-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.contactMe}
                    </Button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation }

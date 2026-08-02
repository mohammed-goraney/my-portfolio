import React, { useState } from 'react'
import { Button } from './Button'
import { cn } from '@utils/cn'

export interface NavigationLink {
  label: string
  href: string
  id?: string
}

export interface NavigationProps {
  links: NavigationLink[]
  currentSection?: string
  sticky?: boolean
  transparent?: boolean
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(  ({ links, currentSection, sticky = true, transparent = false }, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
      <nav
        ref={ref}
        className={cn(
          'w-full z-50 transition-all duration-300',
          sticky && 'sticky top-0',
          transparent
            ? 'bg-transparent'
            : 'bg-background/95 backdrop-blur-md border-b border-border'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-display-sm font-bold text-accent-gold hover:text-accent-gold-light transition-colors"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id || link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-body-md font-semibold transition-colors duration-300',
                    currentSection === link.id
                      ? 'text-accent-gold'
                      : 'text-text-secondary hover:text-accent-gold'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="outlined" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-surface-light rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
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

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden bg-surface border-t border-border">
            <ul className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <li key={link.id || link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-body-md font-semibold transition-colors duration-300 block py-2',
                      currentSection === link.id
                        ? 'text-accent-gold'
                        : 'text-text-secondary hover:text-accent-gold'
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-4 border-t border-border">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation }
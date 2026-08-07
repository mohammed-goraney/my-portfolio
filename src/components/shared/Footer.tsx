import React from 'react'
import { cn } from '@utils/cn'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

export interface FooterProps {
  sections?: FooterSection[]
  socialLinks?: SocialLink[]
  copyrightText?: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(  (
    {
      sections = [],
      socialLinks = [],
      copyrightText = `© ${new Date().getFullYear()} Mohammed Abdalla. All rights reserved.`,
    },
    ref
  ) => {
    return (
      <footer
        ref={ref}
        className="bg-surface border-t border-border mt-20 md:mt-32"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-display text-h3 font-bold text-accent-gold mb-4">
                Mohammed Abdalla
              </h3>
              <p className="text-text-secondary text-body-sm">
                Network & Cloud Engineer designing resilient infrastructure.
              </p>
            </div>

            {/* Footer Sections */}
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-h4 font-bold text-text-primary mb-4">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-text-secondary text-body-sm">
              {copyrightText}
            </p>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-6">
                {socialLinks
                  .filter((social) => social.href && social.href !== 'mailto:' && !social.href.endsWith('twitter.com/'))
                  .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={cn(
                      'text-text-secondary hover:text-accent-gold transition-colors duration-300',
                      'flex items-center justify-center w-10 h-10'
                    )}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    )
  }
)

Footer.displayName = 'Footer'

export { Footer }
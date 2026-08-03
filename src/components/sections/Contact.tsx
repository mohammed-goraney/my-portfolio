// src/components/sections/Contact.tsx
import React, { useState } from 'react'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Card } from '@shared/Card'
import { Button } from '@shared/Button'

interface ContactProps {
  email?: string
}

const Contact = React.forwardRef<HTMLElement, ContactProps>(
  ({ email = 'your.email@example.com' }, ref) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }

    return (
      <Section id="contact" ref={ref} className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Let's Build Something Great"
            subtitle="Get in touch to discuss your next project"
            level="h2"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-h3 font-bold text-text-primary mb-8">
                Contact Information
              </h3>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-light transition-colors">
                <span className="text-2xl">📧</span>
                <div className="flex-1">
                  <p className="text-sm text-text-muted mb-1">Email</p>
                  <a href={`mailto:${email}`} className="text-body-md font-semibold text-accent-gold hover:text-accent-gold-light">
                    {email}
                  </a>
                </div>
              </div>
              <div className="pt-8 border-t border-border">
                <h4 className="text-h4 font-bold text-text-primary mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#projects" className="block text-body-md text-text-secondary hover:text-accent-gold transition-colors">
                    View Portfolio
                  </a>
                  <a href="#journey" className="block text-body-md text-text-secondary hover:text-accent-gold transition-colors">
                    See Timeline
                  </a>
                  <a href="#skills" className="block text-body-md text-text-secondary hover:text-accent-gold transition-colors">
                    View Skills
                  </a>
                </div>
              </div>
            </div>

            <Card variant="bordered" padding="lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-h4 font-bold text-text-primary mb-2">Message Sent!</h4>
                  <p className="text-body-md text-text-secondary">I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-gold resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                  <p className="text-caption text-text-muted text-center">
                    I will respond within 24 hours
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
    )
  }
)

Contact.displayName = 'Contact'

export { Contact }
export type { ContactProps }
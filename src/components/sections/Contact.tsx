// src/components/sections/Contact.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@shared/SectionTitle'
import { Section } from '@shared/Section'
import { Button } from '@shared/Button'
import { FadeUp } from '@shared/TextReveal'

interface ContactProps {
  email?: string
}

const Contact = React.forwardRef<HTMLElement, ContactProps>(
  ({ email = 'moha.gora.app123@gmail.com' }, ref) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Open the user's email client with a pre-filled message (works with no backend)
      const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`)
      const body = encodeURIComponent(
        `${formState.message}\n\n— ${formState.name}\n${formState.email}`
      )
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      setSubmitted(true)
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }

    const inputClass =
      'w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold/60 transition-colors duration-300 placeholder:text-text-muted/60'

    return (
      <Section id="contact" ref={ref} className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative">
          <SectionTitle
            title="Let's Build Something Great"
            subtitle="Get in touch to discuss your next project"
            level="h2"
            alignment="center"
          />

          <FadeUp className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-h3 font-bold text-text-primary mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent-gold" />
                  Contact Information
                </h3>
                <div className="group flex items-start gap-4 p-4 rounded-lg bg-surface/50 border border-border/60 hover:border-accent-gold/50 transition-colors duration-300">
                  <span className="text-2xl">📧</span>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted mb-1">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-body-md font-semibold text-accent-gold hover:text-accent-gold-light transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <div className="pt-8 border-t border-border/60">
                  <h4 className="text-h4 font-bold text-text-primary mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    <a
                      href="#projects"
                      className="group flex items-center justify-between text-body-md text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      <span>View Portfolio</span>
                      <span className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                    <a
                      href="#journey"
                      className="group flex items-center justify-between text-body-md text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      <span>See Timeline</span>
                      <span className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                    <a
                      href="#skills"
                      className="group flex items-center justify-between text-body-md text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      <span>View Skills</span>
                      <span className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                className="relative rounded-xl border border-accent-gold/40 bg-surface/60 p-8 backdrop-blur-sm box-glow-gold"
                whileHover={{ boxShadow: '0 0 50px rgba(212,165,116,0.15)' }}
                transition={{ duration: 0.4 }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h4 className="text-h4 font-bold text-text-primary mb-2">
                      Opening your email client…
                    </h4>
                    <p className="text-body-md text-text-secondary">
                      The message is ready — just hit send.
                    </p>
                  </motion.div>
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
                        className={inputClass}
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
                        className={inputClass}
                        placeholder="you@gmail.com"
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
                        className={`${inputClass} resize-none`}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Message
                    </Button>
                    <p className="text-caption text-text-muted text-center">
                      Opens your email app with the message pre-filled · I respond within 24 hours
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </Section>
    )
  }
)

Contact.displayName = 'Contact'

export { Contact }
export type { ContactProps }

import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@i18n'

/**
 * Lightweight EN/AR toggle. Pure text button — no extra libs, no images.
 * Styled to match the site's gold/mono aesthetic.
 */
export const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useI18n()
  const next = locale === 'en' ? 'ar' : 'en'

  return (
    <button
      type="button"
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      onClick={() => setLocale(next)}
      className="group relative rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono-tech text-[11px] uppercase tracking-widest text-text-secondary transition-all duration-300 hover:border-accent-gold/60 hover:text-accent-gold"
    >
      <motion.span
        key={next}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="inline-flex items-center gap-1.5"
      >
        {next === 'en' ? 'EN' : 'عربي'}
      </motion.span>
    </button>
  )
}

LanguageToggle.displayName = 'LanguageToggle'

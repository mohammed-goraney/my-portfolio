import { motion } from 'framer-motion'
import { PixelReveal } from '@shared/PixelReveal'
import { useI18n } from '@i18n'

/**
 * Swiss-brutalist statement section — the boldest element inspired by the
 * framer "pixel reveal" showcase: a giant editorial headline wrapped in a
 * dissolving pixel-grid overlay, plus a glowing accent underline treatment.
 */
export function PixelStatement() {
  const { t } = useI18n()
  const words = [t.pixelWord1, t.pixelWord2, t.pixelWord3, t.pixelWord4]

  return (
    <section
      className="relative overflow-hidden border-y border-border/60 bg-surface/30 py-20 md:py-28"
      aria-label="Professional statement"
    >
      {/* soft purple-gold glow, echo of the swiss pixel reveal artwork */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[46rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(192,132,252,0.45) 0%, rgba(212,165,116,0.3) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono-tech text-xs uppercase tracking-[0.4em] text-accent-gold"
        >
          {t.pixelStatementEyebrow}
        </motion.p>

        {/* pixel-grid dissolve over the giant headline, swiss-style */}
        <PixelReveal cols={16} rows={8} delay={0.1} tileColor="#1A1918">
          <h2
            className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight text-text-primary"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t.pixelLine1}
            <br />
            <span className="bg-gradient-to-r from-accent-gold via-[#C084FC] to-accent-gold bg-clip-text text-transparent">
              {t.pixelLine2}
            </span>
            <br />
            {t.pixelLine3}
          </h2>
        </PixelReveal>

        {/* word chips that pulse in sequence */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.5 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-full border border-accent-gold/40 bg-accent-gold/5 px-5 py-2 font-mono-tech text-sm uppercase tracking-[0.25em] text-text-secondary backdrop-blur-sm transition-colors duration-300 hover:border-[#C084FC]/60 hover:text-[#C084FC]"
            >
              {w}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

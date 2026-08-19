import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface LightboxItem {
  image?: string
  name: string
  subtitle?: string
}

interface LightboxProps {
  item: LightboxItem | null
  onClose: () => void
}

/**
 * Premium certificate lightbox: full-screen blurred overlay with a spring-scaled
 * zoomed certificate image, matching the SocialProof certificate viewer style.
 */
const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => (
  <AnimatePresence>
    {item?.image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.name} certificate viewer`}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-surface border border-accent-gold/50 text-accent-gold text-xl flex items-center justify-center hover:bg-accent-gold/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
          aria-label="Close certificate viewer"
        >
          ✕
        </motion.button>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="relative max-w-4xl w-full max-h-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.image}
            alt={`${item.name} certificate`}
            className="w-full max-h-[78vh] object-contain rounded-xl border border-accent-gold/40 shadow-[0_0_60px_rgba(212,165,116,0.25)]"
          />
          <div className="mt-4 text-center">
            <p className="text-h3 font-bold text-accent-gold">{item.name}</p>
            {item.subtitle && (
              <p className="text-body-sm text-text-secondary mt-1">{item.subtitle}</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

Lightbox.displayName = 'Lightbox'

export { Lightbox }

import { useReducedMotion } from 'framer-motion'

const TECHS = [
  'BGP', 'SD-WAN', 'Cisco IOS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'Ansible', 'Linux',
]

/**
 * Infinite horizontal marquee of technology names — a visual "network feed".
 */
export function TechMarquee() {
  const reduced = useReducedMotion()

  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-5">
      <div
        className={`flex w-max gap-10 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-text-muted sm:text-sm ${
          reduced ? '' : 'animate-marquee'
        }`}
        aria-hidden="true"
      >
        {[...TECHS, ...TECHS].map((tech, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-accent-gold">◆</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

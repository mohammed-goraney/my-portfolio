import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/cn'

// Define badge variants
const badgeVariants = cva(
  'inline-flex items-center gap-2 font-semibold rounded-full transition-colors duration-300',
  {
    variants: {
      variant: {
        solid: 'bg-accent-gold text-background',
        outlined: 'border border-accent-gold text-accent-gold bg-transparent',
        soft: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/30',
      },
      size: {
        sm: 'px-3 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => (
    <span className={cn(badgeVariants({ variant, size, className }))} ref={ref} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  )
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
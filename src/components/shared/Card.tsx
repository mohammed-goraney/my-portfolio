import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/cn'

// Define card variants
const cardVariants = cva(
  'rounded-lg transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-surface border border-border',
        elevated: 'bg-surface shadow-elevation-2 hover:shadow-elevation-3',
        bordered: 'bg-transparent border-2 border-accent-gold',
        glass: 'bg-surface/50 backdrop-blur-md border border-border/50',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'hover:shadow-elevation-2 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => (
    <div
      className={cn(cardVariants({ variant, padding, hover, className }))}
      ref={ref}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export { Card, cardVariants }
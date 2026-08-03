import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/cn'

// Define button variants
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-accent-gold text-background hover:bg-accent-gold-light focus-visible:ring-accent-gold',
        secondary: 'border border-border bg-transparent text-primary hover:bg-surface-light focus-visible:ring-accent-gold',
        ghost: 'text-primary hover:bg-surface-light focus-visible:ring-accent-gold',
        outlined: 'border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background focus-visible:ring-accent-gold',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, icon, children, disabled, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      ref={ref}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
          Loading...
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/cn'

// Define section title variants
const sectionTitleVariants = cva(
  'font-bold transition-colors duration-300',
  {
    variants: {
      alignment: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      level: {
        h1: 'text-display text-4xl md:text-5xl',
        h2: 'text-h1 text-3xl md:text-4xl',
        h3: 'text-h2 text-2xl md:text-3xl',
      },
    },
    defaultVariants: {
      alignment: 'center',
      level: 'h2',
    },
  }
)

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionTitleVariants> {
  title: string
  subtitle?: string
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, alignment, level, title, subtitle, ...props }, ref) => {
    const HeadingLevel = level || 'h2'

    return (
      <div className={cn(alignment === 'center' && 'mb-12')}>
        <HeadingLevel
          className={cn(sectionTitleVariants({ alignment, level, className }))}
          ref={ref}
          {...props}
        >
          {title}
        </HeadingLevel>
        {subtitle && (
          <p className="text-body-lg text-text-secondary mt-4">{subtitle}</p>
        )}
      </div>
    )
  }
)
SectionTitle.displayName = 'SectionTitle'

export { SectionTitle, sectionTitleVariants }
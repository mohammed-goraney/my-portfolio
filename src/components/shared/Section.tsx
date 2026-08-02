import React from 'react';
import { cn } from '@utils/cn';

export interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'> {
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'relative py-20 md:py-32 px-6 md:px-12',
        container && 'max-w-7xl mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = 'Section';

export { Section };
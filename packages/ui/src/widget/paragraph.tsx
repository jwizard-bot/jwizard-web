import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const paragraphVariants = cva(cn('text-muted-foreground'), {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      xl: 'text-xl',
    },
    centered: {
      true: 'text-center',
    },
  },
  defaultVariants: {
    size: 'xl',
    centered: false,
  },
});

type Props = Omit<HTMLProps<HTMLParagraphElement>, 'size'> & VariantProps<typeof paragraphVariants>;

const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  ({ size, centered, children, className, ...rest }, ref) => (
    <p ref={ref} className={cn(paragraphVariants({ size, centered, className }))} {...rest}>
      {children}
    </p>
  )
);

Paragraph.displayName = 'Paragraph';

export { Paragraph };

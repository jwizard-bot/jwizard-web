import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const gridVariants = cva(cn('grid'), {
  variants: {
    responsive: {
      true: cn('grid-cols-1', 'sm:grid-cols-4', 'md:grid-cols-8', 'lg:grid-cols-12'),
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    gap: {
      0: 'gap-0',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
    },
  },
  defaultVariants: {
    responsive: false,
    cols: 12,
    gap: 0,
  },
});

type Props = HTMLProps<HTMLDivElement> & VariantProps<typeof gridVariants>;

const GridContainer = forwardRef<HTMLDivElement, Props>(
  ({ cols, gap, responsive, className, children, ...rest }, ref) => (
    <div ref={ref} className={gridVariants({ cols, gap, responsive, className })} {...rest}>
      {children}
    </div>
  )
);

GridContainer.displayName = 'GridContainer';

export { GridContainer };

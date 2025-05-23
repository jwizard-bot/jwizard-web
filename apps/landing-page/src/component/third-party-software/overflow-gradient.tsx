import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import { FloatingContainer } from '@jwizard-web/ui/container';
import { type VariantProps, cva } from 'class-variance-authority';

const overflowGradientVariants = cva(
  cn('w-[calc(100%-14px)]', 'h-[100px]', 'from-slate-950', 'dark:from-slate-900', 'to-100%'),
  {
    variants: {
      position: {
        top: cn('bg-gradient-to-b', 'from-60%'),
        bottom: cn('bg-gradient-to-t', 'from-10%'),
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
);

type Props = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof overflowGradientVariants>;

const OverflowGradient: React.FC<Props> = ({
  position,
  className,
  ...rest
}): React.ReactElement => (
  <FloatingContainer
    alignmentX="left"
    alignmentY={position}
    className={overflowGradientVariants({ position, className })}
    zIndex={10}
    {...rest}
  />
);

export { OverflowGradient };

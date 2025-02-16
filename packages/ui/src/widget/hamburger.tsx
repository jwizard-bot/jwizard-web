'use client';

import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';
import { FlexContainer } from '../container';

const hamburgerVariants = cva(
  cn(
    'text-inherit',
    'transition-opacity',
    'before:content-[""]',
    'before:block',
    'before:h-px',
    'before:w-6',
    'before:bg-current',
    'before:transition-transform',
    'before:duration-150',
    'after:content-[""]',
    'after:block',
    'after:h-px',
    'after:w-6',
    'after:bg-current',
    'after:transition-transform',
    'after:duration-150'
  ),
  {
    variants: {
      opened: {
        true: cn(
          'before:translate-y-px',
          'before:rotate-45',
          'after:translate-y-0',
          'after:-rotate-45'
        ),
        false: cn(
          'before:-translate-y-1',
          'before:rotate-0',
          'after:translate-y-1',
          'after:rotate-0'
        ),
      },
    },
    defaultVariants: {
      opened: false,
    },
  }
);

type HamburgerProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof hamburgerVariants>;

const Hamburger: React.FC<HamburgerProps> = ({
  opened,
  className,
  ...props
}): React.ReactElement => (
  <button className={cn('w-8', 'h-8', className)} {...props}>
    <FlexContainer
      col
      justify="center"
      align="center"
      fullWidth
      fullHeight
      className={hamburgerVariants({ opened })}
    />
  </button>
);

export { Hamburger };

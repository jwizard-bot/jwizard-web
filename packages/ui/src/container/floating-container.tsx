/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const floatingVariants = cva(cn('text-muted-foreground'), {
  variants: {
    mode: {
      absolute: 'absolute',
      fixed: 'fixed',
    },
    centered: {
      x: cn('left-[50%]', '-translate-x-[50%]'),
      y: cn('top-[50%]', '-translate-y-[50%]'),
      xy: cn('left-[50%]', 'top-[50%]', '-translate-x-[50%]', '-translate-y-[50%]'),
      none: '',
    },
    alignmentX: {
      left: 'left-0',
      right: 'right-0',
      none: '',
    },
    alignmentY: {
      top: 'top-0',
      bottom: 'bottom-0',
      none: '',
    },
    fullWidth: {
      true: 'w-full',
    },
    fullHeight: {
      true: 'h-screen',
    },
  },
  defaultVariants: {
    mode: 'absolute',
    centered: 'none',
    alignmentX: 'none',
    alignmentY: 'none',
    fullWidth: false,
    fullHeight: false,
  },
});

type Props = {
  zIndex?: number;
} & HTMLProps<HTMLDivElement> &
  VariantProps<typeof floatingVariants>;

const FloatingContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      mode,
      centered,
      alignmentX,
      alignmentY,
      fullWidth,
      fullHeight,
      zIndex = 1,
      children,
      className,
      ...rest
    },
    ref
  ): React.ReactElement => (
    <div
      ref={ref}
      className={floatingVariants({
        mode,
        centered,
        alignmentX,
        alignmentY,
        fullWidth,
        fullHeight,
        className,
      })}
      style={{ zIndex }}
      {...rest}>
      {children}
    </div>
  )
);

FloatingContainer.displayName = 'FloatingContainer';

export { FloatingContainer };

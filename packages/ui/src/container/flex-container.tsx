/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const flexVariants = cva(cn('flex'), {
  variants: {
    col: {
      true: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    gap: {
      true: 'gap-3',
    },
    fullWidth: {
      true: 'w-full',
    },
    fullHeight: {
      true: 'h-full',
    },
    centerContent: {
      true: cn('justify-center', 'items-center'),
    },
    toColOnSmallDevices: {
      true: cn('flex-col', 'items-center', 'gap-y-2', 'sm:gap-y-0', 'sm:flex-row'),
    },
    fullWidthOnSmallDevices: {
      true: cn('w-full', 'sm:w-fit'),
    },
    fillScreenSpace: {
      true: 'h-[calc(100vh-4rem)]',
    },
  },
  defaultVariants: {
    col: false,
    justify: 'start',
    align: 'start',
    gap: false,
    fullWidth: false,
    fullHeight: false,
    centerContent: false,
    toColOnSmallDevices: false,
    fullWidthOnSmallDevices: false,
    fillScreenSpace: false,
  },
});

type Props = {
  as?: 'div' | 'main' | 'span';
} & HTMLProps<HTMLDivElement> &
  VariantProps<typeof flexVariants>;

const FlexContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      as: Component = 'div',
      col,
      justify,
      align,
      gap,
      fullWidth,
      fullHeight,
      centerContent,
      toColOnSmallDevices,
      fullWidthOnSmallDevices,
      fillScreenSpace,
      className,
      children,
      ...rest
    },
    ref
  ): React.ReactElement => (
    <Component
      ref={ref}
      className={flexVariants({
        col,
        justify,
        align,
        gap,
        fullWidth,
        fullHeight,
        centerContent,
        toColOnSmallDevices,
        fullWidthOnSmallDevices,
        fillScreenSpace,
        className,
      })}
      {...rest}>
      {children}
    </Component>
  )
);

FlexContainer.displayName = 'FlexContainer';

export { FlexContainer };

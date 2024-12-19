/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const headerVariants = cva(cn('font-logo'), {
  variants: {
    size: {
      sm: cn('text-3xl', 'sm:text-4xl'),
      md: cn('text-4xl', 'sm:text-5xl'),
      lg: cn('text-5xl', 'sm:text-6xl'),
      xl: cn('text-6xl', 'sm:text-8xl'),
    },
    isCentered: {
      true: 'text-center',
    },
    withoutMargin: {
      false: cn('mb-4', 'sm:mb-8'),
    },
  },
  defaultVariants: {
    size: 'sm',
    withoutMargin: false,
  },
});

type Props = {
  headingVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & Omit<HTMLProps<HTMLHeadingElement>, 'size'> &
  VariantProps<typeof headerVariants>;

const Header = forwardRef<HTMLHeadingElement, Props>(
  ({ headingVariant = 'h1', size, isCentered, withoutMargin, className, children, ...rest }, ref) =>
    React.createElement(
      headingVariant,
      {
        ref,
        className: headerVariants({ size, isCentered, withoutMargin, className }),
        ...rest,
      },
      children
    )
);

Header.displayName = 'Header';

export { Header };
import React, { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const headerVariants = cva('', {
  variants: {
    size: {
      xt: cn('text-sm', 'sm:text-sm'),
      tn: cn('text-md', 'sm:text-md'),
      xs: cn('text-lg', 'sm:text-xl'),
      sm: cn('text-3xl', 'sm:text-4xl'),
      md: cn('text-4xl', 'sm:text-5xl'),
      lg: cn('text-5xl', 'sm:text-6xl'),
      xl: cn('text-6xl', 'sm:text-8xl'),
    },
    isCentered: {
      true: 'text-center',
    },
    margin: {
      sm: cn('mb-2', 'sm:mb-4'),
      md: cn('mb-4', 'sm:mb-8'),
      none: '',
    },
    font: {
      basic: cn('font-sans', 'font-bold'),
      logo: 'font-logo',
    },
  },
  defaultVariants: {
    size: 'sm',
    margin: 'md',
    font: 'logo',
  },
});

type Props = {
  headingVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & Omit<HTMLProps<HTMLHeadingElement>, 'size'> &
  VariantProps<typeof headerVariants>;

const Header = forwardRef<HTMLHeadingElement, Props>(
  ({ headingVariant = 'h1', size, isCentered, margin, font, className, children, ...rest }, ref) =>
    React.createElement(
      headingVariant,
      {
        ref,
        className: headerVariants({ size, isCentered, margin, font, className }),
        ...rest,
      },
      children
    )
);

Header.displayName = 'Header';

export { Header };

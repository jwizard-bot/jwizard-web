/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { HTMLProps, forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const safetyVariants = cva(cn('max-w-[1280px]', 'mx-auto', 'px-4', 'sm:px-6'), {
  variants: {
    spaceUp: {
      normal: 'mt-3',
      large: cn('mt-8', 'sm:mt-16'),
    },
    spaceBelow: {
      normal: 'mb-3',
      large: cn('mb-8', 'sm:mb-32'),
    },
  },
  defaultVariants: {
    spaceUp: 'normal',
    spaceBelow: 'normal',
  },
});

type Props = {
  as?: 'div' | 'header' | 'footer';
} & HTMLProps<HTMLDivElement> &
  VariantProps<typeof safetyVariants>;

const SafetyContainer = forwardRef<HTMLDivElement, Props>(
  (
    { as: Component = 'div', spaceUp, spaceBelow, children, className, ...rest },
    ref
  ): React.ReactElement => (
    <Component ref={ref} className={cn('w-full', className)}>
      <div className={safetyVariants({ spaceUp, spaceBelow })} {...rest}>
        {children}
      </div>
    </Component>
  )
);

SafetyContainer.displayName = 'SafetyContainer';

export { SafetyContainer };

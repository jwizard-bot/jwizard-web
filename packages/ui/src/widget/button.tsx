'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { FlexContainer, FloatingContainer } from '../container';
import { Spinner } from './spinner';

const buttonVariants = cva(
  cn(
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'whitespace-nowrap',
    'rounded-md',
    'font-medium',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    '[&_svg]:pointer-events-none',
    '[&_svg]:size-4',
    '[&_svg]:shrink-0'
  ),
  {
    variants: {
      variant: {
        default: cn('bg-primary', 'text-primary-foreground', 'shadow', 'hover:bg-primary/90'),
        destructive: cn(
          'bg-destructive',
          'text-destructive-foreground',
          'shadow-sm',
          'hover:bg-destructive/90'
        ),
        outline: cn(
          'border',
          'border-input bg-background',
          'shadow-sm',
          'hover:bg-accent',
          'hover:text-accent-foreground'
        ),
        secondary: cn(
          'bg-secondary',
          'text-secondary-foreground',
          'shadow-sm',
          'hover:bg-secondary/80'
        ),
        ghost: cn('hover:bg-accent', 'hover:text-accent-foreground'),
        link: cn('text-primary', 'underline-offset-4', 'hover:underline'),
      },
      size: {
        default: cn('h-8', 'px-3', 'py-2', 'text-sm'),
        md: cn('h-10', 'rounded-md', 'px-6', 'text-[1rem]'),
        lg: cn('h-10', 'rounded-md', 'px-6 text-xl'),
        icon: cn('h-9', 'w-9'),
        notch: cn('h-3', 'w-3', 'p-3'),
      },
      fluid: {
        true: cn('flex-shrink-0', 'w-full', 'sm:w-fit'),
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fluid: false,
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
  spinner?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, size, fluid, asChild = false, spinner = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const cssClasses = buttonVariants({ variant, size, fluid, className });

    if (asChild) {
      return (
        <Comp ref={ref} className={cssClasses} {...props}>
          {children}
        </Comp>
      );
    }

    return (
      <Comp ref={ref} className={cssClasses} {...props} disabled={spinner}>
        {!asChild && (
          <FlexContainer
            gap="normal"
            centerContent
            className={clsx({ visible: !spinner, invisible: spinner })}>
            {children}
          </FlexContainer>
        )}
        {spinner && (
          <FloatingContainer fullWidth zIndex={10}>
            <FlexContainer centerContent>
              <Spinner variant="small" color="foreground" />
            </FlexContainer>
          </FloatingContainer>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };

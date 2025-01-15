/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva(
  cn(
    'flex',
    'flex-col',
    'relative',
    'justify-between',
    'overflow-hidden',
    'h-auto',
    'outline-none',
    'bg-card',
    'text-card-foreground',
    'dark:border'
  ),
  {
    variants: {
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-card-sm',
        md: 'shadow-card-md',
        lg: 'shadow-card-lg',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
      isBlurred: {
        true: cn('bg-card/75', 'dark:bg-card/30', 'backdrop-blur-md', 'backdrop-saturate-150'),
      },
      isDimmed: {
        true: 'opacity-40',
      },
      isSquared: {
        true: 'aspect-square',
      },
      roundGap: {
        true: 'p-5',
      },
    },
    defaultVariants: {
      radius: 'lg',
      shadow: 'md',
      isBlurred: false,
      isSquared: false,
      roundGap: true,
    },
  }
);

type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ shadow, radius, isBlurred, isDimmed, isSquared, roundGap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cardVariants({
        shadow,
        radius,
        isBlurred,
        isDimmed,
        isSquared,
        roundGap,
        className,
      })}
      {...props}
    />
  )
);

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />
);

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex justify-end pt-6', className)} {...props} />
  )
);

Card.displayName = 'Card';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardFooter };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  cn('inline-flex', 'items-center', 'rounded-md', 'border', 'px-2.5', 'py-0.5', 'text-sm'),
  {
    variants: {
      variant: {
        default: cn('border-transparent', 'bg-primary', 'text-primary-foreground', 'shadow'),
        secondary: cn('border-transparent', 'bg-secondary', 'text-secondary-foreground'),
        destructive: cn(
          'border-transparent',
          'bg-destructive',
          'text-destructive-foreground',
          'shadow'
        ),
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
));

Badge.displayName = 'Badge';

export { Badge };

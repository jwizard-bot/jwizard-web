/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const alertVariants = cva(
  cn(
    'relative',
    'w-full',
    'rounded-lg',
    'border',
    'px-4',
    'py-3',
    'text-sm',
    '[&>svg+div]:translate-y-[-3px]',
    '[&>svg]:absolute',
    '[&>svg]:left-4',
    '[&>svg]:top-4',
    '[&>svg]:text-foreground',
    '[&>svg~*]:pl-7'
  ),
  {
    variants: {
      variant: {
        default: cn('bg-background', 'text-foreground'),
        success: cn(
          'border-primary-success',
          'bg-primary-success/10',
          'text-primary-success',
          '[&>svg]:text-primary-success'
        ),
        warning: cn(
          'border-primary-warning',
          'bg-primary-warning/10',
          'text-primary-warning',
          '[&>svg]:text-primary-warning'
        ),
        danger: cn(
          'border-primary-danger',
          'bg-primary-danger/10',
          'text-primary-danger',
          '[&>svg]:text-primary-danger'
        ),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ children, className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
    <p className="[&_p]:leading-relaxed">{children}</p>
  </div>
));

Alert.displayName = 'Alert';

export { Alert };

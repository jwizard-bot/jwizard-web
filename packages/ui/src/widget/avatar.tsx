'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type VariantProps, cva } from 'class-variance-authority';

const avatarVariants = cva(
  cn('relative', 'flex', 'h-14', 'w-14', 'm-2', 'shrink-0', 'overflow-hidden', 'rounded-full'),
  {
    variants: {
      size: {
        sm: cn('h-10', 'w-10'),
        lg: cn('h-14', 'w-14'),
      },
      hasRing: {
        true: cn(
          'ring-2',
          'ring-offset-2',
          'ring-offset-background',
          'dark:ring-offset-background-dark',
          'ring-primary'
        ),
      },
    },
    defaultVariants: {
      size: 'lg',
      hasRing: false,
    },
  }
);

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>;

const Avatar = forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, hasRing, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={avatarVariants({ size, hasRing, className })}
      {...props}
    />
  )
);

const AvatarImage = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square', 'h-full', 'w-full', className)}
    {...props}
  />
));

const AvatarFallback = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    delayMs={100}
    className={cn(
      'flex',
      'h-full',
      'w-full',
      'items-center',
      'justify-center',
      'rounded-full',
      'text-background',
      'bg-foreground',
      className
    )}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import clsx from 'clsx';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn('relative', 'overflow-hidden', className)}
    {...props}>
    <ScrollAreaPrimitive.Viewport
      className={cn('h-full', 'w-full', 'rounded-[inherit]', '[&>div]:h-full')}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={clsx(
      'flex',
      'touch-none',
      'select-none',
      'transition-colors',
      orientation === 'vertical' &&
        cn('h-full', 'w-2.5', 'border-l', 'border-l-transparent', 'p-[1px]'),
      orientation === 'horizontal' &&
        cn('h-2.5', 'flex-col', 'border-t', 'border-t-transparent', 'p-[1px]'),
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn('relative', 'flex-1', 'rounded-full', 'bg-border')}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
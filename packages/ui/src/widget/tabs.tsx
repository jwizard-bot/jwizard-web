'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} className={cn('w-full', className)} {...props} />
));

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="w-full max-w-fit mx-auto overflow-x-auto rounded-lg border">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'flex mx-auto',
        'w-fit',
        'items-center',
        'justify-center',
        'rounded-lg',
        'p-1',
        'gap-1',
        'text-muted-foreground',
        className
      )}
      {...props}
    />
  </div>
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex',
      'items-center',
      'justify-center',
      'whitespace-nowrap',
      'rounded-md',
      'px-3',
      'py-1',
      'text-sm',
      'font-medium',
      'transition-all',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      'data-[state=active]:bg-foreground',
      'data-[state=active]:text-background',
      'data-[state=active]:shadow',
      className
    )}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn('mt-2', 'outline-none', className)} {...props} />
));

Tabs.displayName = TabsPrimitive.Tabs.displayName;
TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

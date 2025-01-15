'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex',
        'flex-1',
        'items-center',
        'justify-between',
        'py-4',
        'text-sm',
        'font-medium',
        'transition-all',
        'hover:underline',
        'text-left',
        '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className={cn(
          'h-4',
          'w-4',
          'shrink-0',
          'text-muted-foreground',
          'transition-transform',
          'duration-200'
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden',
      'text-sm',
      'text-muted-foreground',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down'
    )}
    {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

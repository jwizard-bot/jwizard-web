'use client';

import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as SelectPrimitive from '@radix-ui/react-select';
import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const Select = SelectPrimitive.Root;

type SelectValueProps = {
  iconStart?: React.ReactNode;
  hideTextOnSm?: boolean;
} & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectValueProps
>(({ className, iconStart, hideTextOnSm = false, children, ...props }, ref) => (
  <SelectPrimitive.Value ref={ref} {...props}>
    <div className={cn('flex', 'items-center')}>
      {iconStart && <div className="flex-shrink-0">{iconStart}</div>}
      <span className={clsx('ms-2', 'text-center', { 'hidden sm:inline': hideTextOnSm })}>
        {children}
      </span>
    </div>
  </SelectPrimitive.Value>
));

const selectTriggerVariants = cva(
  cn(
    'flex',
    'h-8',
    'w-full',
    'items-center',
    'justify-between',
    'whitespace-nowrap',
    'rounded-md',
    'border',
    'border-input',
    'px-3',
    'py-2',
    'text-sm',
    'shadow-sm',
    'ring-offset-background',
    'placeholder:text-muted-foreground',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-ring',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    '[&>span]:line-clamp-1'
  ),
  {
    variants: {
      opaque: {
        true: cn('bg-white dark:bg-black'),
        false: cn('bg-transparent'),
      },
    },
    defaultVariants: {
      opaque: false,
    },
  }
);

type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants>;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ opaque, className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={selectTriggerVariants({ opaque, className })}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={cn('h-4', 'w-4', 'opacity-50', 'ms-2', 'flex-shrink-0')} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative',
        'z-50',
        'max-h-96',
        'min-w-[8rem]',
        'overflow-hidden',
        'rounded-md',
        'border',
        'bg-popover',
        'text-popover-foreground',
        'shadow-md',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95',
        'data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          cn(
            'data-[side=bottom]:translate-y-1',
            'data-[side=left]:-translate-x-1',
            'data-[side=right]:translate-x-1',
            'data-[side=top]:-translate-y-1'
          ),
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            cn(
              'h-[var(--radix-select-trigger-height)]',
              'w-full',
              'min-w-[var(--radix-select-trigger-width)]'
            )
        )}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
));

type SelectItemProps = {
  iconStart?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, iconStart, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative',
        'flex',
        'w-full',
        'cursor-default',
        'select-none',
        'items-center',
        'rounded-sm',
        'py-1.5',
        'pl-2',
        'pr-8',
        'text-sm',
        'outline-none',
        'focus:bg-accent',
        'focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none',
        'data-[disabled]:opacity-50',
        className
      )}
      {...props}>
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>
        <div className={cn('flex', 'items-center')}>
          {iconStart && <>{iconStart}</>}
          <div className="ms-2">{children}</div>
        </div>
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex', 'cursor-default', 'items-center', 'justify-center', 'py-1', className)}
    {...props}>
    <ChevronUp className={cn('h-4', 'w-4')} />
  </SelectPrimitive.ScrollUpButton>
));

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex', 'cursor-default', 'items-center', 'justify-center', 'py-1', className)}
    {...props}>
    <ChevronDown className={cn('h-4', 'w-4')} />
  </SelectPrimitive.ScrollDownButton>
));

SelectValue.displayName = SelectPrimitive.Value.displayName;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
SelectContent.displayName = SelectPrimitive.Content.displayName;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
SelectItem.displayName = SelectPrimitive.Item.displayName;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

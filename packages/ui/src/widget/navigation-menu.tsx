import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const NavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative',
      'z-10',
      'flex',
      'max-w-max',
      'flex-1',
      'items-center',
      'justify-center',
      className
    )}
    {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

const NavigationMenuList = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group',
      'flex',
      'flex-1',
      'list-none',
      'items-center',
      'justify-center',
      'space-x-1',
      className
    )}
    {...props}
  />
));

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  cn(
    'group',
    'inline-flex',
    'h-9',
    'w-max',
    'items-center',
    'justify-center',
    'rounded-md',
    'bg-transparent',
    'px-2',
    'py-2',
    'text-sm',
    'font-medium',
    'transition-colors',
    'focus:outline-none',
    'disabled:pointer-events-none',
    'disabled:opacity-50'
  )
);

const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}>
    {children}{' '}
    <ChevronDown
      className={cn(
        'relative',
        '-top-[1px]',
        'ml-1',
        'h-3',
        'w-3',
        'transition',
        'duration-300',
        'group-data-[state=open]:rotate-180'
      )}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));

const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0',
      'top-0',
      'w-full',
      'data-[motion^=from-]:animate-in',
      'data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in',
      'data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52',
      'data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52',
      'data-[motion=to-start]:slide-out-to-left-52',
      'md:absolute md:w-auto',
      className
    )}
    {...props}>
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {children}
    </ul>
  </NavigationMenuPrimitive.Content>
));

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      'absolute',
      'left-0',
      'top-full',
      'flex',
      'justify-center',
      'backdrop-blur-none'
    )}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center',
        'relative',
        'mt-1.5',
        'h-[var(--radix-navigation-menu-viewport-height)]',
        'w-full',
        'overflow-hidden',
        'rounded-md',
        'border',
        'bg-popover',
        'text-popover-foreground',
        'shadow',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:zoom-out-95',
        'data-[state=open]:zoom-in-90',
        'md:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));

const NavigationMenuIndicator = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full',
      'z-[1]',
      'flex',
      'h-1.5',
      'items-end',
      'justify-center',
      'overflow-hidden',
      'data-[state=visible]:animate-in',
      'data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out',
      'data-[state=visible]:fade-in',
      className
    )}
    {...props}>
    <div
      className={cn(
        'relative',
        'top-[60%]',
        'h-2 w-2',
        'rotate-45',
        'rounded-tl-sm',
        'bg-border',
        'shadow-md'
      )}
    />
  </NavigationMenuPrimitive.Indicator>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

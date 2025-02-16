import * as React from 'react';
import { HTMLProps, createContext, useContext } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Spinner } from './spinner';

type InputContextType = {
  waiting: boolean;
};

const InputContext = createContext<InputContextType>({ waiting: false });

type InputContainerProps = {
  waiting?: boolean;
} & HTMLProps<HTMLDivElement>;

const InputContainer = React.forwardRef<HTMLDivElement, InputContainerProps>(
  ({ waiting = false, children, className, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props}>
      <InputContext.Provider value={{ waiting }}>{children}</InputContext.Provider>
    </div>
  )
);

const InputSpinner = React.forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { waiting } = useContext(InputContext);
    return waiting ? (
      <div
        ref={ref}
        className={cn(
          'absolute',
          'right-3',
          'top-[50%]',
          '-translate-y-[50%]',
          'h-[20px]',
          className
        )}
        {...props}>
        <Spinner variant="small" color="background" />
      </div>
    ) : null;
  }
);

const inputVariants = cva(
  cn(
    'flex',
    'h-8',
    'w-full',
    'rounded-md',
    'border',
    'border-input',
    'px-3',
    'py-2',
    'text-sm',
    'shadow-sm',
    'transition-colors',
    'file:border-0',
    'file:bg-transparent',
    'file:text-sm',
    'file:font-medium',
    'file:text-foreground',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50'
  ),
  {
    variants: {
      opaque: {
        true: cn('bg-white', 'dark:bg-black'),
        false: 'bg-transparent',
      },
    },
    defaultVariants: {
      opaque: false,
    },
  }
);

type InputProps = React.ComponentProps<'input'> & VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ opaque, className, type, ...props }, ref) => {
    const { waiting } = useContext(InputContext);
    return (
      <input
        type={type}
        className={clsx(inputVariants({ opaque, className }), { 'pe-10': waiting })}
        ref={ref}
        {...props}
      />
    );
  }
);

InputContainer.displayName = 'InputContainer';
InputSpinner.displayName = 'InputSpinner';
Input.displayName = 'Input';

export { InputContainer, InputSpinner, Input };

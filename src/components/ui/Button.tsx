/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef } from 'react';
import clsx from 'clsx';
import { ButtonProps, Button as NextUiButton } from '@nextui-org/react';
import { ReactRef } from '@nextui-org/react-utils';

export type Variant = 'solid' | 'bordered';

export type Size = 'sm' | 'md' | 'lg';

type Props = {
  variant?: Variant;
  size?: Size;
  isExternal?: boolean;
  fullWithOnSmallDevices?: boolean;
} & Omit<ButtonProps, 'variant' & 'color' & 'size'>;

const Button = forwardRef<typeof NextUiButton, Props>(
  (
    {
      variant = 'solid',
      size = 'sm',
      fullWithOnSmallDevices = false,
      className,
      children,
      ...rest
    },
    ref
  ) => (
    <NextUiButton
      ref={ref as ReactRef<HTMLButtonElement | null>}
      color={variant === 'bordered' ? 'default' : 'primary'}
      size={size}
      variant={variant}
      className={clsx(
        {
          'bg-primary-foreground': variant === 'bordered',
          'text-lg sm:text-xl': size === 'md',
          'w-full sm:w-fit': fullWithOnSmallDevices,
        },
        className
      )}
      {...rest}>
      {children}
    </NextUiButton>
  )
);

Button.displayName = 'Button';

export default Button;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type FloatingMode = 'absolute' | 'fixed';

type CenteredMode = 'x' | 'y' | 'xy' | 'none';

type Props = {
  mode: FloatingMode;
  centered?: CenteredMode;
} & HTMLAttributes<HTMLDivElement>;

const FloatingContainer = forwardRef<HTMLDivElement, Props>(
  (
    { mode, centered = 'none', children, className, ...rest },
    ref
  ): JSX.Element => (
    <div
      ref={ref}
      {...rest}
      className={clsx(className, mode, {
        'left-[50%] -translate-x-[50%]': centered === 'x' || centered === 'xy',
        'top-[50%] -translate-y-[50%]': centered === 'y' || centered === 'xy',
      })}>
      {children}
    </div>
  )
);

FloatingContainer.displayName = 'FloatingContainer';

export default FloatingContainer;

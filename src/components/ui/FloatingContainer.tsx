/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';

type FloatingMode = 'absolute' | 'fixed';

type CenteredMode = 'x' | 'y' | 'xy' | 'none';

type AlignmentX = 'left' | 'right';
type AlignmentY = 'top' | 'bottom';

type Props = {
  mode: FloatingMode;
  centered?: CenteredMode;
  alignmentX?: AlignmentX;
  alignmentY?: AlignmentY;
  zIndex?: number;
} & HTMLProps<HTMLDivElement>;

const FloatingContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      mode,
      centered = 'none',
      alignmentX,
      alignmentY,
      zIndex = 1,
      children,
      className,
      ...rest
    },
    ref
  ): JSX.Element => (
    <div
      ref={ref}
      {...rest}
      className={clsx(className, mode, {
        'left-[50%] -translate-x-[50%]': centered === 'x' || centered === 'xy',
        'top-[50%] -translate-y-[50%]': centered === 'y' || centered === 'xy',
        'left-0': alignmentX === 'left',
        'right-0': alignmentX === 'right',
        'top-0': alignmentY === 'top',
        'bottom-0': alignmentY === 'bottom',
      })}
      style={{ zIndex }}>
      {children}
    </div>
  )
);

FloatingContainer.displayName = 'FloatingContainer';

export default FloatingContainer;

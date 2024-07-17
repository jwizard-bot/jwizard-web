/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type FlexAdjustments = 'start' | 'center' | 'end';
type FlexJustify = FlexAdjustments | 'between';

type Props = {
  as?: 'div' | 'main';
  col?: boolean;
  justify?: FlexJustify;
  align?: FlexAdjustments;
  gap?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  centerContent?: boolean;
  toColOnSmallDevices?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const FlexContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      as: Component = 'div',
      col = false,
      justify = 'start',
      align = 'start',
      gap = false,
      fullWidth = false,
      fullHeight = false,
      centerContent = false,
      toColOnSmallDevices = false,
      className,
      children,
      ...rest
    },
    ref
  ): JSX.Element => (
    <Component
      ref={ref}
      className={clsx(
        'flex',
        {
          'flex-col': col,
          'justify-start': justify === 'start',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'gap-3': gap,
          'w-full': fullWidth,
          'h-full': fullHeight,
          'flex-col items-center gap-y-2 sm:gap-y-0 sm:flex-row sm:items-start':
            toColOnSmallDevices,
          'justify-center items-center w-full h-full': centerContent,
        },
        className
      )}
      {...rest}>
      {children}
    </Component>
  )
);

FlexContainer.displayName = 'FlexContainer';

export default FlexContainer;

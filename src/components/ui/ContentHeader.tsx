/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';

type HeaderSize = 'sm' | 'md' | 'lg' | 'xl';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  headingVariant?: HeadingVariant;
  isCentered?: boolean;
  size?: HeaderSize;
} & Omit<HTMLProps<HTMLHeadingElement>, 'size'>;

const ContentHeader = forwardRef<HTMLHeadingElement, Props>(
  (
    {
      headingVariant = 'h1',
      isCentered = false,
      size = 'sm',
      className,
      children,
      ...rest
    },
    ref
  ) =>
    React.createElement(
      headingVariant,
      {
        ref,
        className: clsx(
          'font-logo mb-4 sm:mb-8',
          { 'text-center': isCentered },
          { 'text-3xl sm:text-4xl': size === 'sm' },
          { 'text-4xl sm:text-5xl': size === 'md' },
          { 'text-5xl sm:text-6xl': size === 'lg' },
          { 'text-6xl sm:text-8xl': size === 'xl' },
          className
        ),
        ...rest,
      },
      children
    )
);

ContentHeader.displayName = 'ContentHeader';

export default ContentHeader;

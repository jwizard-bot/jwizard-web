/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'xl';

type Props = {
  size?: Size;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  ({ size = 'xl', children, className, ...rest }, ref) => (
    <p
      ref={ref}
      className={clsx(
        'text-default-500',
        {
          'text-sm': size === 'sm',
          'text-xl': size === 'xl',
          'text-md': size === 'md',
        },
        className
      )}
      {...rest}>
      {children}
    </p>
  )
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;

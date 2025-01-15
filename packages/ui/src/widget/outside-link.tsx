/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const outerLinkVariants = cva('', {
  variants: {
    underlined: {
      true: cn('underline', 'hover:no-underline', 'font-medium'),
    },
  },
  defaultVariants: {
    underlined: false,
  },
});

type OutsideLinkProps = {
  to: string | undefined;
  newPage?: boolean;
} & React.AnchorHTMLAttributes<Omit<HTMLAnchorElement, 'href'>> &
  VariantProps<typeof outerLinkVariants>;

const OuterLink = forwardRef<HTMLAnchorElement, OutsideLinkProps>(
  ({ newPage = true, to, children, underlined, className, ...props }, ref) => (
    <a
      ref={ref}
      href={to}
      target={newPage ? '_blank' : '_self'}
      rel={newPage ? 'noreferrer' : undefined}
      className={outerLinkVariants({ underlined, className })}
      {...props}>
      {children}
    </a>
  )
);

OuterLink.displayName = 'OuterLink';

export { OuterLink };

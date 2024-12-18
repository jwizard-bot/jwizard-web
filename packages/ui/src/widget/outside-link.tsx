/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { forwardRef } from 'react';

type OutsideLinkProps = {
  to: string | undefined;
  newPage?: boolean;
} & React.AnchorHTMLAttributes<Omit<HTMLAnchorElement, 'href'>>;

const OuterLink = forwardRef<HTMLAnchorElement, OutsideLinkProps>(
  ({ newPage = true, to, children, ...props }, ref) => (
    <a
      ref={ref}
      href={to}
      target={newPage ? '_blank' : '_self'}
      rel={newPage ? 'noreferrer' : undefined}
      {...props}>
      {children}
    </a>
  )
);

OuterLink.displayName = 'OuterLink';

export { OuterLink };

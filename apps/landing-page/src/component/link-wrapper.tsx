/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import NextLink from 'next/link';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

type Props = {
  href: string;
  insideRouter?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const LinkWrapper: React.FC<Props> = ({
  href,
  insideRouter = true,
  className = '',
  onClick = () => {},
  children,
}): React.ReactElement => {
  if (insideRouter) {
    return (
      <NextLink href={href} className={className} onClick={onClick}>
        {children}
      </NextLink>
    );
  }
  return (
    <OuterLink to={href} className={className} onClick={onClick}>
      {children}
    </OuterLink>
  );
};

export { LinkWrapper };

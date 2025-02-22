'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import clsx from 'clsx';

type Props = {
  href: string;
  insideRouter?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const LinkWrapper: React.FC<Props> = ({
  href,
  insideRouter = true,
  className = '',
  disabled = false,
  onClick = () => {},
  children,
}): React.ReactElement => {
  const cssClasses = clsx({ 'pointer-events-none': disabled }, className);

  if (insideRouter) {
    return (
      <NextLink href={href} className={cssClasses} onClick={onClick}>
        {children}
      </NextLink>
    );
  }
  return (
    <OuterLink to={href} className={cssClasses} onClick={onClick}>
      {children}
    </OuterLink>
  );
};

export { LinkWrapper };

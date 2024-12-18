/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { LinkWrapper } from '@/component/link-wrapper';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';
import { NavigationMenuLink } from '@jwizard-web/ui/widget/navigation-menu';
import { SquareArrowOutUpRight } from 'lucide-react';

type Props = {
  href: string;
  title: string;
  className?: string;
  insideRouter?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const NavigationItem: React.FC<Props> = ({
  href,
  title,
  className = '',
  insideRouter = true,
  onClick,
  children,
}): React.ReactElement => (
  <li>
    <NavigationMenuLink asChild>
      <LinkWrapper
        href={href}
        insideRouter={insideRouter}
        onClick={onClick}
        className={cn(
          'block',
          'select-none',
          'space-y-1',
          'rounded-md',
          'p-3',
          'leading-none',
          'no-underline',
          'outline-none',
          'transition-colors',
          'hover:bg-accent',
          'hover:text-accent-foreground',
          'focus:bg-accent',
          'focus:text-accent-foreground',
          className
        )}>
        <FlexContainer align="center" className="text-sm font-medium leading-none">
          {title}
          {!insideRouter && <SquareArrowOutUpRight size={10} className="ms-2" />}
        </FlexContainer>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </LinkWrapper>
    </NavigationMenuLink>
  </li>
);

export { NavigationItem };

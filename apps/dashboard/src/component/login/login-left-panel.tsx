import * as React from 'react';
import { LoginBgGradient } from '@/component/login/login-bg-gradient';
import config from '@/config';
import logoBlack from '@jwizard-web/assets/logo/logo-black.svg';
import logoWhite from '@jwizard-web/assets/logo/logo-white.svg';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

const themedLogos = [
  { image: logoBlack, className: cn('hidden', 'dark:block') },
  { image: logoWhite, className: cn('block', 'dark:hidden') },
];

const LoginLeftPanel: React.FC = (): React.ReactElement => (
  <FlexContainer
    col
    grow
    className={cn(
      'relative',
      'overflow-hidden',
      'basis-1/2',
      'bg-black',
      'dark:bg-white',
      'text-primary-foreground',
      'min-h-screen',
      'hidden',
      'md:flex'
    )}>
    <LoginBgGradient side="left" />
    {themedLogos.map(({ image, className }) => (
      <OuterLink key={image} to={config.landingPageUrl} newPage={false}>
        <img
          src={image}
          width={60}
          height={60}
          alt="logo"
          className={cn('absolute', 'top-10', 'left-10', className)}
        />
      </OuterLink>
    ))}
  </FlexContainer>
);

export { LoginLeftPanel };

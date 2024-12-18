/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import logoBlack from '@jwizard-web/assets/logo/logo-black.svg';
import logoWhite from '@jwizard-web/assets/logo/logo-white.svg';
import { cn } from '@jwizard-web/lib/util';
import clsx from 'clsx';
import { FlexContainer } from '../container';

const themedLogos = {
  light: { image: logoWhite, className: 'hidden dark:block' },
  dark: { image: logoBlack, className: 'block dark:hidden' },
};

type Props = {
  appName: string;
  sizePx?: number;
  color?: keyof typeof themedLogos | 'theme';
  classNames?: {
    root?: string;
    text?: string;
  };
};

const Logo: React.FC<Props> = ({
  appName,
  sizePx = 40,
  color = 'theme',
  classNames,
}): React.ReactElement => {
  const imageComponent = (src: string, className: string = ''): React.ReactElement => (
    <img key={src} src={src} alt="logo" className={className} width={sizePx} height={sizePx} />
  );

  return (
    <FlexContainer align="center" className={cn('w-fit', classNames?.root ?? '')}>
      {color === 'theme'
        ? Object.values(themedLogos).map(({ image, className }) => imageComponent(image, className))
        : imageComponent(themedLogos[color].image)}
      <div className="ms-1 relative">
        <h1
          className={clsx(
            'font-logo -mt-0.5',
            {
              'text-foreground': color === 'dark',
              'text-background': color === 'light',
            },
            classNames?.text ?? 'text-2xl'
          )}>
          {appName}
        </h1>
        <p
          className={cn(
            'absolute',
            '-top-[3px]',
            'right-[12px]',
            'text-[10px]',
            'font-semibold',
            'text-muted-foreground',
            'uppercase'
          )}>
          bot
        </p>
      </div>
    </FlexContainer>
  );
};

export { Logo, themedLogos };

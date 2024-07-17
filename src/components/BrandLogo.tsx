/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from 'next/link';
import config from '@/config';
import Ui from './ui';

const themedLogos: Record<string, string> = {
  white: 'hidden dark:block',
  black: 'block dark:hidden',
};

type Props = {
  sizePx?: number;
  classNames?: {
    root?: string;
    text?: string;
  };
};

const BrandLogo: React.FC<Props> = ({
  sizePx = 40,
  classNames,
}): JSX.Element => (
  <NextLink
    href="/"
    className={clsx('w-fit flex-shrink-0', classNames?.root ?? '')}>
    <Ui.FlexContainer align="center">
      {Object.entries(themedLogos).map(([imageSuffix, css]) => (
        <Image
          key={imageSuffix}
          src={`/logo/logo-${imageSuffix}.svg`}
          alt="logo"
          className={css}
          width={sizePx}
          height={sizePx}
        />
      ))}
      <div className="ms-1 relative">
        <h1 className={clsx('font-logo', classNames?.text ?? 'text-2xl')}>
          JWizard
        </h1>
        {config.prereleaseMode !== 'none' && (
          <p
            className={clsx(
              'absolute',
              '-top-[1px]',
              'right-[12px]',
              'text-[10px]',
              'dark:font-semibold',
              'text-default-400',
              'capitalize'
            )}>
            {config.prereleaseMode.toUpperCase()}
          </p>
        )}
      </div>
    </Ui.FlexContainer>
  </NextLink>
);

export default BrandLogo;

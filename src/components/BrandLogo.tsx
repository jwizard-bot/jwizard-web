/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import logoBlack from '@/assets/logo/logo-black.svg';
import logoWhite from '@/assets/logo/logo-white.svg';
import config from '@/config';
import Ui from './ui';

type ThemedLogo = {
  image: StaticImageData;
  className: string;
};

const themedLogos: ThemedLogo[] = [
  { image: logoWhite, className: 'hidden dark:block' },
  { image: logoBlack, className: 'block dark:hidden' },
];

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
      {themedLogos.map(({ image, className }) => (
        <Image
          key={image.src}
          src={image}
          alt="logo"
          className={className}
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

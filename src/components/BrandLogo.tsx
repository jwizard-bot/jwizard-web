/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link as ReactLink } from 'react-router-dom';
import config from '@/config';
import { useDarkMode } from '@/context/DarkModeProvider';
import { Image } from '@nextui-org/react';
import Ui from './ui';

type ImagePrefix = 'white' | 'black';

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
}): JSX.Element => {
  const { isDark } = useDarkMode();
  const [imagePrefix, setImagePrefix] = useState<ImagePrefix>('white');

  useEffect(() => {
    setImagePrefix(isDark ? 'white' : 'black');
  }, [isDark]);

  return (
    <ReactLink
      to="/"
      className={clsx('w-fit flex-shrink-0', classNames?.root ?? '')}>
      <Ui.FlexContainer align="center">
        <Image
          src={`/logo/logo-${imagePrefix}.svg`}
          width={sizePx}
          height={sizePx}
          radius="none"
        />
        <div className="ms-3 relative">
          <h1
            className={clsx('font-logo -mt-1', classNames?.text ?? 'text-2xl')}>
            JWizard
          </h1>
          {config.prereleaseMode !== 'none' && (
            <p
              className={clsx(
                'absolute',
                '-top-[3px]',
                'right-[10px]',
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
    </ReactLink>
  );
};

export default BrandLogo;

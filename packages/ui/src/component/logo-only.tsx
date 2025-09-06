import * as React from 'react';
import { themedLogos } from '@jwizard-web/lib/image';
import { cn } from '@jwizard-web/lib/util';

type Props = {
  sizePx?: number;
  color?: keyof typeof themedLogos | 'theme';
  classNames?: string;
};

const LogoOnly: React.FC<Props> = ({
  sizePx = 60,
  color = 'theme',
  classNames = '',
}): React.ReactElement => {
  const imageComponent = (src: string, imgClassName: string = ''): React.ReactElement => (
    <img
      key={src}
      src={src}
      alt="logo"
      className={cn(classNames, imgClassName)}
      width={sizePx}
      height={sizePx}
    />
  );

  return (
    <>
      {color === 'theme'
        ? Object.values(themedLogos).map(({ image, className }) => imageComponent(image, className))
        : imageComponent(themedLogos[color].image)}
    </>
  );
};

export { LogoOnly };

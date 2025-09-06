import * as React from 'react';
import { themedLogos } from '@jwizard-web/lib/image';
import { cn } from '@jwizard-web/lib/util';
import { OuterLink } from '../widget/outside-link';

type Props = {
  to: string | undefined;
  newPage?: boolean;
  sizePx?: number;
  color?: keyof typeof themedLogos | 'theme';
  classNames?: string;
};

const FloatingLogoOnly: React.FC<Props> = ({
  to,
  newPage = false,
  sizePx = 60,
  color = 'theme',
  classNames = '',
}): React.ReactElement => {
  const imageComponent = (src: string, imgClassName: string = ''): React.ReactElement => (
    <OuterLink key={src} to={to} newPage={newPage} className={classNames}>
      <img
        key={src}
        src={src}
        alt="logo"
        className={cn('absolute', 'top-8', 'left-8', imgClassName)}
        width={sizePx}
        height={sizePx}
      />
    </OuterLink>
  );

  return (
    <>
      {color === 'theme'
        ? Object.values(themedLogos).map(({ image, className }) => imageComponent(image, className))
        : imageComponent(themedLogos[color].image)}
    </>
  );
};

export { FloatingLogoOnly };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import leftBgGradient from '@/assets/bg/left.png';
import rightBgGradient from '@/assets/bg/right.png';

type GradientElement = {
  image: StaticImageData;
  styles: string;
};

const gradientElements: GradientElement[] = [
  {
    image: leftBgGradient,
    styles: '-bottom-[30%] -left-[20%]',
  },
  {
    image: rightBgGradient,
    styles: '-top-[60%] -right-[45%] rotate-12',
  },
];

const BackgroundGradient: React.FC = (): JSX.Element => (
  <div>
    {gradientElements.map(({ image, styles }) => (
      <div
        key={image.src}
        className={clsx('fixed opacity-30 dark:opacity-60', styles)}>
        <Image
          src={image}
          className="shadow-black/5 shadow-none rounded-large"
          alt=""
          priority
        />
      </div>
    ))}
  </div>
);

export default BackgroundGradient;

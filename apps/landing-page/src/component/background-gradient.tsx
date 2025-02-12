/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import leftBgGradient from '@jwizard-web/assets/bg/left.png';
import rightBgGradient from '@jwizard-web/assets/bg/right.png';
import { cn } from '@jwizard-web/lib/util';

type GradientElement = {
  image: string;
  styles: string;
};

const gradientElements: GradientElement[] = [
  {
    image: leftBgGradient,
    styles: cn('-bottom-[30%]', '-left-[20%]'),
  },
  {
    image: rightBgGradient,
    styles: cn('-top-[60%]', '-right-[45%]', 'rotate-12'),
  },
];

const BackgroundGradient: React.FC = (): React.ReactElement => (
  <div>
    {gradientElements.map(({ image, styles }) => (
      <div key={image} className={cn('fixed', 'opacity-30', 'dark:opacity-60', styles)}>
        <img src={image} className={cn('shadow-black/5', 'shadow-none', 'rounded-large')} alt="" />
      </div>
    ))}
  </div>
);

export { BackgroundGradient };

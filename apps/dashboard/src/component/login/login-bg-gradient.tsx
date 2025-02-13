/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { HTMLProps } from 'react';
import leftBgGradient from '@jwizard-web/assets/bg/left.png';
import rightBgGradient from '@jwizard-web/assets/bg/right.png';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const gradientElements: Record<string, string> = {
  left: leftBgGradient,
  right: rightBgGradient,
};

const loginBgGradientVariants = cva(cn('fixed', 'opacity-30', 'dark:opacity-60'), {
  variants: {
    side: {
      left: cn('-bottom-[30%]', '-left-[20%]'),
      right: cn('-top-[60%]', '-right-[45%]', 'rotate-12', '-z-[1]'),
    },
  },
  defaultVariants: {
    side: 'left',
  },
});

type Props = HTMLProps<HTMLDivElement> & VariantProps<typeof loginBgGradientVariants>;

const LoginBgGradient: React.FC<Props> = ({ side, className }): React.ReactElement => (
  <div className={loginBgGradientVariants({ side, className })}>
    <img
      src={gradientElements[side as keyof typeof gradientElements]}
      className={cn('shadow-black/5', 'shadow-none', 'rounded-large')}
      alt=""
    />
  </div>
);

export { LoginBgGradient };

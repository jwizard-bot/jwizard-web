/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { ScaleLoader } from 'react-spinners';

const spinnerVariants = {
  small: {
    height: 13,
    width: 2,
    margin: 1,
  },
  medium: {
    height: 18,
    width: 3,
    margin: 2,
  },
  large: {
    height: 34,
    width: 4,
    margin: 3,
  },
};

const colorVariants = {
  background: '--primary',
  foreground: '--primary-foreground',
};

type Props = {
  variant: keyof typeof spinnerVariants;
  color: keyof typeof colorVariants;
};

const Spinner: React.FC<Props> = ({ variant, color }): React.ReactElement => {
  const data = spinnerVariants[variant];
  return (
    <ScaleLoader
      {...data}
      radius={10}
      speedMultiplier={1.1}
      color={`hsl(var(${colorVariants[color]}))`}
    />
  );
};

export { Spinner };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import { generateName } from './helper';

type Props = {
  as?: 'div' | 'main' | 'header' | 'footer';
} & HTMLProps<HTMLDivElement>;

const SafetyContainer = forwardRef<HTMLDivElement, Props>(
  (
    { as: Component = 'div', children, className, ...rest },
    ref
  ): JSX.Element => (
    <Component ref={ref} className={clsx('w-full', className)}>
      <div
        className={clsx([
          'max-w-[1280px] mx-auto px-6',
          Component === 'main' ? 'my-8' : 'my-3',
        ])}
        {...rest}>
        {children}
      </div>
    </Component>
  )
);

SafetyContainer.displayName = generateName('SafetyContainer');

export default SafetyContainer;

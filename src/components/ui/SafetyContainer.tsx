/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Props = {
  as?: 'div' | 'main' | 'header' | 'footer';
} & HTMLAttributes<HTMLDivElement>;

const SafetyContainer = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { as: Component = 'div', children, className, ...rest } = props;
    return (
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
    );
  }
);

SafetyContainer.displayName = 'SafetyContainer';

export default SafetyContainer;

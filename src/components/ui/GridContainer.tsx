/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { fullConfig } from '@/theme';

const gridCols = fullConfig.theme.gridTemplateColumns;

const gridGap: Record<number, string> = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
};

type Props = {
  cols?: Exclude<keyof typeof gridCols, 'none' | 'subgrid'>;
  gap?: keyof typeof gridGap;
  responsive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const GridContainer = forwardRef<HTMLDivElement, Props>(
  (
    { cols = '12', gap, responsive = false, children, className, ...rest },
    ref
  ) => (
    <div
      ref={ref}
      className={clsx(
        'grid',
        responsive ? gridCols['12'] : gridCols[cols],
        gap && gridGap[gap],
        responsive &&
          'grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12',
        className
      )}
      {...rest}>
      {children}
    </div>
  )
);

GridContainer.displayName = 'GridContainer';

export default GridContainer;

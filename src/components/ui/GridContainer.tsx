/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import { generateName } from './helper';

const gridColumns: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const gridGap: Record<number, string> = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
};

type Props = {
  cols?: keyof typeof gridColumns;
  gap?: keyof typeof gridGap;
  responsive?: boolean;
} & HTMLProps<HTMLDivElement>;

const GridContainer = forwardRef<HTMLDivElement, Props>(
  (
    { cols = 12, gap, responsive = false, children, className, ...rest },
    ref
  ) => (
    <div
      ref={ref}
      className={clsx(
        'grid',
        responsive ? gridColumns[12] : gridColumns[cols],
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

GridContainer.displayName = generateName('GridContainer');

export default GridContainer;

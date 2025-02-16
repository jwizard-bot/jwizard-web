import * as React from 'react';
import { forwardRef, useMemo } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type Props = {
  direction?: 'x' | 'y';
  start?: number;
  animate?: number;
  duration?: number;
  immutableProperties?: {
    [key: string]: number | string;
  };
  mutableProperties?: {
    [key: string]: number | string;
  };
} & HTMLMotionProps<'div'>;

const SlideMotionContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      direction = 'y',
      start = 50,
      animate = 0,
      duration = 0.3,
      immutableProperties = {},
      mutableProperties = {},
      children,
      ...rest
    },
    ref
  ): React.ReactElement => {
    const initAnimationState = useMemo(
      () => ({
        opacity: 0,
        [direction]: start,
        ...immutableProperties,
      }),
      [direction, start]
    );

    return (
      <motion.div
        ref={ref}
        initial={initAnimationState}
        animate={{
          ...initAnimationState,
          opacity: 1,
          [direction]: animate,
          ...mutableProperties,
        }}
        exit={initAnimationState}
        transition={{ duration }}
        {...rest}>
        {children}
      </motion.div>
    );
  }
);

SlideMotionContainer.displayName = 'SlideMotionContainer';

export { SlideMotionContainer };

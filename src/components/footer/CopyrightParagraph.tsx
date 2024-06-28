/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

type Props = HTMLAttributes<HTMLParagraphElement>;

const CopyrightParagraph = forwardRef<HTMLParagraphElement, Props>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    return (
      <p
        ref={ref}
        className={clsx(
          'text-center sm:text-inherit w-full sm:w-fit',
          className
        )}
        {...rest}>
        {children}
      </p>
    );
  }
);

CopyrightParagraph.displayName = 'CopyrightParagraph';

export default CopyrightParagraph;

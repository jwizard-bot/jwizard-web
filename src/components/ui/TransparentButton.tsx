/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { forwardRef } from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '@nextui-org/react';
import { ReactRef } from '@nextui-org/react-utils';

const TransparentButton = forwardRef<
  typeof Button,
  ButtonProps & { to?: string }
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <Button
      ref={ref as ReactRef<HTMLButtonElement | null>}
      disableRipple
      className={clsx(
        className,
        'bg-transparent data-[hover=true]:bg-transparent'
      )}
      {...rest}>
      {children}
    </Button>
  );
});

TransparentButton.displayName = 'TransparentButton';

export default TransparentButton;

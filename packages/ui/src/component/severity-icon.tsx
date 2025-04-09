import * as React from 'react';
import { HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCheck, BsExclamation } from 'react-icons/bs';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';
import { FlexContainer } from '../container';

const badgeVariants = cva(cn('rounded-full', 'ring-2'), {
  variants: {
    success: {
      true: cn('bg-primary-success', 'ring-primary-success/30'),
    },
    warning: {
      true: cn('bg-primary-warning', 'ring-primary-warning/30'),
    },
    danger: {
      true: cn('bg-primary-danger', 'ring-primary-danger/30'),
    },
    size: {
      tn: cn('w-4', 'h-4'),
      sm: cn('w-5', 'h-5'),
      lg: cn('w-8', 'h-8'),
    },
  },
  defaultVariants: {
    success: false,
    warning: false,
    danger: false,
    size: 'sm',
  },
});

type Props = {
  // false -> danger, null -> warning, true -> success
  allGood: boolean | null;
  iconSize?: number;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const SeverityIcon: React.FC<Props> = ({
  allGood,
  size,
  iconSize = 16,
  className,
  ...rest
}): React.ReactElement => {
  const renderIcon = (): React.FunctionComponentElement<IconBaseProps> => {
    let icon = BsCheck;
    if (!allGood) {
      icon = BsExclamation;
    }
    return React.createElement(icon, { size: iconSize, className: 'text-white' });
  };

  return (
    <FlexContainer
      centerContent
      className={badgeVariants({
        success: allGood,
        warning: allGood === null,
        danger: allGood === false,
        size,
        className,
      })}
      {...rest}>
      {renderIcon()}
    </FlexContainer>
  );
};

export { SeverityIcon };

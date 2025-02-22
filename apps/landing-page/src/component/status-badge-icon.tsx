import * as React from 'react';
import { HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCheck, BsExclamation } from 'react-icons/bs';
import { cn } from '@jwizard-web/lib/util';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(cn('rounded-full', 'flex', 'justify-center', 'items-center', 'ring-2'), {
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
  // false -> critical, null -> not able to get some statuses, true -> fully operational
  operational: boolean | null;
  iconSize?: number;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const StatusBadgeIcon: React.FC<Props> = ({
  operational,
  size,
  iconSize = 16,
  className,
  ...rest
}): React.ReactElement => {
  const renderIcon = (): React.FunctionComponentElement<IconBaseProps> => {
    let icon = BsCheck;
    if (!operational) {
      icon = BsExclamation;
    }
    return React.createElement(icon, { size: iconSize, className: 'text-white' });
  };

  return (
    <div
      className={badgeVariants({
        success: operational,
        warning: operational === null,
        danger: operational === false,
        size,
        className,
      })}
      {...rest}>
      {renderIcon()}
    </div>
  );
};

export { StatusBadgeIcon };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCheck, BsExclamation } from 'react-icons/bs';
import { getServerQuery } from '@/query';
import { GlobalStatusResDto } from '@/query/type';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { cva } from 'class-variance-authority';
import { SquareArrowOutUpRight } from 'lucide-react';

const badgeVariants = cva(
  cn('w-5', 'h-5', 'rounded-full', 'flex', 'justify-center', 'items-center', 'ring-2'),
  {
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
    },
    defaultVariants: {
      success: false,
      warning: false,
      danger: false,
    },
  }
);

const StatusBadge: React.FC = async (): Promise<React.ReactElement> => {
  const { data: globalStatus } = await getServerQuery<GlobalStatusResDto>({
    queryString: '/v1/status/global',
    errorMessage: 'Unable to fetch global status',
  });

  const { operational, description, sourceUrl } = globalStatus;

  const renderIcon = (): React.FunctionComponentElement<IconBaseProps> => {
    let icon = BsCheck;
    if (!operational) {
      icon = BsExclamation;
    }
    return React.createElement(icon, { size: 16, className: 'text-white' });
  };

  return (
    <OuterLink to={sourceUrl}>
      <FlexContainer align="center" gap className="text-sm">
        <div
          className={badgeVariants({
            success: operational,
            warning: operational === null,
            danger: operational === false,
          })}>
          {renderIcon()}
        </div>
        {description}
        <SquareArrowOutUpRight size={12} />
      </FlexContainer>
    </OuterLink>
  );
};

export default StatusBadge;

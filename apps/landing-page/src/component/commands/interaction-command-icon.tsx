'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@jwizard-web/lib/util';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';
import { Code } from 'lucide-react';

type Props = {
  i18nTooltipContent: string;
};

const InteractionCommandIcon: React.FC<Props> = ({ i18nTooltipContent }): React.ReactElement => {
  const t = useTranslations();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-help">
          <div
            className={cn(
              'flex',
              'justify-center',
              'items-center',
              'w-7',
              'h-7',
              'ring-2',
              'rounded-md',
              'bg-primary-success',
              'ring-primary-success/30',
              'text-white'
            )}>
            <Code size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>{t(i18nTooltipContent)}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { InteractionCommandIcon };

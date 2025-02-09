'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useMounted } from '@jwizard-web/ui/hook/use-mounted';
import { Button } from '@jwizard-web/ui/widget/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';
import clipboardCopy from 'clipboard-copy';
import { motion } from 'framer-motion';
import { Check, Link } from 'lucide-react';

type Props = {
  contentToCopy: string;
  i18nResultText: string;
  BaseIcon?: React.ReactElement;
  AfterCopyIcon?: React.ReactElement;
};

const CopyButton: React.FC<Props> = ({
  contentToCopy,
  i18nResultText,
  BaseIcon = <Link />,
  AfterCopyIcon = <Check />,
}): React.ReactElement => {
  const t = useTranslations();
  const mounted = useMounted();
  const [icon, setIcon] = useState<keyof typeof icons>('base');

  const icons = useMemo(
    () => ({
      base: BaseIcon,
      afterCopy: AfterCopyIcon,
    }),
    [BaseIcon, AfterCopyIcon]
  );

  const copyContent = (): void => {
    if (icon === 'base') {
      clipboardCopy(contentToCopy).then(() => {
        setIcon('afterCopy');
        setTimeout(() => setIcon('base'), 3000);
      });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={copyContent} className="h-7 w-7">
            <motion.div
              key={icon}
              initial={mounted ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute">
              {icons[icon]}
            </motion.div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{t(i18nResultText)}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CopyButton };

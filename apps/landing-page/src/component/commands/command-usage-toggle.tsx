'use client';

import * as React from 'react';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CodeContainer } from '@/component/commands/code-container';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Switch } from '@jwizard-web/ui/widget/switch';

type Props = {
  legacyUsage: string[];
  slashUsage?: string[];
};

const CommandUsageToggle: React.FC<Props> = ({ legacyUsage, slashUsage }): React.ReactElement => {
  const t = useTranslations();
  const [isSlashUsage, setIsSlashUsage] = useState(false);

  const currentUsage = useMemo(() => (isSlashUsage ? slashUsage : legacyUsage), [isSlashUsage]);

  if (slashUsage) {
    return (
      <FlexContainer col gap="normal" className="my-3" fullWidth>
        <label className="block cursor-pointer">
          <Switch checked={isSlashUsage} onCheckedChange={setIsSlashUsage} />
          <span className="text-primary ms-2 font-medium">{t('slashCommandToggle')}</span>
        </label>
        {currentUsage?.map(syntax => <CodeContainer key={syntax} syntax={syntax} />)}
      </FlexContainer>
    );
  }

  return (
    <FlexContainer col gap="normal" className="my-3" fullWidth>
      {legacyUsage?.map(syntax => <CodeContainer key={syntax} syntax={syntax} />)}
    </FlexContainer>
  );
};

export { CommandUsageToggle };

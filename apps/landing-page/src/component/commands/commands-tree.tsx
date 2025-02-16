'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { CommandDetailsCard } from '@/component/commands/command-details-card';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Accordion } from '@jwizard-web/ui/widget/accordion';
import { Alert } from '@jwizard-web/ui/widget/alert';
import { Header } from '@jwizard-web/ui/widget/header';
import { useCommandsContext } from './commands-context';

const CommandsTree: React.FC = (): React.ReactElement => {
  const { commands } = useCommandsContext();
  const t = useTranslations();

  return (
    <FlexContainer col gap="large" className="mb-3" fullWidth>
      {commands.length === 0 && <Alert variant="warning">{t('couldNotFindAnyCommand')} </Alert>}
      {commands.map(({ id, name, commands }) => (
        <FlexContainer key={id} col fullWidth gap="normal">
          <Header headingVariant="h2" size="xs" font="basic" margin="none">
            {name} ({commands.length})
          </Header>
          <Accordion type="multiple" className="w-full">
            {commands.map(({ name, ...rest }) => (
              <CommandDetailsCard key={name} command={{ name, ...rest }} />
            ))}
          </Accordion>
        </FlexContainer>
      ))}
    </FlexContainer>
  );
};

export { CommandsTree };

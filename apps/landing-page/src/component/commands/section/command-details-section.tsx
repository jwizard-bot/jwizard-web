import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { PurifiedRenderer } from '@/component';
import { CommandArgumentElement } from '@/component/commands/command-argument-element';
import { CommandUsageToggle } from '@/component/commands/command-usage-toggle';
import { InteractionCommandIcon } from '@/component/commands/interaction-command-icon';
import { ReturnAllCommands } from '@/component/commands/return-all-commands';
import { CopyButton } from '@/component/copy-button';
import { getServerQuery } from '@/query';
import { CommandDetailsResDto } from '@/query/type/command-details';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Alert } from '@jwizard-web/ui/widget/alert';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';

type Props = {
  command: string;
};

const CommandDetailsSection: React.FC<Props> = async ({ command }): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: commandDetails, isError } = await getServerQuery<CommandDetailsResDto>({
    queryString: `/v1/command/${command}/details`,
    errorMessage: `Unable to fetch details of command: ${command}.`,
    silent: true,
  });

  if (isError) {
    return (
      <SafetyContainer spaceUp="large">
        <ReturnAllCommands />
        <Alert variant="danger">
          <PurifiedRenderer
            dangerousText={t('couldNotFoundCommand', {
              commandName: `<strong>${command}</strong>`,
            })}
            Component="span"
          />
        </Alert>
      </SafetyContainer>
    );
  }

  return (
    <SafetyContainer spaceUp="large">
      <ReturnAllCommands />
      <FlexContainer justify="between" align="center">
        <Header size="md" margin="none">
          {commandDetails.name}
        </Header>
        <FlexContainer gap="normal">
          {commandDetails.slashUsage && (
            <InteractionCommandIcon i18nTooltipContent="availableAsInteraction" />
          )}
          <CopyButton contentToCopy={commandDetails.name} i18nResultText="copyCommandName" />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer col className="mt-7" gap="huge">
        <Paragraph size="md">{commandDetails.description}</Paragraph>
        {commandDetails.arguments.length > 0 && (
          <FlexContainer col className="text-muted-foreground">
            <Paragraph size="md">{t('arguments')}:</Paragraph>
            {commandDetails.arguments.map(({ name, ...rest }) => (
              <CommandArgumentElement key={name} argument={{ name, ...rest }} />
            ))}
          </FlexContainer>
        )}
        <FlexContainer col fullWidth>
          <Paragraph size="md">{t('exampleUsage')}:</Paragraph>
          <CommandUsageToggle
            legacyUsage={commandDetails.legacyUsage}
            slashUsage={commandDetails.slashUsage}
          />
        </FlexContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { CommandDetailsSection };

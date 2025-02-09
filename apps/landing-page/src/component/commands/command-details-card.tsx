/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { CommandArgumentElement } from '@/component/commands/command-argument-element';
import { CommandUsageToggle } from '@/component/commands/command-usage-toggle';
import { InteractionCommandIcon } from '@/component/commands/interaction-command-icon';
import { CopyButton } from '@/component/copy-button';
import { CommandData } from '@/query/type/module-with-commands';
import { FlexContainer } from '@jwizard-web/ui/container';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@jwizard-web/ui/widget/accordion';
import { Button } from '@jwizard-web/ui/widget/button';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight } from 'lucide-react';

type Props = {
  command: CommandData;
};

const CommandDetailsCard: React.FC<Props> = ({ command }): React.ReactElement => {
  const t = useTranslations();
  return (
    <Card isBlurred className="w-full mb-3">
      <AccordionItem value={command.name} withoutBorder>
        <FlexContainer col fullWidth fullHeight gap="normal">
          <FlexContainer col gap="normal" fullWidth>
            <FlexContainer justify="between" align="center" fullWidth>
              <AccordionTrigger arrowPosition="left" className="hover:no-underline py-0">
                <Header as="h3" font="basic" size="xs" margin="none">
                  {command.name}
                </Header>
              </AccordionTrigger>
              <FlexContainer gap="normal">
                {command.slashUsage && (
                  <InteractionCommandIcon i18nTooltipContent="availableAsInteraction" />
                )}
                <CopyButton contentToCopy={command.name} i18nResultText="copyCommandName" />
              </FlexContainer>
            </FlexContainer>
            <Paragraph size="sm">{command.description}</Paragraph>
          </FlexContainer>
          <AccordionContent className="pb-0 w-full">
            <FlexContainer col gap="normal">
              {command.arguments.length > 0 && (
                <FlexContainer col fullWidth>
                  <Paragraph size="sm">{t('arguments')}:</Paragraph>
                  {command.arguments.map(({ name, ...rest }) => (
                    <CommandArgumentElement key={name} argument={{ name, ...rest }} />
                  ))}
                </FlexContainer>
              )}
              <FlexContainer col fullWidth>
                <Paragraph size="sm">{t('exampleUsage')}:</Paragraph>
                <CommandUsageToggle
                  legacyUsage={command.legacyUsage}
                  slashUsage={command.slashUsage}
                />
              </FlexContainer>
            </FlexContainer>
            <FlexContainer justify="end" fullWidth>
              <Button asChild fluid>
                <NextLink href={`/commands/${command.slug}`}>
                  {t('commandDetails')}
                  <ArrowRight />
                </NextLink>
              </Button>
            </FlexContainer>
          </AccordionContent>
        </FlexContainer>
      </AccordionItem>
    </Card>
  );
};

export { CommandDetailsCard };

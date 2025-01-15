'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { FlexContainer } from '@jwizard-web/ui/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@jwizard-web/ui/widget/accordion';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

type Props = {
  permissions: string[];
};

const JoinHelpAccordion: React.FC<Props> = ({ permissions }): React.ReactElement => {
  const t = useTranslations();

  return (
    <FlexContainer col gap>
      <Header margin="none">FAQ</Header>
      <Accordion type="single" collapsible className="w-full" defaultValue="which-bot">
        <AccordionItem value="which-bot">
          <AccordionTrigger>{t('whichBotFaqHeader')}</AccordionTrigger>
          <AccordionContent>{t('whichBotFaqDescription')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="which-permissions">
          <AccordionTrigger>{t('permissionsFaqHeader')}</AccordionTrigger>
          <AccordionContent>
            {t('permissionsFaqDescriptionTop')}
            <ul className="list-disc pl-5 my-2 font-medium text-primary">
              {permissions.map(permission => (
                <li key={permission}>{permission}</li>
              ))}
            </ul>
            {t('permissionsFaqDescriptionBottom')}
            <br />
            <OuterLink
              to="https://discord.com/developers/docs/topics/permissions"
              underlined
              className="text-primary">
              {t('moreAboutPermissions')}
            </OuterLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </FlexContainer>
  );
};

export { JoinHelpAccordion };

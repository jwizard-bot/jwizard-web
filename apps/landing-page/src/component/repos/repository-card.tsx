/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { getDateTimeFormatter } from '@/hook/server/get-date-time-formatter';
import { RepositoryResDto } from '@/query/type/repositories';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Card } from '@jwizard-web/ui/widget/card';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { SquareArrowOutUpRight } from 'lucide-react';

type Props = {
  repository: RepositoryResDto;
};

const RepositoryCard: React.FC<Props> = async ({
  repository: { link, name, description, lastUpdate, primaryLanguage },
}): Promise<React.ReactElement> => {
  const t = await getTranslations();
  const format = await getDateTimeFormatter();

  return (
    <Card isBlurred>
      <FlexContainer col fullWidth fullHeight gap="normal">
        <OuterLink to={link}>
          <FlexContainer col gap="normal">
            <FlexContainer justify="between" align="center" fullWidth>
              <h2 className="font-bold text-xl">{name}</h2>
              <SquareArrowOutUpRight size={15} className="me-2" />
            </FlexContainer>
            <Paragraph size="sm">{description}</Paragraph>
          </FlexContainer>
        </OuterLink>
        <FlexContainer col>
          <Paragraph size="sm">
            {t('latestBuild')}:
            <OuterLink to={lastUpdate.link} underlined className="ms-1 text-primary">
              {lastUpdate.buildSha}
            </OuterLink>
          </Paragraph>
          <Paragraph size="sm">
            {t('lastUpdate')}:
            <span className="text-primary font-medium ms-1">{format(lastUpdate.buildDate)}*</span>
          </Paragraph>
        </FlexContainer>
        <FlexContainer align="center" gap="normal">
          <div
            className="w-3 h-3 rounded-full shadow-sm"
            style={{ backgroundColor: primaryLanguage.color || '#ffffff' }}
          />
          <span className="text-primary font-medium text-sm">{primaryLanguage.name}</span>
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
};

export { RepositoryCard };

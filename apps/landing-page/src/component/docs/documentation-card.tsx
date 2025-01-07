/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { DocumentationResDto } from '@/query/type/documentation';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Card } from '@jwizard-web/ui/widget/card';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { Dot, SquareArrowOutUpRight } from 'lucide-react';

type Props = {
  documentation: DocumentationResDto;
};

const DocumentationCard: React.FC<Props> = async ({
  documentation: { name, description, types },
}): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <Card isBlurred>
      <FlexContainer col fullWidth fullHeight gap>
        <FlexContainer col gap>
          <h2 className="font-bold text-xl">{name}</h2>
          <Paragraph size="sm">{description}</Paragraph>
        </FlexContainer>
        <FlexContainer col className="mt-3">
          <Paragraph size="sm" className="mb-2">
            {t('availableDocs')} *:
          </Paragraph>
          {types.map(({ name, link }) => (
            <OuterLink key={name} to={link} className="flex items-center underline font-bold">
              <Dot />
              {name}
              <SquareArrowOutUpRight size={15} className="ms-2" />
            </OuterLink>
          ))}
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
};

export { DocumentationCard };

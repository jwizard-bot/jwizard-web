/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { DocumentationCard } from '@/component/docs/documentation-card';
import { getServerQuery } from '@/query';
import { DocumentationResDto } from '@/query/type/documentation';
import { GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';

const DocumentationSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: documentations } = await getServerQuery<DocumentationResDto[]>({
    queryString: '/v1/documentation/all',
    errorMessage: 'Unable to fetch documentations.',
  });

  return (
    <SafetyContainer className="mb-8 sm:mb-32">
      <GridContainer cols={1} gap={6} className="md:grid-cols-2 mb-8">
        {documentations.map(documentation => (
          <DocumentationCard key={documentation.name} documentation={documentation} />
        ))}
      </GridContainer>
      <Paragraph size="sm">* {t('docsInfo')}</Paragraph>
    </SafetyContainer>
  );
};

export { DocumentationSection };

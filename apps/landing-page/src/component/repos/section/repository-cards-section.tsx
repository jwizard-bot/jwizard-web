import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { RepositoryCard } from '@/component/repos/repository-card';
import { getServerQuery } from '@/query';
import { RepositoryResDto } from '@/query/type/repositories';
import { GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';

const RepositoryCardsSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: repositories } = await getServerQuery<RepositoryResDto[]>({
    queryString: '/v1/repository/all',
    errorMessage: 'Unable to fetch repositories.',
  });

  return (
    <SafetyContainer className="mb-8 sm:mb-32">
      <GridContainer cols={1} gap={6} className="md:grid-cols-2 mb-8">
        {repositories.map(repository => (
          <RepositoryCard key={repository.slug} repository={repository} />
        ))}
      </GridContainer>
      <Paragraph size="sm">* {t('timeZoneInfo')}</Paragraph>
    </SafetyContainer>
  );
};

export { RepositoryCardsSection };

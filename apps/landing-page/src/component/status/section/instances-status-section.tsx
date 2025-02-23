import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { InstanceStatusCard } from '@/component/status/instance-status-card';
import { getServerQuery } from '@/query';
import { InstanceStatusResDto } from '@/query/type/instance-status';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Header } from '@jwizard-web/ui/widget/header';

const InstancesStatusSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: instancesStatus } = await getServerQuery<InstanceStatusResDto[]>({
    queryString: '/v1/status/instance/all',
    errorMessage: 'Unable to fetch instances status.',
  });

  return (
    <SafetyContainer className="mb-8">
      <Header>{t('instancesHeader')}</Header>
      <FlexContainer col gap="normal">
        <GridContainer
          cols={1}
          fullWidth
          gap={4}
          className={cn('sm:grid-cols-2', 'xl:grid-cols-4')}>
          {instancesStatus.map(({ id, ...rest }) => (
            <InstanceStatusCard key={id} instanceStatus={rest} />
          ))}
        </GridContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { InstancesStatusSection };

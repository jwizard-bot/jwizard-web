import * as React from 'react';
import { JoinHelpAccordion } from '@/component/join/join-help-accordion';
import { JoinInstanceCard } from '@/component/join/join-instance-card';
import { getServerQuery } from '@/query';
import { JoinInstance } from '@/query/type/join-instance';
import { GridContainer, SafetyContainer } from '@jwizard-web/ui/container';

const JoinBotInstancesSection: React.FC = async (): Promise<React.ReactElement> => {
  const { data: joinBotInstances } = await getServerQuery<JoinInstance[]>({
    queryString: '/v1/join/instance/all?avatarSize=40',
    errorMessage: 'Unable to fetch join bot instances on join page',
  });

  const { data: permissions } = await getServerQuery<string[]>({
    queryString: '/v1/join/permission/all',
    errorMessage: 'Unable to fetch permissions on join page',
  });

  return (
    <SafetyContainer>
      <GridContainer cols={1} gap={6} className="md:grid-cols-2 mb-8 sm:mb-16">
        {joinBotInstances.map(instance => (
          <JoinInstanceCard key={instance.link} joinInstance={instance} />
        ))}
      </GridContainer>
      <JoinHelpAccordion permissions={permissions} />
    </SafetyContainer>
  );
};

export { JoinBotInstancesSection };

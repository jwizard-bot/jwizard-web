import * as React from 'react';
import {
  GlobalStatusSection,
  InstancesListSection,
  InstancesStatusSection,
  ReloadPageSection,
} from '@/component/status';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { getServerQuery } from '@/query';
import { InstanceDefinition } from '@/query/type/instance-definition';

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = async ({ children }): Promise<React.ReactElement> => {
  const { data: instanceDefinitions } = await getServerQuery<InstanceDefinition[]>({
    queryString: '/v1/instance/definition/all',
    errorMessage: 'Unable to fetch instance definitions.',
  });

  return (
    <IntlPageSlicesProvider>
      <ReloadPageSection />
      <GlobalStatusSection />
      <InstancesStatusSection />
      <InstancesListSection instances={instanceDefinitions} />
      {children}
    </IntlPageSlicesProvider>
  );
};

export default HomeLayout;

import * as React from 'react';
import { Metadata } from 'next';
import { PageRootHeader } from '@/component/page-root-header';
import { CheckShardAvailabilitySection } from '@/component/status';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { getServerQuery } from '@/query';
import { InstanceOption } from '@/query/type/instance-option';
import { OptionsResult } from '@/query/type/options-result';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = async (): Promise<React.ReactElement> => {
  const { data: instanceOptions } = await getServerQuery<OptionsResult<InstanceOption>>({
    queryString: '/v1/instance/option/all',
    errorMessage: `Unable to fetch instance options.`,
  });

  return (
    <IntlPageSlicesProvider withCommon>
      <PageRootHeader />
      <CheckShardAvailabilitySection instanceOptions={instanceOptions} />
    </IntlPageSlicesProvider>
  );
};

export default Page;

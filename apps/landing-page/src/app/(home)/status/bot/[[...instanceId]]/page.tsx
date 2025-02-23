import * as React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentSuspenseFallback } from '@/component';
import { ShardsStatusSection } from '@/component/status';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { getServerQuery } from '@/query';
import { RouteProps, findMatchingInstanceId } from '@/util/route/instance';
import { SafetyContainer } from '@jwizard-web/ui/container';

type Props = {
  params: Promise<RouteProps>;
};

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC<Props> = async ({ params }): Promise<React.ReactElement> => {
  const instanceProps = (await params).instanceId;

  const { data: instanceIds } = await getServerQuery<number[]>({
    queryString: '/v1/instance/id/all',
    errorMessage: 'Unable to fetch all instance ids.',
  });

  const instanceId = findMatchingInstanceId(instanceProps, instanceIds);
  if (instanceId === null) {
    notFound();
  }

  return (
    <IntlPageSlicesProvider>
      <SafetyContainer spaceBelow="large">
        <ContentSuspenseFallback>
          <ShardsStatusSection instanceId={instanceId} />
        </ContentSuspenseFallback>
      </SafetyContainer>
    </IntlPageSlicesProvider>
  );
};

export default Page;

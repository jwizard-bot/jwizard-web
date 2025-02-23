import * as React from 'react';
import { Metadata } from 'next';
import { AudioStatusSection, ReloadPageSection } from '@/component/status';
import { AudioGlobalStatusSection } from '@/component/status/section/audio-global-status-section';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { getServerQuery } from '@/query';
import { AudioNodesStatusResDto } from '@/query/type/audio-nodes-status';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = async (): Promise<React.ReactElement> => {
  const { data: audioNodesStatus } = await getServerQuery<AudioNodesStatusResDto>({
    queryString: '/v1/status/audio/all',
    errorMessage: 'Unable to fetch audio nodes status.',
  });

  return (
    <IntlPageSlicesProvider>
      <ReloadPageSection />
      <AudioGlobalStatusSection audioNodesStatus={audioNodesStatus} />
      <AudioStatusSection audioNodes={audioNodesStatus.nodes} />
    </IntlPageSlicesProvider>
  );
};

export default Page;

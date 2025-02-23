import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { GlobalStatusHero } from '@/component/status/global-status-hero';
import { AudioNodesStatusResDto } from '@/query/type/audio-nodes-status';

type Props = {
  audioNodesStatus: AudioNodesStatusResDto;
};

const AudioGlobalStatusSection: React.FC<Props> = async ({
  audioNodesStatus: { externalServicesUrl, nodes },
}): Promise<React.ReactElement> => {
  const t = await getTranslations();
  const globalUp = nodes.every(({ up }) => up);

  let up: boolean | null = globalUp;
  let message = globalUp ? 'allAudioServersAreOperational' : 'someAudioServersAreDown';
  if (nodes.length === 0) {
    up = null;
    message = 'noAudioServers';
  }

  return (
    <GlobalStatusHero
      up={up}
      headerContent={t(message)}
      otherDomesticServicesUrl="/status/bot"
      otherDomesticServicesStatusI18n="checkFragmentsStatus"
      externalServicesWebsiteUrl={externalServicesUrl}
      t={t}
    />
  );
};

export { AudioGlobalStatusSection };

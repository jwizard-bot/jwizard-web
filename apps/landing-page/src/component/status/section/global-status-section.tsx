import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { GlobalStatusHero } from '@/component/status/global-status-hero';
import { getRootTranslations } from '@/i18n/server';
import { getServerQuery } from '@/query';
import { GlobalStatusResDto } from '@/query/type/global-status';
import { createStatusBadgeI18nMessage } from '@/util/status-badge-message';

const GlobalStatusSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();
  const tPage = await getTranslations();

  const { data: globalStatus } = await getServerQuery<GlobalStatusResDto>({
    queryString: '/v1/status/global',
    errorMessage: 'Unable to fetch global status.',
  });

  const { globalUp, externalServicesWebsiteUrl } = globalStatus;

  return (
    <GlobalStatusHero
      up={globalUp}
      headerContent={t(createStatusBadgeI18nMessage(globalUp))}
      otherDomesticServicesUrl="/status/audio"
      otherDomesticServicesStatusI18n="checkAudioServersStatus"
      externalServicesWebsiteUrl={externalServicesWebsiteUrl}
      t={tPage}
    />
  );
};

export { GlobalStatusSection };

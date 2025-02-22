import * as React from 'react';
import NextLink from 'next/link';
import { StatusBadgeIcon } from '@/component/status-badge-icon';
import { getRootTranslations } from '@/i18n/server';
import { getServerQuery } from '@/query';
import { GlobalStatusResDto } from '@/query/type';
import { createStatusBadgeI18nMessage } from '@/util/status-badge-message';
import { FlexContainer } from '@jwizard-web/ui/container';
import { SquareArrowOutUpRight } from 'lucide-react';

const StatusBadge: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();

  const {
    data: { globalUp },
  } = await getServerQuery<GlobalStatusResDto>({
    queryString: '/v1/status/global',
    errorMessage: 'Unable to fetch global status',
  });

  return (
    <NextLink href="/status/bot">
      <FlexContainer align="center" gap="normal" className="text-sm">
        <StatusBadgeIcon operational={globalUp} />
        {t(createStatusBadgeI18nMessage(globalUp))}
        <SquareArrowOutUpRight size={12} />
      </FlexContainer>
    </NextLink>
  );
};

export default StatusBadge;

import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { ShardSearchBox } from '@/component/status/shard-search-box';
import { getServerQuery } from '@/query';
import { ShardStatusResDto } from '@/query/type/shard-status';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Alert } from '@jwizard-web/ui/widget/alert';

type Props = {
  instanceId: number;
};

const ShardsStatusSection: React.FC<Props> = async ({
  instanceId,
}): Promise<React.ReactElement | null> => {
  const t = await getTranslations();

  const { data: shardsStatus } = await getServerQuery<ShardStatusResDto[]>({
    queryString: `/v1/status/instance/${instanceId}/shard/all`,
    errorMessage: `Unable to fetch instance shards for ${instanceId}.`,
  });

  if (shardsStatus.length === 0) {
    return <Alert variant="danger">{t('unableToFindShards')}</Alert>;
  }

  return (
    <FlexContainer col gap="normal">
      <ShardSearchBox shardsStatus={shardsStatus} />
    </FlexContainer>
  );
};

export { ShardsStatusSection };

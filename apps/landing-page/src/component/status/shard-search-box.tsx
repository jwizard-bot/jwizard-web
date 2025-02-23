'use client';

import * as React from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { StatusBadgeIcon } from '@/component/status-badge-icon';
import { PropertyParagraph } from '@/component/status/property-paragraph';
import { PropertyParagraphContextProvider } from '@/component/status/property-paragraph-context';
import { ShardStatusResDto } from '@/query/type/shard-status';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, GridContainer } from '@jwizard-web/ui/container';
import { Alert } from '@jwizard-web/ui/widget/alert';
import { Button } from '@jwizard-web/ui/widget/button';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import { Input } from '@jwizard-web/ui/widget/input';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';
import isNumber from 'is-number';

type Props = {
  shardsStatus: ShardStatusResDto[];
};

const ShardSearchBox: React.FC<Props> = ({ shardsStatus }): React.ReactElement => {
  const t = useTranslations();

  const [filteredShards, setFilteredShards] = useState(shardsStatus);
  const [guildId, setGuildId] = useState('');

  // https://discord.com/developers/docs/events/gateway#sharding-sharding-formula
  const handleCheckByGuildId = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let filteredShards: ShardStatusResDto[] = [];
    if (isNumber(guildId)) {
      const shardId = Number(BigInt(guildId) >> 22n) % shardsStatus.length;
      filteredShards = [...shardsStatus].filter(({ globalShardId }) => globalShardId === shardId);
    } else if (guildId === '') {
      filteredShards = [...shardsStatus];
    }
    setFilteredShards(filteredShards);
  };

  return (
    <FlexContainer col gap="normal" fullWidth>
      <form onSubmit={handleCheckByGuildId}>
        <FlexContainer gap="small" fullWidthOnSmallDevices>
          <Input
            value={guildId}
            onChange={e => setGuildId(e.target.value)}
            placeholder={t('searchByGuildPlaceholder')}
            opaque
            className="w-full md:w-[300px]"
          />
          <Button>{t('check')}</Button>
        </FlexContainer>
      </form>
      {filteredShards.length === 0 && (
        <Alert variant="danger">{t('unableToFindSearchShards')}</Alert>
      )}
      <GridContainer cols={1} fullWidth gap={4} className={cn('sm:grid-cols-2', 'lg:grid-cols-4')}>
        {filteredShards.map(
          ({
            up,
            globalShardId,
            processGroupId,
            gatewayPing,
            servers,
            users,
            activeAudioPlayers,
            audioListeners,
          }) => (
            <Card key={globalShardId} isBlurred shadow="sm">
              <FlexContainer col gap="normal">
                <FlexContainer justify="between" align="center" fullWidth>
                  <Paragraph size="sm">
                    {t('shard')} [{globalShardId + 1}/{shardsStatus.length}, {t('process')}:{' '}
                    {processGroupId}]
                  </Paragraph>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <StatusBadgeIcon operational={up} />
                      </TooltipTrigger>
                      <TooltipContent>
                        {t(up ? 'shardIsAvailable' : 'shardIsUnavailable')}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FlexContainer>
                <Header size="tiny" font="basic" margin="none">
                  {t('shardStatistics')}:
                </Header>
                <PropertyParagraphContextProvider color={null}>
                  <FlexContainer col>
                    <PropertyParagraph i18nKey="shardGatewayPing" value={`${gatewayPing}ms`} />
                    <PropertyParagraph i18nKey="servers" value={servers} />
                    <PropertyParagraph i18nKey="users" value={users} />
                    <PropertyParagraph i18nKey="activeAudioPlayers" value={activeAudioPlayers} />
                    <PropertyParagraph i18nKey="audioListeners" value={audioListeners} />
                  </FlexContainer>
                </PropertyParagraphContextProvider>
              </FlexContainer>
            </Card>
          )
        )}
      </GridContainer>
    </FlexContainer>
  );
};

export { ShardSearchBox };

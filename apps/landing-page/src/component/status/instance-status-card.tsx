'use client';

import * as React from 'react';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { PropertyParagraph } from '@/component/status/property-paragraph';
import { InstanceStatusResDto } from '@/query/type/instance-status';
import { createContrastingColor } from '@jwizard-web/lib/color';
import { SeverityIcon } from '@jwizard-web/ui/component/severity-icon';
import { FlexContainer } from '@jwizard-web/ui/container';
import { colors } from '@jwizard-web/ui/resolved-config';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';
import { PropertyParagraphContextProvider } from './property-paragraph-context';

type Props = {
  instanceStatus: Omit<InstanceStatusResDto, 'id'>;
};

const InstanceStatusCard: React.FC<Props> = ({
  instanceStatus: {
    color,
    avatarUrl,
    name,
    servers,
    users,
    activeAudioPlayers,
    audioListeners,
    shards,
    processes,
    avgShardGatewayPing,
    avgShardsPerProcess,
  },
}): React.ReactElement => {
  const t = useTranslations();

  const instanceState = useMemo(() => {
    const totalShards = shards.up + shards.down;
    // we assume as first that all shards aren't working
    let status: boolean | null = false;
    let message = t('allShardsNotWorking', { allShardsCount: totalShards });
    if (shards.down === 0) {
      status = true;
      message = t('allShardsWorking', { workingShardsCount: totalShards });
    } else if (shards.down > 0 && shards.up > 0) {
      status = null;
      message = t('someShardsNotWorking', { countOfNotWorkingShards: shards.down });
    }
    return { status, message };
  }, [shards]);

  return (
    <Card
      isBlurred
      shadow="sm"
      style={{
        backgroundColor: color,
        color: createContrastingColor(color, colors.white, colors.black),
      }}>
      <FlexContainer col gap="normal">
        <FlexContainer gap="small" justify="between" align="center" fullWidth>
          <FlexContainer gap="small" align="center">
            <img src={avatarUrl} width={42} height={42} alt="logo" className="rounded-md" />
            <Header headingVariant="h3" size="xs" font="basic" margin="none">
              {name}
            </Header>
          </FlexContainer>
          <FlexContainer>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-help">
                  <SeverityIcon allGood={instanceState.status} className="me-2" />
                </TooltipTrigger>
                <TooltipContent>{instanceState.message}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer col gap="normal">
          <Header size="tiny" font="basic" margin="none">
            {t('botStatistics')}:
          </Header>
          <PropertyParagraphContextProvider color={color}>
            <FlexContainer col>
              <PropertyParagraph i18nKey="servers" value={servers} />
              <PropertyParagraph i18nKey="users" value={users} />
              <PropertyParagraph i18nKey="activeAudioPlayers" value={activeAudioPlayers} />
              <PropertyParagraph i18nKey="audioListeners" value={audioListeners} />
            </FlexContainer>
            <FlexContainer col>
              <PropertyParagraph i18nKey="shardsUpDown" value={`${shards.up}/${shards.down}`} />
              <PropertyParagraph
                i18nKey="processesUpDown"
                value={`${processes.up}/${processes.down}`}
              />
            </FlexContainer>
            <FlexContainer col>
              <PropertyParagraph i18nKey="avgGatewayPing" value={`${avgShardGatewayPing}ms`} />
              <PropertyParagraph i18nKey="avgShardsPerProcess" value={avgShardsPerProcess} />
            </FlexContainer>
          </PropertyParagraphContextProvider>
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
};

export { InstanceStatusCard };

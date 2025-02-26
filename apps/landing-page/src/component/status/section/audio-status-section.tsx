import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { StatusBadgeIcon } from '@/component/status-badge-icon';
import { PropertyParagraph } from '@/component/status/property-paragraph';
import { PropertyParagraphContextProvider } from '@/component/status/property-paragraph-context';
import { AudioNodeStatus } from '@/query/type/audio-nodes-status';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Alert } from '@jwizard-web/ui/widget/alert';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';

type Props = {
  audioNodes: AudioNodeStatus[];
};

const AudioStatusSection: React.FC<Props> = async ({ audioNodes }): Promise<React.ReactElement> => {
  const t = await getTranslations();

  if (audioNodes.length === 0) {
    return (
      <SafetyContainer spaceBelow="large">
        <Header>{t('audioServersHeader')}</Header>
        <Alert variant="danger">{t('notFoundAnyAudioServers')}</Alert>
      </SafetyContainer>
    );
  }

  return (
    <SafetyContainer spaceBelow="large">
      <Header>{t('audioServersHeader')}</Header>
      <GridContainer cols={1} fullWidth gap={4} className={cn('sm:grid-cols-2', 'lg:grid-cols-4')}>
        {audioNodes.map(
          ({
            up,
            id,
            name,
            pool,
            region,
            version,
            lavaplayerVersion,
            players,
            playingPlayers,
            uptime,
            responseTime,
          }) => (
            <Card key={id} isBlurred shadow="sm">
              <FlexContainer col gap="normal">
                <FlexContainer justify="between" align="center" fullWidth>
                  <Paragraph size="sm">
                    {t('audioNode')} [{id + 1}/{audioNodes.length}]
                  </Paragraph>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <StatusBadgeIcon operational={up} />
                      </TooltipTrigger>
                      <TooltipContent>
                        {t(up ? 'audioNodeIsAvailable' : 'audioNodeIsUnavailable')}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FlexContainer>
                <Header size="tiny" font="basic" margin="none">
                  {name}
                </Header>
                <PropertyParagraphContextProvider color={null}>
                  <FlexContainer col>
                    <PropertyParagraph i18nKey="nodePool" value={pool} />
                    <PropertyParagraph i18nKey="region" value={region} />
                  </FlexContainer>
                  <FlexContainer col>
                    <PropertyParagraph i18nKey="version" value={version} />
                    <PropertyParagraph i18nKey="lavaplayerVersion" value={lavaplayerVersion} />
                    <PropertyParagraph i18nKey="players" value={players} />
                    <PropertyParagraph i18nKey="playingPlayers" value={playingPlayers} />
                  </FlexContainer>
                  <FlexContainer col>
                    <PropertyParagraph i18nKey="uptime" value={uptime} />
                    <PropertyParagraph i18nKey="responseTime" value={`${responseTime}ms`} />
                  </FlexContainer>
                </PropertyParagraphContextProvider>
              </FlexContainer>
            </Card>
          )
        )}
      </GridContainer>
    </SafetyContainer>
  );
};

export { AudioStatusSection };

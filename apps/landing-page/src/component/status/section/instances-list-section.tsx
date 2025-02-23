'use client';

import * as React from 'react';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { LinkWrapper } from '@/component/link-wrapper';
import { InstanceDefinition } from '@/query/type/instance-definition';
import { RouteProps, findMatchingInstanceId } from '@/util/route/instance';
import { createContrastingColor } from '@jwizard-web/lib/color';
import { cn } from '@jwizard-web/lib/util';
import { colors } from '@jwizard-web/tailwind-config/tailwind';
import { FlexContainer, GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import { Check } from 'lucide-react';

type Props = {
  instances: InstanceDefinition[];
};

const InstancesListSection: React.FC<Props> = ({ instances }): React.ReactElement => {
  const t = useTranslations();
  const params = useParams<RouteProps>();

  // get instance id from next route params
  const currentInstanceId = useMemo(() => {
    const instanceId = findMatchingInstanceId(
      params.instanceId,
      instances.map(({ id }) => id)
    );
    return instanceId === null ? -1 : instanceId;
  }, [instances, params]);

  return (
    <SafetyContainer>
      <Header>{t('shardsHeader')}</Header>
      <FlexContainer col gap="normal">
        <GridContainer
          cols={1}
          fullWidth
          gap={4}
          className={cn('sm:grid-cols-2', 'lg:grid-cols-4')}>
          {instances.map(({ id, name, color, avatarUrl }) => (
            <Card
              key={id}
              isBlurred
              shadow="sm"
              roundGap="none"
              style={{
                backgroundColor: color,
                color: createContrastingColor(color, colors.white, colors.black),
              }}>
              <LinkWrapper href={'/status/bot/' + id} disabled={currentInstanceId === id}>
                <FlexContainer justify="between" align="center" className={cn('px-4', 'py-3')}>
                  <FlexContainer gap="normal" align="center">
                    <img src={avatarUrl} width={32} height={32} alt="logo" className="rounded-md" />
                    <Header headingVariant="h3" size="tiny" font="basic" margin="none">
                      {name}
                    </Header>
                  </FlexContainer>
                  {currentInstanceId === id && <Check className="h-4 w-4" />}
                </FlexContainer>
              </LinkWrapper>
            </Card>
          ))}
        </GridContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { InstancesListSection };

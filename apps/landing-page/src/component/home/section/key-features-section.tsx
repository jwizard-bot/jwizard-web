/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { getServerQuery } from '@/query';
import { KeyFeatureResDto } from '@/query/type';
import { GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Badge } from '@jwizard-web/ui/widget/badge';
import { Card, CardContent, CardFooter } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';

const KeyFeaturesSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: features } = await getServerQuery<KeyFeatureResDto[]>({
    queryString: '/v1/home/features',
    errorMessage: 'Unable to fetch features on home page',
  });

  return (
    <SafetyContainer className="mb-16 sm:mb-32">
      <Header headingVariant="h2">{t('keyFeatures')}</Header>
      <GridContainer gap={6} responsive>
        {features.map(({ name, description, isActive }) => (
          <Card isBlurred isDimmed={!isActive} className="col-span-12 md:col-span-4" key={name}>
            <CardContent>
              <h1 className="text-primary leading-[18px] mb-3 font-semibold">{name}</h1>
              <p className="leading-[18px] text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant={isActive ? 'default' : 'outline'}>
                      {t(isActive ? 'active' : 'upcoming')}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    {t(isActive ? 'activeTooltip' : 'upcomingTooltip')}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        ))}
      </GridContainer>
    </SafetyContainer>
  );
};

export { KeyFeaturesSection };

import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { PurifiedRenderer } from '@/component';
import { CountableStatsCard } from '@/component/countable-stats-card';
import { getServerQuery } from '@/query';
import { StatsInfoResDto } from '@/query/type';
import { FlexContainer, GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight } from 'lucide-react';

const InfoStatsSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const { data: stats } = await getServerQuery<StatsInfoResDto>({
    queryString: '/v1/home/statistics',
    errorMessage: 'Unable to fetch bot statistics on home page',
  });

  return (
    <SafetyContainer className="mb-8 sm:mb-32">
      <GridContainer cols={2} gap={6} responsive>
        <FlexContainer
          col
          justify="center"
          className="col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-7 gap-y-8">
          <Header headingVariant="h2" size="md" className="max-w-[80%]">
            {t('motivationSlogan')}
          </Header>
          <PurifiedRenderer
            dangerousText={t.markup('motivationDescription', {
              imp: chunks => `<strong>${stats[chunks as keyof StatsInfoResDto]}</strong>`,
            })}
            Component={Paragraph}
          />
          <Button asChild size="lg" fluid>
            <NextLink href="/commands">
              {t('exploreCommands')}
              <ArrowRight />
            </NextLink>
          </Button>
        </FlexContainer>
        <GridContainer
          cols={2}
          gap={6}
          className="col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-5">
          {Object.keys(stats).map(key => (
            <CountableStatsCard
              key={key}
              countableValue={stats[key as keyof StatsInfoResDto]}
              i18nDescription={key}
              isSquared={true}
            />
          ))}
        </GridContainer>
      </GridContainer>
    </SafetyContainer>
  );
};

export { InfoStatsSection };

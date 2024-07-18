/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { getServerQuery } from '@/query/server';
import { StatsInfoResDto } from '@/query/server/types/stats';
import { Button } from '@nextui-org/react';
import PurifiedRenderer from '../PurifierRenderer';
import Ui from '../ui';
import InfoStatsCard from './InfoStatsCard';

const InfoCardsSection: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();

  const { data: stats } = await getServerQuery<StatsInfoResDto>({
    queryString: '/api/v1/home/stats',
    errorMessage: 'Unable to fetch bot statistics on home page',
  });

  return (
    <Ui.SafetyContainer className="mb-8 sm:mb-32">
      <Ui.GridContainer cols={2} gap={6} responsive>
        <Ui.FlexContainer
          col
          justify="center"
          className="col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-7 gap-y-8">
          <Ui.ContentHeader
            headingVariant="h2"
            i18nText="motivationSlogan"
            size="md"
            className="max-w-[80%]"
          />
          <PurifiedRenderer
            dangerousText={t.markup('motivationDescription', {
              imp: chunks =>
                `<strong>${stats[chunks as keyof StatsInfoResDto]}</strong>`,
            })}
            Component={Ui.Paragraph}
          />
          <Button
            as={NextLink}
            href="/commands"
            size="md"
            color="primary"
            className="text-lg sm:text-xl w-full sm:w-fit"
            endContent={<GoArrowRight />}>
            {t('exploreCommands')}
          </Button>
        </Ui.FlexContainer>
        <Ui.GridContainer
          cols={2}
          gap={6}
          className="col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-5">
          {Object.keys(stats).map(key => (
            <InfoStatsCard
              key={key}
              bottomDescription={t(key)}
              value={stats[key as keyof StatsInfoResDto]}
            />
          ))}
        </Ui.GridContainer>
      </Ui.GridContainer>
    </Ui.SafetyContainer>
  );
};

export default InfoCardsSection;

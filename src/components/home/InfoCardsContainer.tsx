/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GoArrowRight } from 'react-icons/go';
import { Link as ReactLink } from 'react-router-dom';
import { useAxiosInstance } from '@/query';
import { StatsInfoResDto } from '@/query/types/util/stats';
import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import PurifiedRenderer from '../PurifierRenderer';
import Ui from '../ui';
import InfoStatsCard from './InfoStatsCard';

const InfoCardsContainer: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['homePage']);
  const { utilFetchApi } = useAxiosInstance();

  const {
    data = { modules: 0, commands: 0, radioStations: 0, audioSources: 0 },
    isError,
  } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => await utilFetchApi.getStats(),
  });

  const wrappedPropertiesWithStrong = Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `<strong>${value}</strong>`,
    }),
    {}
  );

  useEffect(() => {
    console.log(isError);
  }, [isError]);

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
            translationSources={['homePage']}
            size="md"
            className="max-w-[80%]"
          />
          <PurifiedRenderer
            dangerousText={t('motivationDescription', {
              ...wrappedPropertiesWithStrong,
              interpolation: { escapeValue: false },
            })}
            className="text-default-500 text-xl"
          />
          <Button
            as={ReactLink}
            to="/commands"
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
          {Object.keys(data).map(key => (
            <InfoStatsCard
              key={key}
              i18nText={key}
              value={data[key as keyof StatsInfoResDto]}
            />
          ))}
        </Ui.GridContainer>
      </Ui.GridContainer>
    </Ui.SafetyContainer>
  );
};

export default InfoCardsContainer;

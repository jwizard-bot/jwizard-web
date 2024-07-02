/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect } from 'react';
import * as R from 'ramda';
import { useTranslation } from 'react-i18next';
import { useAxiosInstance } from '@/query';
import { useQuery } from '@tanstack/react-query';
import Ui from '../ui';
import ExistingAndFutureCard from './ExistingAndFutureCard';

const ExistingAndFutureFunctions: React.FC = (): JSX.Element => {
  const { i18n } = useTranslation();
  const { utilFetchApi } = useAxiosInstance();

  const { data, isError } = useQuery({
    queryKey: ['keyFunctions', i18n.language],
    queryFn: async () => await utilFetchApi.getKeyFeatures(),
  });

  const skeletons = R.range(0, 6).map(key => (
    <ExistingAndFutureCard key={key} />
  ));

  useEffect(() => {
    // TODO: add error snackbar
  }, [isError]);

  return (
    <Ui.SafetyContainer className="mb-16 sm:mb-32">
      <Ui.ContentHeader
        headingVariant="h2"
        i18nText="keyFeatures"
        translationSources={['homePage']}
      />
      <Ui.GridContainer gap={6} responsive>
        {data
          ? data.map(({ name, description, isActive }) => (
              <ExistingAndFutureCard
                key={name}
                title={name}
                isActive={isActive}
                isLoaded>
                {description}
              </ExistingAndFutureCard>
            ))
          : skeletons}
      </Ui.GridContainer>
    </Ui.SafetyContainer>
  );
};

export default ExistingAndFutureFunctions;

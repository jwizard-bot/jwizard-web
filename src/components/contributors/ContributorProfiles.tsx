/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAxiosInstance } from '@/query';
import { Spinner, Tab, Tabs } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Ui from '../ui';
import ContributorProfile from './ContributorProfile';

const ContributorProfiles: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { utilFetchApi } = useAxiosInstance();
  const [selectedVariant, setSelectedVariant] = useState<string>();

  const { data, isError } = useQuery({
    queryKey: ['contributors'],
    queryFn: async () => await utilFetchApi.getContributors(),
  });

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  useEffect(() => {
    if (data?.initVariant) {
      setSelectedVariant(data.initVariant);
    }
  }, [data]);

  if (!data) {
    return (
      <Ui.FlexContainer justify="center" className="mt-16">
        <Spinner />
      </Ui.FlexContainer>
    );
  }

  return (
    <Ui.FlexContainer col fullWidth align="center" className="mt-16">
      <Tabs
        variant="bordered"
        color="primary"
        selectedKey={selectedVariant}
        onSelectionChange={key => setSelectedVariant(key as string)}>
        {data.allVariants.map(variant => (
          <Tab key={variant} title={t(variant)}>
            <Ui.FlexContainer justify="center" className="flex-wrap mt-4 gap-4">
              {data.contributors
                .filter(contributor => contributor.variants.includes(variant))
                .map(contributor => (
                  <ContributorProfile
                    key={contributor.nickname}
                    {...contributor}
                  />
                ))}
            </Ui.FlexContainer>
          </Tab>
        ))}
      </Tabs>
    </Ui.FlexContainer>
  );
};

export default ContributorProfiles;

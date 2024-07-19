'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ContributorsDataResDto } from '@/query/server/types/contributors';
import { Tab, Tabs } from '@nextui-org/react';
import { ContentSuspenseSpinner } from '../suspense';
import Ui from '../ui';
import ContributorProfile from './ContributorProfile';

type Props = {
  data: ContributorsDataResDto;
};

const ContributorProfiles: React.FC<Props> = ({ data }): JSX.Element => {
  const t = useTranslations();

  const [selectedVariant, setSelectedVariant] = useState<string>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const { initVariant } = data;
    if (initVariant) {
      setSelectedVariant(initVariant);
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <ContentSuspenseSpinner />;
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

'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import { getServerQuery } from '@/query/server';
import { KeyFeatureResDto } from '@/query/server/types/keyFeatures';
import Ui from '../ui';
import KeyFeatureCard from './KeyFeatureCard';

const KeyFeaturesSection: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();

  const { data: keyFeatures } = await getServerQuery<KeyFeatureResDto[]>({
    queryString: '/api/v1/home/key-features',
    errorMessage: 'Unable to fetch key features on home page',
  });

  return (
    <Ui.SafetyContainer className="mb-16 sm:mb-32">
      <Ui.ContentHeader headingVariant="h2">
        {t('keyFeatures')}
      </Ui.ContentHeader>
      <Ui.GridContainer gap={6} responsive>
        {keyFeatures.map(({ name, description, isActive }) => (
          <KeyFeatureCard key={name} title={name} isActive={isActive}>
            {description}
          </KeyFeatureCard>
        ))}
      </Ui.GridContainer>
    </Ui.SafetyContainer>
  );
};

export default KeyFeaturesSection;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { JWizardUi } from '@/components/ui';
import { SafetyWrapper } from '@/router/MainLayout';

const ContributePage: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SafetyWrapper $first={true}>
      <JWizardUi.Header>{t('contribute')}</JWizardUi.Header>
    </SafetyWrapper>
  );
};

export default ContributePage;

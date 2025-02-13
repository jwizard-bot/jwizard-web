/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { LoginLeftPanel, LoginRightPanel } from '@/component/login';
import { usePageTitle } from '@/hooks/use-page-title';
import { FlexContainer } from '@jwizard-web/ui/container';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nNamespace: 'login' });

  return (
    <FlexContainer fullWidth>
      <LoginLeftPanel />
      <LoginRightPanel />
    </FlexContainer>
  );
};

export default Page;

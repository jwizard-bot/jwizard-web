/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import config from '@/config';
import { usePageTitle } from '@/hooks/use-page-title';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nNamespace: 'login' });

  return (
    <div>
      LOGIN PAGE
      <br />
      {JSON.stringify(config)}
    </div>
  );
};

export default Page;

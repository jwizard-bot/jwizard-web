import * as React from 'react';
import { LoginPanel } from '@/component/login';
import { usePageTitle } from '@/hooks/use-page-title';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nNamespace: 'login' });

  return <LoginPanel />;
};

export default Page;

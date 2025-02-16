import * as React from 'react';
import { usePageTitle } from '@/hooks/use-page-title';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nNamespace: 'dashboard' });

  return <div>DASHBOARD PAGE</div>;
};

export default Page;

import * as React from 'react';
import { usePageTitle } from '@/hooks/use-page-title';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nTitleKey: 'notFound' });

  return <div>NOT FOUND PAGE</div>;
};

export default Page;

import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { PageSpinner } from '@jwizard-web/ui/component/page-spinner';

const RootLayout: React.FC = (): React.ReactElement => (
  <Suspense fallback={<PageSpinner />}>
    <Outlet />
  </Suspense>
);

export { RootLayout };

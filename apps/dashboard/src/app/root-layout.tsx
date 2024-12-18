/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
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

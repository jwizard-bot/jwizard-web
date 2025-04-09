import * as React from 'react';
import { Outlet } from 'react-router';
import { SuspenseWrapper } from '@/component/suspense-wrapper';

const RootLayout: React.FC = (): React.ReactElement => (
  <SuspenseWrapper>
    <Outlet />
  </SuspenseWrapper>
);

export { RootLayout };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { BackgroundGradient, MainFooter, MainHeader } from '@/components';
import Ui from '@/components/ui';
import AppRouterSuspense from './AppRouterSuspense';

const AppLayout: React.FC = (): JSX.Element => (
  <Suspense fallback={<AppRouterSuspense />}>
    <BackgroundGradient />
    <Ui.FlexContainer col fullWidth className="min-h-screen relative z-[20]">
      <MainHeader />
      <Ui.FlexContainer col fullWidth className="flex-grow">
        <Outlet />
      </Ui.FlexContainer>
      <MainFooter />
    </Ui.FlexContainer>
  </Suspense>
);

export default AppLayout;

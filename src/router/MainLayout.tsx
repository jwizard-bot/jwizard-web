/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { MainFooter, MainHeader, SuspenseLoaderFrame } from '@/components';
import { GlobalStyles, devices } from '@/styles/global';
import { DarkModeProvider } from '@rbnd/react-dark-mode';

const MainLayout: React.FC = (): JSX.Element => (
  <DarkModeProvider>
    <GlobalStyles />
    <Suspense fallback={<SuspenseLoaderFrame />}>
      <MainHeader />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <MainFooter />
    </Suspense>
  </DarkModeProvider>
);

const MainWrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SafetyWrapper = styled.section<{ $first?: boolean }>`
  max-width: var(--br-xl);
  width: 100%;
  margin: var(${({ $first }) => ($first ? '--space-20' : '--space-8')}) auto
    var(--space-8) auto;
  padding: 0 var(--space-5);
  @media only ${devices.md} {
    margin-top: var(${({ $first }) => ($first ? '--space-24' : '--space-8')});
  }
`;

export default MainLayout;

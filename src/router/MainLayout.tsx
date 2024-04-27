/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { MainFooter, MainHeader, SuspenseLoaderFrame } from '@/components';
import { AppThemedStylesWrapper } from '@/styles/AppThemedStylesWrapper';
import { breakpoints, devices, space } from '@/styles/global';
import { DarkModeProvider } from '@rbnd/react-dark-mode';

const MainLayout: React.FC = (): JSX.Element => (
  <DarkModeProvider>
    <AppThemedStylesWrapper>
      <Suspense fallback={<SuspenseLoaderFrame />}>
        <MainHeader />
        <MainWrapper>
          <Outlet />
        </MainWrapper>
        <MainFooter />
      </Suspense>
    </AppThemedStylesWrapper>
  </DarkModeProvider>
);

const MainWrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SafetyWrapper = styled.section<{ $first?: boolean }>`
  max-width: ${breakpoints.xl};
  width: 100%;
  margin: ${({ $first }) => space($first ? 20 : 8)} auto ${space(8)} auto;
  padding: 0 ${space(5)};
  @media only ${devices.md} {
    margin-top: ${({ $first }) => space($first ? 24 : 8)};
  }
`;

export default MainLayout;

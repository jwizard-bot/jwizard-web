/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootRouterProvider from '@/app/AppRouter';
import DarkModeProvider from '@/context/DarkModeProvider';
import '@/i18n';
import { NextUIProvider } from '@nextui-org/react';
import './globals.css';
import { AxiosInstanceWrapper, TanstackQueryWrapper } from './query';

const appMount = document.getElementById('app-mount')!;

ReactDOM.createRoot(appMount).render(
  <React.StrictMode>
    <AxiosInstanceWrapper>
      <TanstackQueryWrapper>
        <DarkModeProvider>
          <NextUIProvider>
            <RootRouterProvider />
          </NextUIProvider>
        </DarkModeProvider>
      </TanstackQueryWrapper>
    </AxiosInstanceWrapper>
  </React.StrictMode>
);

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootRouterProvider from '@/app/AppRouter';
import DarkModeProvider from '@/context/DarkModeProvider';
import SnackbarProvider from '@/context/SnackbarProvider';
import '@/globals.css';
import '@/i18n';
import { AxiosInstanceWrapper, TanstackQueryWrapper } from '@/query';
import { ReduxStoreWrapper } from '@/store';
import { NextUIProvider } from '@nextui-org/react';

const appMount = document.getElementById('app-mount')!;

ReactDOM.createRoot(appMount).render(
  <React.StrictMode>
    <ReduxStoreWrapper>
      <SnackbarProvider>
        <AxiosInstanceWrapper>
          <TanstackQueryWrapper>
            <DarkModeProvider>
              <NextUIProvider>
                <RootRouterProvider />
              </NextUIProvider>
            </DarkModeProvider>
          </TanstackQueryWrapper>
        </AxiosInstanceWrapper>
      </SnackbarProvider>
    </ReduxStoreWrapper>
  </React.StrictMode>
);

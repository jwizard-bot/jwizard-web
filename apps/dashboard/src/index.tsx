/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RootRouterProvider } from '@/app/router';
import { CookieConsentModal } from '@/component';
import { DarkModeProvider } from '@/context/dark-mode-context';
import { ReduxStoreWrapper } from '@/redux';
import '@jwizard-web/tailwind-config/globalcss';
import { I18nContextProvider } from './i18n';

const appMount = document.getElementById('app-mount');
const reactRoot = createRoot(appMount!);

reactRoot.render(
  <React.StrictMode>
    <I18nContextProvider>
      <DarkModeProvider>
        <ReduxStoreWrapper>
          <CookieConsentModal />
          <RootRouterProvider />
        </ReduxStoreWrapper>
      </DarkModeProvider>
    </I18nContextProvider>
  </React.StrictMode>
);

import './instrument';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppInitiator } from '@/app/app-initiator';
import { RootRouterProvider } from '@/app/router';
import { AnalyticsLoader, CookieConsentModal, SuspenseWrapper } from '@/component';
import { DarkModeProvider } from '@/context/dark-mode-context';
import { ReduxStoreWrapper } from '@/redux';
import '@jwizard-web/tailwind-config/globalcss';
import { ToastContainer } from '@jwizard-web/ui/widget/toast-notification';
import * as Sentry from '@sentry/react';
import { I18nContextProvider } from './i18n';

const appMount = document.getElementById('app-mount');
const reactRoot = createRoot(appMount!, {
  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    console.warn('Uncaught error', error, errorInfo.componentStack);
  }),
  onCaughtError: Sentry.reactErrorHandler(),
  onRecoverableError: Sentry.reactErrorHandler(),
});

reactRoot.render(
  <React.StrictMode>
    <DarkModeProvider>
      <SuspenseWrapper>
        <I18nContextProvider>
          <ReduxStoreWrapper>
            <ToastContainer />
            <AppInitiator />
            <CookieConsentModal />
            <RootRouterProvider />
          </ReduxStoreWrapper>
        </I18nContextProvider>
      </SuspenseWrapper>
    </DarkModeProvider>
    <AnalyticsLoader />
  </React.StrictMode>
);

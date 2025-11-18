import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { AppInitiator } from '@/app/app-initiator';
import { RootRouterProvider } from '@/app/router';
import { CookieConsentModal } from '@/component';
import { SuspenseWrapper } from '@/component/suspense-wrapper';
import { DarkModeProvider } from '@/context/dark-mode-context';
import { environment } from '@/env';
import { ReduxStoreWrapper } from '@/redux';
import { UmamiAnalyticsLoader, sentryConfig } from '@jwizard-web/lib/analytics';
import '@jwizard-web/tailwind-config/globalcss';
import { ToastContainer } from '@jwizard-web/ui/widget/toast-notification';
import * as Sentry from '@sentry/react';
import { I18nContextProvider } from './i18n';

const {
  analytics: { umami, sentry },
} = environment;

if (sentry.dsn) {
  Sentry.init({
    ...sentryConfig(sentry.dsn),
  });
}

const appMount = document.getElementById('app-mount');
const reactRoot = createRoot(appMount!);

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
    <UmamiAnalyticsLoader {...umami} />
  </React.StrictMode>
);

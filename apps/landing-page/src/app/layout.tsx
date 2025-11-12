import * as React from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { CookieConsentModal } from '@/component/cookie-consent-modal';
import { getEnv } from '@/env';
import { WithEnvironment } from '@/env/with-environment';
import { IntlRootProvider } from '@/i18n/server';
import { MainLayout } from '@/layout';
import { generateRootLayoutMetadata } from '@/meta';
import { ThemeContextProvider } from '@/theme';
import { UmamiAnalyticsLoader } from '@jwizard-web/lib/analytics';
import { cn } from '@jwizard-web/lib/util';
import '@jwizard-web/tailwind-config/globalcss';
import { ToastContainer } from '@jwizard-web/ui/widget/toast-notification';

export async function generateMetadata(): Promise<Metadata> {
  return await generateRootLayoutMetadata();
}

type Props = {
  children: React.ReactNode;
};

const {
  analytics: { umami },
} = getEnv();

const RootLayout: React.FC<Props> = async ({ children }): Promise<React.ReactElement> => {
  const language = await getLocale();
  return (
    <html lang={language} suppressHydrationWarning>
      <body className={cn('font-sans', 'min-h-screen')}>
        <WithEnvironment>
          <IntlRootProvider>
            <ThemeContextProvider>
              <ToastContainer />
              <CookieConsentModal />
              <MainLayout>{children}</MainLayout>
            </ThemeContextProvider>
          </IntlRootProvider>
        </WithEnvironment>
        <UmamiAnalyticsLoader {...umami} />
      </body>
    </html>
  );
};

export default RootLayout;

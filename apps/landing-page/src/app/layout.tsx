import * as React from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { CookieConsentModal } from '@/component/cookie-consent-modal';
import { IntlRootProvider } from '@/i18n/server';
import { MainLayout } from '@/layout';
import { generateRootLayoutMetadata } from '@/meta';
import { ThemeContextProvider } from '@/theme';
import { cn } from '@jwizard-web/lib/util';
import '@jwizard-web/tailwind-config/globalcss';
import { ToastContainer } from '@jwizard-web/ui/widget/toast-notification';

export async function generateMetadata(): Promise<Metadata> {
  return await generateRootLayoutMetadata();
}

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = async ({ children }): Promise<React.ReactElement> => {
  const language = await getLocale();
  return (
    <html lang={language} suppressHydrationWarning>
      <body className={cn('font-sans', 'min-h-screen')}>
        <IntlRootProvider>
          <ThemeContextProvider>
            <ToastContainer />
            <CookieConsentModal />
            <MainLayout>{children}</MainLayout>
          </ThemeContextProvider>
        </IntlRootProvider>
      </body>
    </html>
  );
};

export default RootLayout;

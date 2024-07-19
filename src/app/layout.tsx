/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import clsx from 'clsx';
import { getLocale } from 'next-intl/server';
import { SnackbarStack } from '@/components';
import { variableNames } from '@/font';
import { IntlRootProvider } from '@/i18n/server';
import { generateRootLayoutMetadata } from '@/meta';
import { ReduxStoreWrapper } from '@/store';
import '@/styles/globals.css';
import { ThemeContextProvider } from '@/theme';

export async function generateMetadata(): Promise<Metadata> {
  return await generateRootLayoutMetadata();
}

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Readonly<Props>> = async ({
  children,
}): Promise<JSX.Element> => {
  const language = await getLocale();
  return (
    <html lang={language} suppressHydrationWarning>
      <body className={clsx(variableNames, 'font-sans min-h-screen')}>
        <IntlRootProvider>
          <ReduxStoreWrapper>
            <ThemeContextProvider>
              <SnackbarStack />
              {children}
            </ThemeContextProvider>
          </ReduxStoreWrapper>
        </IntlRootProvider>
      </body>
    </html>
  );
};

export default RootLayout;

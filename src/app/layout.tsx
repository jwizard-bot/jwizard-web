/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { SnackbarStack } from '@/components';
import { variableNames } from '@/font';
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
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(variableNames, 'font-sans min-h-screen')}>
        <NextIntlClientProvider messages={messages}>
          <ReduxStoreWrapper>
            <ThemeContextProvider>
              <SnackbarStack />
              {children}
            </ThemeContextProvider>
          </ReduxStoreWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
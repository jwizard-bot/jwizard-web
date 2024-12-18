/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ROOT_KEY } from '../config';

type Props = {
  children: React.ReactNode;
};

const IntlRootProvider: React.FC<Props> = async ({ children }): Promise<React.ReactElement> => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={(messages?.[ROOT_KEY] ?? {}) as AbstractIntlMessages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlRootProvider;

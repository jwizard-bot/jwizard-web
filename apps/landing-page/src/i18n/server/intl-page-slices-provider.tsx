import * as React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { omit } from 'lodash';
import { ROOT_KEY } from '../config';

type Props = {
  children: React.ReactNode;
};

const IntlPageSlicesProvider: React.FC<Props> = async ({
  children,
}): Promise<React.ReactElement> => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={omit(messages, ROOT_KEY)}>{children}</NextIntlClientProvider>
  );
};

export default IntlPageSlicesProvider;

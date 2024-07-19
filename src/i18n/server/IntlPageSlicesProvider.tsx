'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { omit } from 'lodash';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ROOT_KEY } from '../config';

type Props = {
  children: React.ReactNode;
};

const IntlPageSlicesProvider: React.FC<Props> = async ({
  children,
}): Promise<JSX.Element> => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={omit(messages, ROOT_KEY)}>
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlPageSlicesProvider;

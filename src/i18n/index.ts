/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import _ from 'lodash';
import { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { DEFAULT_LANGUAGE, Language, languages, sliceMappings } from './config';
import { readCookieLanguage } from './cookie';

const importDynamic = async (path: string) => {
  return (await import(`${path}`)).default;
};

const detectLanguage = async (): Promise<Language> => {
  let language: Language = 'en';
  const headersList = headers();
  const persistedLanguage = await readCookieLanguage();
  if (persistedLanguage) {
    language = persistedLanguage as Language;
  } else {
    const headerLocale = headersList.get('accept-language');
    if (headerLocale) {
      language = headerLocale.split(',')[0].substring(0, 2) as Language;
    }
  }
  if (!Object.keys(languages).includes(language)) {
    language = DEFAULT_LANGUAGE;
  }
  return language;
};

const extractAndDetectSlices = async (
  language: Language
): Promise<AbstractIntlMessages> => {
  const headersList = headers();
  const i18nKey = headersList.get('X-i18n-key');

  const baseMessages = await importDynamic(`./messages/${language}.json`);
  let messages = baseMessages;

  const sliceMapping = sliceMappings.find(({ pattern }) =>
    !i18nKey ? false : pattern.test(i18nKey)
  );
  if (sliceMapping) {
    const importedSlices = sliceMapping.slices.map(
      async slice => await importDynamic(`./slices/${language}/${slice}.json`)
    );
    messages = _.merge(
      {},
      ...[baseMessages, ...(await Promise.all(importedSlices))]
    );
  }
  return messages;
};

export default getRequestConfig(async () => {
  const language = await detectLanguage();
  const messages = await extractAndDetectSlices(language);
  return {
    locale: language,
    messages,
  };
});

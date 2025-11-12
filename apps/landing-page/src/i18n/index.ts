import { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { getServerEnv } from '@/env';
import { DEFAULT_LANGUAGE, Language, languages } from '@jwizard-web/lib/i18n';
import { readFile } from 'fs/promises';
import { merge } from 'lodash';
import { ROOT_KEY, sliceMappings } from './config';
import { readCookieLanguage } from './cookie';

const { packagesRootPath } = getServerEnv();

const importDynamic = async (filePath: string): Promise<object> => {
  const nodePath = await import('path').then(mod => mod.default);
  const resolvedPath = nodePath.resolve(`${packagesRootPath}/i18n-translations/${filePath}.json`);
  const fileContent = await readFile(resolvedPath, 'utf-8');
  return JSON.parse(fileContent);
};

const detectLanguage = async (): Promise<Language> => {
  let language: Language = 'pl';
  const headersList = await headers();
  const persistedLanguage = await readCookieLanguage();
  if (persistedLanguage) {
    language = persistedLanguage as Language;
  } else {
    const headerLocale = headersList.get('accept-language');
    if (headerLocale) {
      language = headerLocale.split(',')[0]!.substring(0, 2) as Language;
    }
  }
  if (!Object.keys(languages).includes(language)) {
    language = DEFAULT_LANGUAGE;
  }
  return language;
};

const extractAndDetectSlices = async (language: Language): Promise<AbstractIntlMessages> => {
  const headersList = await headers();
  const i18nKey = headersList.get('X-i18n-key');

  const mergedBaseMessages = {
    [ROOT_KEY]: {
      ...(await importDynamic(`common/${language}`)),
      ...(await importDynamic(`landing-page/${language}`)),
    },
  };
  const sliceMapping = sliceMappings.find(({ pattern }) =>
    !i18nKey ? false : pattern.test(i18nKey)
  );
  if (sliceMapping) {
    const importedSlices = sliceMapping.slices.map(
      async slice => await importDynamic(`landing-page/${slice}/${language}`)
    );
    return merge({}, ...[mergedBaseMessages, ...(await Promise.all(importedSlices))]);
  }
  return mergedBaseMessages;
};

export default getRequestConfig(async () => {
  const language = await detectLanguage();
  const messages = await extractAndDetectSlices(language);
  return {
    locale: language,
    messages,
  };
});

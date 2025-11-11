import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { environment } from '@/env';
import { DEFAULT_LANGUAGE, languages } from '@jwizard-web/lib/i18n';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const DEFAULT_NAMESPACE = 'common';
const ROOT_NAMESPACE = 'dashboard';

const { isProd } = environment;

type PageNamespace = 'dashboard' | 'login';

i18n
  .use(HttpApi)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: !isProd,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: Object.keys(languages),
    ns: [],
    load: 'currentOnly',
    defaultNS: undefined,
    fallbackNS: [DEFAULT_NAMESPACE, ROOT_NAMESPACE],
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      lookupCookie: 'NEXT_LOCALE',
      lookupLocalStorage: 'jwizard-locale',
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    react: {
      useSuspense: true,
    },
  })
  .then(r => r);

i18n.on('languageChanged', event => {
  document.documentElement.lang = event;
});

type Props = {
  children: React.ReactNode;
};

const I18nContextProvider: React.FC<Props> = ({ children }): React.ReactElement => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

const tRoot = (key: string | undefined) => i18n.t(key as string, { ns: ROOT_NAMESPACE });

export { type PageNamespace, DEFAULT_NAMESPACE, ROOT_NAMESPACE, I18nContextProvider, tRoot };

export default i18n;

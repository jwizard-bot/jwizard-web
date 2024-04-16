/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '@/config';

export type Locale = 'pl' | 'en';

type LocaleIdentifier = {
  id: string;
  name: string;
};

export const availableLocales: LocaleIdentifier[] = [
  {
    id: 'pl',
    name: 'Polski',
  },
  {
    id: 'en',
    name: 'English',
  },
];

i18n
  .use(HttpApi)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: !config.isProdMode,
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      lookupLocalStorage: 'lang',
    },
  });

export default i18n;

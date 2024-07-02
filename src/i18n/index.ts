/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '@/config';

export type Language = 'pl' | 'en';

export type TranslationSources = 'homePage';

export const availableLanguages: Record<Language, string> = {
  pl: 'Polski',
  en: 'English',
};

i18n
  .use(HttpApi)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: !config.isProdMode,
    load: 'languageOnly',
    fallbackLng: 'en',
    supportedLngs: Object.keys(availableLanguages),
    detection: {
      lookupLocalStorage: 'lang',
      convertDetectedLanguage: lng => lng.substring(0, 2),
    },
  });

export default i18n;

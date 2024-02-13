/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Ref } from 'vue';
import { I18n, createI18n } from 'vue-i18n';
import EN_US from '../locale/en-US.json';
import PL from '../locale/pl.json';

export type TLocale = 'pl' | 'en-US';

type TAvailableLocale = {
  label: string;
  data: object;
};

let i18n: I18n;

export const availableLocales: Record<TLocale, TAvailableLocale> = {
  pl: {
    label: 'Polski',
    data: PL,
  },
  'en-US': {
    label: 'English, US',
    data: EN_US,
  },
};

export const updateLocale = (locale: TLocale): void => {
  (i18n.global.locale as Ref<string>).value = locale;
};

const i18nFabricator = (currentLocale: string): I18n => {
  i18n = createI18n({
    legacy: false,
    locale: currentLocale,
    messages: Object.keys(availableLocales).reduce(
      (acc, key) => {
        acc[key as string] = availableLocales[key as TLocale].data;
        return acc;
      },
      {} as Record<string, object>,
    ) as { [x: string]: never },
  });
  return i18n;
};

export default i18nFabricator;

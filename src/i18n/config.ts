/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export type Language = 'en' | 'pl';

export const languages: Record<Language, string> = {
  en: 'English',
  pl: 'Polski',
};

export const DEFAULT_LANGUAGE: Language = 'en';
export const COOKIE_NAME = 'NEXT_LOCALE';

type SliceMap = {
  pattern: RegExp;
  slices: string[];
};

export const sliceMappings: SliceMap[] = [
  {
    pattern: /^\/$/,
    slices: ['homePage', 'contributors'],
  },
  {
    pattern: /^\/contribute$/,
    slices: ['contributors'],
  },
];

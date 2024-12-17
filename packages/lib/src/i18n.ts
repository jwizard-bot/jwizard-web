/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

type Language = 'en-US' | 'pl';

const languages: Record<Language, string> = {
  'en-US': 'English (US)',
  pl: 'Polski',
};

const DEFAULT_LANGUAGE: Language = 'en-US';

export { type Language, languages, DEFAULT_LANGUAGE };

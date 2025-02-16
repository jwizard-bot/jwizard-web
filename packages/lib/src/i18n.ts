type Language = 'en-US' | 'pl';

const languages: Record<Language, string> = {
  'en-US': 'English (US)',
  pl: 'Polski',
};

const DEFAULT_LANGUAGE: Language = 'en-US';

export { type Language, languages, DEFAULT_LANGUAGE };

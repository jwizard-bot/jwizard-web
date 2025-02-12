/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useState } from 'react';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { Language } from '@jwizard-web/lib/i18n';
import { LangSelect } from '@jwizard-web/ui/component/lang-select';

const LanguageDropdown: React.FC = (): React.ReactElement => {
  const { i18n } = usePageTranslations();
  const [language, setLanguage] = useState<Language>(i18n.language as Language);

  const handleChangeLanguage = (langId: string): void => {
    setLanguage(langId as Language);
    i18n.changeLanguage(langId as string).then(r => r);
  };

  return (
    <LangSelect
      lang={language}
      onChangeLang={handleChangeLanguage}
      disabled={false}
      hideTextOnSm={false}
      opaque={true}
    />
  );
};

export { LanguageDropdown };

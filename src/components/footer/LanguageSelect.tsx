/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { availableLocales } from '@/i18n';
import { JWizardUi } from '../ui';

const LanguageSelect: React.FC = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(
    i18n.language.substring(0, 2)
  );

  const generatedAvailableLocales = availableLocales.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    const language = e.target.value;
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <JWizardUi.Select
      styleType="agnosticDark"
      value={language}
      onChange={handleChangeLanguage}>
      {generatedAvailableLocales}
    </JWizardUi.Select>
  );
};

export default LanguageSelect;

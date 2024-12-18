'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import enUsFlag from '@jwizard-web/assets/flag/en-US.png';
import plFlag from '@jwizard-web/assets/flag/pl.png';
import { Language, languages } from '@jwizard-web/lib/i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../widget/select';

const flagImages: Record<Language, string> = {
  'en-US': enUsFlag,
  pl: plFlag,
};

type Props = {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  disabled: boolean;
};

const LangSelect: React.FC<Props> = ({
  lang,
  onChangeLang,
  disabled,
}): React.ReactElement | null => {
  const generateImage = (lang: Language): React.ReactNode => (
    <img src={flagImages[lang]} width={20} height={13} alt={lang} />
  );

  return (
    <Select value={lang} onValueChange={onChangeLang} disabled={disabled}>
      <SelectTrigger>
        <SelectValue iconStart={generateImage(lang)} hideTextOnSm={true}>
          {languages[lang]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([lang, text]) => (
          <SelectItem key={lang} value={lang} iconStart={generateImage(lang as Language)}>
            {text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { LangSelect };

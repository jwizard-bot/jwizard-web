'use client';

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
  hideTextOnSm?: boolean;
  opaque?: boolean;
};

const LangSelect: React.FC<Props> = ({
  lang,
  onChangeLang,
  disabled,
  hideTextOnSm = true,
  opaque = false,
}): React.ReactElement | null => {
  const generateImage = (lang: Language): React.ReactNode => (
    <img src={flagImages[lang]} width={20} height={13} alt={lang} />
  );

  return (
    <Select value={lang} onValueChange={onChangeLang} disabled={disabled}>
      <SelectTrigger opaque={opaque}>
        <SelectValue iconStart={generateImage(lang)} hideTextOnSm={hideTextOnSm}>
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

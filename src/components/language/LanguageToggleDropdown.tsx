'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Language, languages } from '@/i18n/config';
import { saveCookieLanguage } from '@/i18n/cookie';
import { DropdownItem } from '@nextui-org/react';
import SingleSelectDropdown from '../SingleSelectDropdown';
import FlagImage from './FlagImage';

type Props = {
  className?: string;
};

const LanguageToggleDropdown: React.FC<Props> = ({
  className,
}): JSX.Element => {
  const currentLanguage = useLocale() as Language;
  const [isPending, startTransition] = useTransition();

  const handleChangeLanguage = (value: string): void => {
    startTransition(() => saveCookieLanguage(value as Language));
  };

  return (
    <SingleSelectDropdown
      placement="bottom-start"
      button={{
        text: languages[currentLanguage],
        variant: 'bordered',
        disabled: isPending,
        hideTextOnSmallDevices: true,
      }}
      classNames={className}
      startContent={<FlagImage lang={currentLanguage} />}
      selectedKey={currentLanguage}
      onChangeKey={handleChangeLanguage}>
      {Object.entries(languages).map(([key, text]) => (
        <DropdownItem
          key={key}
          startContent={<FlagImage lang={key as Language} />}>
          {text}
        </DropdownItem>
      ))}
    </SingleSelectDropdown>
  );
};

export default LanguageToggleDropdown;

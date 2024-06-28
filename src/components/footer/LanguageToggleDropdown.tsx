/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Key, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { Language, availableLanguages } from '@/i18n';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { iconProps } from '../componentData';
import FlagImage from './FlagImage';

const LanguageToggleDropdown: React.FC = (): JSX.Element => {
  const { i18n } = useTranslation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(
    i18n.language.substring(0, 2) as Language
  );

  const GetChevronIconVariant = isDropdownOpen ? GoChevronUp : GoChevronDown;

  const handleChangeLanguage = (langId: Key): void => {
    setLanguage(langId as Language);
    i18n.changeLanguage(langId as string);
  };

  return (
    <Dropdown
      placement="top-end"
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}>
      <DropdownTrigger>
        <Button
          size="sm"
          variant="bordered"
          className="basis-[50%] sm:basis-auto"
          startContent={<FlagImage lang={language} />}
          endContent={<GetChevronIconVariant {...iconProps} />}>
          {availableLanguages[language]}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={handleChangeLanguage}
        selectionMode="single"
        selectedKeys={[language]}>
        {(Object.keys(availableLanguages) as Language[]).map(key => (
          <DropdownItem key={key} startContent={<FlagImage lang={key} />}>
            {availableLanguages[key as keyof typeof availableLanguages]}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageToggleDropdown;

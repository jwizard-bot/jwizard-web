/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { Mode, useDarkMode } from '@/context/DarkModeProvider';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { iconProps } from '../componentData';
import { IconElement, dropdownItems } from './data';

type Props = {
  className: string;
};

const ThemeToggleDropdown: React.FC<Props> = ({ className }): JSX.Element => {
  const { mode, setMode } = useDarkMode();
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const GetChevronIconVariant = isDropdownOpen ? GoChevronUp : GoChevronDown;

  return (
    <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownTrigger>
        <Button
          size="sm"
          color="primary"
          startContent={IconElement(mode)}
          className={className}
          endContent={<GetChevronIconVariant {...iconProps} />}>
          {t(mode)}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={key => setMode(key as Mode)}
        selectionMode="single"
        selectedKeys={[mode]}>
        {Object.keys(dropdownItems).map(text => (
          <DropdownItem key={text} startContent={IconElement(text)}>
            {t(text)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeToggleDropdown;

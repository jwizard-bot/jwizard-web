/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { useState } from 'react';
import * as changeCase from 'change-case';
import { useTranslation } from 'react-i18next';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { IconType } from 'react-icons/lib';
import { useNavigate } from 'react-router';
import { OverlayPlacement } from '@nextui-org/aria-utils';
import { Dropdown, DropdownItem, DropdownMenu } from '@nextui-org/react';
import { iconProps } from '../componentData';
import DropdownTriggerElement from './DropdownTriggerElement';

export type DropdownElement = {
  i18nElementKey: string;
  Icon?: IconType;
  iconClasses?: string;
};

type Props = {
  i18nKey: string;
  ComponentWrapper?: React.ElementType;
  elements: DropdownElement[];
  placement?: OverlayPlacement;
};

const DropdownWithIcons: React.FC<Props> = ({
  i18nKey,
  ComponentWrapper,
  elements,
  placement,
}): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getChevronIconVariant = placement?.includes('top')
    ? isDropdownOpen
      ? GoChevronDown
      : GoChevronUp
    : isDropdownOpen
      ? GoChevronUp
      : GoChevronDown;

  return (
    <Dropdown
      placement={placement}
      closeOnSelect
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}>
      {ComponentWrapper ? (
        <ComponentWrapper>
          <DropdownTriggerElement
            i18nKey={i18nKey}
            ChevronIcon={getChevronIconVariant}
            iconProps={iconProps}
          />
        </ComponentWrapper>
      ) : (
        <DropdownTriggerElement
          i18nKey={i18nKey}
          ChevronIcon={getChevronIconVariant}
          iconProps={iconProps}
        />
      )}
      <DropdownMenu
        onAction={key => navigate(`/${key}`)}
        variant="faded"
        className="w-[340px]"
        itemClasses={{ base: 'gap-4' }}>
        {elements.map(({ i18nElementKey, Icon, iconClasses }) => (
          <DropdownItem
            key={i18nElementKey}
            description={t(
              `${i18nKey}.data.${changeCase.camelCase(i18nElementKey)}.body`
            )}
            startContent={Icon && <Icon size={25} className={iconClasses} />}>
            {t(`${i18nKey}.data.${changeCase.camelCase(i18nElementKey)}.head`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownWithIcons;

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useDropdownIcon } from '@/hooks';
import { DropdownElement } from '@/types/dropdown';
import { OverlayPlacement } from '@nextui-org/aria-utils';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import Ui from './ui';

type Props = {
  i18nKey: string;
  ComponentWrapper?: React.ElementType;
  elements: DropdownElement[];
  placement?: OverlayPlacement;
};

const DropdownWithIcons: React.FC<Props> = ({
  i18nKey,
  ComponentWrapper = 'div',
  elements,
  placement,
}): JSX.Element => {
  const t = useTranslations();
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ChevronIcon = useDropdownIcon({ isDropdownOpen, placement });

  return (
    <Dropdown
      placement={placement}
      closeOnSelect
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}>
      <ComponentWrapper>
        <DropdownTrigger>
          <Ui.TransparentButton
            className="p-0"
            endContent={<ChevronIcon size={15} />}>
            {t(i18nKey)}
          </Ui.TransparentButton>
        </DropdownTrigger>
      </ComponentWrapper>
      <DropdownMenu
        onAction={key => router.push(key as string)}
        variant="faded"
        className="w-[340px]"
        itemClasses={{ base: 'gap-4' }}>
        {elements.map(
          ({ i18nHead, i18nDescription, Icon, iconClasses, navigateTo }) => (
            <DropdownItem
              key={navigateTo}
              description={t(i18nDescription)}
              startContent={Icon && <Icon size={25} className={iconClasses} />}>
              {t(i18nHead)}
            </DropdownItem>
          )
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownWithIcons;

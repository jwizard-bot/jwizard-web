'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useState } from 'react';
import clsx from 'clsx';
import { useDropdownIcon } from '@/hooks';
import { OverlayPlacement } from '@nextui-org/aria-utils';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

type Variant = 'solid' | 'bordered';
type Color = 'default' | 'primary';

type Props = {
  button: {
    text: string;
    variant?: Variant;
    color?: Color;
    disabled?: boolean;
    hideTextOnSmallDevices?: boolean;
  };
  classNames?: string;
  startContent: JSX.Element;
  placement?: OverlayPlacement;
  selectedKey: string;
  onChangeKey: (key: string) => void;
  children: JSX.Element[];
};

const SingleSelectDropdown: React.FC<Props> = ({
  button,
  classNames = '',
  startContent,
  placement,
  selectedKey,
  onChangeKey,
  children,
}): JSX.Element => {
  const {
    text,
    variant = 'solid',
    color = 'default',
    disabled = false,
    hideTextOnSmallDevices = false,
  } = button;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ChevronIcon = useDropdownIcon({ isDropdownOpen, placement });

  return (
    <Dropdown
      placement={placement}
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}>
      <DropdownTrigger>
        <Button
          size="sm"
          color={color}
          variant={variant}
          className={clsx(classNames)}
          disabled={disabled}
          startContent={startContent}
          endContent={<ChevronIcon size={15} />}>
          <span
            className={clsx({ 'hidden sm:inline': hideTextOnSmallDevices })}>
            {text}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={key => onChangeKey(key as string)}
        selectionMode="single"
        selectedKeys={[selectedKey]}>
        {children}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SingleSelectDropdown;

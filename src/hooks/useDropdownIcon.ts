/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useMemo } from 'react';
import { IconType } from 'react-icons';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { OverlayPlacement } from '@nextui-org/aria-utils';

type Props = {
  isDropdownOpen: boolean;
  placement?: OverlayPlacement;
};

const useDropdownIcon = ({ isDropdownOpen, placement }: Props): IconType => {
  const ChevronIcon = useMemo(() => {
    const icons = [GoChevronUp, GoChevronDown];
    if (placement?.includes('top')) {
      icons.reverse();
    }
    const [openIcon, closeIcon] = icons;
    return isDropdownOpen ? openIcon : closeIcon;
  }, [placement, isDropdownOpen]);

  return ChevronIcon;
};

export default useDropdownIcon;

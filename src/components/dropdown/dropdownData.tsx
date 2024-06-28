/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { GoCommandPalette, GoStop } from 'react-icons/go';
import { DropdownElement } from './DropdownWithIcons';

export const commandsDropdownElements: DropdownElement[] = [
  { i18nElementKey: 'commands', Icon: GoCommandPalette },
  { i18nElementKey: 'error-codes', Icon: GoStop, iconClasses: 'text-danger' },
];

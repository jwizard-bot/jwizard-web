/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { IconType } from 'react-icons';

export type DropdownElement = {
  i18nHead: string;
  i18nDescription: string;
  Icon?: IconType;
  iconClasses?: string;
  navigateTo: string;
};

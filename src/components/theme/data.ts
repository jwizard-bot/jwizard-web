/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import {
  BsCircleHalf,
  BsFillBrightnessHighFill,
  BsFillMoonStarsFill,
} from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

export type DropdownItems = {
  [name: string]: IconType;
};

export const dropdownItems: DropdownItems = {
  light: BsFillBrightnessHighFill,
  dark: BsFillMoonStarsFill,
  system: BsCircleHalf,
};

export const IconElement = (key: keyof DropdownItems) =>
  React.createElement(dropdownItems[key]);

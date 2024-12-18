/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { ThemeKey } from '@jwizard-web/ui/component/theme-select';

const toggleTheme = (currentTheme: string | undefined): string => {
  let nextMode: ThemeKey;
  switch (currentTheme) {
    case 'dark':
      nextMode = 'system';
      break;
    case 'light':
      nextMode = 'dark';
      break;
    case 'system':
      nextMode = 'light';
      break;
    default:
      nextMode = 'system';
  }
  return nextMode;
};

export { toggleTheme };

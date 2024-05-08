/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export type CssTheme = 'light' | 'dark';

export type CssThemedStyles = {
  main: {
    fg: string;
    bg: string;
  };
  header: {
    bg: string;
  };
  p: {
    fg: string;
  };
  control: {
    light: {
      hover: string;
    };
  };
};

export type AgnosticStyles = {
  fg: string;
  bg: string;
};

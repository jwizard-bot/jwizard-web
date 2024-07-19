'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import SnackbarProvider from './SnackbarProvider';

type Props = {
  children: React.ReactNode;
};

const ThemeContextProvider: React.FC<Props> = ({ children }): JSX.Element => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    storageKey="jwizard-theme">
    <NextUIProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </NextUIProvider>
  </ThemeProvider>
);

export default ThemeContextProvider;

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

const ThemeContextProvider: React.FC<Props> = ({ children }): React.ReactElement => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    storageKey="jwizard-theme">
    {children}
  </ThemeProvider>
);

export default ThemeContextProvider;

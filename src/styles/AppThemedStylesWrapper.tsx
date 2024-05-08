/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '@rbnd/react-dark-mode';
import { GlobalStyles, agnosticTheme, themedStyles } from './global';
import { CssTheme } from './types';

type Props = {
  children: React.ReactNode;
};

export const AppThemedStylesWrapper: React.FC<Props> = ({
  children,
}): JSX.Element => {
  const { mode } = useDarkMode();

  const currentMode: CssTheme = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    isSystemDark => setSystemMode(isSystemDark ? 'dark' : 'light')
  )
    ? 'dark'
    : 'light';

  const [systemMode, setSystemMode] = useState<CssTheme>(currentMode);

  return (
    <ThemeProvider
      theme={{
        ...themedStyles[mode === 'system' ? systemMode : (mode as CssTheme)],
        agnostic: agnosticTheme,
      }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

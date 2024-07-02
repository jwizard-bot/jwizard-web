/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const preferDarkQuery = '(prefers-color-scheme: dark)';
const darkClass = 'dark';

type Props = {
  children: React.ReactNode;
};

export type Mode = 'light' | 'dark' | 'system';

type DarkModeContextType = {
  mode: Mode;
  isDark: boolean;
  setMode: (mode: Mode) => void;
};

const DarkModeContext = React.createContext<DarkModeContextType>({
  mode: 'system',
  isDark: window.matchMedia(preferDarkQuery).matches,
  setMode: () => {},
});

const setClassOnHtml = (isDark: boolean): void => {
  const element = document.querySelector('html')!;
  element.className = isDark ? darkClass : '';
};

const DarkModeProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [mode, setValue] = useLocalStorage('theme-mode', 'system');
  const [isDark, setIsDark] = useState(
    window.matchMedia(preferDarkQuery).matches
  );

  useEffect(() => {
    const target = window.matchMedia(preferDarkQuery);
    const eventListener = (e: MediaQueryListEvent): void => {
      if (mode === 'system') {
        setClassOnHtml(e.matches);
        setIsDark(e.matches);
      }
    };
    target?.addEventListener('change', eventListener);
    return () => target?.removeEventListener('change', eventListener);
  }, [mode]);

  useEffect(() => {
    if (mode !== 'system') {
      setClassOnHtml(mode === 'dark');
      setIsDark(mode === 'dark');
      return;
    }
    const isDark = window.matchMedia(preferDarkQuery).matches;
    setClassOnHtml(isDark);
    setIsDark(isDark);
  }, [mode]);

  return (
    <DarkModeContext.Provider
      value={{
        mode: mode as Mode,
        isDark,
        setMode: setValue,
      }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType =>
  useContext(DarkModeContext);

export default DarkModeProvider;

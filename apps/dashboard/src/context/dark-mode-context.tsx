import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ThemeKey } from '@jwizard-web/ui/component/theme-select';
import { useLocalStorage } from 'usehooks-ts';

const preferDarkQuery = '(prefers-color-scheme: dark)';
const darkClass = 'dark';

type Props = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  mode: ThemeKey;
  isDark: boolean;
  setMode: (mode: ThemeKey) => void;
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

const DarkModeProvider: React.FC<Props> = ({ children }): React.ReactElement => {
  const [mode, setValue] = useLocalStorage('jwizard-theme', 'system');
  const [isDark, setIsDark] = useState(window.matchMedia(preferDarkQuery).matches);

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
        mode: mode as ThemeKey,
        isDark,
        setMode: setValue,
      }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = (): DarkModeContextType => useContext(DarkModeContext);

export { DarkModeProvider, useDarkMode };

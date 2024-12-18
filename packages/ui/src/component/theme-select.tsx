'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Monitor, MoonStar, Sun } from 'lucide-react';
import { useMounted } from '../hook/use-mounted';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../widget/select';

export const availableThemes: Record<string, React.ReactNode> = {
  light: <Sun size={14} />,
  dark: <MoonStar size={14} />,
  system: <Monitor size={14} />,
} as const;

export type ThemeKey = keyof typeof availableThemes;

type Props = {
  theme: string | undefined;
  onChangeTheme: (theme: string) => void;
  onTranslate: (i18nKey: string) => string;
};

const ThemeSelect: React.FC<Props> = ({
  theme = 'system',
  onChangeTheme,
  onTranslate,
}): React.ReactElement | null => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <Select value={theme} onValueChange={onChangeTheme}>
      <SelectTrigger>
        <SelectValue iconStart={availableThemes[theme]}>
          {onTranslate(`themes.${theme}`)}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.keys(availableThemes).map(theme => (
          <SelectItem key={theme} value={theme} iconStart={availableThemes[theme]}>
            {onTranslate(`themes.${theme}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { ThemeSelect };

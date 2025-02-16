'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { ThemeSelect } from '@jwizard-web/ui/component/theme-select';

const ThemeSwitch: React.FC = () => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  return <ThemeSelect theme={theme} onChangeTheme={setTheme} onTranslate={i18nKey => t(i18nKey)} />;
};

export { ThemeSwitch };

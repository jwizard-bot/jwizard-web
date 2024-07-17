'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { DropdownItem, Skeleton } from '@nextui-org/react';
import SingleSelectDropdown from '../SingleSelectDropdown';
import { IconElement, dropdownItems } from './themeData';

type Props = {
  className?: string;
};

const ThemeToggleDropdown: React.FC<Props> = ({
  className = '',
}): JSX.Element => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !theme) {
    return (
      <Skeleton className={clsx('rounded-lg w-[121px] h-[32px]', className)} />
    );
  }

  return (
    <SingleSelectDropdown
      placement="top-start"
      button={{ text: t(`themes.${theme}`), variant: 'bordered' }}
      startContent={IconElement(theme)}
      classNames={className}
      selectedKey={theme}
      onChangeKey={theme => setTheme(theme)}>
      {Object.keys(dropdownItems).map(text => (
        <DropdownItem key={text} startContent={IconElement(text)}>
          {t(`themes.${text}`)}
        </DropdownItem>
      ))}
    </SingleSelectDropdown>
  );
};

export default ThemeToggleDropdown;

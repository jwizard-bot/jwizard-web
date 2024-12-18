'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { menuElements } from '@/component/header/menu-elements';
import { NavigationItem } from '@/component/header/navigation-item';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@jwizard-web/ui/widget/navigation-menu';

const HeaderNavigation: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const [value, setValue] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setValue('');
  }, [pathname]);

  return (
    <NavigationMenu className="ms-2" value={value} onValueChange={setValue}>
      <NavigationMenuList>
        {menuElements.map(({ triggerI18nKey, elements }) => (
          <NavigationMenuItem key={triggerI18nKey}>
            <NavigationMenuTrigger>{t(`mainMenu.${triggerI18nKey}.header`)}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {elements.map(({ link, insideRouter, i18nKey }) => (
                <NavigationItem
                  key={link}
                  href={link}
                  title={t(`mainMenu.${triggerI18nKey}.content.${i18nKey}.header`)}
                  insideRouter={insideRouter}
                  onClick={() => {}}>
                  {t(`mainMenu.${triggerI18nKey}.content.${i18nKey}.description`)}
                </NavigationItem>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { HeaderNavigation };

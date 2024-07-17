'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createContext, useContext } from 'react';
import { GoCommandPalette, GoStop } from 'react-icons/go';
import { IoIosRadio } from 'react-icons/io';
import { DropdownElement } from '@/types/dropdown';

type NavigationDropdownContextType = {
  features: DropdownElement[];
};

const features: DropdownElement[] = [
  {
    i18nHead: 'title.commands',
    i18nDescription: 'commandsDescription',
    Icon: GoCommandPalette,
    navigateTo: '/commands',
  },
  {
    i18nHead: 'title.radioStations',
    i18nDescription: 'radioStationsDescription',
    Icon: IoIosRadio,
    navigateTo: '/radio-stations',
  },
  {
    i18nHead: 'title.errorCodes',
    i18nDescription: 'errorCodesDescription',
    Icon: GoStop,
    iconClasses: 'text-danger',
    navigateTo: '/error-codes',
  },
];

const NavigationDropdownContext = createContext<NavigationDropdownContextType>({
  features: [],
});

type Props = {
  children: React.ReactNode;
};

const NavigationDropdownProvider: React.FC<Props> = ({
  children,
}): JSX.Element => (
  <NavigationDropdownContext.Provider value={{ features }}>
    {children}
  </NavigationDropdownContext.Provider>
);

export const useNavigationDropdownData = () =>
  useContext(NavigationDropdownContext);

export default NavigationDropdownProvider;

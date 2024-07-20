'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import * as changeCase from 'change-case';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { RxExternalLink } from 'react-icons/rx';
import config from '@/config';
import { useNavigationDropdownData } from '@/context';
import { useSmallScreen } from '@/hooks';
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react';
import BrandLogo from './BrandLogo';
import DropdownWithIcons from './DropdownWithIcons';
import { LanguageToggleDropdown } from './language';
import { ThemeToggleButton } from './theme';
import Ui from './ui';

const menuTopSectionElements: string[] = [
  'commands',
  'error-codes',
  'contribute',
] as const;

const MainHeader: React.FC = (): JSX.Element => {
  const t = useTranslations();
  const pathname = usePathname();
  const isSmallScreen = useSmallScreen();
  const { features } = useNavigationDropdownData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      maxWidth="xl"
      isBlurred={!isSmallScreen}
      disableAnimation
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
        <BrandLogo />
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="start">
        <BrandLogo classNames={{ root: 'me-8' }} />
        <DropdownWithIcons
          i18nKey="featuresDropdown"
          ComponentWrapper={NavbarItem}
          elements={features}
          placement="bottom-start"
        />
        <NavbarItem>
          <Ui.TransparentButton
            as={NextLink}
            href="/contribute"
            className="p-0">
            {t('title.contribute')}
          </Ui.TransparentButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-2">
        <Ui.Button href="/" isExternal as={Link} className="hidden md:flex">
          {t('addToDiscord')}
        </Ui.Button>
        <Tooltip content={t('goToGithubRepository')}>
          <Ui.Button
            href={config.orgLink}
            isExternal
            as={Link}
            startContent={<BsGithub />}
            isIconOnly
            className="hidden md:flex"
          />
        </Tooltip>
        <LanguageToggleDropdown />
        <Ui.Button href="/" as={Link}>
          {t('login')}
        </Ui.Button>
      </NavbarContent>
      <NavbarMenu className="py-8 justify-between">
        <NavbarMenuItem>
          <Ui.FlexContainer col gap>
            {menuTopSectionElements.map(link => (
              <Link
                key={link}
                as={NextLink}
                size="lg"
                href={`/${link}`}
                className="w-full justify-start">
                {t(`title.${changeCase.camelCase(link)}`)}
              </Link>
            ))}
          </Ui.FlexContainer>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Ui.FlexContainer col gap className="mt-4">
            <ThemeToggleButton />
            <Ui.Button
              variant="bordered"
              size="lg"
              fullWidth
              startContent={<BsGithub size={18} />}
              endContent={<RxExternalLink size={18} />}>
              {t('goToGithubRepository')}
            </Ui.Button>
            <Ui.Button
              variant="bordered"
              size="lg"
              fullWidth
              startContent={<BsDiscord size={18} />}
              endContent={<RxExternalLink size={18} />}>
              {t('addToDiscord')}
            </Ui.Button>
          </Ui.FlexContainer>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MainHeader;

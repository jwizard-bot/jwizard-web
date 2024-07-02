/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import * as changeCase from 'change-case';
import { useTranslation } from 'react-i18next';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { RxExternalLink } from 'react-icons/rx';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import config from '@/config';
import {
  Button,
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
import DropdownWithIcons from './dropdown/DropdownWithIcons';
import { featuresDropdownElements } from './dropdown/dropdownData';
import ThemeToggleButton from './theme/ThemeToggleButton';
import ThemeToggleDropdown from './theme/ThemeToggleDropdown';
import Ui from './ui';

const menuTopSectionElements: string[] = [
  'commands',
  'error-codes',
  'contribute',
];

const MainHeader: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
          elements={featuresDropdownElements}
          placement="bottom-start"
        />
        <NavbarItem>
          <Ui.TransparentButton as={ReactLink} to="/contribute" className="p-0">
            {t('contribute')}
          </Ui.TransparentButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-2">
        <ThemeToggleDropdown className="hidden md:flex" />
        <Tooltip content={t('goToGithubRepository')}>
          <Button
            href={config.orgLink}
            isExternal
            size="sm"
            color="primary"
            as={Link}
            startContent={<BsGithub />}
            isIconOnly
            className="hidden md:flex"
          />
        </Tooltip>
        <Button
          href="/"
          isExternal
          size="sm"
          variant="bordered"
          as={Link}
          className="hidden md:flex">
          {t('addToDiscord')}
        </Button>
        <Button href="/" size="sm" color="primary" as={Link}>
          {t('login')}
        </Button>
      </NavbarContent>
      <NavbarMenu className="py-8 justify-between">
        <NavbarMenuItem>
          <Ui.FlexContainer col gap>
            {menuTopSectionElements.map(link => (
              <Link
                key={link}
                as={ReactLink}
                size="lg"
                to={`/${link}`}
                className="w-full justify-start">
                {t(changeCase.camelCase(link))}
              </Link>
            ))}
          </Ui.FlexContainer>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Ui.FlexContainer col gap className="mt-4">
            <ThemeToggleButton />
            <Button
              variant="bordered"
              fullWidth
              startContent={<BsGithub size={18} />}
              endContent={<RxExternalLink size={18} />}>
              {t('goToGithubRepository')}
            </Button>
            <Button
              fullWidth
              variant="bordered"
              startContent={<BsDiscord size={18} />}
              endContent={<RxExternalLink size={18} />}>
              {t('addToDiscord')}
            </Button>
          </Ui.FlexContainer>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MainHeader;

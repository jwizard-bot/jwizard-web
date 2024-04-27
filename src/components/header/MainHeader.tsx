/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsList } from 'react-icons/bs';
import {
  BsFillBrightnessHighFill,
  BsFillMoonStarsFill,
  BsGithub,
} from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import config from '@/config';
import { breakpoints, devices, space } from '@/styles/global';
import { buildDiscordOpenIdRoute, openNewTab } from '@/utils';
import { useDarkMode } from '@rbnd/react-dark-mode';
import { JWizardUi } from '../ui';
import HamburgerMenu from './HamburgerMenu';
import HeaderLink from './HeaderLink';

export type IsRootProps = {
  isRoot: boolean;
};

export const IsRootContext = createContext<IsRootProps>({ isRoot: false });

const MainHeader: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { mode, setMode } = useDarkMode();

  const isRoot = location.pathname === '/';
  const openIdRoute = buildDiscordOpenIdRoute();

  return (
    <HeaderContainer $isRoot={isRoot}>
      <HeaderWrapper>
        <HeaderSection>
          <HomeLink to="/">
            <img
              src={`/logo/logo-${isRoot ? 'white' : 'color'}.svg`}
              alt="logo"
              width={40}
              height={40}
            />
            <HomeParagraph $isRoot={isRoot}>JWizard</HomeParagraph>
          </HomeLink>
          <IsRootContext.Provider value={{ isRoot }}>
            <HeaderNavigation>
              <HeaderLink to="/commands" i18nLabel="commands" />
              <HeaderLink to="/contribute" i18nLabel="contribute" />
            </HeaderNavigation>
          </IsRootContext.Provider>
        </HeaderSection>
        <HeaderSection>
          <HeaderRightList>
            <JWizardUi.TooltipButton
              styleType="light"
              placement="bottom"
              Icon={
                mode === 'dark' ? BsFillBrightnessHighFill : BsFillMoonStarsFill
              }
              tooltipI18nLabel="toggleTheme"
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            />
            <JWizardUi.TooltipButton
              styleType="light"
              placement="bottom"
              Icon={BsGithub}
              tooltipI18nLabel="goToGithubRepository"
              onClick={() => openNewTab(config.orgLink)}
            />
            <JWizardUi.Button
              styleType={isRoot ? 'agnosticDark' : 'theme'}
              onClick={() => openNewTab(config.inviteLink)}>
              {t('addToDiscord')}
            </JWizardUi.Button>
            <JWizardUi.Button
              styleType={isRoot ? 'agnosticLight' : 'light'}
              onClick={() => openNewTab(openIdRoute, true)}>
              {t('login')}
            </JWizardUi.Button>
          </HeaderRightList>
          <HeaderHamburgerButton
            $isRoot={isRoot}
            onClick={() => setIsOpen(true)}>
            <BsList size={25} />
          </HeaderHamburgerButton>
        </HeaderSection>
      </HeaderWrapper>
      <HamburgerMenu isOpen={isOpen} onCloseCallback={setIsOpen} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ $isRoot: boolean }>`
  position: ${({ $isRoot }) => ($isRoot ? 'relative' : 'fixed')};
  z-index: 10;
  width: 100%;
  backdrop-filter: ${({ $isRoot }) => ($isRoot ? 'none' : 'blur(10px)')};
  background-color: ${({ $isRoot, theme }) =>
    $isRoot ? 'var(--theme-color-650)' : theme.header.bg};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: ${space(3)} ${space(5)};
  max-width: ${breakpoints.xl};
  width: 100%;
`;

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const HomeParagraph = styled.p<{ $isRoot: boolean }>`
  font-family: var(--font-logo);
  font-size: var(--font-2xl);
  margin-left: ${space(2)};
  margin-top: calc(${space(1)} * -1);
  color: ${({ $isRoot, theme }) =>
    $isRoot ? 'var(--theme-color-50)' : theme.main.fg};
`;

const HeaderNavigation = styled.ul`
  display: flex;
  align-items: center;
  margin-left: ${space(8)};
  column-gap: ${space(4)};
`;

const HeaderRightList = styled.div`
  display: none;
  align-items: center;
  column-gap: ${space(2)};
  @media only ${devices.md} {
    display: flex;
  }
`;

const HeaderHamburgerButton = styled.button<{ $isRoot: boolean }>`
  display: block;
  text-align: center;
  color: ${({ $isRoot, theme }) =>
    $isRoot ? 'var(--theme-color-50)' : theme.main.fg};
  @media only ${devices.md} {
    display: none;
  }
`;

export default MainHeader;

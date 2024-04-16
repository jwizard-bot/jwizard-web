/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BsFillBrightnessHighFill,
  BsFillMoonStarsFill,
  BsGithub,
  BsX,
} from 'react-icons/bs';
import { styled } from 'styled-components';
import config from '@/config';
import { buildDiscordOpenIdRoute, openNewTab } from '@/utils';
import { useDarkMode } from '@rbnd/react-dark-mode';
import { JWizardUi } from '../ui';
import HamburgerMenuLink from './HamburgerMenuLink';

type Props = {
  isOpen: boolean;
  onCloseCallback: Dispatch<SetStateAction<boolean>>;
};

const HamburgerMenu: React.FC<Props> = ({
  isOpen,
  onCloseCallback,
}): JSX.Element => {
  const { mode, setMode } = useDarkMode();
  const { t } = useTranslation();

  const openIdRoute = buildDiscordOpenIdRoute();

  return (
    <Container $isOpen={isOpen} tabIndex={-1}>
      <CloseButton onClick={() => onCloseCallback(false)}>
        <BsX size={25} />
      </CloseButton>
      <ElementsWrapper>
        <SectionWrapper>
          <ul>
            <HamburgerMenuLink to="commands" />
            <HamburgerMenuLink to="contribute" />
          </ul>
        </SectionWrapper>
        <SectionWrapper>
          <JWizardUi.Button
            styleType="light"
            role="link"
            Icon={
              mode === 'dark' ? BsFillBrightnessHighFill : BsFillMoonStarsFill
            }
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
            {t('toggleTheme')}
          </JWizardUi.Button>
          <JWizardUi.Button
            styleType="light"
            role="link"
            Icon={BsGithub}
            onClick={() => openNewTab(config.orgLink)}>
            Github
          </JWizardUi.Button>
        </SectionWrapper>
        <SectionWrapper>
          <JWizardUi.Button
            styleType="theme"
            role="link"
            onClick={() => openNewTab(config.inviteLink)}>
            {t('addToDiscord')}
          </JWizardUi.Button>
          <JWizardUi.Button
            styleType="outlineLight"
            role="link"
            onClick={() => openNewTab(openIdRoute, true)}>
            {t('login')}
          </JWizardUi.Button>
        </SectionWrapper>
      </ElementsWrapper>
    </Container>
  );
};

const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 40;
  width: 350px;
  height: 100vh;
  padding: var(--space-4);
  overflow-y: auto;
  transition: transform var(--duration);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  background-color: var(--hamburger-menu-bg);
  box-shadow: var(--base-shadow);
`;

const CloseButton = styled.button`
  font-size: var(--font-sm);
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--tint-color-400);
  border-radius: var(--button-radius);
  &:hover {
    color: var(--hamburger-menu-close-btn-hover-fg);
    background-color: var(--hamburger-menu-close-btn-hover-bg);
  }
`;

const ElementsWrapper = styled.div`
  margin-top: var(--space-10);
  display: flex;
  flex-direction: column;
  row-gap: var(--space-8);
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
`;

export default HamburgerMenu;

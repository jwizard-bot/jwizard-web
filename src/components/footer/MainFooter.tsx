/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '@/config';
import { devices } from '@/styles/global';
import { openNewTab } from '@/utils';
import { JWizardUi } from '../ui';
import LanguageSelect from './LanguageSelect';
import NavigationLinkElement from './NavigationLinkElement';

const MainFooter: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <DescriptionWithLogoSection>
          <Description>{t('description')}</Description>
          <LogoLink to="/">
            <img src="/logo/logo-white.svg" alt="logo" width={40} height={40} />
            <LogoText>JWizard</LogoText>
          </LogoLink>
        </DescriptionWithLogoSection>
        <NavigationWithButtonsSection>
          <Navigation>
            <NavigationList>
              <NavigationLinkElement to="/" i18nLabel="home" />
              <NavigationLinkElement to="commands" i18nLabel="commands" />
              <NavigationLinkElement
                to="contribute"
                i18nLabel="contribute"
                isLast
              />
            </NavigationList>
          </Navigation>
          <ButtonsSection>
            <JWizardUi.Button
              styleType="agnosticLight"
              onClick={() => openNewTab(config.inviteLink)}>
              {t('addToDiscord')}
            </JWizardUi.Button>
            <LanguageSelect />
          </ButtonsSection>
        </NavigationWithButtonsSection>
        <Separator />
        <CopyrightContainer>
          <CopyrightParagraph>&copy; {year} by JWizard.</CopyrightParagraph>
          <CopyrightParagraph>Build: {config.buildVersion}</CopyrightParagraph>
        </CopyrightContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  color: var(--light-color-100);
  background-color: var(--theme-color-600);
`;

const FooterWrapper = styled.div`
  max-width: var(--br-xl);
  width: 100%;
  margin: 0 auto;
  padding: var(--space-10) var(--space-5) var(--space-3) var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionWithLogoSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: var(--space-8);
  @media only ${devices.md} {
    flex-direction: row;
  }
`;

const Description = styled.p`
  text-align: center;
  max-width: 900px;
  color: var(--theme-color-300);
  @media only ${devices.md} {
    text-align: left;
    margin-right: var(--space-20);
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: var(--space-10);
  row-gap: var(--space-1);
  @media only ${devices.md} {
    margin-bottom: 0;
  }
`;

const LogoText = styled.p`
  font-family: var(--font-logo);
  font-size: var(--font-2xl);
  line-height: var(--line-height-2xl);
  margin-left: var(--space-2);
  color: var(--light-color-100);
`;

const NavigationWithButtonsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media only ${devices.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const Navigation = styled.nav`
  margin-bottom: var(--space-5);
  @media only ${devices.md} {
    margin-bottom: 0;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  row-gap: var(--space-6);
  justify-content: center;
  @media only ${devices.md} {
    justify-content: start;
  }
`;

const ButtonsSection = styled.div`
  display: flex;
  column-gap: var(--space-2);
`;

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: var(--theme-color-500);
  width: 100%;
  margin: var(--space-6) 0 var(--space-4);
`;

const CopyrightContainer = styled.section`
  margin: var(--space-3) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: var(--font-sm);
  @media only ${devices.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CopyrightParagraph = styled.p`
  color: var(--theme-color-400);
  margin: var(--space-1) 0;
`;

export default MainFooter;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '@/config';
import { breakpoints, devices, space } from '@/styles/global';
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
  color: var(--theme-color-50);
  background-color: var(--theme-color-650);
`;

const FooterWrapper = styled.div`
  max-width: ${breakpoints.xl};
  width: 100%;
  margin: 0 auto;
  padding: ${space(10)} ${space(5)} ${space(3)} ${space(5)};
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
  margin-bottom: ${space(8)};
  @media only ${devices.md} {
    flex-direction: row;
  }
`;

const Description = styled.p`
  text-align: center;
  max-width: 900px;
  color: var(--theme-color-400);
  @media only ${devices.md} {
    text-align: left;
    margin-right: ${space(20)};
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: ${space(10)};
  row-gap: ${space(1)};
  @media only ${devices.md} {
    margin-bottom: 0;
  }
`;

const LogoText = styled.p`
  font-family: var(--font-logo);
  font-size: var(--font-2xl);
  line-height: var(--line-height-2xl);
  margin-left: ${space(2)};
  color: var(--theme-color-50);
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
  margin-bottom: ${space(5)};
  @media only ${devices.md} {
    margin-bottom: 0;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  row-gap: ${space(6)};
  justify-content: center;
  @media only ${devices.md} {
    justify-content: start;
  }
`;

const ButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  column-gap: ${space(2)};
  @media only ${devices.md} {
    justify-content: flex-start;
  }
`;

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: var(--theme-color-500);
  width: 100%;
  margin: ${space(6)} 0 ${space(4)};
`;

const CopyrightContainer = styled.section`
  margin: ${space(3)} 0;
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
  color: var(--theme-color-500);
  margin: ${space(1)} 0;
`;

export default MainFooter;

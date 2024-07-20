'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { GoDotFill } from 'react-icons/go';
import config from '@/config';
import { useNavigationDropdownData } from '@/context';
import { useSmallScreen } from '@/hooks';
import { Divider, Link } from '@nextui-org/react';
import BrandLogo from '../BrandLogo';
import DropdownWithIcons from '../DropdownWithIcons';
import { ThemeToggleDropdown } from '../theme';
import Ui from '../ui';
import CopyrightSection from './CopyrightSection';

const MainFooter: React.FC = (): JSX.Element => {
  const t = useTranslations();
  const isSmallScreen = useSmallScreen();
  const { features } = useNavigationDropdownData();

  const currentYear = new Date().getFullYear();

  return (
    <Ui.SafetyContainer as="footer" className="bg-transparent">
      <Ui.FlexContainer col>
        <Ui.FlexContainer
          fullWidth
          toColOnSmallDevices
          justify="between"
          className="my-10 flex-col-reverse">
          <Ui.Paragraph
            size="md"
            className="sm:me-16 text-center sm:text-start">
            {t('description')}
          </Ui.Paragraph>
          <BrandLogo
            sizePx={50}
            classNames={{
              root: 'flex-shrink-0 mb-6 sm:mb-0',
              text: 'text-3xl',
            }}
          />
        </Ui.FlexContainer>
        <Ui.FlexContainer fullWidth toColOnSmallDevices justify="between">
          <Ui.FlexContainer gap>
            <DropdownWithIcons
              i18nKey="featuresDropdown"
              elements={features}
              placement={isSmallScreen ? 'top' : 'top-start'}
            />
            <Ui.TransparentButton
              as={NextLink}
              href="/contribute"
              className="p-0">
              {t('title.contribute')}
            </Ui.TransparentButton>
          </Ui.FlexContainer>
          <Ui.FlexContainer gap className="w-full sm:w-fit">
            <Ui.Button
              href="/"
              isExternal
              as={Link}
              className="basis-[50%] sm:basis-auto">
              {t('addToDiscord')}
            </Ui.Button>
            <ThemeToggleDropdown className="basis-[50%] sm:basis-auto" />
          </Ui.FlexContainer>
        </Ui.FlexContainer>
        <Divider className="my-6" />
        <Ui.GridContainer
          responsive
          className="w-full text-sm text-default-400 mb-4">
          <CopyrightSection alignment="start">
            <NextLink href="/privacy-policy" className="hover:underline">
              {t('title.privacyPolicy')}
            </NextLink>
            <GoDotFill size={10} />
            <NextLink href="/terms-of-service" className="hover:underline">
              {t('title.termsOfService')}
            </NextLink>
          </CopyrightSection>
          <CopyrightSection>
            &copy; {currentYear} by {config.appName}
          </CopyrightSection>
          <CopyrightSection alignment="end">
            Build: {config.buildVersion}
          </CopyrightSection>
        </Ui.GridContainer>
      </Ui.FlexContainer>
    </Ui.SafetyContainer>
  );
};

export default MainFooter;

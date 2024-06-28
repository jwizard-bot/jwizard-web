/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { Link as ReactLink } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import config from '@/config';
import { Divider } from '@nextui-org/divider';
import { Button, Link } from '@nextui-org/react';
import BrandLogo from '../BrandLogo';
import DropdownWithIcons from '../dropdown/DropdownWithIcons';
import { commandsDropdownElements } from '../dropdown/dropdownData';
import Ui from '../ui';
import CopyrightParagraph from './CopyrightParagraph';
import LanguageToggleDropdown from './LanguageToggleDropdown';

const MainFooter: React.FC = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  const year = new Date().getFullYear();

  return (
    <Ui.SafetyContainer as="footer" className="bg-transparent">
      <Ui.FlexContainer col>
        <Ui.FlexContainer
          fullWidth
          toColOnSmallDevices
          justify="between"
          className="my-10 flex-col-reverse">
          <p className="sm:me-16 text-center sm:text-start text-default-500">
            {t('description')}
          </p>
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
              i18nKey="commandsDropdown"
              elements={commandsDropdownElements}
              placement={isSmallScreen ? 'top' : 'top-start'}
            />
            <Ui.TransparentButton
              as={ReactLink}
              to="/contribute"
              className="p-0">
              {t('contribute')}
            </Ui.TransparentButton>
          </Ui.FlexContainer>
          <Ui.FlexContainer gap className="w-full sm:w-fit">
            <Button
              href="/"
              isExternal
              size="sm"
              color="primary"
              as={Link}
              className="basis-[50%] sm:basis-auto">
              {t('addToDiscord')}
            </Button>
            <LanguageToggleDropdown />
          </Ui.FlexContainer>
        </Ui.FlexContainer>
        <Divider className="my-6" />
        <Ui.FlexContainer
          fullWidth
          toColOnSmallDevices
          justify="between"
          className="text-sm text-default-400 mb-4">
          <CopyrightParagraph>&copy; {year} by JWizard</CopyrightParagraph>
          <CopyrightParagraph>Build: {config.buildVersion}</CopyrightParagraph>
        </Ui.FlexContainer>
      </Ui.FlexContainer>
    </Ui.SafetyContainer>
  );
};

export default MainFooter;

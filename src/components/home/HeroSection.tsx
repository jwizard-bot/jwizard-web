/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { RxExternalLink } from 'react-icons/rx';
import config from '@/config';
import { Link } from '@nextui-org/react';
import MeshBackgroundImage from '../MeshBackgroundImage';
import Ui from '../ui';

const HeroSection: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();
  return (
    <Ui.SafetyContainer className="relative">
      <MeshBackgroundImage />
      <Ui.FlexContainer col fullWidth align="center" className="my-48">
        <Ui.ContentHeader size="xl" className="sm:mb-2">
          {config.appName}
        </Ui.ContentHeader>
        <Ui.Paragraph>{t('heroDescription')}</Ui.Paragraph>
        <Ui.FlexContainer
          gap
          toColOnSmallDevices
          fullWithOnSmallDevices
          className="mt-8">
          <Ui.Button
            as={Link}
            href="/"
            isExternal
            size="md"
            variant="bordered"
            fullWithOnSmallDevices
            endContent={<RxExternalLink size={20} />}
            className="flex-shrink-0">
            {t('addToDiscord')}
          </Ui.Button>
          <Ui.Button
            as={NextLink}
            href="/commands"
            size="md"
            fullWithOnSmallDevices
            endContent={<GoArrowRight size={20} />}
            className="flex-shrink-0">
            {t('exploreCommands')}
          </Ui.Button>
        </Ui.FlexContainer>
      </Ui.FlexContainer>
    </Ui.SafetyContainer>
  );
};

export default HeroSection;

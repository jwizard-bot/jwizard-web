/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { RxExternalLink } from 'react-icons/rx';
import { Button, Link } from '@nextui-org/react';
import MeshBackgroundImage from '../MeshBackgroundImage';
import Ui from '../ui';

const HeroSection: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();
  return (
    <Ui.SafetyContainer className="relative">
      <MeshBackgroundImage />
      <Ui.FlexContainer col fullWidth align="center" className="my-48">
        <Ui.ContentHeader size="xl" className="sm:mb-2">
          JWizard
        </Ui.ContentHeader>
        <Ui.Paragraph i18nText="heroDescription" />
        <Ui.FlexContainer
          gap
          toColOnSmallDevices
          className="mt-8 w-full sm:w-fit">
          <Button
            as={Link}
            href="/"
            isExternal
            size="md"
            color="primary"
            endContent={<RxExternalLink size={20} />}
            className="text-lg sm:text-xl flex-shrink-0 w-full sm:w-fit">
            {t('addToDiscord')}
          </Button>
          <Button
            as={NextLink}
            href="/commands"
            size="md"
            variant="bordered"
            endContent={<GoArrowRight size={20} />}
            className="text-lg sm:text-xl flex-shrink-0 w-full sm:w-fit bg-primary-foreground">
            {t('exploreCommands')}
          </Button>
        </Ui.FlexContainer>
      </Ui.FlexContainer>
    </Ui.SafetyContainer>
  );
};

export default HeroSection;

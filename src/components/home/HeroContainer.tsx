/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { GoArrowRight } from 'react-icons/go';
import { RxExternalLink } from 'react-icons/rx';
import { Link as ReactLink } from 'react-router-dom';
import { Button, Link } from '@nextui-org/react';
import Ui from '../ui';

const HeroContainer: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['homePage']);

  return (
    <Ui.SafetyContainer className="relative">
      <img
        src="/bg/mesh.png"
        className="absolute top-20 sm:top-0 right-[50%] translate-x-[50%] w-full sm:w-[900px] opacity-15 -z-[1]"
      />
      <Ui.FlexContainer col fullWidth align="center" className="my-48">
        <Ui.ContentHeader size="xl" className="sm:mb-4">
          JWizard
        </Ui.ContentHeader>
        <Ui.Paragraph
          i18nText="heroDescription"
          i18nTranslations={['homePage']}
        />
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
            as={ReactLink}
            to="/commands"
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

export default HeroContainer;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { RxExternalLink } from 'react-icons/rx';
import { Link as ReactLink } from 'react-router-dom';
import config from '@/config';
import { Button, Link } from '@nextui-org/react';
import ContributorProfiles from '../contributors/ContributorProfiles';
import Ui from '../ui';

const ContributeSection: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['homePage']);

  return (
    <Ui.SafetyContainer className="mb-8 sm:mb-32">
      <Ui.FlexContainer col className="sm:items-center">
        <Ui.ContentHeader
          i18nText="contribute"
          translationSources={['homePage']}
          size="md"
        />
        <Ui.Paragraph
          i18nText="contributeSlogan"
          i18nTranslations={['homePage']}
          className="md:max-w-[60%] sm:text-center"
        />
        <Ui.FlexContainer
          gap
          toColOnSmallDevices
          className="w-full sm:w-fit mt-6">
          <Button
            as={ReactLink}
            to="/contribute"
            size="md"
            color="primary"
            className="text-lg sm:text-xl flex-shrink-0 w-full sm:w-fit"
            endContent={<GoArrowRight />}>
            {t('findMore')}
          </Button>
          <Button
            as={Link}
            href={config.orgLink}
            isExternal
            size="md"
            variant="bordered"
            startContent={<BsGithub />}
            endContent={<RxExternalLink size={20} />}
            className="text-lg sm:text-xl flex-shrink-0 w-full sm:w-fit">
            Github
          </Button>
        </Ui.FlexContainer>
      </Ui.FlexContainer>
      <ContributorProfiles />
    </Ui.SafetyContainer>
  );
};

export default ContributeSection;

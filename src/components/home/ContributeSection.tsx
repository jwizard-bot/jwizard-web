/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { RxExternalLink } from 'react-icons/rx';
import config from '@/config';
import { getServerQuery } from '@/query/server';
import { ContributorsDataResDto } from '@/query/server/types/contributors';
import { Button, Link } from '@nextui-org/react';
import { ContributorProfiles } from '../contributors';
import Ui from '../ui';

const ContributeSection: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();

  const { data: contributors } = await getServerQuery<ContributorsDataResDto>({
    queryString: '/api/v1/contributor/all',
    errorMessage: 'Unable to fetch contributors in home page section',
  });

  return (
    <Ui.SafetyContainer className="mb-8 sm:mb-32">
      <Ui.FlexContainer col className="sm:items-center">
        <Ui.ContentHeader
          headingVariant="h2"
          i18nText="title.contribute"
          size="md"
        />
        <Ui.Paragraph
          i18nText="contributeSlogan"
          className="md:max-w-[60%] sm:text-center"
        />
        <Ui.FlexContainer
          gap
          toColOnSmallDevices
          className="w-full sm:w-fit mt-6">
          <Button
            as={NextLink}
            href="/contribute"
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
      <ContributorProfiles data={contributors} />
    </Ui.SafetyContainer>
  );
};

export default ContributeSection;

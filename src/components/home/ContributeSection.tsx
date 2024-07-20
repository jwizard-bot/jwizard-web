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
import { Link } from '@nextui-org/react';
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
        <Ui.ContentHeader headingVariant="h2" size="md">
          {t('contributeHeader')}
        </Ui.ContentHeader>
        <Ui.Paragraph className="md:max-w-[60%] sm:text-center">
          {t('contributeSlogan')}
        </Ui.Paragraph>
        <Ui.FlexContainer
          gap
          toColOnSmallDevices
          fullWithOnSmallDevices
          className="mt-6">
          <Ui.Button
            as={NextLink}
            href="/contribute"
            size="md"
            fullWithOnSmallDevices
            className="flex-shrink-0"
            endContent={<GoArrowRight />}>
            {t('findMore')}
          </Ui.Button>
          <Ui.Button
            as={Link}
            href={config.orgLink}
            isExternal
            fullWithOnSmallDevices
            size="md"
            variant="bordered"
            startContent={<BsGithub />}
            endContent={<RxExternalLink size={20} />}
            className="flex-shrink-0">
            Github
          </Ui.Button>
        </Ui.FlexContainer>
      </Ui.FlexContainer>
      <ContributorProfiles data={contributors} />
    </Ui.SafetyContainer>
  );
};

export default ContributeSection;

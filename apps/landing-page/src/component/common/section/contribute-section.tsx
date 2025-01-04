/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { BsGithub } from 'react-icons/bs';
import NextLink from 'next/link';
import { ContributorProfiles } from '@/component/common/contributor-profiles';
import config from '@/config';
import { getRootTranslations } from '@/i18n/server';
import { getServerQuery } from '@/query';
import { ContributorsDataResDto } from '@/query/type';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';

const ContributeSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();

  const { data: contributors } = await getServerQuery<ContributorsDataResDto>({
    queryString: '/v1/contributor/all',
    errorMessage: 'Unable to fetch contributors in home page section',
  });

  return (
    <SafetyContainer className="mb-8 sm:mb-32">
      <FlexContainer col className="sm:items-center">
        <Header headingVariant="h2" size="md">
          {t('contributeHeader')}
        </Header>
        <Paragraph className="md:max-w-[60%] sm:text-center">{t('contributeSlogan')}</Paragraph>
        <FlexContainer gap toColOnSmallDevices fullWidthOnSmallDevices className="mt-6">
          <Button asChild size="lg" fluid>
            <NextLink href="/about" className="w-full">
              {t('findMore')}
              <ArrowRight />
            </NextLink>
          </Button>
          <Button asChild size="lg" variant="outline" fluid>
            <OuterLink to={config.orgLink} className="w-full">
              <BsGithub />
              Github
              <SquareArrowOutUpRight />
            </OuterLink>
          </Button>
        </FlexContainer>
      </FlexContainer>
      <ContributorProfiles data={contributors} />
    </SafetyContainer>
  );
};

export { ContributeSection };

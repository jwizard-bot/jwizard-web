/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { MeshBackgroundImage } from '@/component';
import config from '@/config';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();
  return (
    <SafetyContainer className="relative">
      <MeshBackgroundImage />
      <FlexContainer col fullWidth align="center" className="my-48">
        <Header size="xl" className="sm:mb-2">
          {config.appName}
        </Header>
        <Paragraph>{t('heroDescription')}</Paragraph>
        <FlexContainer gap toColOnSmallDevices fullWidthOnSmallDevices className="mt-8">
          <Button asChild size="lg" variant="outline" fluid>
            <NextLink href="/join" className="w-full">
              {t('addToDiscord')}
            </NextLink>
          </Button>
          <Button asChild size="lg" fluid>
            <NextLink href="/commands" className="w-full">
              {t('exploreCommands')}
              <ArrowRight />
            </NextLink>
          </Button>
        </FlexContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { HeroSection };

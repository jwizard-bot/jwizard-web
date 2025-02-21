import * as React from 'react';
import NextLink from 'next/link';
import { getRootTranslations } from '@/i18n/server';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowRight } from 'lucide-react';

const SomethingNotWorkingSection: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();

  return (
    <SafetyContainer className="mb-8 sm:mb-32">
      <FlexContainer col className="sm:items-center">
        <Header headingVariant="h2" size="md">
          {t('somethingNotWorkingHeader')}
        </Header>
        <Paragraph className="md:max-w-[60%] sm:text-center">
          {t('somethingNotWorkingDescription')}
        </Paragraph>
        <FlexContainer gap="normal" toColOnSmallDevices fullWidthOnSmallDevices className="mt-6">
          <Button asChild size="lg" fluid>
            <NextLink href="/status/bot" className="w-full">
              {t('checkServicesStatus')}
              <ArrowRight />
            </NextLink>
          </Button>
          <Button asChild size="lg" variant="outline" fluid>
            <NextLink href="/status/check" className="w-full">
              {t('checkAvailability')}
              <ArrowRight />
            </NextLink>
          </Button>
        </FlexContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { SomethingNotWorkingSection };

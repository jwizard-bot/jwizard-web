/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import NextLink from 'next/link';
import StatusBadge from '@/component/footer/status-badge';
import { ThemeSwitch } from '@/component/footer/theme-switch';
import config from '@/config';
import { getRootTranslations } from '@/i18n/server';
import { Logo } from '@jwizard-web/ui/component/logo';
import { FlexContainer, GridContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { Separator } from '@jwizard-web/ui/widget/separator';
import { Dot } from 'lucide-react';
import { CopyrightSection } from './copyright-section';

const MainFooter: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();

  const currentYear = new Date().getFullYear();

  const shortSHA = config.buildVersion?.substring(0, 7) || 'UNKNOWN';
  const vcsLink = `${config.orgLink}/${config.repositoryName}/tree/${config.buildVersion}`;

  return (
    <SafetyContainer as="footer" className="bg-transparent">
      <FlexContainer col>
        <FlexContainer
          fullWidth
          toColOnSmallDevices
          justify="between"
          className="mt-10 sm:my-10 flex-col-reverse">
          <Paragraph size="md" className="sm:me-16 text-center sm:text-start">
            {t('description')}
          </Paragraph>
          <NextLink href="/" className="flex-shrink-0">
            <Logo
              appName={config.appName}
              sizePx={50}
              classNames={{
                root: 'mb-6 sm:mb-0',
                text: 'text-3xl',
              }}
            />
          </NextLink>
        </FlexContainer>
        <FlexContainer fullWidth toColOnSmallDevices justify="between" align="center">
          <FlexContainer gap className="my-8 sm:my-0">
            <StatusBadge />
          </FlexContainer>
          <FlexContainer gap className="w-full sm:w-fit">
            <FlexContainer className="basis-[50%] sm:basis-auto">
              <ThemeSwitch />
            </FlexContainer>
            <Button asChild className="basis-[50%] sm:basis-auto">
              <NextLink href="/join">{t('addToDiscord')}</NextLink>
            </Button>
          </FlexContainer>
        </FlexContainer>
        <Separator className="my-8" />
        <GridContainer responsive className="w-full text-sm text-muted-foreground mb-4">
          <CopyrightSection alignment="start">
            <NextLink href="/privacy-policy" className="underline hover:no-underline">
              {t('privacyPolicy')}
            </NextLink>
            <Dot size={20} />
            <NextLink href="/terms-of-service" className="underline hover:no-underline">
              {t('termsOfService')}
            </NextLink>
          </CopyrightSection>
          <CopyrightSection>
            &copy; {currentYear} by {config.appName}
          </CopyrightSection>
          <CopyrightSection alignment="end">
            <span>
              Build:{' '}
              <OuterLink to={vcsLink} underlined>
                {shortSHA}
              </OuterLink>
            </span>
          </CopyrightSection>
        </GridContainer>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { MainFooter };

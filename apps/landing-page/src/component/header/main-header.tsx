'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useEffect, useState, useTransition } from 'react';
import { BsGithub } from 'react-icons/bs';
import { useLocale, useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderNavigation } from '@/component/header/header-navigation';
import { MobileHeader } from '@/component/header/mobile-header';
import config from '@/config';
import { saveCookieLanguage } from '@/i18n/cookie';
import { useLockBodyScroll } from '@custom-react-hooks/use-lock-body-scroll';
import { Language } from '@jwizard-web/lib/i18n';
import { cn } from '@jwizard-web/lib/util';
import { LangSelect } from '@jwizard-web/ui/component/lang-select';
import { Logo } from '@jwizard-web/ui/component/logo';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { useSmallScreen } from '@jwizard-web/ui/hook/use-small-screen';
import { Button } from '@jwizard-web/ui/widget/button';
import { Hamburger } from '@jwizard-web/ui/widget/hamburger';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@jwizard-web/ui/widget/tooltip';

const MainHeader: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLanguage = useLocale();
  const [isPending, startTransition] = useTransition();
  const isSmallScreen = useSmallScreen();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useLockBodyScroll(isMenuOpen);

  const onChangeLanguage = (value: string): void => {
    startTransition(() => saveCookieLanguage(value as Language));
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen]);

  return (
    <>
      <FlexContainer
        fullWidth
        justify="center"
        align="center"
        className={cn('sticky', 'z-40', 'top-0', 'bg-background')}>
        <SafetyContainer as="header">
          <FlexContainer justify="between" align="center">
            <FlexContainer align="center" gap="normal">
              <Hamburger
                opened={isMenuOpen}
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="lg:hidden"
              />
              <NextLink href="/">
                <Logo appName={config.appName} />
              </NextLink>
              <FlexContainer className="hidden lg:flex">
                <HeaderNavigation />
              </FlexContainer>
            </FlexContainer>
            <FlexContainer align="center" gap="normal">
              <Button asChild className="hidden lg:flex">
                <NextLink href="/join">{t('addToDiscord')}</NextLink>
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button asChild className="hidden lg:flex">
                      <OuterLink to={config.orgLink}>
                        <BsGithub />
                      </OuterLink>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{t('goToGithubRepository')}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <LangSelect
                lang={currentLanguage as Language}
                onChangeLang={onChangeLanguage}
                disabled={isPending}
              />
              <Button asChild>
                <OuterLink to={config.dashboardUrl + '/login'}>{t('login')}</OuterLink>
              </Button>
            </FlexContainer>
          </FlexContainer>
        </SafetyContainer>
      </FlexContainer>
      {isMenuOpen && <MobileHeader />}
    </>
  );
};

export { MainHeader };

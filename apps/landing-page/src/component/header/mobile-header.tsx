'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import { menuElements } from '@/component/header/menu-elements';
import { LinkWrapper } from '@/component/link-wrapper';
import config from '@/config';
import { toggleTheme } from '@/theme/toggle-theme';
import { ThemeKey, availableThemes } from '@jwizard-web/ui/component/theme-select';
import { FlexContainer, FloatingContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { ScrollArea } from '@jwizard-web/ui/widget/scroll-area';
import { Separator } from '@jwizard-web/ui/widget/separator';
import { SquareArrowOutUpRight } from 'lucide-react';

const MobileHeader: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  return (
    <FloatingContainer
      mode="fixed"
      alignmentY="top"
      className="w-full h-screen bg-background pt-0"
      zIndex={30}>
      <ScrollArea className="w-full h-[calc(100%-theme(space.20))] mt-20 p-3">
        <FlexContainer gap fullHeight col justify="between">
          <FlexContainer col gap fullWidth>
            {menuElements.map(({ triggerI18nKey, elements }) => (
              <FlexContainer key={triggerI18nKey} col gap fullWidth className="mb-4">
                <Header withoutMargin className="text-primary">
                  {t(`mainMenu.${triggerI18nKey}.header`)}
                </Header>
                {elements.map(({ link, insideRouter, i18nKey }) => (
                  <Button
                    key={i18nKey}
                    asChild
                    size="md"
                    variant="secondary"
                    className="w-full justify-start">
                    <LinkWrapper href={link} insideRouter={insideRouter}>
                      {t(`mainMenu.${triggerI18nKey}.content.${i18nKey}.header`)}
                    </LinkWrapper>
                  </Button>
                ))}
              </FlexContainer>
            ))}
          </FlexContainer>
          <FlexContainer col gap fullWidth>
            <Separator />
            <Button className="w-full" size="md" onClick={() => setTheme(toggleTheme(theme))}>
              {availableThemes[theme as ThemeKey]}
              {t(`themes.${theme}`)}
            </Button>
            <Button asChild variant="outline" size="md" className="w-full">
              <OuterLink to={config.orgLink}>
                <BsGithub />
                {t('goToGithubRepository')}
                <SquareArrowOutUpRight />
              </OuterLink>
            </Button>
            <Button asChild variant="outline" size="md" className="w-full">
              <NextLink href="/join">
                <BsDiscord />
                {t('addToDiscord')}
              </NextLink>
            </Button>
          </FlexContainer>
        </FlexContainer>
      </ScrollArea>
    </FloatingContainer>
  );
};

export { MobileHeader };

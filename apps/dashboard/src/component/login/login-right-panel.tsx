import * as React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { LanguageDropdown, ThemeDropdown } from '@/component';
import { FooterOuterLink } from '@/component/login/footer-outer-link';
import { LoginBgGradient } from '@/component/login/login-bg-gradient';
import config from '@/config';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { Separator } from '@jwizard-web/ui/widget/separator';

const LoginRightPanel: React.FC = (): React.ReactElement => {
  const { t } = usePageTranslations('login');

  return (
    <FlexContainer col grow className={cn('basis-1', 'sm:basis-1/2', 'min-h-full', 'min-h-screen')}>
      <LoginBgGradient side="right" />
      <FlexContainer fullWidth justify="end" className={cn('p-5', 'w-full')} gap="normal">
        <FlexContainer fullWidthOnSmallDevices>
          <ThemeDropdown />
        </FlexContainer>
        <FlexContainer fullWidthOnSmallDevices>
          <LanguageDropdown />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justify="center" align="center" fullWidth grow>
        <FlexContainer
          col
          align="center"
          gap="small"
          className={cn('max-w-[300px]', 'text-center', 'my-8')}>
          <Header font="basic" size="xs" margin="none">
            {t('welcomeTitle')} {config.appName}!
          </Header>
          <Paragraph size="sm" className="mb-8">
            {t('welcomeParagraph')}
          </Paragraph>
          <Button asChild className="w-full">
            <OuterLink to={config.apiUrl + '/oauth/login'} newPage={false}>
              <FaDiscord />
              {t('loginViaDiscord')}
            </OuterLink>
          </Button>
          <Separator className="my-8" />
          <Paragraph size="sm">
            {t('agreeStatement')}{' '}
            <FooterOuterLink urlSuffix="/terms-of-service" i18nTextContent="termsOfService" />{' '}
            {t('and')}{' '}
            <FooterOuterLink urlSuffix="/privacy-policy" i18nTextContent="privacyPolicy" />.
          </Paragraph>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export { LoginRightPanel };

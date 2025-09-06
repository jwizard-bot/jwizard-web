import * as React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { LanguageDropdown, ThemeDropdown } from '@/component';
import { FooterOuterLink } from '@/component/login/footer-outer-link';
import { LoginBgGradient } from '@/component/login/login-bg-gradient';
import config from '@/config';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { cn, getBuildVersion } from '@jwizard-web/lib/util';
import { LogoOnly } from '@jwizard-web/ui/component/logo-only';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { Separator } from '@jwizard-web/ui/widget/separator';

const LoginPanel: React.FC = (): React.ReactElement => {
  const { t } = usePageTranslations('login');

  const { shortSHA, vcsLink } = getBuildVersion(config);

  return (
    <FlexContainer col grow className={cn('min-h-full', 'min-h-screen')}>
      <LoginBgGradient side="left" />
      <LoginBgGradient side="right" />
      <OuterLink to={config.landingPageUrl} newPage={false} className={cn('hidden', 'sm:block')}>
        <LogoOnly classNames={cn('absolute', 'top-8', 'left-8')} />
      </OuterLink>
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
          <Header size="xs" margin="none">
            {t('welcomeTitle')} {config.appName}!
          </Header>
          <Paragraph size="sm" className="mb-8">
            {t('welcomeParagraph')}
          </Paragraph>
          <Button asChild className="w-full">
            <OuterLink to={config.apiUrl + '/oauth/discord/login'} newPage={false}>
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
      <FlexContainer justify="center" fullWidth className="mb-10">
        <Paragraph size="sm" className="text-center">
          {t('buildVersion')}:{' '}
          <OuterLink to={vcsLink} underlined>
            {shortSHA}
          </OuterLink>
          {}
        </Paragraph>
      </FlexContainer>
    </FlexContainer>
  );
};

export { LoginPanel };

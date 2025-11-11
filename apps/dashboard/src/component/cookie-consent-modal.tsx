import * as React from 'react';
import { environment } from '@/env';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { CookieConsentModalBase } from '@jwizard-web/ui/component/cookie-consent-modal-base';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

const {
  url: { landingPage },
} = environment;

const CookieConsentModal: React.FC = (): React.ReactElement => {
  const { t } = usePageTranslations();

  return (
    <CookieConsentModalBase onTranslate={i18nKey => t(i18nKey)}>
      <OuterLink to={landingPage + '/privacy-policy'}>{t('cookies.privacyPolicy')}</OuterLink>
    </CookieConsentModalBase>
  );
};

export { CookieConsentModal };

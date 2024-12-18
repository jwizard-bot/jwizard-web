/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import config from '@/config';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { CookieConsentModalBase } from '@jwizard-web/ui/component/cookie-consent-modal-base';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

const CookieConsentModal: React.FC = (): React.ReactElement => {
  const { t } = usePageTranslations();
  return (
    <CookieConsentModalBase onTranslate={i18nKey => t(i18nKey)}>
      <OuterLink to={config.landingPageUrl + '/privacy-policy'}>
        {t('cookies.privacyPolicy')}
      </OuterLink>
    </CookieConsentModalBase>
  );
};

export { CookieConsentModal };

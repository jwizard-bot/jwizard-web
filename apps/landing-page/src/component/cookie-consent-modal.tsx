'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { CookieConsentModalBase } from '@jwizard-web/ui/component/cookie-consent-modal-base';

const CookieConsentModal: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  return (
    <CookieConsentModalBase onTranslate={i18nKey => t(i18nKey)}>
      <NextLink href="/privacy-policy">{t('cookies.privacyPolicy')}</NextLink>
    </CookieConsentModalBase>
  );
};

export { CookieConsentModal };

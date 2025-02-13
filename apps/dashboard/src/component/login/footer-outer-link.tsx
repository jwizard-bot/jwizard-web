/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import config from '@/config';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { cn } from '@jwizard-web/lib/util';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

type Props = {
  urlSuffix: string;
  i18nTextContent: string;
};

const FooterOuterLink: React.FC<Props> = ({ urlSuffix, i18nTextContent }): React.ReactElement => {
  const { t } = usePageTranslations('login');

  return (
    <OuterLink
      to={config.landingPageUrl + urlSuffix}
      className={cn('underline', 'hover:no-underline')}>
      {t(i18nTextContent)}
    </OuterLink>
  );
};

export { FooterOuterLink };

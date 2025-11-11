import * as React from 'react';
import { environment } from '@/env';
import { usePageTranslations } from '@/hooks/use-page-translations';
import { cn } from '@jwizard-web/lib/util';
import { OuterLink } from '@jwizard-web/ui/widget/outside-link';

const {
  url: { landingPage },
} = environment;

type Props = {
  urlSuffix: string;
  i18nTextContent: string;
};

const FooterOuterLink: React.FC<Props> = ({ urlSuffix, i18nTextContent }): React.ReactElement => {
  const { t } = usePageTranslations('login');

  return (
    <OuterLink to={landingPage + urlSuffix} className={cn('underline', 'hover:no-underline')}>
      {t(i18nTextContent)}
    </OuterLink>
  );
};

export { FooterOuterLink };

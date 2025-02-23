'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { RefreshCcw } from 'lucide-react';

const ReloadPageSection: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const reloadPath = () => {
    // we must replace existing path, refresh NOT WORKING in next layouts
    router.replace(pathname, { scroll: false });
    router.refresh();
  };

  return (
    <SafetyContainer>
      <FlexContainer justify="end" className="mt-6">
        <Button onClick={reloadPath}>
          {t('reloadStatus')}
          <RefreshCcw />
        </Button>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { ReloadPageSection };

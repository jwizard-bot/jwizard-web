'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useRouterRefresh } from '@/hook/use-router-refresh';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { showToast } from '@jwizard-web/ui/widget/toast-notification';
import { RefreshCcw } from 'lucide-react';

const ReloadPageSection: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const [pageRefresh, isPending] = useRouterRefresh();

  const reloadPath = () => {
    // we must replace existing path, refresh NOT WORKING in next layouts
    pageRefresh().then(() => showToast({ title: t('reloadStatusResponse') }));
  };

  return (
    <SafetyContainer>
      <FlexContainer justify="end" className="mt-6">
        <Button spinner={isPending} onClick={reloadPath}>
          {t('reloadStatus')}
          <RefreshCcw />
        </Button>
      </FlexContainer>
    </SafetyContainer>
  );
};

export { ReloadPageSection };

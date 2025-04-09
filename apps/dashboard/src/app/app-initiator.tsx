import * as React from 'react';
import { useRevalidateSessionQuery } from '@/redux/api/slice/session-api-slice';
import { PageSpinner } from '@jwizard-web/ui/component/page-spinner';

// insert here all one-time loaders (at application startup)
const AppInitiator: React.FC = (): React.ReactElement | null => {
  const { isLoading } = useRevalidateSessionQuery();

  if (isLoading) {
    return <PageSpinner />;
  }

  return null;
};

export { AppInitiator };

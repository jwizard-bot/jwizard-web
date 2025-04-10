import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useMainSlice } from '@/redux/slice/main-slice';
import { PageSpinner } from '@jwizard-web/ui/component/page-spinner';

type Props = {
  redirectTo?: string;
  transformFc?: (loggedIn: boolean) => boolean;
  PageComponent: React.ComponentType;
};

const RouteProtector: React.FC<Props> = ({
  redirectTo = '/login',
  transformFc = loggedIn => loggedIn,
  PageComponent,
}): React.ReactElement => {
  const { loggedIn, initialized } = useMainSlice();

  // show page spinner, if is not yet initialized
  if (!initialized) {
    return <PageSpinner />;
  }

  if (transformFc(loggedIn)) {
    return <PageComponent />;
  }

  return <Navigate to={redirectTo} replace />;
};

export { RouteProtector };

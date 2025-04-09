import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useMainSlice } from '@/redux/slice/main-slice';

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

  if (!initialized || transformFc(loggedIn)) {
    return <PageComponent />;
  }

  return <Navigate to={redirectTo} replace />;
};

export { RouteProtector };

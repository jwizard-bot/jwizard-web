import * as React from 'react';
import { EnvironmentProvider } from '@/env/environment-context';
import { getEnv } from '@/env/get-env';

type Props = {
  children: React.ReactNode;
};

const WithEnvironment: React.FC<Props> = ({ children }) => {
  const environment = getEnv();

  return <EnvironmentProvider environment={environment}>{children}</EnvironmentProvider>;
};

export { WithEnvironment };

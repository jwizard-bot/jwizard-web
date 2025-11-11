'use client';

import * as React from 'react';
import { createContext } from 'react';
import { Environment } from '@/env/environment';

const EnvironmentContext = createContext<Environment | null>(null);

type Props = {
  environment: Environment;
  children: React.ReactNode;
};

const EnvironmentProvider: React.FC<Props> = ({ environment, children }): React.ReactElement => (
  <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
);

export { EnvironmentContext, EnvironmentProvider };

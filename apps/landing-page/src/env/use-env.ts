'use client';

import { useContext } from 'react';
import { EnvironmentContext } from '@/env/environment-context';

const useEnv = () => {
  const context = useContext(EnvironmentContext);
  if (!context) {
    throw new Error('useEnv must be used within an EnvironmentProvider');
  }
  return context;
};

export { useEnv };

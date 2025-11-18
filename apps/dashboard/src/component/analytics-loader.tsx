import * as React from 'react';
import { environment } from '@/env';
import { UmamiAnalyticsLoader } from '@jwizard-web/lib/analytics';

const {
  analytics: { umami },
} = environment;

const AnalyticsLoader: React.FC = (): React.ReactElement => (
  <>
    <UmamiAnalyticsLoader {...umami} />
  </>
);

export { AnalyticsLoader };

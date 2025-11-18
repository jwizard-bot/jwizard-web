import * as React from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { createRoutesFromChildren, matchRoutes } from 'react-router-dom';
import { environment } from '@/env';
import { sentryConfig } from '@jwizard-web/lib/analytics';
import * as Sentry from '@sentry/react';

const {
  analytics: { sentry },
  git: { buildVersion },
} = environment;

if (sentry.dsn) {
  Sentry.init({
    release: `jwizard-dashboard@${buildVersion}`,
    integrations: [
      Sentry.reactRouterV7BrowserTracingIntegration({
        useEffect: React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],
    ...sentryConfig(sentry.dsn),
  });
}

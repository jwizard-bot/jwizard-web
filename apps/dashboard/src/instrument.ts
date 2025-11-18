import * as React from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { createRoutesFromChildren, matchRoutes } from 'react-router-dom';
import { environment } from '@/env';
import { sentryConfig } from '@jwizard-web/lib/analytics';
import * as Sentry from '@sentry/react';

const {
  analytics: { sentry },
} = environment;

if (sentry.dsn) {
  Sentry.init({
    integrations: [
      Sentry.reactRouterV7BrowserTracingIntegration({
        useEffect: React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
      Sentry.browserTracingIntegration(),
    ],
    ...sentryConfig(sentry.dsn),
  });
}

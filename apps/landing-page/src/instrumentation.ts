import { getEnv } from '@/env';
import { sentryConfig } from '@jwizard-web/lib/analytics';
import * as Sentry from '@sentry/nextjs';

export async function register() {
  const {
    analytics: { sentry },
  } = getEnv();

  if (!sentry.dsn) {
    return;
  }
  Sentry.init({
    ...sentryConfig(sentry.dsn),
  });
}

export const onRequestError = Sentry.captureRequestError;

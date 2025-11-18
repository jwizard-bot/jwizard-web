import { getMetaContent } from '@/env';
import { sentryConfig } from '@jwizard-web/lib/analytics';
import * as Sentry from '@sentry/nextjs';

const sentryDsn = getMetaContent('sentry:dsn');

if (sentryDsn) {
  Sentry.init({
    ...sentryConfig(sentryDsn),
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

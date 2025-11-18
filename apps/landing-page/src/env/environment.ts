// environment variables for server and client side, DO NOT ENTER HERE SECRETS!
import { EnvironmentBase, environmentBase, wrapAsNotDef } from '@jwizard-web/lib/env';

type Environment = {
  url: {
    canonical: string;
    api: string;
    dashboard: string;
  };
} & EnvironmentBase;

const sentryDsn = wrapAsNotDef(process.env.JWIZARD_ANALYTICS_SENTRY_DSN);

const environment: Environment = {
  url: {
    canonical: process.env.JWIZARD_CANONICAL_URL,
    api: process.env.JWIZARD_API_URL,
    dashboard: process.env.JWIZARD_DASHBOARD_URL,
  },
  analytics: {
    umami: {
      url: wrapAsNotDef(process.env.JWIZARD_ANALYTICS_UMAMI_URL),
      websiteId: wrapAsNotDef(process.env.JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID),
    },
    sentry: {
      dsn: sentryDsn,
    },
  },
  ...environmentBase(process.env.JWIZARD_BURNED_BUILD_VERSION),
};

// environment variables only for server purposes (not included in browser bundle,
// ENTER HERE SECRETS)

type ServerEnvironment = {
  packagesRootPath: string;
};

const serverEnvironment: ServerEnvironment = {
  packagesRootPath: process.env.JWIZARD_BURNED_PACKAGES_ROOT_PATH,
};

// meta environments are visible for client which not yet initialized react (or in non-react
// components code)

const metaEnvironment = {
  ...(sentryDsn ? { 'sentry:dsn': sentryDsn } : {}),
};

type MetaKeys = keyof typeof metaEnvironment;

export { type Environment, type MetaKeys, environment, serverEnvironment, metaEnvironment };

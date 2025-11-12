// environment variables for server and client side, DO NOT ENTER HERE SECRETS!
import { EnvironmentBase, environmentBase } from '@jwizard-web/lib/env';

type Environment = {
  url: {
    canonical: string;
    api: string;
    dashboard: string;
  };
} & EnvironmentBase;

const environment: Environment = {
  url: {
    canonical: process.env.JWIZARD_CANONICAL_URL,
    api: process.env.JWIZARD_API_URL,
    dashboard: process.env.JWIZARD_DASHBOARD_URL,
  },
  analytics: {
    umami: {
      url: process.env.JWIZARD_ANALYTICS_UMAMI_URL,
      websiteId: process.env.JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID,
    },
  },
  ...environmentBase(process.env.JWIZARD_BURNED_BUILD_VERSION),
};

export { type Environment, environment };

import { EnvironmentBase, environmentBase } from '@jwizard-web/lib/env';

type Environment = {
  isProd: boolean;
  url: {
    canonical?: string;
    landingPage?: string;
  };
};

const environment: Environment & EnvironmentBase = {
  isProd: process.env.JWIZARD_IS_PROD,
  url: {
    canonical: window.jw.JWIZARD_CANONICAL_URL,
    landingPage: window.jw.JWIZARD_LANDING_PAGE_URL,
  },
  analytics: {
    umami: {
      url: window.jw.JWIZARD_ANALYTICS_UMAMI_URL,
      websiteId: window.jw.JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID,
    },
  },
  ...environmentBase(process.env.JWIZARD_BUILD_VERSION),
};

export { environment };

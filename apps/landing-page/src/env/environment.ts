import { EnvironmentBase, environmentBase } from '@jwizard-web/lib/env';

type Environment = {
  url: {
    canonical: string;
    api: string;
    dashboard: string;
  };
  packagesRootPath: string;
} & EnvironmentBase;

const environment: Environment = {
  url: {
    canonical: process.env.JWIZARD_CANONICAL_URL,
    api: process.env.JWIZARD_API_URL,
    dashboard: process.env.JWIZARD_DASHBOARD_URL,
  },
  packagesRootPath: process.env.JWIZARD_BURNED_PACKAGES_ROOT_PATH,
  ...environmentBase(process.env.JWIZARD_BURNED_BUILD_VERSION),
};

export { type Environment, environment };

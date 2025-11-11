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
    canonical: process.env.NEXT_CANONICAL_URL,
    api: process.env.NEXT_API_URL,
    dashboard: process.env.NEXT_DASHBOARD_URL,
  },
  packagesRootPath: process.env.JW_BURNED_PACKAGES_ROOT_PATH,
  ...environmentBase(process.env.JW_BURNED_BUILD_VERSION),
};

export { type Environment, environment };

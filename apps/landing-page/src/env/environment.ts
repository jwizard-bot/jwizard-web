type Environment = {
  git: {
    organizationUrl: string;
    repositoryName: string;
    buildVersion: string;
  };
  url: {
    canonical?: string;
    api?: string;
    dashboard?: string;
  };
  packagesRootPath?: string;
};

const environment: Environment = {
  git: {
    organizationUrl: 'https://github.com/jwizard-bot',
    repositoryName: 'jwizard-web',
    buildVersion: process.env.JW_BURNED_BUILD_VERSION || 'UNKNOWN',
  },
  url: {
    canonical: process.env.NEXT_CANONICAL_URL,
    api: process.env.NEXT_API_URL,
    dashboard: process.env.NEXT_DASHBOARD_URL,
  },
  packagesRootPath: process.env.JW_BURNED_PACKAGES_ROOT_PATH,
};

export { type Environment, environment };

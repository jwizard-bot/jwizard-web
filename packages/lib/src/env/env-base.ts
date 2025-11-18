type Environment = {
  git: {
    organizationUrl: string;
    repositoryName: string;
    buildVersion: string;
  };
};

type EnvironmentBase = {
  analytics: {
    umami: {
      url?: string;
      websiteId?: string;
    };
    sentry: {
      dsn?: string;
    };
  };
} & Environment;

const environmentBase = (buildVersion: string): Environment => ({
  git: {
    organizationUrl: 'https://github.com/jwizard-bot',
    repositoryName: 'jwizard-web',
    buildVersion,
  },
});

const wrapAsNotDef = (value?: string): string | undefined => {
  if (!value || value === 'undefined' || value === 'null') {
    return undefined;
  }
  return value;
};

export { type EnvironmentBase, environmentBase, wrapAsNotDef };

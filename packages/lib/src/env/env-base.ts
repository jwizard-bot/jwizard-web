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
  };
} & Environment;

const environmentBase = (buildVersion: string): Environment => ({
  git: {
    organizationUrl: 'https://github.com/jwizard-bot',
    repositoryName: 'jwizard-web',
    buildVersion,
  },
});

export { type EnvironmentBase, environmentBase };

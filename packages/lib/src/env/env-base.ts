type EnvironmentBase = {
  git: {
    organizationUrl: string;
    repositoryName: string;
    buildVersion: string;
  };
};

const environmentBase = (buildVersion: string): EnvironmentBase => ({
  git: {
    organizationUrl: 'https://github.com/jwizard-bot',
    repositoryName: 'jwizard-web',
    buildVersion,
  },
});

export { type EnvironmentBase, environmentBase };

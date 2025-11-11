import { EnvironmentBase } from './env-base';

type BuildSignature = { shortSHA: string; vcsLink: string };

const getBuildVersion = ({
  git: { buildVersion, repositoryName, organizationUrl },
}: EnvironmentBase): BuildSignature => {
  const shortSHA = buildVersion?.substring(0, 7) || 'UNKNOWN';
  let vcsLink = '';
  if (buildVersion && repositoryName && organizationUrl) {
    vcsLink = `${organizationUrl}/${repositoryName}/tree/${buildVersion}`;
  }
  return { shortSHA, vcsLink };
};

export { getBuildVersion };

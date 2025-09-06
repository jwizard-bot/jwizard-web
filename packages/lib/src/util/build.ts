import { AppConfigType } from '../@types';

const getBuildVersion = (config: AppConfigType) => {
  const shortSHA = config.buildVersion?.substring(0, 7) || 'UNKNOWN';
  const vcsLink = `${config.orgLink}/${config.repositoryName}/tree/${config.buildVersion}`;
  return { shortSHA, vcsLink };
};

export { getBuildVersion };

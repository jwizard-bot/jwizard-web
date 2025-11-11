const getBuildVersion = (buildVersion?: string, repoName?: string, orgUrl?: string) => {
  const shortSHA = buildVersion?.substring(0, 7) || 'UNKNOWN';
  let vcsLink = '';
  if (buildVersion && repoName && orgUrl) {
    vcsLink = `${orgUrl}/${repoName}/tree/${buildVersion}`;
  }
  return { shortSHA, vcsLink };
};

export { getBuildVersion };

const config = {
  isProdMode: process.env.NODE_ENV === 'production',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'JWizard',
  selfReferUrl: process.env.NEXT_PUBLIC_SELF_REFER,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL,
  orgLink: process.env.NEXT_PUBLIC_ORG_LINK,
  repositoryName: process.env.NEXT_PUBLIC_REPOSITORY_NAME,
  buildVersion: process.env.NEXT_PUBLIC_BUILD_VERSION,
  packagesRootPath: process.env.PACKAGES_ROOT_PATH,
};

export default config;

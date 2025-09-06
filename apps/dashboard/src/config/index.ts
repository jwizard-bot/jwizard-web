import { AppConfigType } from '@jwizard-web/lib/@types';

type DashboardAppConfigType = {
  signalApiUrl?: string;
  landingPageUrl?: string;
};

const config: AppConfigType & DashboardAppConfigType = {
  isProdMode: process.env.NODE_ENV === 'production',
  appName: process.env.WEBPACK_APP_NAME || 'JWizard',
  selfReferUrl: process.env.WEBPACK_SELF_REFER,
  apiUrl: process.env.WEBPACK_API_URL,
  signalApiUrl: process.env.WEBPACK_SIGNAL_API_URL,
  landingPageUrl: process.env.WEBPACK_LANDING_PAGE_URL,
  orgLink: process.env.WEBPACK_ORG_LINK,
  repositoryName: process.env.WEBPACK_REPOSITORY_NAME,
  buildVersion: process.env.WEBPACK_BUILD_VERSION,
};

export default config;

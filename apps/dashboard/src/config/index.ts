const config = {
  isProdMode: process.env.NODE_ENV === 'production',
  appName: process.env.WEBPACK_APP_NAME || 'JWizard',
  selfReferUrl: process.env.WEBPACK_SELF_REFER,
  apiUrl: process.env.WEBPACK_API_URL,
  signalApiUrl: process.env.WEBPACK_SIGNAL_API_URL,
  landingPageUrl: process.env.WEBPACK_LANDING_PAGE_URL,
  buildVersion: process.env.WEBPACK_BUILD_VERSION,
};

export default config;

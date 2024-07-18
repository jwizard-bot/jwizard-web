/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const config = {
  isProdMode: process.env.NODE_ENV === 'production',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'JWizard',
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  signalApiUrl: process.env.NEXT_PUBLIC_SIGNAL_API_URL,
  orgLink: process.env.NEXT_PUBLIC_ORG_LINK,
  buildVersion: process.env.NEXT_PUBLIC_BUILD_VERSION || 'DEVELOPMENT',
  prereleaseMode: process.env.NEXT_PUBLIC_PRERELEASE_MODE || 'alpha',
};

export default config;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const config = {
  isProdMode: import.meta.env.MODE === 'production',
  apiUrl: import.meta.env.VITE_API_URL,
  signalApiUrl: import.meta.env.VITE_SIGNAL_API_URL,
  orgLink: import.meta.env.VITE_ORG_LINK,
  buildVersion: import.meta.env.VITE_BUILD_VERSION || 'DEVELOPMENT',
  prereleaseMode: import.meta.env.VITE_PRERELEASE_MODE,
};

export default config;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const config = {
  isProdMode: import.meta.env.MODE === 'production',
  apiUrl: import.meta.env.API_URL,
  signalApiUrl: import.meta.env.SIGNAL_API_URL,
  orgLink: import.meta.env.ORG_LINK,
  buildVersion: import.meta.env.BUILD_VERSION,
};

export default config;

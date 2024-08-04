/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const isProdMode = process.env.NODE_ENV === 'production';

const selfReferUrl = process.env.NEXT_PUBLIC_SELF_REFER;

const frontResServer = process.env.NEXT_PUBLIC_S3_PROXY_SERVER
  ? `${process.env.NEXT_PUBLIC_S3_PROXY_SERVER}/front`
  : '';

const config = {
  isProdMode,
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'JWizard',
  selfReferUrl,
  frontResServer,
  agnosticFrontResServer: isProdMode ? frontResServer : selfReferUrl,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  signalApiUrl: process.env.NEXT_PUBLIC_SIGNAL_API_URL,
  orgLink: process.env.NEXT_PUBLIC_ORG_LINK,
  buildVersion: process.env.NEXT_PUBLIC_BUILD_VERSION || 'DEVELOPMENT',
  prereleaseMode: process.env.NEXT_PUBLIC_PRERELEASE_MODE || 'alpha',
};

export default config;

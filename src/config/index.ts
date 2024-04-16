/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

const { IS_PROD, API_URL, INVITE_LINK, ORG_LINK, BUILD_VERSION } =
  window.jwizard;

type ConfigTypes = {
  isProdMode: boolean;
  apiUrl: string;
  inviteLink: string;
  orgLink: string;
  buildVersion: string;
};

declare global {
  interface Window {
    jwizard: {
      IS_PROD: string;
      API_URL: string;
      INVITE_LINK: string;
      ORG_LINK: string;
      BUILD_VERSION: string;
    };
  }
}

const config: ConfigTypes = {
  isProdMode: IS_PROD === 'true',
  apiUrl: API_URL,
  inviteLink: INVITE_LINK,
  orgLink: ORG_LINK,
  buildVersion: BUILD_VERSION,
};

export default config;

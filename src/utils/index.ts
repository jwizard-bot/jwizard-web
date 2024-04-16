/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import config from '@/config';

export const buildDiscordOpenIdRoute = (): string => {
  const params = new URLSearchParams();
  const urlWithParams = new URL(config.apiUrl);
  // TODO: query params for openID
  urlWithParams.search = params.toString();
  return urlWithParams.toString();
};

export const openNewTab = (url: string, currentTab: boolean = false): void => {
  window.open(url, currentTab ? '_self' : '_blank');
};

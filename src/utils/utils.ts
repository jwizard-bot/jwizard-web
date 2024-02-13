/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export const buildDiscordOpenIdRoute = (): string => {
  const params = new URLSearchParams();
  const urlWithParams = new URL(window.API_URL);
  // TODO: query params for openID
  urlWithParams.search = params.toString();
  return urlWithParams.toString();
};

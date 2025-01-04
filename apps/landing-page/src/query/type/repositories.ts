/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

type LastUpdate = {
  buildSha: string;
  buildDate: string;
  link: string;
};

type PrimaryLanguage = {
  name: string;
  color?: string;
};

export type RepositoryResDto = {
  name: string;
  slug: string;
  description: string;
  link: string;
  primaryLanguage: PrimaryLanguage;
  lastUpdate: LastUpdate;
};

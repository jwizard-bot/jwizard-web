/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export type ContributorData = {
  nickname: string;
  initials: string;
  profileLink: string;
  profileImageUrl: string;
  variants: string[];
};

export type ContributorsDataResDto = {
  contributors: ContributorData[];
  variants: string[];
  initVariant: string;
};

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

export type ProjectVariant = {
  name: string;
  position: number;
};

export type ContributorsDataResDto = {
  contributors: ContributorData[];
  variants: {
    [key: string]: ProjectVariant;
  };
  initVariant: string;
};

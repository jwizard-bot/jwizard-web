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

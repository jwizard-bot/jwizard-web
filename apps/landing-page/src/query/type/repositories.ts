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

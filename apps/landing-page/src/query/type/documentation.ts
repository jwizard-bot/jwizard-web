type DocumentationLink = {
  name: string;
  link: string;
};

export type DocumentationResDto = {
  name: string;
  description: string;
  types: DocumentationLink[];
};

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

type DocumentationLink = {
  name: string;
  link: string;
};

export type DocumentationResDto = {
  name: string;
  description: string;
  types: DocumentationLink[];
};

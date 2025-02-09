/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export type CommandArgument = {
  name: string;
  type: string;
  required: boolean;
};

export type CommandData = {
  name: string;
  slug: string;
  description: string;
  arguments: CommandArgument[];
  legacyUsage: string[];
  slashUsage?: string[];
};

export type ModuleWithCommandsResDto = {
  id: string;
  name: string;
  commands: CommandData[];
};

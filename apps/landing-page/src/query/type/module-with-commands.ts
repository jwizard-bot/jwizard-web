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

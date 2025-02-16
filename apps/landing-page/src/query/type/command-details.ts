import { CommandArgument } from '@/query/type/module-with-commands';

export type CommandDetailsResDto = {
  name: string;
  description: string;
  arguments: CommandArgument[];
  legacyUsage: string[];
  slashUsage?: string[];
};

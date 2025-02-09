/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { CommandArgument } from '@/query/type/module-with-commands';

export type CommandDetailsResDto = {
  name: string;
  description: string;
  arguments: CommandArgument[];
  legacyUsage: string[];
  slashUsage?: string[];
};

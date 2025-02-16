import * as React from 'react';
import { CommandsContextProvider } from '@/component/commands/commands-context';
import { CommandsFilter } from '@/component/commands/commands-filter';
import { CommandsTree } from '@/component/commands/commands-tree';
import { getServerQuery } from '@/query';
import { CommandModule } from '@/query/type/command-module';
import { ModuleWithCommandsResDto } from '@/query/type/module-with-commands';
import { OptionsResult } from '@/query/type/options-result';
import { SafetyContainer } from '@jwizard-web/ui/container';

const ModuleCommandsSection: React.FC = async (): Promise<React.ReactElement> => {
  const { data: commandModules } = await getServerQuery<OptionsResult<CommandModule>>({
    queryString: '/v1/command/module/all',
    errorMessage: 'Unable to fetch command modules.',
  });

  const { data: moduleCommands } = await getServerQuery<ModuleWithCommandsResDto[]>({
    queryString: '/v1/command/all',
    errorMessage: 'Unable to fetch module commands.',
  });

  return (
    <SafetyContainer spaceBelow="large">
      <CommandsContextProvider loadedModuleCommands={moduleCommands} loadedModules={commandModules}>
        <CommandsFilter />
        <CommandsTree />
      </CommandsContextProvider>
    </SafetyContainer>
  );
};

export { ModuleCommandsSection };

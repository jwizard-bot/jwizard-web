'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { CommandModule } from '@/query/type/command-module';
import { ModuleWithCommandsResDto } from '@/query/type/module-with-commands';
import { OptionsResult } from '@/query/type/options-result';

type Props = {
  loadedModuleCommands: ModuleWithCommandsResDto[];
  loadedModules: OptionsResult<CommandModule>;
  children: React.ReactNode;
};

type CommandsContextType = {
  commands: ModuleWithCommandsResDto[];
  modules: OptionsResult<CommandModule> | undefined;
  filterByName: (searchPhrase: string, selectedModuleId: string) => void;
  filterByModule: (moduleId: string) => void;
};

const CommandsContext = createContext<CommandsContextType>({
  commands: [],
  modules: undefined,
  filterByName: (_searchPhrase, _selectedModuleId) => {},
  filterByModule: _moduleId => {},
});

const CommandsContextProvider: React.FC<Props> = ({
  loadedModuleCommands,
  loadedModules,
  children,
}): React.ReactElement => {
  const [commands, setCommands] = useState<ModuleWithCommandsResDto[]>(loadedModuleCommands);

  const filterByName = (searchPhrase: string, selectedModuleId: string) => {
    const filteredCommands = [...loadedModuleCommands]
      .filter(
        ({ id }) => selectedModuleId === loadedModules.defaultOption.id || selectedModuleId === id
      )
      .map(({ commands, ...rest }) => ({
        ...rest,
        commands: commands.filter(
          ({ name, description }) =>
            searchPhrase === '' || name.includes(searchPhrase) || description.includes(searchPhrase)
        ),
      }))
      .filter(({ commands }) => commands.length > 0);
    setCommands(filteredCommands);
  };

  const filterByModule = (moduleId: string) => {
    let allCommands = [...loadedModuleCommands];
    if (moduleId !== loadedModules.defaultOption.id) {
      allCommands = allCommands.filter(({ id }) => id === moduleId);
    }
    setCommands(allCommands);
  };

  return (
    <CommandsContext.Provider
      value={{ commands, modules: loadedModules, filterByName, filterByModule }}>
      {children}
    </CommandsContext.Provider>
  );
};

const useCommandsContext = (): CommandsContextType => useContext(CommandsContext);

export { CommandsContextProvider, useCommandsContext };

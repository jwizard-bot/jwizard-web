'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FlexContainer } from '@jwizard-web/ui/container';
import { useFollowDebounce } from '@jwizard-web/ui/hook/use-follow-debounce';
import { Input, InputContainer, InputSpinner } from '@jwizard-web/ui/widget/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@jwizard-web/ui/widget/select';
import { useCommandsContext } from './commands-context';

const CommandsFilter: React.FC = (): React.ReactElement => {
  const t = useTranslations();
  const locale = useLocale();
  const { modules, filterByName, filterByModule } = useCommandsContext();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedModule, setSelectedModule] = useState(modules?.defaultOption.id);
  const { debouncedValue, isDebounced } = useFollowDebounce(searchPhrase, 200);

  const selectedModuleDefinition = useMemo(
    () => modules?.options.find(({ id }) => id === selectedModule),
    [selectedModule, locale]
  );

  useEffect(() => {
    if (selectedModule) {
      filterByName(debouncedValue, selectedModule);
    }
  }, [debouncedValue, locale]);

  useEffect(() => {
    if (selectedModule) {
      filterByModule(selectedModule);
    }
  }, [selectedModule, locale]);

  return (
    <FlexContainer justify="between" toColOnSmallDevices className="mb-8">
      <InputContainer className="w-full sm:w-[300px]" waiting={isDebounced}>
        <InputSpinner />
        <Input
          placeholder={t('searchCommand')}
          value={searchPhrase}
          onChange={e => setSearchPhrase(e.target.value)}
          opaque
        />
      </InputContainer>
      {modules && (
        <FlexContainer className="w-full sm:w-[200px]">
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger opaque>
              <SelectValue>
                {selectedModuleDefinition?.name} ({selectedModuleDefinition?.commandsCount})
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {modules.options.map(({ id, name, commandsCount }) => (
                <SelectItem key={id} value={id}>
                  {name} ({commandsCount})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export { CommandsFilter };

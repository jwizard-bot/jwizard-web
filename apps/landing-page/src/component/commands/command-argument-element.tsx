'use client';

/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { CommandArgument } from '@/query/type/module-with-commands';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Dot } from 'lucide-react';

type Props = {
  argument: CommandArgument;
};

const CommandArgumentElement: React.FC<Props> = ({
  argument: { name, type, required },
}): React.ReactElement => {
  const t = useTranslations();
  return (
    <FlexContainer align="center" gap="small">
      <FlexContainer align="center">
        <Dot className="text-primary" />
        <span className="text-primary font-bold">{name}</span>
      </FlexContainer>
      <span>[{type}]</span>
      <i>[{t(required ? 'required' : 'optional')}]</i>
    </FlexContainer>
  );
};

export { CommandArgumentElement };

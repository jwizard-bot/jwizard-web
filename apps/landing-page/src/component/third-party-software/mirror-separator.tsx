/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useMemo } from 'react';
import { arrayGenerator, cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';

type Props = {
  symmetricLength: number;
  mirror?: boolean;
};

const MirrorSeparator: React.FC<Props> = ({ symmetricLength, mirror }): React.ReactElement => {
  const leftElements = useMemo(
    () => arrayGenerator(symmetricLength, () => (mirror ? '\\' : '/')),
    [symmetricLength, mirror]
  );

  const rightElements = useMemo(
    () => arrayGenerator(symmetricLength, () => (mirror ? '/' : '\\')),
    [symmetricLength, mirror]
  );

  return (
    <FlexContainer
      as="span"
      justify="center"
      className={cn('text-4xl', 'gap-x-5', 'mt-24', 'mb-10')}>
      <p>{leftElements}</p>
      <p>{rightElements}</p>
    </FlexContainer>
  );
};

export { MirrorSeparator };

import * as React from 'react';
import { FlexContainer } from '@jwizard-web/ui/container';
import clsx from 'clsx';

type TextAlign = 'start' | 'center' | 'end';

type Props = {
  alignment?: TextAlign;
  children: React.ReactNode;
};

const CopyrightSection: React.FC<Props> = ({
  children,
  alignment = 'center',
}): React.ReactElement => (
  <FlexContainer
    gap="normal"
    justify="center"
    align="center"
    className={clsx('col-span-12 lg:col-span-4 mb-2 lg:mb-0', {
      'lg:justify-start': alignment === 'start',
      'lg:justify-center': alignment === 'center',
      'lg:justify-end': alignment === 'end',
    })}>
    {children}
  </FlexContainer>
);

export { CopyrightSection };

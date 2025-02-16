import * as React from 'react';
import { CopyButton } from '@/component/copy-button';
import { FlexContainer, FloatingContainer } from '@jwizard-web/ui/container';
import clsx from 'clsx';

type Props = {
  syntax: string;
};

const CodeContainer: React.FC<Props> = ({ syntax }): React.ReactElement => (
  <FlexContainer
    col
    fullWidth
    className={clsx(
      'bg-white',
      'dark:bg-black',
      'text-primary',
      'border',
      'py-2',
      'px-3',
      'rounded-md',
      'relative',
      'pe-10'
    )}>
    <code>{syntax}</code>
    {
      <FloatingContainer alignmentX="right" alignmentY="top" centered="y" className="me-1">
        <CopyButton contentToCopy={syntax} i18nResultText="copyCommandSyntax" />
      </FloatingContainer>
    }
  </FlexContainer>
);

export { CodeContainer };

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '../container';
import { Spinner } from '../widget/spinner';

type Props = {
  className?: string;
};

const ContentSpinner: React.FC<Props> = ({ className }): React.ReactElement => (
  <FlexContainer justify="center" className={cn('mt-16', className)}>
    <Spinner variant="medium" color="background" />
  </FlexContainer>
);

export { ContentSpinner };

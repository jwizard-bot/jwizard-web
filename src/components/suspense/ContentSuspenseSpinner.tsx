/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import clsx from 'clsx';
import { Spinner } from '@nextui-org/react';
import Ui from '../ui';

type Props = {
  className?: string;
};

const ContentSuspenseSpinner: React.FC<Props> = ({
  className,
}): JSX.Element => (
  <Ui.FlexContainer justify="center" className={clsx('mt-16', className)}>
    <Spinner />
  </Ui.FlexContainer>
);

export default ContentSuspenseSpinner;

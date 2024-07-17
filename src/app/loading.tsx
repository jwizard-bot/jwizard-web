/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import Ui from '@/components/ui';
import { Spinner } from '@nextui-org/react';

const Loading: React.FC = (): JSX.Element => (
  <Ui.FlexContainer
    justify="center"
    align="center"
    className="fixed z-[50] bg-primary-foreground w-full h-screen">
    <Spinner size="lg" />
  </Ui.FlexContainer>
);

export default Loading;

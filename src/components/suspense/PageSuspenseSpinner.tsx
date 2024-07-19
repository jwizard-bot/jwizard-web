/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Spinner } from '@nextui-org/react';
import Ui from '../ui';

const PageSuspenseSpinner: React.FC = (): JSX.Element => (
  <div>
    <Ui.FlexContainer
      justify="center"
      align="center"
      className="fixed top-0 left-0 z-[100] bg-primary-foreground w-full h-screen">
      <Spinner size="lg" />
    </Ui.FlexContainer>
  </div>
);

export default PageSuspenseSpinner;

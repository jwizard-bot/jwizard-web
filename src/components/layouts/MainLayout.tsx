/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { BackgroundGradient, MainFooter, MainHeader } from '@/components';
import { NavigationDropdownProvider } from '@/context';
import Ui from '../ui';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => (
  <>
    <BackgroundGradient />
    <Ui.FlexContainer col fullWidth className="min-h-screen relative z-[20]">
      <NavigationDropdownProvider>
        <MainHeader />
        <Ui.FlexContainer as="main" col fullWidth className="flex-grow">
          {children}
        </Ui.FlexContainer>
        <MainFooter />
      </NavigationDropdownProvider>
    </Ui.FlexContainer>
  </>
);

export default MainLayout;

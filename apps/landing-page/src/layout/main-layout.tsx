import * as React from 'react';
import { BackgroundGradient, MainFooter, MainHeader } from '@/component';
import { FlexContainer } from '@jwizard-web/ui/container';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }): React.ReactElement => (
  <>
    <BackgroundGradient />
    <FlexContainer col fullWidth className="min-h-screen relative z-[20]">
      <MainHeader />
      <FlexContainer as="main" col grow fullWidth>
        {children}
      </FlexContainer>
      <MainFooter />
    </FlexContainer>
  </>
);

export { MainLayout };

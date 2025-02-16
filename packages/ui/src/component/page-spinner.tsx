import * as React from 'react';
import { FlexContainer, FloatingContainer } from '../container';
import { Spinner } from '../widget/spinner';

const PageSpinner: React.FC = (): React.ReactElement => (
  <FloatingContainer
    mode="fixed"
    alignmentX="left"
    alignmentY="top"
    zIndex={100}
    fullWidth
    fullHeight
    className="bg-background">
    <FlexContainer justify="center" align="center" fullHeight>
      <Spinner variant="large" color="background" />
    </FlexContainer>
  </FloatingContainer>
);

export { PageSpinner };

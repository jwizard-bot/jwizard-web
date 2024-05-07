/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { styled } from 'styled-components';

const SuspenseLoaderFrame: React.FC = (): JSX.Element => (
  <SuspenseLoaderContainer>
    <SpinAnimationElement role="status" aria-label="loading" />
  </SuspenseLoaderContainer>
);

const SuspenseLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.main.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinAnimationElement = styled.div`
  display: inline-block;
  border: 6px solid var(--gray-color-500);
  border-bottom-color: transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default SuspenseLoaderFrame;

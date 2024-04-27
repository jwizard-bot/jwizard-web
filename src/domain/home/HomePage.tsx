/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { styled } from 'styled-components';
import { SafetyWrapper } from '@/router/MainLayout';
import { breakpoints, space } from '@/styles/global';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>hero section</HeroWrapper>
      </HeroContainer>
      <SafetyWrapper>under hero section</SafetyWrapper>
    </>
  );
};

const HeroContainer = styled.section`
  background-color: var(--theme-color-650);
  padding: ${space(20)} 0;
`;

const HeroWrapper = styled.div`
  padding: 0 ${space(5)};
  max-width: ${breakpoints.xl};
  margin: 0 auto;
  width: 100%;
`;

export default HomePage;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import {
  ContributeSection,
  ExistingAndFutureFunctions,
  HeroContainer,
  InfoCardsContainer,
} from '@/components';

const HomePage: React.FC = (): JSX.Element => (
  <>
    <HeroContainer />
    <InfoCardsContainer />
    <ExistingAndFutureFunctions />
    <ContributeSection />
  </>
);

export default HomePage;

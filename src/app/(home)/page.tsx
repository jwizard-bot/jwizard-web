/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import {
  ContributeSection,
  HeroSection,
  InfoCardsSection,
  KeyFeaturesSection,
} from '@/components/home';

const Page: React.FC = (): JSX.Element => (
  <>
    <HeroSection />
    <InfoCardsSection />
    <KeyFeaturesSection />
    <ContributeSection />
  </>
);

export default Page;

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
import { IntlPageSlicesProvider } from '@/i18n/server';

const Page: React.FC = async (): Promise<JSX.Element> => (
  <IntlPageSlicesProvider>
    <HeroSection />
    <InfoCardsSection />
    <KeyFeaturesSection />
    <ContributeSection />
  </IntlPageSlicesProvider>
);

export default Page;

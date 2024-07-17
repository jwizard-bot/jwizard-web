/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Layout } from '@/components';
import {
  ContributeSection,
  HeroSection,
  InfoCardsSection,
  KeyFeaturesSection,
} from '@/components/home';

const Page: React.FC = (): JSX.Element => (
  <Layout.MainLayout>
    <HeroSection />
    <InfoCardsSection />
    <KeyFeaturesSection />
    <ContributeSection />
  </Layout.MainLayout>
);

export default Page;

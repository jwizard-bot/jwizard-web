/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Metadata } from 'next';
import {
  ContributeSection,
  HeroSection,
  InfoStatsSection,
  KeyFeaturesSection,
} from '@/component/home';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = async (): Promise<React.ReactElement> => (
  <IntlPageSlicesProvider>
    <HeroSection />
    <InfoStatsSection />
    <KeyFeaturesSection />
    <ContributeSection />
  </IntlPageSlicesProvider>
);

export default Page;

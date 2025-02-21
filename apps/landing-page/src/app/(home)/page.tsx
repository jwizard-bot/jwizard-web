import * as React from 'react';
import { Metadata } from 'next';
import { ContributeSection, SomethingNotWorkingSection } from '@/component/common';
import { HeroSection, InfoStatsSection, KeyFeaturesSection } from '@/component/home';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = async (): Promise<React.ReactElement> => (
  <IntlPageSlicesProvider>
    <HeroSection />
    <InfoStatsSection />
    <SomethingNotWorkingSection />
    <KeyFeaturesSection />
    <ContributeSection />
  </IntlPageSlicesProvider>
);

export default Page;

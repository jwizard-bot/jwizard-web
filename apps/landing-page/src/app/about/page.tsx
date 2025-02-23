import * as React from 'react';
import { Metadata } from 'next';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { SafetyContainer } from '@jwizard-web/ui/container';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const AboutPage: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <SafetyContainer>TBD</SafetyContainer>
  </IntlPageSlicesProvider>
);

export default AboutPage;

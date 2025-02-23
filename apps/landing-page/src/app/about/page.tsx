import * as React from 'react';
import { Metadata } from 'next';
import { AboutHeroSection, MarkdownContentSection } from '@/component/about';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const AboutPage: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <AboutHeroSection />
    <MarkdownContentSection />
  </IntlPageSlicesProvider>
);

export default AboutPage;

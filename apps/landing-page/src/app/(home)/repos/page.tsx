import * as React from 'react';
import { Metadata } from 'next';
import { ContributeSection } from '@/component/common';
import { PageRootHeader } from '@/component/page-root-header';
import { RepositoryCardsSection } from '@/component/repos';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <RepositoryCardsSection />
    <ContributeSection />
  </IntlPageSlicesProvider>
);

export default Page;

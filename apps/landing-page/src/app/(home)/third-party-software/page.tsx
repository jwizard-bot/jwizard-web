import * as React from 'react';
import { Metadata } from 'next';
import { PageRootHeader } from '@/component/page-root-header';
import { LibrariesContainerSection } from '@/component/third-party-software';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <LibrariesContainerSection />
  </IntlPageSlicesProvider>
);

export default Page;

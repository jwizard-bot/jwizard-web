import * as React from 'react';
import { Metadata } from 'next';
import { ModuleCommandsSection } from '@/component/commands';
import { SomethingNotWorkingSection } from '@/component/common';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <ModuleCommandsSection />
    <SomethingNotWorkingSection />
  </IntlPageSlicesProvider>
);

export default Page;

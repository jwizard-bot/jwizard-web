/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Metadata } from 'next';
import { DocumentationSection } from '@/component/docs';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = (): React.ReactElement => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <DocumentationSection />
  </IntlPageSlicesProvider>
);

export default Page;

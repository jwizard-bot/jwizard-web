import * as React from 'react';
import { Metadata } from 'next';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { MarkdownRenderer } from '@/markdown';
import { generateSubPageMetadata } from '@/meta';
import { SafetyContainer } from '@jwizard-web/ui/container';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata();
}

const Page: React.FC = async (): Promise<React.ReactElement> => (
  <IntlPageSlicesProvider>
    <PageRootHeader />
    <SafetyContainer spaceBelow="large">
      <MarkdownRenderer file="privacy-policy" />
    </SafetyContainer>
  </IntlPageSlicesProvider>
);

export default Page;

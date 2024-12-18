/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Metadata } from 'next';
import { PageRootHeader } from '@/component/page-root-header';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { SafetyContainer } from '@jwizard-web/ui/container';

type Props = {
  params: Promise<{ code: number }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const code = (await params).code;
  return await generateSubPageMetadata({ prefix: code });
}

const Page: React.FC<Props> = async ({ params }): Promise<React.ReactElement> => {
  const code = (await params).code;

  return (
    <IntlPageSlicesProvider>
      <PageRootHeader suffix={': ' + code} />
      <SafetyContainer>TBD</SafetyContainer>
    </IntlPageSlicesProvider>
  );
};

export default Page;

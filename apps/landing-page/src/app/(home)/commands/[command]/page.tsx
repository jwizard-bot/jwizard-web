/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Metadata } from 'next';
import { CommandDetailsSection } from '@/component/commands';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

type Props = {
  params: Promise<{ command: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const command = (await params).command;
  return await generateSubPageMetadata({ suffix: command.replaceAll('-', ' ') });
}

const Page: React.FC<Props> = async ({ params }): Promise<React.ReactElement> => {
  const command = (await params).command;

  return (
    <IntlPageSlicesProvider>
      <CommandDetailsSection command={command} />
    </IntlPageSlicesProvider>
  );
};

export default Page;

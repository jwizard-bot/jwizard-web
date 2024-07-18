/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import Ui from '@/components/ui';
import { MarkdownRenderer } from '@/markdown';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('privacyPolicy');
}

const Page: React.FC = async (): Promise<JSX.Element> => (
  <Ui.SafetyContainer className="sm:mt-8 sm:mb-32">
    <Ui.ContentHeader i18nText="title.privacyPolicy" size="md" />
    <MarkdownRenderer file="privacy-policy" />
  </Ui.SafetyContainer>
);

export default Page;

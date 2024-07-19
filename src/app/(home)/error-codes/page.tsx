/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { IntlPageSlicesProvider } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('errorCodes');
}

const Page: React.FC = (): JSX.Element => (
  <IntlPageSlicesProvider>ERROR CODES</IntlPageSlicesProvider>
);

export default Page;

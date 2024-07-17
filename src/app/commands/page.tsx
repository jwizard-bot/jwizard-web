/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('commands');
}

const Page: React.FC = (): JSX.Element => (
  <Layout.MainLayout>
    <>COMMANDS</>
    <Link href="/">ROOT PAGE</Link>
    <Link href="/radio-stations">RADIO STATIONS</Link>
  </Layout.MainLayout>
);

export default Page;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { Layout } from '@/components';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('contribute');
}

const Page: React.FC = (): JSX.Element => (
  <Layout.MainLayout>
    <>CONTRIBUTE</>
  </Layout.MainLayout>
);

export default Page;

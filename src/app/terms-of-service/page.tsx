/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { Layout } from '@/components';
import Ui from '@/components/ui';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('termsOfService');
}

const Page: React.FC = (): JSX.Element => (
  <Layout.MainLayout>
    <Ui.SafetyContainer className="sm:mt-8 sm:mb-32">
      <Ui.ContentHeader i18nText="title.termsOfService" size="md" />
      markdown renderer
    </Ui.SafetyContainer>
  </Layout.MainLayout>
);

export default Page;

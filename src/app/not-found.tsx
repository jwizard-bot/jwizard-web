/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import NextLink from 'next/link';
import { GoArrowLeft } from 'react-icons/go';
import { Layout, MeshBackgroundImage } from '@/components';
import Ui from '@/components/ui';
import { getRootTranslations } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('notFound');
}

const NotFound: React.FC = async (): Promise<JSX.Element> => {
  const t = await getRootTranslations();
  return (
    <Layout.MainLayout>
      <MeshBackgroundImage />
      <Ui.SafetyContainer>
        <Ui.FlexContainer col centerContent fullWidth fillScreenSpace>
          <Ui.ContentHeader size="xl" className="sm:mb-4">
            404
          </Ui.ContentHeader>
          <Ui.Paragraph className="mb-4">{t('title.notFound')}</Ui.Paragraph>
          <Ui.Button
            as={NextLink}
            href="/"
            size="md"
            fullWithOnSmallDevices
            startContent={<GoArrowLeft />}>
            {t('returnToHome')}
          </Ui.Button>
        </Ui.FlexContainer>
      </Ui.SafetyContainer>
    </Layout.MainLayout>
  );
};

export default NotFound;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { GoArrowLeft } from 'react-icons/go';
import { Layout, MeshBackgroundImage } from '@/components';
import Ui from '@/components/ui';
import { generateSubPageMetadata } from '@/meta';
import { Button } from '@nextui-org/react';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('notFound');
}

const NotFound: React.FC = async (): Promise<JSX.Element> => {
  const t = await getTranslations();
  return (
    <Layout.MainLayout>
      <MeshBackgroundImage />
      <Ui.SafetyContainer>
        <Ui.FlexContainer col centerContent fullWidth fillScreenSpace>
          <Ui.ContentHeader size="xl" className="sm:mb-4">
            404
          </Ui.ContentHeader>
          <Ui.Paragraph i18nText="title.notFound" className="mb-4" />
          <Button
            as={NextLink}
            href="/"
            size="md"
            color="primary"
            startContent={<GoArrowLeft />}
            className="text-lg sm:text-xl w-full sm:w-fit">
            {t('returnToHome')}
          </Button>
        </Ui.FlexContainer>
      </Ui.SafetyContainer>
    </Layout.MainLayout>
  );
};

export default NotFound;

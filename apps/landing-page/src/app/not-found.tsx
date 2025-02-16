import * as React from 'react';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { MeshBackgroundImage } from '@/component';
import { getRootTranslations } from '@/i18n/server';
import { generateSubPageMetadata } from '@/meta';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowLeft } from 'lucide-react';
import { MainLayout } from 'src/layout';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata({ i18nTitleKey: 'notFound' });
}

const NotFound: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getRootTranslations();
  return (
    <MainLayout>
      <MeshBackgroundImage />
      <SafetyContainer>
        <FlexContainer col centerContent fullWidth fillScreenSpace>
          <Header size="xl" className="sm:mb-4">
            404
          </Header>
          <Paragraph className="mb-4">{t('notFound')}</Paragraph>
          <Button asChild fluid size="lg">
            <NextLink href="/">
              <ArrowLeft />
              {t('returnToHome')}
            </NextLink>
          </Button>
        </FlexContainer>
      </SafetyContainer>
    </MainLayout>
  );
};

export default NotFound;

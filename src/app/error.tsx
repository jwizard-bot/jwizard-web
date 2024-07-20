'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { startTransition } from 'react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { BsArrowRepeat } from 'react-icons/bs';
import { GoArrowLeft } from 'react-icons/go';
import { Layout, MeshBackgroundImage, PurifiedRenderer } from '@/components';
import Ui from '@/components/ui';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: React.FC<Props> = ({ error, reset }): JSX.Element => {
  const t = useTranslations();
  const router = useRouter();

  const refreshAndReset = (): void => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <Layout.MainLayout>
      <MeshBackgroundImage />
      <Ui.SafetyContainer>
        <Ui.FlexContainer col centerContent fullWidth fillScreenSpace gap>
          <Ui.ContentHeader
            size="xl"
            className="sm:mb-4 max-w-[1200px] text-center">
            {t('globalErrorTitle')}
          </Ui.ContentHeader>
          <PurifiedRenderer
            dangerousText={t.markup('globalErrorDescription', {
              mail: chunks =>
                `<a href="mailto:${chunks}" class="font-bold">${chunks}</a>`,
            })}
            Component={Ui.Paragraph}
            className="max-w-[700px] text-center"
          />
          <Ui.FlexContainer
            gap
            toColOnSmallDevices
            fullWithOnSmallDevices
            className="mt-8">
            <Ui.Button
              as={NextLink}
              href="/"
              size="md"
              variant="bordered"
              fullWithOnSmallDevices
              startContent={<GoArrowLeft size={20} />}
              className="flex-shrink-0">
              {t('returnToHome')}
            </Ui.Button>
            <Ui.Button
              size="md"
              fullWithOnSmallDevices
              endContent={<BsArrowRepeat size={20} />}
              onClick={refreshAndReset}
              className="flex-shrink-0">
              {t('refresh')}
            </Ui.Button>
          </Ui.FlexContainer>
          <Ui.Paragraph size="sm">
            {t('globalErrorDigest')}: {error.digest}
          </Ui.Paragraph>
        </Ui.FlexContainer>
      </Ui.SafetyContainer>
    </Layout.MainLayout>
  );
};

export default ErrorPage;

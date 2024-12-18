'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { startTransition } from 'react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { MeshBackgroundImage, PurifiedRenderer } from '@/component';
import { MainLayout } from '@/layout';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Button } from '@jwizard-web/ui/widget/button';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import { ArrowLeft, RefreshCw } from 'lucide-react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: React.FC<Props> = ({ error, reset }): React.ReactElement => {
  const t = useTranslations();
  const router = useRouter();

  const refreshAndReset = (): void => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <MainLayout>
      <MeshBackgroundImage />
      <SafetyContainer>
        <FlexContainer col centerContent fullWidth fillScreenSpace gap>
          <Header size="xl" className="sm:mb-4 max-w-[1200px] text-center">
            {t('globalErrorTitle')}
          </Header>
          <PurifiedRenderer
            dangerousText={t.markup('globalErrorDescription', {
              mail: chunks => `<a href="mailto:${chunks}" class="font-bold">${chunks}</a>`,
            })}
            Component={Paragraph}
            className="max-w-[700px] text-center"
          />
          <FlexContainer gap toColOnSmallDevices fullWidthOnSmallDevices className="mt-8">
            <Button asChild fluid size="lg" variant="outline">
              <NextLink href="/">
                <ArrowLeft />
                {t('returnToHome')}
              </NextLink>
            </Button>
            <Button fluid size="lg" onClick={refreshAndReset}>
              <RefreshCw />
              {t('refresh')}
            </Button>
          </FlexContainer>
          <Paragraph size="sm">
            {t('globalErrorDigest')}: {error.digest}
          </Paragraph>
        </FlexContainer>
      </SafetyContainer>
    </MainLayout>
  );
};

export default ErrorPage;

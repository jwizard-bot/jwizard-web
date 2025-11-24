'use client';

import * as React from 'react';
import { useEffect } from 'react';
import { ThemeContextProvider } from '@/theme';
import meshBgGradient from '@jwizard-web/assets/bg/mesh.png';
import { DEFAULT_LANGUAGE } from '@jwizard-web/lib/i18n';
import { cn } from '@jwizard-web/lib/util';
import '@jwizard-web/tailwind-config/globalcss';
import { FlexContainer, SafetyContainer } from '@jwizard-web/ui/container';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';
import * as Sentry from '@sentry/nextjs';

type Props = {
  error: Error & { digest?: string };
};

const ErrorPage: React.FC<Props> = ({ error }): React.ReactElement => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang={DEFAULT_LANGUAGE} suppressHydrationWarning>
      <body className={cn('font-sans', 'min-h-screen')}>
        <ThemeContextProvider>
          <img
            src={meshBgGradient}
            className={cn(
              'absolute',
              'top-[50%]',
              'right-[50%]',
              'translate-x-[50%]',
              '-translate-y-[50%]',
              'w-full',
              'sm:w-[900px]',
              'opacity-15',
              '-z-[1]'
            )}
            alt=""
          />
          <SafetyContainer fullSizeChild spaceUp="none" spaceBelow="none">
            <FlexContainer col centerContent fillScreenSpace gap="normal">
              <Header size="xl" className="sm:mb-4 text-center">
                Error
              </Header>
              <Paragraph size="sm">Digest: {error.digest}</Paragraph>
            </FlexContainer>
          </SafetyContainer>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default ErrorPage;

import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import NextLink from 'next/link';
import { FlexContainer } from '@jwizard-web/ui/container';
import { ArrowLeft } from 'lucide-react';

const ReturnAllCommands: React.FC = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();
  return (
    <FlexContainer className="text-muted-foreground text-sm mb-5">
      <NextLink href="/commands" className="underline hover:no-underline">
        <FlexContainer align="center" gap="small">
          <ArrowLeft size={15} />
          {t('returnToAllCommands')}
        </FlexContainer>
      </NextLink>
    </FlexContainer>
  );
};

export { ReturnAllCommands };

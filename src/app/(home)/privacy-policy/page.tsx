/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Metadata } from 'next';
import Ui from '@/components/ui';
import { IntlPageSlicesProvider, getRootTranslations } from '@/i18n/server';
import { MarkdownRenderer } from '@/markdown';
import { generateSubPageMetadata } from '@/meta';

export async function generateMetadata(): Promise<Metadata> {
  return await generateSubPageMetadata('privacyPolicy');
}

const Page: React.FC = async (): Promise<JSX.Element> => {
  const t = await getRootTranslations();
  return (
    <IntlPageSlicesProvider>
      <Ui.SafetyContainer className="sm:mt-8 sm:mb-32">
        <Ui.ContentHeader size="md">
          {t('title.privacyPolicy')}
        </Ui.ContentHeader>
        <MarkdownRenderer file="privacy-policy" />
      </Ui.SafetyContainer>
    </IntlPageSlicesProvider>
  );
};

export default Page;

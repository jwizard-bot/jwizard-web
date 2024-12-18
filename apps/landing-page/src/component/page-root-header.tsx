/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import { SafetyContainer } from '@jwizard-web/ui/container';
import { Header } from '@jwizard-web/ui/widget/header';

type Props = {
  i18nKey?: string;
  prefix?: string | number;
  suffix?: string | number;
  className?: string;
};

const PageRootHeader: React.FC<Props> = async ({
  i18nKey = 'title',
  prefix = '',
  suffix = '',
  className = '',
}): Promise<React.ReactElement> => {
  const t = await getTranslations();

  const title = [];
  if (prefix) {
    title.push(prefix);
  }
  title.push(t(i18nKey));
  if (suffix) {
    title.push(suffix);
  }

  return (
    <SafetyContainer spaceUp="large" className={className}>
      <Header size="md">{title}</Header>
    </SafetyContainer>
  );
};

export { PageRootHeader };

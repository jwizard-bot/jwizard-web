'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Card } from '@jwizard-web/ui/widget/card';
import { Header } from '@jwizard-web/ui/widget/header';
import { Paragraph } from '@jwizard-web/ui/widget/paragraph';

type Props = {
  countableValue: number;
  i18nDescription: string;
  isSquared?: boolean;
  numberSize?: 'lg' | 'md';
};

const CountableStatsCard: React.FC<Props> = ({
  countableValue,
  i18nDescription,
  isSquared = false,
  numberSize = 'lg',
}): React.ReactElement => {
  const t = useTranslations();
  const locale = useLocale();

  const countUpRef = useRef<HTMLParagraphElement>(null);

  const { start } = useCountUp({
    ref: countUpRef,
    startOnMount: false,
    end: countableValue,
    duration: 7,
    separator: ' ',
  });

  useEffect(() => {
    if (countableValue > 0) {
      start();
    }
  }, [countableValue, locale, start]);

  return (
    <Card isBlurred isSquared={isSquared}>
      <FlexContainer col centerContent fullWidth fullHeight>
        <Header
          ref={countUpRef}
          headingVariant="h2"
          size={numberSize}
          margin="none"
          className="mb-4">
          0
        </Header>
        <Paragraph size="md" centered className={cn('sm:max-w-[80%]', 'leading-[18px]')}>
          {t(i18nDescription)}
        </Paragraph>
      </FlexContainer>
    </Card>
  );
};

export { CountableStatsCard };

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useCountUp } from 'react-countup';
import { Card, CardBody } from '@nextui-org/react';
import Ui from '../ui';

type Props = {
  i18nText: string;
  value: number;
};

const InfoStatsCard: React.FC<Props> = ({ i18nText, value }): JSX.Element => {
  const t = useTranslations();
  const countUpRef = useRef<HTMLParagraphElement>(null);

  const { start } = useCountUp({
    ref: countUpRef,
    startOnMount: false,
    end: value,
    duration: 7,
  });

  useEffect(() => {
    if (value > 0) {
      start();
    }
  }, [value, start]);

  return (
    <Card
      isBlurred
      radius="md"
      classNames={{
        base: clsx(
          'p-1 backdrop-blur aspect-square',
          'dark:border dark:border-default-100'
        ),
      }}>
      <CardBody>
        <Ui.FlexContainer col centerContent>
          <p ref={countUpRef} className="font-logo text-4xl sm:text-6xl mb-3">
            0
          </p>
          <p className="text-default-500 leading-[18px] sm:max-w-[80%] text-center">
            {t(i18nText)}
          </p>
        </Ui.FlexContainer>
      </CardBody>
    </Card>
  );
};

export default InfoStatsCard;

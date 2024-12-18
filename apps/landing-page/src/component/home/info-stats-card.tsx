'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { FlexContainer } from '@jwizard-web/ui/container';
import { Card } from '@jwizard-web/ui/widget/card';

type Props = {
  bottomDescription: string;
  value: number;
};

const InfoStatsCard: React.FC<Props> = ({ bottomDescription, value }): React.ReactElement => {
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
    <Card isBlurred isSquared>
      <FlexContainer col centerContent fullWidth fullHeight>
        <p ref={countUpRef} className="font-logo text-4xl sm:text-6xl mb-3">
          0
        </p>
        <p className="text-muted-foreground leading-[18px] sm:max-w-[80%] text-center">
          {bottomDescription}
        </p>
      </FlexContainer>
    </Card>
  );
};

export { InfoStatsCard };

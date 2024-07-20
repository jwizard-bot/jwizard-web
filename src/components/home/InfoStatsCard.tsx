'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { CardBody } from '@nextui-org/react';
import Ui from '../ui';

type Props = {
  bottomDescription: string;
  value: number;
};

const InfoStatsCard: React.FC<Props> = ({
  bottomDescription,
  value,
}): JSX.Element => {
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
    <Ui.CardContainer baseStyles="aspect-square">
      <CardBody>
        <Ui.FlexContainer col centerContent fullWidth fullHeight>
          <p
            ref={countUpRef}
            className="font-logo text-4xl sm:text-6xl mb-3 text-primary">
            0
          </p>
          <p className="text-default-500 leading-[18px] sm:max-w-[80%] text-center">
            {bottomDescription}
          </p>
        </Ui.FlexContainer>
      </CardBody>
    </Ui.CardContainer>
  );
};

export default InfoStatsCard;

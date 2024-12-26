'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useEffect, useRef } from 'react';

type Props = {
  initialPosition?: number;
  elementRef: React.RefObject<HTMLElement>;
};

const useScrollPosition = ({
  initialPosition = 0,
  elementRef,
}: Props): React.MutableRefObject<number> => {
  const scrollPosition = useRef(initialPosition);

  useEffect(() => {
    const onListScrollEvent = () => {
      if (elementRef.current) {
        scrollPosition.current = elementRef.current?.scrollTop;
      }
    };
    elementRef.current?.addEventListener('scroll', onListScrollEvent);
    return () => {
      elementRef.current?.removeEventListener('scroll', onListScrollEvent);
    };
  }, [elementRef]);

  return scrollPosition;
};

export { useScrollPosition };

'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '@/hook/use-scroll-position';

type Props = {
  containerRef: React.RefObject<HTMLElement>;
  scrollRef: React.RefObject<HTMLElement>;
  speed?: number;
};

const useRollingContent = ({
  containerRef,
  scrollRef,
  speed = 12,
}: Props): React.Dispatch<React.SetStateAction<boolean>> => {
  const [scrolling, setScrolling] = useState(true);
  const intervalId = useRef<NodeJS.Timeout>();

  const positionRef = useScrollPosition({
    elementRef: containerRef,
  });

  useEffect(() => {
    if (containerRef.current && scrollRef.current) {
      intervalId.current = setInterval(() => {
        if (scrolling) {
          containerRef.current?.scrollTo(0, positionRef.current++);
        }
        if (positionRef.current === scrollRef.current?.clientHeight) {
          clearInterval(intervalId.current);
        }
      }, speed);
    }
    return () => clearInterval(intervalId.current);
  }, [scrolling]);

  return setScrolling;
};

export { useRollingContent };

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { useRef } from 'react';
import { MirrorSeparator } from '@/component/third-party-software/mirror-separator';
import { PixelatedButton } from '@/component/third-party-software/pixelated-button';
import { useRollingContent } from '@/hook/use-rolling-content';
import { cn } from '@jwizard-web/lib/util';
import { FlexContainer, FloatingContainer } from '@jwizard-web/ui/container';

type Props = {
  children: React.ReactNode;
};

const InteractiveLibraries: React.FC<Props> = ({ children }): React.ReactElement => {
  const listContainerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const setScrolling = useRollingContent({
    containerRef: listContainerRef,
    scrollRef: listRef,
  });

  const onMoveToTop = (): void => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div
      ref={listContainerRef}
      onMouseEnter={() => setScrolling(false)}
      onMouseLeave={() => setScrolling(true)}
      className={cn(
        'relative',
        'w-full',
        'my-3',
        'h-[calc(100%-theme(space.6))]',
        '[&::-webkit-scrollbar]:w-2',
        '[&::-webkit-scrollbar-thumb]:rounded-lg',
        '[&::-webkit-scrollbar-thumb]:bg-slate-300',
        'overflow-y-scroll'
      )}>
      <FloatingContainer alignmentY="top" alignmentX="left">
        <MirrorSeparator symmetricLength={5} mirror />
        <ul
          ref={listRef}
          className={cn(
            'grid',
            'grid-cols-1',
            'sm:grid-cols-2',
            'gap-x-5',
            'gap-y-0.5',
            'px-2',
            'bg-slate-950'
          )}>
          {children}
        </ul>
        <MirrorSeparator symmetricLength={5} />
        <FlexContainer justify="center" className="mt-20 mb-28">
          <PixelatedButton onClick={onMoveToTop}>{'/\\'}</PixelatedButton>
        </FlexContainer>
      </FloatingContainer>
    </div>
  );
};

export { InteractiveLibraries };

import * as React from 'react';
import { useMemo } from 'react';
import { cn } from '@jwizard-web/lib/util';
import { FloatingContainer } from '@jwizard-web/ui/container';

type Props = {
  steps?: number;
  multiplier?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PixelatedButton: React.FC<Props> = ({
  steps = 3,
  multiplier = 5,
  children,
  ...rest
}): React.ReactElement => {
  const pixelatedSteps = useMemo(
    () =>
      Array.from({ length: steps }, (_, i: number) => ({
        top: (i + 1) * multiplier,
        offset: (i + 1) * multiplier * 2,
      })),
    [steps, multiplier]
  );

  return (
    <button
      className={cn(
        'relative',
        'h-[50px]',
        'px-5',
        'text-2xl',
        'bg-slate-600',
        'text-slate-300',
        'bg-gradient-to-t',
        'hover:-translate-y-1'
      )}
      {...rest}>
      <span className={cn('relative', 'z-10')}>{children}</span>
      {pixelatedSteps.map(({ top, offset }) => (
        <FloatingContainer
          key={top}
          centered="x"
          className={cn('bg-slate-600', 'z-0')}
          style={{
            top: `${top}px`,
            width: `calc(100% + ${offset}px)`,
            height: `calc(100% - ${offset}px)`,
          }}
        />
      ))}
    </button>
  );
};

export { PixelatedButton };

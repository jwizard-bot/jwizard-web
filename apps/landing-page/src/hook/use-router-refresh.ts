'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// https://github.com/vercel/next.js/discussions/58520
const useRouterRefresh = (): [() => Promise<unknown>, boolean] => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [resolve, setResolve] = useState<((value: unknown) => void) | null>(null);
  const [isTriggered, setIsTriggered] = useState(false);

  const refresh = () =>
    new Promise(resolve => {
      setResolve(() => resolve);
      startTransition(() => {
        router.replace(pathname, { scroll: false });
        router.refresh();
      });
    });

  useEffect(() => {
    if (isTriggered && !isPending) {
      if (resolve) {
        resolve(null);
        setIsTriggered(false);
        setResolve(null);
      }
    }
    if (isPending) {
      setIsTriggered(true);
    }
  }, [isTriggered, isPending, resolve]);

  return [refresh, isPending];
};

export { useRouterRefresh };

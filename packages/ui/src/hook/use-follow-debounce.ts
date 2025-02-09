/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

type ReturnProps = {
  debouncedValue: string;
  isDebounced: boolean;
};

const useFollowDebounce = (debounceValue: string, delay: number): ReturnProps => {
  const debouncedValue = useDebounce(debounceValue, delay);
  const [isDebounced, setIsDebounced] = useState(false);

  useEffect(() => {
    if (debounceValue) {
      setIsDebounced(true);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (debouncedValue === debounceValue) {
      setIsDebounced(false);
    }
  }, [debouncedValue, debounceValue]);

  return {
    debouncedValue,
    isDebounced,
  };
};

export { useFollowDebounce };

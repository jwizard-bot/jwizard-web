'use client';

import { useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import { useEnv } from '@/env';
import { useCommonTranslations } from '@/i18n/client';
import axios, { Method } from 'axios';

type PerformActionProps<T> = {
  queryString: string;
  queryParams?: Record<string, string | number>;
  body?: T;
};

type Response<T> = {
  response?: T;
};

type HookResponse<RQ, RS> = {
  apiCall: (props: PerformActionProps<RQ>) => Promise<Response<RS>>;
  running: boolean;
  error?: string;
  clearError: () => void;
};

const useClientQuery = <RQ, RS>(method: Method = 'get'): HookResponse<RQ, RS> => {
  const t = useCommonTranslations();
  const {
    url: { api },
  } = useEnv();
  const locale = useLocale();
  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: api,
        headers: { 'Content-Type': 'application/json' },
      }),
    []
  );

  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const axiosOptions = useMemo(
    () => ({
      method,
      headers: {
        'Accept-Language': locale,
      },
    }),
    [locale]
  );

  const clearError = (): void => setError(undefined);

  const apiCall = async ({
    queryString,
    queryParams,
    body,
  }: PerformActionProps<RQ>): Promise<Response<RS>> => {
    setRunning(true);
    setError('');
    const extendedOptions = {
      ...axiosOptions,
      url: queryString,
      params: queryParams,
      data: body,
    };
    let responseData: RS | undefined = undefined;
    try {
      const { data } = await axiosInstance.request<RS>(extendedOptions);
      responseData = data;
    } catch (error) {
      setError(error.response?.data?.message || t('unknownServerException'));
    } finally {
      setRunning(false);
    }
    return {
      response: responseData,
    };
  };

  return {
    apiCall,
    running,
    error,
    clearError,
  };
};

export { useClientQuery };

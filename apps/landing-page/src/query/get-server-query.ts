'use server';

import { getLocale } from 'next-intl/server';
import { getEnv } from '@/env';
import axios from 'axios';

type ServerQueryProps = {
  queryString: string;
  queryParams?: Record<string, string | number>;
  errorMessage: string;
  silent?: boolean;
};

type ServerQueryResponse<T> = {
  data: T;
  isError: boolean;
};

const {
  url: { api },
} = getEnv();

const axiosInstance = axios.create({
  baseURL: api,
  headers: { 'Content-Type': 'application/json' },
});

const getServerQuery = async <T>({
  queryString,
  queryParams,
  errorMessage,
  silent = false,
}: ServerQueryProps): Promise<ServerQueryResponse<T>> => {
  const language = await getLocale();
  let data: T;
  try {
    const response = await axiosInstance.get<T>(queryString, {
      params: queryParams,
      headers: { 'Accept-Language': language },
    });
    data = response.data;
  } catch (_) {
    if (silent) {
      return {
        data: {} as T,
        isError: true,
      };
    }
    throw new Error(errorMessage);
  }
  return {
    data,
    isError: false,
  };
};

export { getServerQuery };

'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getLocale } from 'next-intl/server';
import axiosInstance from './axios-instance';

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

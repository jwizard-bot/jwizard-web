'use server';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getLocale } from 'next-intl/server';
import axiosInstance from './axiosInstance';

type ServerQueryProps = {
  queryString: string;
  queryParams?: Record<string, string | number>;
  errorMessage: string;
};

type ServerQueryResponse<T> = {
  data: T;
};

const getServerQuery = async <T>({
  queryString,
  queryParams,
  errorMessage,
}: ServerQueryProps): Promise<ServerQueryResponse<T>> => {
  const language = await getLocale();
  let data: T;
  try {
    const response = await axiosInstance.get<T>(queryString, {
      params: queryParams,
      headers: { 'Accept-Language': language },
    });
    data = response.data;
  } catch (e) {
    throw new Error(errorMessage);
  }
  return {
    data,
  };
};

export default getServerQuery;

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import config from '@/config';
import UtilFetchApi from './fetch/UtilFetchApi';

type AxiosInstanceContextType = {
  utilFetchApi: UtilFetchApi;
};

const AxiosInstanceContext = createContext<AxiosInstanceContextType>(
  {} as AxiosInstanceContextType
);

type Props = {
  children: React.ReactNode;
};

const AxiosInstanceWrapper: React.FC<Props> = ({ children }): JSX.Element => {
  const { i18n } = useTranslation();

  const instance = axios.create({
    baseURL: config.apiUrl,
    headers: { 'Content-Type': 'application/json' },
  });

  instance.interceptors.request.use(
    config => {
      config.headers['Accept-Language'] = i18n.language;
      return config;
    },
    error => Promise.reject(error)
  );

  return (
    <AxiosInstanceContext.Provider
      value={{ utilFetchApi: new UtilFetchApi(instance) }}>
      {children}
    </AxiosInstanceContext.Provider>
  );
};

export const useAxiosInstance = () => useContext(AxiosInstanceContext);

export default AxiosInstanceWrapper;

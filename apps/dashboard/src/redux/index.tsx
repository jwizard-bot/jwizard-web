/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import config from '@/config';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
  devTools: !config.isProdMode,
});

type RootState = ReturnType<typeof store.getState>;

type Props = {
  children: React.ReactNode;
};

const ReduxStoreWrapper: React.FC<Props> = ({ children }): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxStoreWrapper, type RootState };

'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Provider } from 'react-redux';
import config from '@/config';
import { configureStore } from '@reduxjs/toolkit';
import snackbarSlice from './slices/snackbar-slice';

const store = configureStore({
  reducer: {
    snackbarSlice,
  },
  devTools: !config.isProdMode,
});

export type RootState = ReturnType<typeof store.getState>;

type Props = {
  children: React.ReactNode;
};

export const ReduxStoreWrapper: React.FC<Props> = ({
  children,
}): JSX.Element => <Provider store={store}>{children}</Provider>;

export default ReduxStoreWrapper;

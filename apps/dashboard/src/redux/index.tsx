import * as React from 'react';
import { Provider } from 'react-redux';
import config from '@/config';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // TODO here add reducers
  },
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

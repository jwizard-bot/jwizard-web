import * as React from 'react';
import { Provider } from 'react-redux';
import config from '@/config';
import { sessionApiSlice } from '@/redux/api/slice/session-api-slice';
import { listenerMiddleware } from '@/redux/listener-middleware';
import { mainSlice } from '@/redux/slice/main-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // api
    [sessionApiSlice.reducerPath]: sessionApiSlice.reducer,
    // regular reducers
    [mainSlice.reducerPath]: mainSlice.reducer,
  },
  devTools: !config.isProdMode,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat([sessionApiSlice.middleware]),
});

type RootState = ReturnType<typeof store.getState>;

type Props = {
  children: React.ReactNode;
};

const ReduxStoreWrapper: React.FC<Props> = ({ children }): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxStoreWrapper, type RootState, store };

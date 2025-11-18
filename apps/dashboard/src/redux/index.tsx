import * as React from 'react';
import { Provider } from 'react-redux';
import { environment } from '@/env';
import { sessionApiSlice } from '@/redux/api/session/slice';
import { listenerMiddleware } from '@/redux/listener-middleware';
import { mainSlice } from '@/redux/store/main-slice';
import { configureStore } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';

const { isProd } = environment;

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

const store = configureStore({
  reducer: {
    // api
    [sessionApiSlice.reducerPath]: sessionApiSlice.reducer,
    // regular reducers
    [mainSlice.reducerPath]: mainSlice.reducer,
  },
  devTools: !isProd,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat([sessionApiSlice.middleware]),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(sentryReduxEnhancer),
});

type RootState = ReturnType<typeof store.getState>;

type Props = {
  children: React.ReactNode;
};

const ReduxStoreWrapper: React.FC<Props> = ({ children }): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxStoreWrapper, type RootState, store };

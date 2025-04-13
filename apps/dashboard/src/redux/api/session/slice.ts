import { tRoot } from '@/i18n';
import { baseQuery } from '@/redux/api/base-query';
import { CsrfResDto, RevalidateResDto } from '@/redux/api/session/type';
import { listenerMiddleware } from '@/redux/listener-middleware';
import { setCsrf, setInitialized, setLoggedIn } from '@/redux/store/main-slice';
import { showToast } from '@jwizard-web/ui/widget/toast-notification';
import { createApi } from '@reduxjs/toolkit/query/react';

const sessionApiSlice = createApi({
  reducerPath: 'sessionApiSlice',
  baseQuery: baseQuery,
  endpoints: builder => ({
    revalidateSession: builder.query<RevalidateResDto, void>({
      query: () => 'v1/session/revalidate',
    }),
    getCsrfToken: builder.query<CsrfResDto, void>({
      query: () => 'v1/session/@me/csrf',
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/session/logout',
        method: 'DELETE',
      }),
    }),
  }),
});

listenerMiddleware.startListening({
  matcher: sessionApiSlice.endpoints.revalidateSession.matchFulfilled,
  effect: async (action, { dispatch }) => {
    const { loggedIn, expired } = action.payload;
    if (loggedIn) {
      // fetch csrf token only if user is logged
      dispatch(sessionApiSlice.endpoints.getCsrfToken.initiate());
    } else {
      if (expired) {
        showToast({
          title: tRoot('error.sessionExpiredError'),
          severity: 'warning',
        });
      }
      dispatch(setInitialized(true));
    }
    dispatch(setLoggedIn(loggedIn));
  },
});

listenerMiddleware.startListening({
  matcher: sessionApiSlice.endpoints.getCsrfToken.matchFulfilled,
  effect: async (action, { dispatch }) => {
    dispatch(setCsrf(action.payload));
    dispatch(setInitialized(true));
  },
});

listenerMiddleware.startListening({
  matcher: sessionApiSlice.endpoints.logout.matchFulfilled,
  effect: async (_, { dispatch }) => {
    dispatch(setLoggedIn(false));
    dispatch(setCsrf(null));
    showToast({
      title: tRoot('successfullyLogout'),
    });
  },
});

export const { useRevalidateSessionQuery, useLogoutMutation } = sessionApiSlice;

export { sessionApiSlice };
